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
header="<strong>EVIDENCE FOR IMPACTS</strong>.

<br/><strong>From the data cube, time-series of the following environmental descriptors can be used to evidence a gain in vegetation amount </strong>
<br><br/>*    Land cover (Level 3).
<br/>*    Lifeform (categories of woody and herbaceous)
<br/>*    Canopy cover (%); 
<br/>*    Green (photosynthetic) fraction (%)

<br/><br/><strong>Other environmental descriptors were obtained from external layers</strong>.
<br/>*    Canopy height (m)
<br/>*    Woody above ground biomass (Mg ha-1); ESA CCI Biomass

<br><br><strong>EVIDENCE FOR PRESSURES</strong>
<br> <strong>Datasets that might be used to indicate the pressure are:</strong>
<br><br/>* Age of forest clearance, generated from time-series comparison of land cover maps (data cube)
<br/>* Period of active land useg, generated from time-series comparison of land cover maps (data cube).  
<br/>* Proximity to forest edge (m( based on pixel resolution and generated through proximity analyses.

<br><br><strong>CASE STUDY</strong>
<br><br>The case study is the Amazon Basin where pastures used actively for extended periods but then abandoned are encroached upon from refugia of plant communities (e.g., Vismia species along the margins of cattle pastures).  A net change in cover from herbaceous to woody in the lifeform layer with a corresponding increase in above ground biomnass is indicated.

<br><br><strong>TRENDS AND UNCERTAINTIES</strong>
<br>The corresponding increase in above ground biomnass is considered significant (based on the Mann-Kendall and Senn slope statistics).

<br><br><strong>COMPARISONS WITH DECONSTRUCTED LAND COVER DATA </strong>
<br>For the same area, the equivalent evidence-based change mapping was applied to land cover maps deconstructed from the ESA CCI 300 m Land Cover product and the Copernicus 100 m Land Cover product and reconstructed according to the FAO LCCS (to Level 3 and with lifeform). 

<br><br><strong>JUPYTER NOTEBOOK</strong>
<br>The notebook identifies the environmental descriptors required to estabhlish whether there has been a gain in the amount of vegetation, with this representing a modificaiton of the land cover.  Each of these required layers is loaded in from the data cube and displayed.  The Evidence-Based Change Framework is then implemented.

"
-%}
