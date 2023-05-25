---
layout: page
permalink: /europe/wales/monmouthshire/upper-red-house/

title: Upper Red House
heading: Upper Red House
titleclass: heading-white
nocontact: true
nobuttons: true

### Login
login:
  class: hidden
  session: "7469be20-bb74-4ee2-8cdd-9ad719b990c4"
  content: |
    ## Upper Red House Farm Report
    __Upper Red House farm is located in Monmouthshire and is largely producing dairy. The farm is comprised primarily of pasture with a proportion containing rich broadleaved woodland. Areas of wetland also provide valuable habitat for biodiversity.__

    This brochure extracts information on your landholding for different years from the newly developed Welsh Data Cube (WDC), which houses all satellite data acquired over Wales since 2018 and derived products with these including land cover, broad habitats and water/moisture persistence.
  image:
    src: "/assets/img/login.jpg"
  downloads:
    - title: 2022
      url: "https://livingwales.aber.ac.uk/ard/farmers/Brochure_UpperRedHouse_2022.pdf"
    - title: 2021
      url: "https://livingwales.aber.ac.uk/ard/farmers/Brochure_UpperRedHouse_2021.pdf"
    - title: 2020
      url: "https://livingwales.aber.ac.uk/ard/farmers/Brochure_UpperRedHouse_2020.pdf"

### Your Maps
boxes:
  - title: "Land Cover"
    subtitle: "Land Cover is the physical and biological cover of the land surface and includes vegetation (managed or semi-natural), water and bare surfaces. The land cover maps generated through Living Land Management use the legends of the United Nation's Food and Agriculture Organisation (FAO) Land Cover Classification System (LCCS)."
    image: "/assets/img/login-3.jpg"
  - title: "Broad Habitats"
    subtitle: "Habitats represent the natural environments in which individual or groups of plant or animal species lives. The habitat maps are generated from satellite data and are based on Wales' Phase 1 Habitat Taxonomy."
    image: "/assets/img/login-2.jpg"
  - title: "Water Persistence"
    subtitle: "The water/moisture persistence is obtained from time-series of radar data that are acquired almost every day over Wales and indicate relative frequency of wet conditions across the landscape."
    image: "/assets/img/login-1.jpg"

---

{%- include login.liquid -%}

{%- include boxes.liquid heading="What your report will show" local="true" data="boxes" -%}
