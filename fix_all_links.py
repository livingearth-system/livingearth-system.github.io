#!/usr/bin/env python3
"""
Bulk-fixes hardcoded internal href="/..." and src="/..." paths across the
repo, wrapping each one in Jekyll's relative_url filter so the same
templates work at the site root (production) or under a baseurl subpath
(the preview deploy).

Run from the repo root:
    python3 fix_all_links.py

Safe by design:
  - Only touches href="/..." and src="/..." (single leading slash — so it
    skips protocol-relative "//..." and already-templated "{{ ... }}").
  - Leaves mailto:, tel:, http(s):, and #anchor links alone (they don't
    start with a single "/", so the pattern never matches them).
  - Skips _includes/backups/ entirely — those are old duplicate files,
    not live templates. Delete them instead of fixing them.
  - Prints a per-file count of changes and a final summary so you can
    `git diff` and sanity-check before committing.
"""

import re

FILES = [
    "_includes/themes-accounts.liquid",
    "_includes/earthtrack-app.liquid",
    "_includes/themes.liquid",
    "_includes/blog.liquid",
    "_includes/our-projects.liquid",
    "_includes/taxonomies.liquid",
    "_includes/ip-vga-encr.liquid",
    "_includes/living-PNG.liquid",
    "_includes/product-png.liquid",
    "_includes/futures.liquid",
    "_includes/dynamic-land.liquid",
    "_includes/living-watersources.liquid",
    "_includes/footer.liquid",
    "_includes/countries.liquid",
    "_includes/landhabcover.liquid",
    "_includes/knowledge-hub.liquid",
    "_includes/our-events.liquid",
    "_includes/water.liquid",
    "_includes/prod-wales.liquid",
    "_includes/header.liquid",
    "_includes/interactive-map-information.liquid",
    "_includes/ip-wales.liquid",
    "_includes/change-pressures.liquid",
    "_includes/tabs.liquid",
    "_includes/env-des.liquid",
    "_includes/tool-industry-sidebar.liquid",
    "_includes/video.liquid",
    "_includes/eodata.liquid",
    "_includes/wales-kh.liquid",
    "_includes/developer-hub.liquid",
    "_includes/news-content.liquid",
    "_includes/change-ip.liquid",
    "_includes/case-study-content.liquid",
    "_includes/change.liquid",
    "_includes/temp-living-wales.liquid",
    "_includes/publications.liquid",
    "_includes/le-data.liquid",
    "_includes/tools-page.liquid",
    # backups skipped on purpose:
    # "_includes/backups/earthtrack-app.liquid",
    # "_includes/backups/header.liquid",
    "_includes/product-australia.liquid",
    "_includes/breadcrumbs.liquid",
    "_includes/ip-global.liquid",
    "_includes/login.liquid",
    "_includes/getting-started.liquid",
    "_includes/living-coasts.liquid",
    "_includes/tool-earth-track-sidebar.liquid",
    "_includes/aboutthemes.liquid",
    "_includes/ip-australia.liquid",
    "_includes/new-about.liquid",
    "_includes/tools.liquid",
    "_includes/change-impacts.liquid",
    "_includes/biodiversity.liquid",
    "_includes/change-impact-pressure.liquid",
    "_includes/living-wales.liquid",
]

# Matches href="/something" or src="/something" — a single leading slash,
# not "//" (protocol-relative) and not already inside a Liquid tag.
PATTERN = re.compile(r'(href|src)="(/(?!/)[^"]*)"')


def fix_content(content):
    def repl(m):
        attr, path = m.group(1), m.group(2)
        # Escape a literal single-quote in the path, just in case.
        safe_path = path.replace("'", "\\'")
        return f'{attr}="{{{{ \'{safe_path}\' | relative_url }}}}"'
    new_content, count = PATTERN.subn(repl, content)
    return new_content, count


def main():
    total_changes = 0
    changed_files = 0
    missing_files = []

    for path in FILES:
        try:
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
        except FileNotFoundError:
            missing_files.append(path)
            continue

        new_content, count = fix_content(content)
        if count > 0:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  {count:3d} fixed  -  {path}")
            total_changes += count
            changed_files += 1
        else:
            print(f"    0 fixed  -  {path}  (pattern not found — check manually)")

    print()
    print(f"Done: {total_changes} links fixed across {changed_files} files.")
    if missing_files:
        print("\nCouldn't find these (check you're running from repo root):")
        for m in missing_files:
            print("  -", m)

    print("\nSkipped on purpose (old backup files, not live templates):")
    print("  - _includes/backups/earthtrack-app.liquid")
    print("  - _includes/backups/header.liquid")
    print("  Consider deleting these rather than fixing them.")


if __name__ == "__main__":
    main()
