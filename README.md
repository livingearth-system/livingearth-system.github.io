# Living Earth Hub website

Source for [livingearthhub.org](https://livingearthhub.org): the public site for Living Earth, an Earth observation approach to mapping and monitoring land cover, habitats and change. It covers Global, Australia, Switzerland and Wales, for policy, research, developer and public audiences.

Built with Jekyll and hosted on GitHub Pages.

---

## Running it locally

The site is developed in a GitHub Codespace.

```
BUNDLER_VERSION=2.6.9 bundle exec jekyll serve --host 0.0.0.0 --port 4001
```

- Use **port 4001**, not 4000.
- Open the preview from the **Ports** panel (globe icon). Don't reuse old preview tabs.
- If the preview stops loading and restarting Jekyll doesn't fix it, stop and restart the whole Codespace from github.com/codespaces.
- Changes to `.scss` files or `_config.yml` need a Jekyll restart. Changes to pages and `_data` usually just need a refresh.

To check the site builds without errors (no output means all clear):

```
BUNDLER_VERSION=2.6.9 bundle exec jekyll build 2>&1 | grep -i -E "error|could not locate|liquid exception"
```

## Branches and deploying

- Work happens on a fork (`siennabenena/livingearth-system.github.io`), on a feature branch off `main`.
- Changes go live by opening a **pull request into the upstream repo** (`livingearth-system/livingearth-system.github.io`), whose `main` branch deploys to livingearthhub.org.
- Day-to-day workflow: `git status` → `git add .` → `git commit -m "message"` → `git push`, then check on GitHub that the push landed.

---

## How the site is put together

Most pages follow the same pattern:

```
_data/*.yml          the content (text, links, images)
   ↓
_includes/*.liquid   how that content is rendered
   ↓
_sass/livingearth/modules/*.scss   how it's styled (imported in main.scss)
```

So **to change wording, edit the `_data` file**, not the template.

| Folder | What's in it |
|---|---|
| `_data/` | Content for most pages and components |
| `_includes/` | Reusable page sections (pipeline, publications list, news cards, etc.) |
| `_layouts/` | Page templates. Nearly every page uses `layout: directory` |
| `_sass/` | Styles |
| `assets/img/` | Images. `heading/` holds the hero images |
| `assets/json/` | Earthtrack data (see below) |
| `europe/`, `oceania/` | Country pages (Wales, Switzerland, Australia) |

### Standard page

Every page uses `layout: directory` and lives at `folder/index.md`:

```yaml
---
layout: directory
permalink: /example/
title: "Page title"
eyebrow: "Section name"
subtitle: "One or two sentences shown in the hero."
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Section"
    url: "/section/"
  - label: "Page title"
    url: "/example/"
---
```

`no_hero_art: true` turns off the hero image.

---

## Site rules

- **Breadcrumbs are required** on every page.
- **One page, one file.** Use `folder/index.md`, never a flat `folder.md` alongside it. Having both causes a same-URL conflict.
- **Internal links use `relative_url`**, e.g. `{{ '/about/' | relative_url }}`, never a hardcoded `/about/`.
- **External links open in a new tab** (`target="_blank" rel="noopener"`).
- **Country order everywhere: Global, then Australia, then the rest A–Z.** The master list is `_data/countries.yml`; the home strip, pipeline and icons follow its order.
- **Green is a reserved accent** (calibration/validation and engagement sections). The pipeline chevrons stay in the blue gradient.
- **Themes and News & Events** are not ready to promote yet. Keep them out of Quick Links.
- **Brand:** Inter font. Navy `#23567b`, blue `#4294c3`, light blue `#c6e5f4`, forest green `#3d7f58`, light green `#92c983`, off-white `#fbf8f5`.

### Pitfalls that have caused problems before

- **Never put Liquid (`{% %}` or `{{ }}`) inside an HTML comment `<!-- -->`.** It breaks the build. Use `{% comment %}…{% endcomment %}` instead.
- **Copy-pasted front matter can carry hidden characters.** If a page suddenly renders as raw text, check the top of the file with `head -5 file.md | od -c`.
- **When editing a page by hand, check the content below the closing `---` is still there.**
- **Run `git diff` before restarting Jekyll** to confirm your edits actually saved.
- In the terminal, use **single quotes** around anything containing `!`, or bash will try to interpret it.

### Earthtrack

The Earthtrack app, interactive map scripts (e.g. `filter-map.js`) and `assets/json/earthtrack*.json` are **maintained separately on upstream `main`**. Don't edit them on a feature branch. Check with the maintainer first.

---

## Common content updates

### Add a publication

Add an entry to `_data/publications.yml`. Order doesn't matter, because the page sorts newest first automatically.

```yaml
- title: "Paper title"
  authors: "Surname, A., Surname, B."
  date: "2026"
  link: "https://doi.org/..."
  newtab: true
  country: "Wales"      # Global, Australia, Switzerland or Wales
```

### Add or edit a news / events card

Edit `_data/news-blog/index.yml`. Each card has a `category`, `button`, `date`, `href`, `oldman-img` (image), `subtitle` and `title`.

- `href: '#'` (or empty) shows the card without a link.
- `hidden: true` keeps the card in the file but doesn't show it.
- To add named links under the text:

  ```yaml
    links:
      - name: "Link text"
        url: "https://..."
  ```

---

## Handover: known issues and to-do (October 2026)

### Content needed

- **EARSeL 2026 research cards** (News) only list authors. Each needs a 1–2 sentence summary from the presenter, plus a link.
- **"Get in Touch" email** is still a placeholder (`XXXX`).
- **Education and Notebook Repositories links** on For Developers still point to `#`.
- **Welsh Data Cube** access link/process needs confirming with Richard.
- **Wales sandbox URL:** `hub.livingwales.space` or `livingwales.aber.ac.uk/jhub`? Needs confirming.
- **"How to cite" section** for Publications was proposed (Owers et al. 2021, Planque et al. 2026, Lucas et al. 2022). Richard to confirm which papers before it's built.
- **Six hidden news posts** (Welsh Data Cube, Daintree erosion, CCI Biomass, Living Coasts, etc.) are in `_data/news-blog/index.yml` with `hidden: true`. Decide which to show.

### Decisions on hold

- **Papua New Guinea:** removal of PNG references was started then paused. The project page, includes and data are still in place.
- **Monmouthshire landowner login** (`login/` pages): decided on 25 Sep to remove, not yet done. Check with Richard before deleting.
- **Map product write-ups** in `_data/le-data/prod-australia` and `prod-wales` have good content but no template since the old Living Earth Products page was removed. Reuse or archive.

### Tidy-up for a future developer

- **Unlinked pages with real content:** the three `blog/` posts, Wales and Australia `themes/ecosystem` pages (~600 words each), tilled land, `projects/livingcoasts`, `themes/landhabcover`. Link them into the menus or fold them into existing pages.
- **Duplicate folders:** `projects/` vs `our-projects/`, and root `env-des/` vs `data/env-des/`. Keep one of each.
- **25 flat `.md` pages in the root** (e.g. `about.md`, `contact.md`) work fine but don't follow the `folder/index.md` convention.
- **Images:** ~500 files in `assets/` aren't referenced anywhere, and ~70 images are saved more than once under different names (~36 MB). Check carefully before deleting, because some image paths are built on the fly from names in the data files.
- **Quick Links** show the same default on every page. Each page can override them with `quicklinks:` in its front matter.
- **For Developers page:** "Get the Data" and "Analyse the Data" still use an older layout and need a design pass.
- **News page "Learn more" button** doesn't load anything. Hide it or link it somewhere.
- **Search bar** (e.g. Simple-Jekyll-Search) was discussed but not built.

### Cleaned up in October 2026

Removed: the old environmental descriptor pages (definitions now live in `_data/env-des-descriptors.yml`), placeholder ground-measurement and algorithm pages, an unused layout, 16 unused includes, and duplicate and placeholder data files. Oversized photos were compressed. Everything removed is still in git history if needed.
