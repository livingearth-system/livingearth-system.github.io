---
layout: page
permalink: /themes/
title: Themes
---

{%-
        include title.liquid
        title="Themes"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
        button1="Contact Us" button1_url="/contact/"
        button2="Contribute" button2_url="/contribute/"
        image="/assets/img/wild.png"
-%}

{%-
        include boxes.liquid
        data="themes"
-%}

{%-
        include get-in-touch.liquid
        heading="We need your help&hellip;"
        subheading="Find out how you contribute to the website by joining our community and helping the Living Earth Hub grow."
        button="Get in touch"
        url="/contact/"
-%}