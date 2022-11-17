---
layout: page

title: Australia
subtitle: "Novel world-first concept that aims to capture the state and dynamics of Australia’s landscape"
image: "/assets/img/heading/australia.jpg"
---

{%-
        include past-present.liquid
        heading="Past & Present Landscapes"
        subheading="From knowledge of the past, we can inform the future but we need the tools to capture how we have historically shaped the landscapes of today. Earth observation data from satellites and aircraft give us a unique insight and so we have worked to develop a series of globally-applicable tools that allow us to describe, map and monitor land covers, habitats and ecosystems."
        all="./past-present-landscapes/"
        data="oceania.australia.past-present-landscapes"
-%}

<!-- TOOLS landscapes-start -->
<div class="container mt-100 mb-100 tools-main">
    <h2 class="common-title">Tools</h2>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <a href="https://maps.dea.ga.gov.au/story/DEALandCover" target="_blank"><img src="/assets/img/tools1.jpg" alt=""></a>
            <div class="pastcurrent-dsc">
                <h4><a href="https://maps.dea.ga.gov.au/story/DEALandCover" target="_blank">See on Map</a></h4>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <a href="https://cmi.ga.gov.au/data-products/dea/607/dea-land-cover-landsat#access" target="_blank"><img src="/assets/img/tools2.jpg" alt=""></a>
            <div class="pastcurrent-dsc">
                <h4><a href="https://cmi.ga.gov.au/data-products/dea/607/dea-land-cover-landsat#access" target="_blank">Get the data</a></h4>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <a href="https://docs.dea.ga.gov.au/notebooks/DEA_datasets/DEA_Land_Cover.html" target="_blank"><img src="/assets/img/tools3.jpg" alt=""></a>
            <div class="pastcurrent-dsc">
                <h4><a href="https://docs.dea.ga.gov.au/notebooks/DEA_datasets/DEA_Land_Cover.html" target="_blank">Analyse The Data</a></h4>
            </div>
        </div>
    </div>
</div>
<!-- TOOLS landscapes-end -->

{%-
        include boxes.liquid
        heading="Themes"
        data="themes"
        only="australian,ecosystem,biodiversity"
        more="/themes/"
-%}


{%-
        include boxes.liquid
        heading="Learning and Art"
        data="oceania.australia.learning-and-art"
-%}

{%-
        include contribute.liquid
        title="Join Livingearth"
        heading="How to contribute"
        subheading="Living Earth is an open resource that allows individuals, groups, organisations and countries/regions to better understand how to plan the restoration of landscapes through knowledge of the past. Living Earth also provides a structure that facilitates collaboration in the planning of landscapes and realisation of goals and ambitions."
        button="Learn more" url="/contribute/"
        image="/assets/img/contribute.jpg"

-%}