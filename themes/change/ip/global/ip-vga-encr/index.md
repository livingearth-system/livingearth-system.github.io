---
layout: page

title: "Vegetation gain (amount) encroachment"

# NOT INCLUDED: header: "Vegetation gain (amount) encroachment"
headerTop: "vegetation gain (amount) encroachment"
title: "Vegetation gain (amount) encroachment"
subtitle: "Expansion of whole plant communities (native or exotic) into an area as a consequence of an increase in woody plant density or extent so that the natural equilibrium of woody plant layer (trees and shrubs) and herbaceous (grass and forb) layer densities is shifted towards woody species. "
background: "#234665"
image: "/assets/img/env_descriptors/envdes-png.png"
nobuttons: true
Nosvg: true
---

{%-
include ip-vga-encr.liquid
header="<strong>EVIDENCE FOR IMPACTS</strong> <br>  In the case of this impact, sources of evidence for a gain in vegetation amount are:.

<br/><strong>From the data cube, time-series of the following environmental descriptors can be used to evidence a gain in vegetation amount </strong>
<br/>*    Land cover (Level 3).
<br/>*    Lifeform (categories of woody and herbaceous)
<br/>*    Canopy cover (%) 
<br/>*    Canopy height (m)
<br/>*    Woody above ground biomass (Mg ha-1)
<br/>*    Green (photosynthetic) fraction (%)

<br><br><strong>PRESSURE DATASETS</strong>
<br> Datasets that might be used to indicate the pressure are:

<br/>* Age of forest clearance
<br/>* Period of active land use.  
<br/>* Proximity to forest edge (m, based on pixel resolution)


<br><br><strong>CASE STUDY</strong>
<br><ul> The case study is the Amazon Basin where pastures used actively for extended periods but then abandonmed are encroached upon from refugia of plant communities (e.g., Vismia species).  The net change in cover from herbaceous to woody in the lifform layer with a corresponding increase in above ground biomnass that is considered significnat (based on the Mann-Kendall and Senn slope) </ul>

<br><strong>JUPYTER NOTEBOOK</strong>

<br><ul> The notebook identifies the environmental descriptors required to estabhlish whether there has been a gain in the amount of vegetation, with this representing a modificaiton of the land cover.  Each of these required layers is loaded in from the data cube and displayed.  The Evidence-Based Change Framework is then implemented  </ul> 

"
-%}
