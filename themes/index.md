---
layout: directory
permalink: /themes/

title: "Themes"
eyebrow: "Themes"
subtitle: "An overview of our themes — land cover and habitats, water, change, biodiversity, accounts and futures."
image: "/assets/img/heading/themes-zurich-park.jpg"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Themes"
    url: "/themes/"
jump_nav:
  - label: "Water"
    url: "#water"
  - label: "Future Earth"
    url: "#future-earth"

explore_blocks:
  - title: "Land Cover and Habitats"
    icon: "map"
    description: "First, map and describe land cover and habitat classes from Earth observations, providing further differentiation using contextual information."
    url: "/themes/landhabcover/"
  - title: "Change, Impacts and Pressures"
    icon: "change"
    description: "Gather evidence for change impacts by comparing these maps and environmental descriptors used in their construction over time and then reference driving pressures."
    url: "/themes/change/"
  - title: "Biodiversity"
    icon: "leaf"
    description: "Estimate the distribution, abundance and richness of biodiversity and whether these are heading in the right direction."
    url: "/themes/biodiversity/"


futures_blocks:
  - title: "Imagining"
    icon: "globe"
    description: "Future landscapes and revisiting visions as needed."
  - title: "Informing"
    icon: "book"
    description: "Decisions by providing capacity to value landscapes (e.g., in terms of carbon, biodiversity, coastal protection, water quality)."
  - title: "Assessing Risk"
    icon: "change"
    description: "Including from economic variations (including shocks) and climate change."
  - title: "Exploring"
    icon: "map"
    description: "The realism of proposed landscapes under different scenarios of change (e.g., through reference to past EO-derived knowledge and model scenarios to test proposed management interventions)."
  - title: "Harmonising"
    icon: "person"
    description: "Viewpoints through co-design and by resolving conflicts."
  - title: "Monitoring"
    icon: "change"
    description: "Progress towards ambitions."

water_blocks:
  - title: "Intertidal Elevation Datasets"
    logo: "/assets/img/themes/water/dea_intertidal.png"
    description: "Digital Earth Australia (DEA) is developing their Intertidal Elevation maps for Australia's intertidal zone, which is providing substantive information on the dynamics of the coastal environment around Australia."
    url: "https://www.dea.ga.gov.au/products/dea-intertidal-elevation"
    newtab: true
  - title: "Mapping the Intertidal and Subtidal Zones"
    logo: "/assets/img/themes/water/hinchinbrook_coastal.png"
    description: "For Australia, first steps have been taken to integrate data from the Allen Coral Atlas into the Living Earth system as part of Living Coasts. Whilst only for one time-period, the study has demonstrated that what would normally be classified as non-vegetated water in FAO LCCS Version 2.0 can be described in terms of the substrate types and habitats. Further work is also focusing on bringing in the surface and columnar characteristics and extending the time-series to facilitate mapping of change."
  - title: "Characterising the Intertidal Zones of Wales"
    logo: "/assets/img/themes/water/wales_intertidal.png"
    description: "Using the Earthtrack mobile application, focus is on recording information on intertidal bare surfaces and vegetation, including macroalgae and seagrasses. The submitted observations are used to develop and validate algorithms through the Living Wales system to facilitate monitoring of these diverse ecosystems."
---

{% include info-blocks.liquid list=page.explore_blocks heading="Explore the Themes" variant="horizontal" %}

<div class="container">
  <section id="water">
    <h2 class="fd-section-heading">Water</h2>
    <p>Across landscapes, water occurs in liquid form and as snow and ice, and the properties of each are multi-dimensional, relating to the surface, column or volume or substate. Respectively, these include water surface temperature and floating matter, columnar turbidity, acidity or snow grain size, and the composition and topography of the substrate. Plants and animals are also distributed on or throughout, with populations varying over space and time. Whilst the Food and Agriculture Organisation (FAO) Land Cover Classification System (LCCS) used by Living Earth allows for the classification of the different forms of water, these are relatively limited and categorical in nature. Hence, Living Earth (including through the Living Coasts, Living Watersources and Dynamic Land projects with international partners) has extended capacity to consistently describe freshwater, intertidal and marine environments from environmental descriptors retrieved or classified from Earth observation or obtained from other sources.</p>
  </section>
</div>

<div class="container">
  <div class="env-des-descriptor-grid" style="grid-template-columns: repeat(3, 1fr);">
    {% for item in page.water_blocks %}
    <div class="env-des-descriptor-card">
      <img src="{{ item.logo | relative_url }}" alt="{{ item.title }}" class="env-des-descriptor-image">
      <div class="env-des-descriptor-title">{{ item.title }}</div>
      <div class="env-des-descriptor-description">{{ item.description }}</div>
    </div>
    {% endfor %}
  </div>
</div>

{% include info-blocks.liquid list=page.futures_blocks heading="Future Earth" id="future-earth" variant="horizontal" %}
