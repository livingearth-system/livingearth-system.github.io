---
layout: home

title: "Welcome to Living Earth"
subtitle: "Living Earth is providing new capacity to support planetary restoration, primarily through use of Earth observations."
smalltitle: "All-in-one"
image: "/assets/img/title-index.jpg"
---

{%-
include search-landscapes.liquid
heading="Search for Landscapes"
-%}

{%-
include boxes.liquid
heading="Future Landscapes"
data="future.index"
-%}

{%-
include about-us.liquid
title="About Us"
heading="We are driven by the same purpose"
subheading="Across the world, there is a desire to protect our planet for current and future generations but achieving this often seems beyond reach. Living Earth is therefore providing one avenue by which people can work openly and together to understand and plan our future landscapes so that they benefit both ourselves but also nature."
button="Learn more" url="/about/"
image="/assets/img/pexels-anne.jpg"
-%}

{%-
include tools.liquid
heading="Past & Present Landscapes"
subheading="From knowledge of the past, we can inform the future but we need the tools to capture how we have historically shaped the landscapes of today. Earth observation data from satellites and aircraft give us a unique insight and so we have worked to develop a series of globally-applicable tools that allow us to describe, map and monitor land covers, habitats and ecosystems."
all="/past-present/"
data="past-present.index"
-%}

{%-
include tools.liquid
heading="Tools"
data="tools"
-%}

{%-
include contribute.liquid
title="Join Livingearth"
heading="How to contribute"
subheading="Living Earth is an open resource that allows individuals, groups, organisations and countries/regions to better understand how to plan the restoration of landscapes through knowledge of the past. Living Earth also provides a structure that facilitates collaboration in the planning of landscapes and realisation of goals and ambitions."
button="Learn more" url="/contribute/"
image="/assets/img/contribute.jpg"
-%}

{%-
include our-blog.liquid
title="Our blog"
heading="Stay up to date"
all="Read all articles" url="/news/"
-%}