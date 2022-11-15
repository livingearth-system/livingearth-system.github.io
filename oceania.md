---
layout: page
permalink: /oceania/

title: Oceania
subtitle: "We aim to capture the state and dynamics of Oceania’s landscape."
background: "#07073f"
image: "/assets/img/img78.jpg"
nobuttons: true
---

{%-
        include countries.liquid
        data="oceania"
-%}

{%-
        include continents.liquid
        heading="Other Continents"
        data="continents"
        exclude="oceania"
        more="#"
-%}