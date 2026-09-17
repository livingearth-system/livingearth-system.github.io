---
layout: directory
permalink: /themes/landhabcover/

title: "Land Cover and Habitats"
eyebrow: "Themes"
subtitle: "Our land cover maps are all based on the globally-relevant Food and Agriculture Organisation (FAO) Land Cover Classification System (LCCS) taxonomy (Version 2.0)."
image: "/assets/img/heading/livingcoasts_starckemangroves.png"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Themes"
    url: "/themes/"
  - label: "Land Cover and Habitats"
    url: "/themes/landhabcover/"
---

<div class="container">
  <p>Living Earth maps are unique in that they are and can be constructed a) from a diverse range of environmental descriptors obtained primarily from Earth observation data and b) across space and time as all environmental descriptors used in their construction have numeric units (e.g., m, %, time) or codes (e.g., plant species type). Whilst most national to global maps are produced from moderate (10-30 m) to coarse (100m &ndash; 1 km) resolution satellite data, maps with the same classes and associated descriptions can be generated to resolutions as high as sub-centimetre using data from sensors on board drones and aircraft. Maps can also be generated for periods before the satellite record through reconstruction from historical maps and into the future. Habitat maps can be generated through direct translation from land cover classes (e.g., woodland, water, urban) and/or by using contextual information (e.g., extent of coastal zones or floodplains or peat extent). Both land cover and habitat maps generated using Living Earth can be validated using the Earthtrack mobile application, with this facilitating a one-to-one correspondence with ground observations.</p>
</div>

<div class="container">
  <div class="env-des-descriptor-grid" style="grid-template-columns: repeat(3, 1fr);">
    {% assign landcover_items = site.data['themes']['landhabcover'].index %}
    {% for item in landcover_items %}
    {% unless item.title == blank %}
    <div class="env-des-descriptor-card">
      <img src="{% if item.image contains 'http' %}{{ item.image }}{% else %}{{ item.image | relative_url }}{% endif %}" alt="{{ item.title }}" class="env-des-descriptor-image">
      <div class="env-des-descriptor-title">{{ item.title }}</div>
      <div class="env-des-descriptor-description">{{ item.content }}</div>
    </div>
    {% endunless %}
    {% endfor %}
  </div>
</div>
