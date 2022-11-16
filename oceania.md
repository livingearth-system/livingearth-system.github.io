---
layout: page
permalink: /oceania/

title: Oceania
subtitle: "We aim to capture the state and dynamics of Oceania’s landscape."
image: "/assets/img/heading/australia.jpg"
nobuttons: true
---

{%-
include countries.liquid
data="oceania.countries"
-%}

{%-
include continents.liquid
heading="Other Continents"
data="continents"
exclude="oceania"
-%}