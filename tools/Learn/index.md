---
layout: directory
permalink: /knowledge-hub/learn/

title: "Learn"
eyebrow: "Knowledge Hub"
subtitle: "Background reading, reference material and classification schemes to help you understand and work with Living Earth data."
image: "/assets/img/heading/tools-learn-ski.jpg"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Knowledge Hub"
    url: "/knowledge-hub/"
  - label: "Learn"
    url: "/knowledge-hub/learn/"
taxonomies_blocks:
  - title: "Land Cover"
    icon: "map"
    description: "FAO's Land Cover Classification System (LCCS v2) — a consistent framework for classifying land cover from local to global scales, with over 12,000 possible classes."
    url: "https://www.fao.org/3/y7220e/y7220e05.htm"
    newtab: true
  - title: "Habitats"
    icon: "leaf"
    description: "Country- and region-specific habitat classification, built on FAO LCCS land cover classes combined with local ecological context. Currently generated for Wales."
    url: "https://jncc.gov.uk/resources/9578d07b-e018-4c66-9c1b-47110f14df2a"
    newtab: true
  - title: "Change"
    icon: "change"
    description: "A global taxonomy of 246 impact-pressure classes for describing and comparing observed environmental change, built on the Driver-Pressure-State-Impact-Response framework."
    links:
      - label: "Read the framework paper"
        url: "https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.16346"
        newtab: true
      - label: "View the code on GitHub"
        url: "https://github.com/livingearth-system/Globalchangeframework"
        newtab: true
publication_blocks:
  - title: "Digital Earth for Sustainable Development Goals"
    icon: "book"
    description: "Metternicht, G., Mueller, N. & Lucas, R. (2020). Chapter 13 in Manual of Digital Earth, Springer, Singapore."
    url: "https://link.springer.com/chapter/10.1007/978-981-32-9915-3_13"
    newtab: true
  - title: "A globally relevant change taxonomy and evidence-based change framework for land monitoring"
    icon: "change"
    description: "Lucas, R.M. et al. (2022). Global Change Biology — the paper behind Living Earth's change taxonomy."
    url: "https://doi.org/10.1111/gcb.16346"
    newtab: true
  - title: "All publications"
    icon: "book"
    description: "The full list of Living Earth papers, chapters and reports, filterable by country."
    url: "/publications/"
notebook_blocks:
  - title: "DEA Land Cover"
    logo: "/assets/img/hubs/developer-hub/jupyter.png"
    description: "Digital Earth Australia's worked notebook for loading, plotting and analysing Living Earth-based land cover (FAO LCCS) through time."
    url: "https://knowledge.dea.ga.gov.au/notebooks/DEA_products/DEA_Land_Cover/"
    newtab: true
---

{%- include learn-intents.liquid -%}

{% include info-blocks.liquid list=page.taxonomies_blocks heading="Taxonomies" id="taxonomies" variant="horizontal" %}

{% include info-blocks.liquid list=page.publication_blocks heading="Publications" id="publications" variant="horizontal" %}

{% include info-blocks.liquid list=page.notebook_blocks heading="Example Notebooks" id="example-notebooks" variant="horizontal" %}
