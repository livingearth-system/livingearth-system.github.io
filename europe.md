---
layout: page
permalink: /europe/

title: Europe
subtitle: "We aim to capture the state and dynamics of Europe’s landscape."
background: "#07073f"
image: "/assets/img/heading/europe.jpg"
nobuttons: true
---

{%-
include countries.liquid
data="europe.countries"
search=true more=true
-%}

{%-
include continents.liquid
heading="Other Continents"
data="continents"
exclude="europe"
-%}