---
layout: directory
permalink: /tools/for-developers/

title: "For Developers"
eyebrow: "Tools"
subtitle: "Access, analyse, and work with Living Earth's underlying data — from raw satellite archives to analysis-ready products."
image: "/assets/img/heading/tools-developers-leaves.jpg"
nocontact: false
code_blocks:
  - title: "GitHub"
    logo: "/assets/img/hubs/developer-hub/github.png"
    description: "All Living Earth software, including this website, is hosted and developed collaboratively on GitHub."
    url: "https://github.com/livingearth-system"
    newtab: true
  - title: "Land Cover Classification"
    logo: "/assets/img/hubs/developer-hub/faolccscode.png"
    description: "Code for classifying land cover according to the FAO Land Cover Classification System (LCCS)."
    url: "https://livingearth-lccs.readthedocs.io/en/latest/index.html"
    newtab: true
  - title: "Change Taxonomy"
    logo: "/assets/img/hubs/developer-hub/gct_ebcf.png"
    description: "Code implementing the Global Change Taxonomy and Evidence-Based Change Framework, linked directly to FAO LCCS."
    url: "https://github.com/livingearth-system/Globalchangeframework"
    newtab: true
  - title: "Notebook Repositories"
    logo: "/assets/img/hubs/developer-hub/repository.png"
    description: "Country-specific algorithm repositories for retrieving and classifying environmental descriptors, enabling consistent validation across countries."
    links:
      - label: "Notebooks for Wales"
        url: "https://github.com/livingearth-system/notebooks_for_wales"
        newtab: true
      - label: "Living Earth PNG"
        url: "https://github.com/livingearth-system/livingearth_png"
        newtab: true
      - label: "Living Coasts"
        url: "https://github.com/livingearth-system/living_coasts"
        newtab: true
      - label: "Code snippets"
        url: "https://github.com/livingearth-system/code-snippets"
        newtab: true
  - title: "Jupyter Notebooks"
    logo: "/assets/img/hubs/developer-hub/jupyter.png"
    description: "Standardised notebooks for exploring and analysing satellite data in your personalised country workspace — use as-is or modify and share."
    url: "https://knowledge.dea.ga.gov.au/"
    newtab: true
  - title: "Classification Schemes"
    icon: "book"
    description: "Background on the land cover, habitat and change taxonomies that this code implements."
    url: "/tools/learn/#taxonomies"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Tools"
    url: "/tools/"
  - label: "For Developers"
    url: "/tools/for-developers/"
---

{%- include for-developers-intents.liquid -%}

<section>
  <h2 class="fd-section-heading">Browse by Country</h2>
  {%- include data-by-country.liquid -%}
</section>

<section id="download-data">
{%-
include get-the-data.liquid
title="Get the Data"
description="Our access portal provides Living Earth regional products as well as links and directories to other Opensource EO datasets."
-%}
</section>

<section id="analyse-the-data">
  <div class="container">
    <div class="tool_content">
      <h2 class="title">Analyse the Data with Jupyter Notebooks</h2>
      <p class="article_description">
        When you sign in, you will have access to a historical but accumulating archive of satellite data and derived products, including environmental descriptors and the annual land cover maps constructed from these using the Living Earth system. You can interrogate, process and analyse these within the data cubes without having to download any data to your own computer. A wide range of Jupyter notebooks are available which you can explore and use to build or modify your own.
      </p>
      <p class="article_description">
        Login links for each country's data cube are listed under <a href="#browse-by-country">Browse by Country</a> above.
      </p>
    </div>
  </div>
</section>

<section id="code">
{% include info-blocks.liquid list=page.code_blocks heading="Code &amp; Repositories" id="code-repositories" variant="horizontal" %}
</section>

<section id="tools-platforms">
  <div class="tool_content">
    <h2 class="title">Tools &amp; Platforms</h2>
  </div>
{%-
include big-data.liquid
header="The Open Data Cube is used by CSIRO's Earth Analytics Science and Innovation (EASI), Geoscience Australia's Digital Earth Australia (DEA) and the Welsh Data Cube (WDC) analysis platforms to provide access to the full archive of time series of Landsat sensor, Sentinel-1 radar and/or Sentinel-2 optical satellite ARD.
Living Earth has recently demonstrated capacity to generate land and water classifications using the Open Data Cube in Papua New Guinea using EASI, which are consistent with those being generated for Australia (through DEA) and Wales (through the WDC)."
-%}
</section>
