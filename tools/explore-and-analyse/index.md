---
layout: directory
permalink: /tools/explore-and-analyse/

title: "Explore and Analyse"
eyebrow: "Tools"
subtitle: "See Living Earth's maps and data in action — explore the interactive map, or collect and validate your own observations with the Earthtrack app."
image: "/assets/img/heading/enviromental.png"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Tools"
    url: "/tools/"
  - label: "Explore and Analyse"
    url: "/tools/explore-and-analyse/"
---

<div class="container">
  <div class="row align-items-start">
    <div class="col-lg-7 tool_content">
      <h2 class="title">Interactive Map</h2>
      <p class="article_description">Using the Living Earth approach, maps of land cover have been generated for Wales, Australia and, more recently, the coastal zones of Papua New Guinea. The map interface for Wales is being upgraded to provide a new interactive map — whilst this is being developed, please select Countries &gt; Wales &gt; Tools: See it on a Map to access the products from 2018–2023. Those for Australia are available by selecting Countries &gt; Australia &gt; Tools: See it on a Map.</p>
      <p class="article_description">These maps provide a platform for visualising how people and nature have shaped the landscapes we see today, obtained primarily from historical satellite data and updated through near-daily observations. Initially, select the broad land cover as the base map, then add layers that represent different categorical (e.g. crop type) or continuous (e.g. water persistence, above-ground biomass) environmental descriptors to give more detail.</p>

      <h3 class="article_heading">Maps for Wales</h3>
      <p class="article_description">View maps of habitat extent (for Wales only), generated through direct translation of some classes (e.g. broadleaved forest) from the land cover map, or by splitting mapped classes using contextual information such as the extent of peatlands or coastal environments.</p>

      <h3 class="article_heading">The uniqueness of Living Earth legends</h3>
      <p class="article_description">The legends used for land cover and change are globally relevant, based on the Food and Agriculture Organisation (FAO) Land Cover Classification System (LCCS) and Living Earth's Global Change Taxonomy. The taxonomies used for habitat maps (where existing) are specific to the country.</p>

      <h3 class="article_heading">Free and open for everyone</h3>
      <p class="article_description">All Living Earth layers are openly available and accessible for people to use, and to view current and historical changes in the national landscape over varying time periods and understand the reasons for these. The maps can be used for multiple purposes, including assessing past and current land management and impacts on carbon, biodiversity, and soil, water and air quality — and to inform local, national and international policy.</p>
    </div>
    <div class="col-lg-5">
      <div class="tool-embed-frame">
        <iframe src="/tools/interactive-map" title="Living Earth interactive map preview" loading="lazy"></iframe>
      </div>
      <a class="tool-embed-expand" href="{{ '/tools/interactive-map' | relative_url }}">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13 3h4v4M17 3l-6 6M7 17H3v-4M3 17l6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Expand to full map
      </a>
    </div>
  </div>
</div>

<div class="container">
  <div class="row align-items-start">
    <div class="col-lg-7 tool_content">
      <h2 class="title">Earthtrack App</h2>
      <p class="article_description">Earthtrack has been designed to be used by a wide range of users with varying levels of expertise and background knowledge — citizen scientists, park rangers or academic researchers. Data submitted can be used directly to validate maps of land cover, habitat and change generated primarily from Earth observation data, using the same taxonomies: the Food and Agriculture Organisation (FAO) Land Cover Classification System (LCCS) and Living Earth's Global Change Taxonomy.</p>
      <p class="article_description">Earthtrack can be downloaded from the <a href="https://play.google.com/store/apps/details?id=com.natural_apptitude.earthtrack&hl=en_GB" target="_blank" rel="noopener">Google Play Store</a> or the <a href="https://apps.apple.com/us/app/earthtrack/id1610357134" target="_blank" rel="noopener">Apple App Store</a>. To access data from Earthtrack or stream it to your GIS, see <a href="/tools/for-developers/#get-the-data">Get the Data</a>.</p>

      <div class="earthtrack-actions">
        {%- include app-store-badges.liquid apple_url="https://apps.apple.com/us/app/earthtrack/id1610357134" google_url="https://play.google.com/store/apps/details?id=com.natural_apptitude.earthtrack&hl=en_GB" -%}
        <p class="article_description">Earthtrack can be downloaded from the <a href="https://play.google.com/store/apps/details?id=com.natural_apptitude.earthtrack&hl=en_GB" target="_blank" rel="noopener">Google Play Store</a> or the <a href="https://apps.apple.com/us/app/earthtrack/id1610357134" target="_blank" rel="noopener">Apple App Store</a>. To access data from Earthtrack or stream it to your GIS, see <a href="{{ '/tools/for-developers/#get-the-data' | relative_url }}">Get the Data</a>.</p>

<div class="earthtrack-actions">
  {%- include app-store-badges.liquid apple_url="https://apps.apple.com/us/app/earthtrack/id1610357134" google_url="https://play.google.com/store/apps/details?id=com.natural_apptitude.earthtrack&hl=en_GB" -%}
  <a class="tracking-points-button" href="{{ '/tools/earthtrack-app' | relative_url }}">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.8"/></svg>
    View Earthtrack Tracking Points
  </a>
</div>
    </div>
    <div class="col-lg-5">
      <div class="tool-embed-frame">
        <iframe src="{{ '/tools/earthtrack-app' | relative_url }}" title="Earthtrack tracking points preview">
      </div>
      <a class="tool-embed-expand" href="{{ '/tools/earthtrack-app' | relative_url }}">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13 3h4v4M17 3l-6 6M7 17H3v-4M3 17l6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Expand to Earthtrack App
      </a>
    </div>
  </div>
</div>