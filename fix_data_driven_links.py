#!/usr/bin/env python3
"""
Fixes every href="{{ ... }}" and src="{{ ... }}" in _includes/*.liquid that
isn't already using relative_url — safely, without needing to know in
advance whether each one points to an internal page or an external site.

Why not just add | relative_url everywhere (like the first bulk fix)?
Because unlike the hardcoded "/about"-style paths from before, these are
template variables pulling from _data/*.yml files — and some of those
data files hold genuinely external URLs (app store links, the production
site, etc). relative_url just glues the site's folder onto whatever
string it's given, so applying it to an external URL would break it.

The fix instead wraps each one in a small check that runs at build time:
"if this value already looks like a full URL (contains http), leave it
alone — otherwise, treat it as an internal path and add the baseurl."
That's correct either way, so it's safe to apply everywhere in one pass.

Run from the repo root:
    python3 fix_data_driven_links.py

Skips:
  - anything already using relative_url (won't be double-wrapped)
  - _includes/backups/ (old files, not live templates)
"""

import re
from pathlib import Path

INCLUDES_DIR = Path("_includes")
SKIP_DIR_PARTS = {"backups"}

# Matches href="{{ ...content... }}" or src="{{ ...content... }}",
# capturing whatever is between the braces (variable, filters, defaults —
# anything that doesn't already contain relative_url).
PATTERN = re.compile(r'(href|src)="\{\{\s*(.+?)\s*\}\}"')


def build_replacement(attr, expr):
    return (
        f'{attr}="{{% if {expr} contains \'http\' %}}'
        f'{{{{ {expr} }}}}'
        f'{{% else %}}'
        f'{{{{ {expr} | relative_url }}}}'
        f'{{% endif %}}"'
    )


def fix_content(content):
    count = 0

    def repl(m):
        nonlocal count
        attr, expr = m.group(1), m.group(2)
        if "relative_url" in expr:
            return m.group(0)  # already fixed, leave untouched
        count += 1
        return build_replacement(attr, expr)

    new_content = PATTERN.sub(repl, content)
    return new_content, count


def main():
    if not INCLUDES_DIR.exists():
        print("Couldn't find _includes/ — run this from the repo root.")
        return

    files = sorted(
        p for p in INCLUDES_DIR.rglob("*.liquid")
        if not (SKIP_DIR_PARTS & set(p.parts))
    )

    total_changes = 0
    changed_files = 0

    for path in files:
        content = path.read_text(encoding="utf-8")
        new_content, count = fix_content(content)
        if count > 0:
            path.write_text(new_content, encoding="utf-8")
            print(f"  {count:3d} fixed  -  {path}")
            total_changes += count
            changed_files += 1

    print()
    print(f"Done: {total_changes} links/images fixed across {changed_files} files.")
    print("(Files with no matches aren't listed — nothing to fix there.)")


if __name__ == "__main__":
    main()
