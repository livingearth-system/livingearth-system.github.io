---
layout: page
title: Australia
---

{%-
        include page-heading.liquid
        title="Australia"
        subtitle="Novel world-first concept that aims to capture the state and dynamics of Australia’s landscape"
        background="#07073f" image="/assets/img/img78.jpg"
-%}

<!-- Past & Current landscapes-start -->
<div class="container mt-100 pastcurrent-landscapes-main">
    <h2 class="common-title">Past &amp; Current Landscapes <a href="/past-present-landscapes/">View all</a></h2>
    <p>From knowledge of the past, we can inform the future but we need the tools to capture how we have historically shaped the landscapes of today. Earth observation data from satellites and aircraft give us a unique insight and so we have worked to develop a series of globally-applicable tools that allow us to describe, map and monitor land covers, habitats and ecosystems.</p>
    <div class="row effect">
        <div class="col-12">
            <div id="owl-past-current" class="owl-carousel owl-theme owl-img-responsive">
                <div class="item">
                    <a href="https://www.dea.ga.gov.au/products/dea-surface-reflectance" target="_blank"><img src="/assets/img/PastCurrent1.jpg" alt=""/></a>
                    <div class="pastcurrent-dsc">
                        <h4><a href="https://www.dea.ga.gov.au/products/dea-surface-reflectance" target="_blank">Analysis Ready Data</a></h4>
                        <p>Download and pre-process satellite sensor data to an analysis ready format</p>
                    </div>
                </div>
                <div class="item">
                    <a href="./data/environmental-descriptors/"><img src="/assets/img/PastCurrent2.jpg" alt=""/></a>
                    <div class="pastcurrent-dsc">
                        <h4><a href="./data/environmental-descriptors/">Environmental Descriptors</a></h4>
                        <p>Obtain from existing sources oor retrieve or classify from Earth observation data</p>
                    </div>
                </div>
                <div class="item">
                    <a href="https://livingearth-lccs.readthedocs.io/en/latest/index.html" target="_blank"><img src="/assets/img/PastCurrent3.jpg" alt=""/></a>
                    <div class="pastcurrent-dsc">
                        <h4><a href="https://livingearth-lccs.readthedocs.io/en/latest/index.html" target="_blank">Mapping</a></h4>
                        <p>Combine the environmental descriptors to generate maps of land cover</p>
                    </div>
                </div>
                <div class="item">
                    <a href="https://github.com/livingearth-system/Globalchangeframework" target="_blank"><img src="/assets/img/PastCurrent4.jpg" alt=""/></a>
                    <div class="pastcurrent-dsc">
                        <h4><a href="https://github.com/livingearth-system/Globalchangeframework" target="_blank">Monitoring</a></h4>
                        <p>Consistenty describe and quantify change based on impacts and pressures</p>
                    </div>
                </div>
                <div class="item">
                    <a href="https://earthtrack.aber.ac.uk/lccs/world.html" target="_blank"><img src="/assets/img/PastCurrent5.jpg" alt=""/></a>
                    <div class="pastcurrent-dsc">
                        <h4><a href="https://earthtrack.aber.ac.uk/lccs/world.html" target="_blank">Validation</a></h4>
                        <p>Record environmental descriptors, land cover, habitats and change on the ground</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Past & Current landscapes-end -->

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
        all="/themes/"
        data="themes-australia"
-%}


<div class="container mt-120 mb-120 future-landscapes-main">
    <h2 class="common-title">Learning and Art</h2>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <a href="#"><img src="/assets/img/edu1.png" alt="Education"></a>
            <div class="future-dsc">
                <div class="future-dsc-title"><a href="#">Education</a></div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <a href="#"><img src="/assets/img/edu2.png" alt="Training"></a>
            <div class="future-dsc">
                <div class="future-dsc-title"><a href="#">Training</a></div>
                <p>An overview of research relevant to Living Earth in Wales</p>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <a href="#"><img src="/assets/img/edu3.png" alt="Art"></a>
            <div class="future-dsc">
                <div class="future-dsc-title"><a href="#">Art</a></div>
                <p>Designs relevant to Living Earth</p>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <a href="#"><img src="/assets/img/edu1.png" alt="Photography"></a>
            <div class="future-dsc">
                <div class="future-dsc-title"><a href="#">Photography</a></div>
                <p>Photographs of Wales</p>
            </div>
        </div>
    </div>
</div>

{%-
        include contribute.liquid
        title="Join Livingearth"
        heading="How to contribute"
        subheading="Living Earth is an open resource that allows individuals, groups, organisations and countries/regions to better understand how to plan the restoration of landscapes through knowledge of the past. Living Earth also provides a structure that facilitates collaboration in the planning of landscapes and realisation of goals and ambitions."
        button="Learn more" url="/contribute/"
        image="/assets/img/contribute.jpg"

-%}

{%- include get-in-touch.liquid -%}