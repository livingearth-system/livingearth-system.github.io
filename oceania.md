---
layout: page
permalink: /oceania/

title: Oceania
subtitle: "We aim to capture the state and dynamics of Oceania’s landscape."
background: "#07073f"
image: "/assets/img/img78.jpg"
---

<!-- continent-data-showing-start -->
<div class="container mb-100 data-continent-main">
    <div class="data-continent-fillter">
        <div class="continent-count">
            4 countries
        </div>
        <div class="continent-dropdown">
            Sort by:
            <div class="select-box">
                <div class="options-container">
                    <div class="option">
                        <input type="radio" class="radio" id="grade-a" name="category">
                        <label for="grade-a">Highest Grade</label>
                    </div>
                    <div class="option">
                        <input type="radio" class="radio" id="grade-b" name="category">
                        <label for="grade-b">Average</label>
                    </div>
                    <div class="option">
                        <input type="radio" class="radio" id="grade-c" name="category">
                        <label for="grade-c">Grade</label>
                    </div>
                    <div class="option">
                        <input type="radio" class="radio" id="grade-d" name="category">
                        <label for="grade-d">Low</label>
                    </div>
                </div>
                <div class="selected">
                    <h3>Name</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="row continent-data-section">
        <div class="col-6 col-md-4 col-lg-3 hover-zoomin">
            <a href="/oceania/australia"><img src="/assets/img/Aus.jpg" alt=""></a>
            <h3><a href="oceania/australia">Australia</a></h3>
        </div>
        <div class="col-6 col-md-4 col-lg-3 hover-zoomin">
            <a href="#"><img src="/assets/img/NZ.jpg" alt=""></a>
            <h3><a href="#">New Zealand</a></h3>
        </div>
        <div class="col-6 col-md-4 col-lg-3 hover-zoomin">
            <a href="#"><img src="/assets/img/Fiji.jpg" alt=""></a>
            <h3><a href="#">Fiji</a></h3>
        </div>
        <div class="col-6 col-md-4 col-lg-3 hover-zoomin">
            <a href="#"><img src="/assets/img/Tonga.jpg" alt=""></a>
            <h3><a href="#">Tonga</a></h3>
        </div>

    </div>
</div>
<!-- continent-data-showing-end -->

{%-
        include continents.liquid
        heading="Other Continents"
        all="#"
        data="continents"
        exclude="oceania"
-%}