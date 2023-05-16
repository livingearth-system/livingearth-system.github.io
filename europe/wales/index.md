---
layout: page

title: Wales
subtitle: "Novel world-first concept that aims to capture the state and dynamics of Wales’s landscape"
background: "#07073f"
image: "/assets/img/heading/country.jpg"

button2: "MLLM Project"
button2_url: "./monmouthshire/"
---

{%-
include tools.liquid
heading="Past & Present Landscapes"
subheading="From knowledge of the past, we can inform the future but we need the tools to capture how we have historically shaped the landscapes of today. Earth observation data from satellites and aircraft give us a unique insight and so we have worked to develop a series of globally-applicable tools that allow us to describe, map and monitor land covers, habitats and ecosystems."
all="./past-present-landscapes/"
data="europe.wales.past-present-landscapes"
-%}

{%-
include tools.liquid
heading="Tools"
data="europe.wales.tools"
cols="4"
-%}

{%-
include contribute.liquid
title="Project"
heading="Monmoutshire Living <br>Land Management <br>Project"
subheading="Living Earth is an open resource that allows individuals, groups, organisations and countries/regions to better understand how to plan the restoration of landscapes through knowledge of the past. Living Earth also provides a structure that facilitates collaboration in the planning of landscapes and realisation of goals and ambitions."
button="Find Out More" url="./monmouthshire/"
image="/assets/img/monmouthshire-login.jpg"
-%}

{%-
include boxes.liquid
heading="Future Landscapes"
data="future.wales"
-%}

{%-
include boxes.liquid
heading="Themes"
data="europe.wales.themes.all"
only="welsh,ecosystem,biodiversity"
more="./themes/"
-%}

{%-
include boxes.liquid
heading="Learning and Art"
data="europe.wales.learning-and-art"
-%}

{%-
include contribute.liquid
title="Join Livingearth"
heading="How to contribute"
subheading="Living Earth is an open resource that allows individuals, groups, organisations and countries/regions to better understand how to plan the restoration of landscapes through knowledge of the past. Living Earth also provides a structure that facilitates collaboration in the planning of landscapes and realisation of goals and ambitions."
button="Learn more" url="/contribute/"
image="/assets/img/contribute.jpg"
-%}