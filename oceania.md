---
layout: page
permalink: /oceania/
title: Oceania
---

{%-
        include title.liquid
        title="Oceania"
        subtitle="We aim to capture the state and dynamics of Oceania’s landscape."
        background="#07073f" image="/assets/img/img78.jpg"
-%}

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
                        <label for="grade-a"><h3>Highest Grade</h3></label>
                    </div>

                    <div class="option">
                        <input type="radio" class="radio" id="grade-b" name="category">
                        <label for="grade-b"><h3>Average</h3></label>
                    </div>

                    <div class="option">
                        <input type="radio" class="radio" id="grade-c" name="category">
                        <label for="grade-c"><h3>Grade</h3></label>
                    </div>
                    <div class="option">
                        <input type="radio" class="radio" id="grade-c" name="category">
                        <label for="grade-c"><h3>Low</h3></label>
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

<!-- other-continents-start -->
<div class="container mb-100">
    <h2 class="common-title">other continents <a href="#">View all</a></h2>
    <div class="row continent-data-section">
        <div class="col-6 col-md-4 col-lg-3">
            <a href="#"><img src="/assets/img/America.jpg" alt=""></a>
            <h3><a href="#">America</a></h3>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
            <a href="#"><img src="/assets/img/Africa-c.jpg" alt=""></a>
            <h3><a href="#">Africa</a></h3>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
            <a href="#"><img src="/assets/img/Asia-c.jpg" alt=""></a>
            <h3><a href="#">Asia</a></h3>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
            <a href="#"><img src="/assets/img/Oceania-c.jpg" alt=""></a>
            <h3><a href="#">Oceania</a></h3>
        </div>
    </div>
</div>
<!-- other-continents-end -->

{%-
        include get-in-touch.liquid
        heading="We need your help&hellip;"
        subheading="Find out how you contribute to the website by joining our community and helping the Living Earth Hub grow."
        button="Get in touch"
        url="/contact/"
-%}