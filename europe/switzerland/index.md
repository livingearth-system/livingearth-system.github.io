---
layout: directory
permalink: /europe/switzerland/

title: "Switzerland"
eyebrow: "Countries"
subtitle: "Novel world-first concept that aims to capture the state and dynamics of Switzerland's landscape"
image: "/assets/img/heading/switzerland.jpg"
breadcrumb:
  - label: "Living Earth"
    url: "/"
  - label: "Switzerland"
    url: "/europe/switzerland/"
pipeline_validation_url: "https://earthtrack.aber.ac.uk/campaign/habitat_world.html"
pipeline_outreach_url:
pipeline:
  - title: "Earth Observation Data"
    subtitle: "Acquisition and processing to an analysis-ready format."
    icon: ic-data
    sub_items:
      - title: "Openly available optical and radar"
        subtitle: "Analysis-ready data via the Swiss Data Cube"
        image: "/assets/img/Future1.jpg"
        url: "https://www.swissdatacube.org/index.php/analysis-ready-data/"
        newtab: true
      - title: "Lidar"
        subtitle: "Airborne Lidar height model"
        image: "/assets/img/Future2.jpg"
        url: "https://www.swisstopo.admin.ch/en/height-model-swisssurface3d"
        newtab: true

  # To add a link to any descriptor below, just add this block under it,
  # indented to match its siblings (image:, description:) — you can add
  # more than one label/url pair under "links:" if a descriptor needs
  # multiple resources:
  #   links:
  #     - label: "Resource Name"
  #       url: "https://example.com"
  #       newtab: true

  - title: "Environmental Descriptors"
    subtitle: "Derived indices and variables ready for classification."
    icon: ic-leaf
    categories:
      - title: "Lakes"
        image: "/assets/img/switzerland/lakes.jpg"
        descriptors:
          - title: "Bathymetry"
            image: "/assets/img/wales/bathymetry.jpg"
            description: "Depth of the floor of water bodies and a measure of underwater relief."
            links:
              - label: "SwissBATHY3D"
                url: "https://www.swisstopo.admin.ch/en/height-model-swissbathy3d"
                newtab: true
      - title: "Land and Water"
        image: "/assets/img/switzerland/land-and-water.jpg"
        subcategories:
          - title: "Vegetation"
            image: "/assets/img/switzerland/vegetation.jpg"
            descriptors:
              - title: "Lifeform"
                image: "/assets/img/wales/lifeform.jpg"
                description: "Vegetation life-form (growth form) classes are defined based on structural similarities of plants. Three main life-forms are encountered in nature: woody (trees and shrubs), herbaceous (grasses and forbs) and lichens/mosses."
                links:
                  - label: "Forest Type (NFI)"
                    url: "https://www.envidat.ch/dataset/forest-type-nfi"
                    newtab: true
              - title: "Leaf type"
                image: "/assets/img/wales/leaf-type.jpg"
                description: "Distinguishes broad-leaf (primarily flowering plants, including trees), needle-leaf (needle-shaped leaves) and aphyllous (thorns, scales, green stems, branches or twigs)."
                links:
                  - label: "Dominant Leaf Type"
                    url: "https://land.copernicus.eu/en/products/high-resolution-layer-forests-and-tree-cover?tab=dominant_leaf_type"
                    newtab: true
              - title: "Phenology"
                image: "/assets/img/wales/phenology.jpg"
                description: "The study of the timing of vegetation life-cycle events, such as budburst, flowering, leaf colouring and leaf fall. Most plants are evergreen, deciduous, mixed deciduous/evergreen, or semi-evergreen/semi-deciduous, whichever is dominant."
                links:
                  - label: "Mixture Proportion"
                    url: "https://www.lfi.ch/en/maps/mixture-proportion"
                    newtab: true
              - title: "Canopy Cover"
                image: "/assets/img/wales/canopy-cover.jpg"
                description: "The percentage of the ground covered by a vertical projection of the outermost perimeter of the natural spread of plant foliage. Strongly influences water, energy and matter fluxes of land surfaces, particularly hydrological processes."
                links:
                  - label: "Tree Cover Density"
                    url: "https://land.copernicus.eu/en/products/high-resolution-layer-forests-and-tree-cover?tab=tree_cover_density"
                    newtab: true
              - title: "Canopy Height"
                image: "/assets/img/wales/canopy-height.jpg"
                description: "The height of a vegetation layer measured from the ground to the average top of the dominant strata (trees, shrubs, forbs, grasses, mosses or lichens)."
                links:
                  - label: "Vegetation Height Model (NFI)"
                    url: "https://www.envidat.ch/dataset/vegetation-height-model-nfi"
                    newtab: true
              - title: "Crop Type"
                image: "/assets/img/wales/crop-type.jpg"
                description: "The type of plants cultivated in the fields during the main growing season, for example maize, potatoes, wheat or strawberries."
                links:
                  - label: "Cropland and Grassland Map"
                    url: "https://www.envidat.ch/dataset/cropland-and-grassland-map-of-switzerland-based-on-sentinel-2-data"
                    newtab: true
              - title: "Plant Species"
                image: "/assets/img/wales/plant-species.jpg"
                description: "Categories of plants which show common attributes and are called by a common name. Important for maintaining genetic diversity and wildlife habitats, and often used as indicators of environmental change."
              - title: "Woody Biomass"
                image: "/assets/img/wales/woody-biomass.jpg"
                description: "The total mass of living plant material per woody area. Can consider both above- and below-ground components."
              - title: "Herbaceous Biomass"
                image: "/assets/img/wales/herbaceous-biomass.jpg"
                description: "The total mass of living plants that have a non-woody stem, per area."
              - title: "Foliar Chemistry"
                image: "/assets/img/wales/foliar-chemistry.jpg"
                description: "The chemical content within the leaves of the canopy — examples are chlorophyll (a and b), carotenoids and nitrogen. Changes occur in response to seasons and plant health."
              - title: "Canopy Layers"
                image: "/assets/img/wales/canopy-layers.jpg"
                description: "Vegetated areas are composed of a top canopy layer, but also have a vertical structure with different understory layers/strata — tree, shrub, field and/or ground layers."
              - title: "Non Photosynthetic Vegetation"
                image: "/assets/img/wales/non-photosynthetic-vegetation.jpg"
                description: "Vegetation cover that does not take part in photosynthesis — dormant, senescent or dead vegetation, plus the woody parts of plants. Impacts carbon, water and nutrient fluxes, fire frequency, erosion and habitat quality."
              - title: "Leaf Area Index"
                image: "/assets/img/wales/big/leaf-area-index.jpg"
                description: "The total area of one-sided leaves per ground surface area. A fundamental property of the plant canopy, playing a key role in solar radiation absorption through photosynthesis and vegetation growth."
                links:
                  - label: "Leaf Area Index (dataset 1)"
                    url: "https://geonetwork.swissdatacube.org/geonetwork/srv/eng/catalog.search#/metadata/c5bc0095-4b9d-4a50-9c17-a2e5c08c4c9c"
                    newtab: true
                  - label: "Leaf Area Index (dataset 2)"
                    url: "https://geonetwork.swissdatacube.org/geonetwork/srv/eng/catalog.search#/metadata/4f68aa2b-47a0-407d-a289-bf943e669cb9"
                    newtab: true
          - title: "Snow"
            image: "/assets/img/switzerland/snow.jpg"
            descriptors:
              - title: "Snow Extent"
                image: "/assets/img/switzerland/snow-extent.jpg"
                description: "Placeholder needs a real one line definition"
                links:
                  - label: "Snow Extent (Swiss Data Cube)"
                    url: "https://geonetwork.swissdatacube.org/geonetwork/srv/eng/catalog.search#/metadata/d98b8938-22fb-450e-ae1d-af078b6307c8"
                    newtab: true
              - title: "Snow Cover Fraction"
                image: "/assets/img/wales/snow-cover-fraction.jpg"
                description: "The fraction of land area covered by snow. Snow has a very high albedo, which cools the Earth's surface, so snow cover directly affects the Earth's energy balance."
                links:
                  - label: "Improved Landsat-based snow cover mapping (Poussin et al. 2023)"
                    url: "https://doi.org/10.1016/j.srs.2023.100078"
                    newtab: true
                    type: publication
              - title: "Snow Water Equivalent"
                image: "/assets/img/wales/snow-water-equivalent.jpg"
                description: "The amount of water contained within the snowpack — the depth of water that would theoretically result from instantaneous snowpack melting. Correlates with snowpack depth and density."
              - title: "Snow Depth"
                image: "/assets/img/wales/snow-depth.jpg"
                description: "The total depth of the snowpack, used to estimate the amount of snow covering the ground. Linked with snow water equivalent for water stock monitoring and flood forecasting."
          - title: "Urban"
            image: "/assets/img/switzerland/urban.jpg"
            descriptors:
              - title: "Artificial Materials"
                image: "/assets/img/wales/artificial-materials.jpg"
                description: "Urban areas are characterised by the substitution of natural covers with artificial, mostly impervious, covers. These affect the water cycle, carbon cycle, energy balance and biodiversity — for example, bitumen surfaces block water infiltration and groundwater recharge."
              - title: "Urban Vegetation"
                image: "/assets/img/wales/urban-vegetation.jpg"
                description: "Vegetation in cities, classified separately from other vegetation as it is surrounded by impervious surfaces that impact water, energy and material fluxes. Provides ecosystem services such as pollutant and fine-particulate filtering."
          - title: "Water"
            image: "/assets/img/switzerland/water.jpg"
            descriptors:
              - title: "Water Extent"
                image: "/assets/img/wales/water-extent.jpg"
                description: "The location of the boundary between a water body and the adjoining land surface, or a surface covered by water. Note that water can exist as snow or ice."
                links:
                  - label: "Water Extent (Swiss Data Cube)"
                    url: "https://geonetwork.swissdatacube.org/geonetwork/srv/eng/catalog.search#/metadata/1008ba03-a57d-42d0-b7d7-3a861d91c4be"
                    newtab: true
              - title: "Water Depth"
                image: "/assets/img/wales/water-depth.jpg"
                description: "The underwater depth of the floor of water bodies such as lakes and rivers. Affects the amount of sunlight reaching the floor, which in turn affects plant and fauna life."
              - title: "Water Turbidity"
                image: "/assets/img/wales/water-turbidity.jpg"
                description: "The measure of water transparency, used to assess water quality. Drinking water should have a turbidity of less than 4 NTU (WHO). Also affects photosynthetic activity and oxygen concentration in water ecosystems."
              - title: "Water Seasonality"
                image: "/assets/img/wales/water-seasonality.jpg"
                description: "The persistence of water at the surface, which depends on precipitation rates, soil permeability and geological formations. Important for agriculture, water supply and biodiversity."
              - title: "Cyanobacteria"
                image: "/assets/img/wales/cyanobacteria.jpg"
                description: "Free-living photosynthetic bacteria, more commonly known as blue-green algae. Single-celled and photosynthetic, living freely in the water column or as mats attached to sediment, rocks and plants — an important component of freshwater ecosystems."
              - title: "Algae Biomass"
                image: "/assets/img/wales/algae-biomass.jpg"
                description: "Chlorophyll a is ubiquitous in phytoplankton and higher plants and a proxy for phytoplankton biomass. Cyanobacteria are also considered phytoplankton as they contain chlorophyll a, but they are not algae."
              - title: "Macroalgae"
                image: "/assets/img/wales/macroalgae.jpg"
                description: "Large, multicellular marine algae (seaweed). See the Big Seaweed Search project for citizen-science recording: bigseaweedsearch.org/explore"
          - title: "Soil"
            image: "/assets/img/switzerland/soil.jpg"
            descriptors:
              - title: "Soil Moisture"
                image: "/assets/img/wales/soil-moisture.jpg"
                description: "The volume of water contained within soils. Soil moisture can influence levels of vegetation water stress and flood risk."
                links:
                  - label: "Soil Moisture (Swiss Data Cube)"
                    url: "https://geonetwork.swissdatacube.org/geonetwork/srv/eng/catalog.search#/metadata/6040f1ec-e4b8-4080-811c-a1e4590540ee"
                    newtab: true
              - title: "Soil Acidity"
                image: "/assets/img/wales/soil-acidity.jpg"
                description: "Soil acidity is expressed using the pH scale. Values lower than 7 indicate acidic soils and values higher than 7 indicate alkaline soils. Influences species abundance, distribution and productivity."
              - title: "Soil Texture"
                image: "/assets/img/wales/soil-texture.jpg"
                description: "Soil can be classified into textural classes including loams, clays and sands. Textural composition influences water-holding capacity and vegetation stress levels."
          - title: "Energy"
            image: "/assets/img/switzerland/energy.jpg"
            descriptors:
              - title: "Albedo"
                image: "/assets/img/wales/albedo.jpg"
                description: "The ratio of total upwelling to total downwelling solar radiation at the surface, representing the energy balance at the soil-vegetation-atmosphere interface. Ranges from 0 to 1 — a surface with an albedo of 1 (e.g. snow) reflects back all downwelling radiation."
              - title: "Land Surface Temperature"
                image: "/assets/img/wales/land-surface-temperature.jpg"
                description: "The radiative skin temperature of the land — a mixture of vegetation and soil temperatures. Plays an important role in the physics of land surfaces, impacting energy and water exchange with the atmosphere."
          - title: "Terrain"
            image: "/assets/img/switzerland/terrain.jpg"
            descriptors:
              - title: "DEM"
                image: "/assets/img/wales/dem.jpg"
                description: "Digital Terrain Models (DTMs) represent the elevation of bare terrain, whilst Digital Surface Models (DSMs) represent the upper height of all objects on the land surface."
                links:
                  - label: "SwissALTI3D"
                    url: "https://www.swisstopo.admin.ch/en/height-model-swissalti3d"
                    newtab: true
                  - label: "DHM25"
                    url: "https://www.swisstopo.admin.ch/en/height-model-dhm25"
                    newtab: true
              - title: "Slope"
                image: "/assets/img/wales/slope.jpg"
                description: "The steepness or degree of inclination of the terrain relative to the plane surface. Influences wind speed and direction, and hydrological flows."
              - title: "Aspect"
                image: "/assets/img/wales/aspect.jpg"
                description: "The orientation of a slope, measured clockwise from north. Along with slope, aspect regulates land surface processes including plant productivity, climate and hydrology."
      - title: "Atmosphere"
        image: "/assets/img/switzerland/atmosphere.jpg"
        descriptors:
          - title: "Air Pollutants"
            image: "/assets/img/wales/air-polutants.jpg"
            description: "Air pollutants include gases such as nitrous oxide, ammonia, sulfur dioxide and particulate matter. Their concentrations inform about air quality, which influences plant and animal health."
          - title: "Climate Variables"
            image: "/assets/img/wales/variants.jpg"
            description: "Climate variables include solar radiation, rainfall, air temperature and humidity, pressure, and wind speed and direction. Long-term trends of these variables indicate past climatic conditions."

  - title: "Classification of Land Cover & Habitats"
    subtitle: "Historical and near real-time classification of the landscape."
    icon: ic-map
    url: "https://earthtrack.aber.ac.uk/lccs/world.html"
    newtab: true

  - title: "Evidence-Based Change"
    subtitle: "Tracking change over time to support decision-making."
    icon: ic-change
    url: "https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.16346"
    newtab: true

  - title: "Future Landscapes"
    subtitle: "Modelling scenarios for policy and land management."
    icon: ic-future
    sub_items:
      - title: "Reimagining"
        subtitle: "What would we like to see?"
        image: "/assets/img/Future2.jpg"
        url: "#"
      - title: "Harmonising"
        subtitle: "How can we agree?"
        image: "/assets/img/Future2.jpg"
        url: "#"
      - title: "Realising"
        subtitle: "How can we be certain?"
        image: "/assets/img/Future3.jpg"
        url: "#"
      - title: "Facilitating"
        subtitle: "How can we track progress?"
        image: "/assets/img/Future4.jpg"
        url: "#"
      - title: "Valuing"
        subtitle: "How can we value our futures?"
        image: "/assets/img/Future5.jpg"
        url: "#"
      - title: "Assessing Risk"
        subtitle: "How can we protect our assets?"
        image: "/assets/img/Future6.jpg"
        url: "#"

  - title: "Explore and Delivery"
    subtitle: "Policy, economy, environment and society."
    icon: ic-deliver
    links:
      - label: "View Insights"
        url: "#"
      - label: "Earthtrack App"
        url: "https://earthtrack.aber.ac.uk/campaign/habitat_world.html"
        newtab: true
      - label: "Analyse the Data"
        url: "https://www.swissdatacube.org/index.php/platform/"
        newtab: true
      - label: "Stream the Data"
        url: "https://geonetwork.swissdatacube.org/"
        newtab: true
---

## Past & Present Landscapes

From knowledge of the past, we can inform the future but we need the tools to capture how we have historically shaped the Swiss landscape of today. Earth observation data from satellites and aircraft give us a unique insight and so we have worked to develop a series of globally-applicable tools that allow us to describe, map and monitor land covers, habitats and ecosystems.

{% include country-pipeline.liquid list=page.pipeline %}
