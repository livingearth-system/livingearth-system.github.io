---
layout: directory
permalink: /tools/learn/

title: "Learn"
eyebrow: "Tools"
subtitle: "Background reading, reference material and classification schemes to help you understand and work with Living Earth data."
image: "/assets/img/heading/tools-learn-ski.jpg"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Tools"
    url: "/tools/"
  - label: "Learn"
    url: "/tools/learn/"
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
---

{%- include learn-intents.liquid -%}

{% include info-blocks.liquid list=page.taxonomies_blocks heading="Taxonomies" id="taxonomies" variant="horizontal" %}

