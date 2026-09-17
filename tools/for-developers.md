---
layout: directory
permalink: /tools/for-developers/

title: "For Developers"
eyebrow: "Tools"
subtitle: "Access, analyse, and work with Living Earth's underlying data — from raw satellite archives to analysis-ready products."
image: "/assets/img/heading/tools-developers-leaves.jpg"
nocontact: false
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
{%-
include tool-content.liquid
title="Analyse the Data with Jupyter Notebooks"
first-heading="Accessing data cubes through Jupyter Hub"
first-content-top="Here, you can currently access the data cubes of satellite sensor data and derived products from Wales and Australia, where the Living Earth system is implemented."
first-content-bottom="Select the country from the drop down menu and then sign in. For Digital Earth Australia, you will need to first create an account at the link if you have not already done so. For the Welsh Data Cube, you can request access by emailing livingwales@aber.ac.uk. When you sign in, you will have access to a historical but accumulating archive of satellite data and derived products, including environmental descriptors and the annual land cover maps constructed from these using the Living Earth system. You can interrogate, process and analyse these within the data cubes without having to download any data to your own computer. A wide range of Jupyter notebooks are available which you can explore and use to build or modify your own."
second-heading="More on JupyterHub"
second-content-top="JupyterHub brings the power of notebooks to groups of users. It gives users access to computational environments and resources without burdening the users with installation and maintenance tasks. Users — including students, researchers, and data scientists — can get their work done in their own workspaces on shared resources which can be managed efficiently by system administrators."
second-content-bottom="JupyterHub runs in the cloud or on your own hardware, and makes it possible to serve a pre-configured data science environment to any user in the world. It is customizable and scalable, and is suitable for small and large teams, academic courses, and large-scale infrastructure."
-%}
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
