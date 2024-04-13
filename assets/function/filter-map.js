// Define type earthtrack
const earthtrack = {
    "Natural and semi natural aquatic vegetation": "#76C76C",
    "Inland waterbodies snow and ice": "#00BFFF",
    "Natural and semi natural terrestrial vegetation": "#347820",
    "Artificial surfaces and ass. areas": "#FF6347",
    "Cultivated and managed land": "#D4E157",
    "Other": "#808080",
    "Bare areas": "#A52A2A",
    "Artificial waterbodies": "#4682B4",
    "Cultivated aquatic areas": "#20B2AA"
}

const earthtrackInverted = {
    "#347820": "Natural and semi natural terrestrial vegetation",
    "#76C76C": "Natural and semi natural aquatic vegetation",
    "#20B2AA": "Cultivated aquatic areas",
    "#FF6347": "Artificial surfaces and associated areas",
    "#A52A2A": "Bare areas",
    "#4682B4": "Artificial waterbodies",
    "#00BFFF": "Inland waterbodies snow and ice",
    "#D4E157": "Cultivated and managed land",
    "#FFFFFF": "Cultivated natural areas",   
    "#808080": "Other",
};

//Define colors habitat
const habitatColors = {
    "heathland": "#8B4513",
    "woodlandScrub": "#228B22",
    "herbFern": "#98FB98",
    "grasslandMarsh": "#6B8E23",
    "exposureArtificial": "#A9A9A9",
    "mire": "#483D8B",
    "miscellaneous": "#FFD700",
    "coastland": "#4682B4",
    "swamp": "#006400",
    "openWater": "#1E90FF"
};

const habitatInverted = {
    "#4682B4": "Coastland",
    "#A9A9A9": "Exposure and Water (Artificial)",
    "#808080": "Exposure and Water (Natural)",
    "#6B8E23": "Grassland and Marsh",
    "#8B4513": "Heathland",
    "#98FB98": "Tall Herb and Fern",
    "#483D8B": "Mire",
    "#FFD700": "Miscellaneous",
    "#1E90FF": "Open Water",
    "#006400": "Swamp",
    "#228B22": "Woodl and Scrub",   
};

// Define type change
const changeColor = {
    'vegetation': '#76C76C',
    'urban': '#FFD700',
    'waterIceSnow': '#00BFFF',
    'bareNaturalSurfaces': '#A52A2A',
    'agriculture': '#FF6347'
};

const changeInverted = {
    '#FF6347': 'Agriculture',
    '#76C76C': 'Vegetation',
    '#A52A2A': 'Bare Natural Surfaces',
    '#FFD700': 'Human-made',
    '#00BFFF': 'Water,Ice and Snow'    
};

// Define colors fireColors
const fireColors = {
    "pre-fire": "#FFA500",  
    "post-fire": "#FF0000",
    "active-fire": "#FF4500" 
};

const fireInverted = {
    "#FFA500": "Pre fire",
    "#FF4500": "Active fire",
    "#FF0000": "Post fire",
};

const titleClass = [
    {'earthtrack': 'Level 3 FAO LCCS class'},
    {'habitat_pts': 'Habitat Class'},
    {'change_pts': 'Impact Class'},
    {'fire_pts': 'Fire state when recorded'}
]

class LeafletMap {
    constructor() {
        this.map = L.map('map').setView([0, 0], 2); // Initial focus
        this.initLayers();
        this.initControls();
        this.attachEvents();
        this.setupToolButtonEvents();
        this.markers = [];
        this.currentDataset = ''; // Default dataset
        this.initCountryFromURL(); // Initialize country selection from URL
    }

    initLayers() {
        this.osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        this.googleSatLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            attribution: 'Google Maps Satellite'
        });

        this.baseMaps = {
            "OpenStreetMap": this.osmLayer,
            "Google Satellite": this.googleSatLayer
        };
    }

    initControls() {
        const legend = L.control({ position: 'topright' });
        legend.onAdd = this.createLegend.bind(this);
        legend.addTo(this.map);
    }

    createLegend(map) {
        const div = L.DomUtil.create('div', 'leaflet-control-custom');
        div.innerHTML = '<div class="marker-info d-flex flex-column" style="padding:10px">' +
            `<div class="legend-item">
			</div>`;
        
        this.buttons = [];
        this.createButton(div, this.osmLayer, 'OpenStreetMap', 'https://earthtrack.aber.ac.uk/img/basemaps/osm.png', true);
        this.createButton(div, this.googleSatLayer, 'Google Map Sat', 'https://earthtrack.aber.ac.uk/img/basemaps/gmSat.png');

        return div;
    }

    updateLegend() {
        const title = titleClass.find(item => Object.keys(item)[0] === this.currentDataset);
        let infoDetail = ''
        if (this.currentDataset === 'earthtrack') {
            infoDetail = earthtrackInverted
        } else if (this.currentDataset === 'habitat_pts'){
            infoDetail = habitatInverted
            console.log(infoDetail)
        } if (this.currentDataset === 'change_pts') {
            infoDetail = changeInverted
        } else if (this.currentDataset === 'fire_pts') {
            infoDetail = fireInverted
        }
        const legendDiv = document.querySelector('.marker-info');
        let legendHTML = `<div class="d-flex flex-column" style="padding:10px"><h5>${title[this.currentDataset]}</h5>`;

        // Iterate through each entry in the earthtrackInverted object
        for (const [color, text] of Object.entries(infoDetail)) {
            legendHTML += `
                <div class="legend-item">
                    <div class="legend-color" style="background-color:${color};"></div>
                    <div class="legend-text">${text}</div>
                </div>
            `;
        }

        legendHTML += '</div>';
        legendDiv.innerHTML = legendHTML;
    }

    setupToolButtonEvents() {
        document.querySelectorAll('.tool-button-banner').forEach(button => {
            button.addEventListener('click', (event) => {
                document.querySelectorAll('.tool-button-banner.active').forEach(activeButton => {
                    activeButton.classList.remove('active');
                });
                button.classList.add('active');
                const value = button.getAttribute('data-value');
                this.currentDataset = value; // Update the current dataset
                this.updateLegend(); // Refresh the legend
                this.loadData(value);
            });
        });
    }

    createButton(div, layer, name, imageUrl, active = false) {
        const button = L.DomUtil.create('div', `legend-base ${active ? 'active' : ''}`, div);
        button.innerHTML = `<img src="${imageUrl}" style="width: 30px; height: 30px;"><span>${name}</span>`;
        button.onclick = () => {
            Object.values(this.baseMaps).forEach(baseLayer => {
                if (this.map.hasLayer(baseLayer)) {
                    this.map.removeLayer(baseLayer);
                }
            });
            this.map.addLayer(layer);
            this.buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        };
        this.buttons.push(button);
        return button;
    }

    attachEvents() {
        const selector = document.getElementById('choose_country');
        selector && selector.addEventListener('change', this.handleCountryChange.bind(this));
    }

     initCountryFromURL() {
        const params = new URLSearchParams(window.location.search);
        const country = params.get('country');
        if (country) {
            const selector = document.getElementById('choose_country');
            if (selector) {
                selector.value = country;
            }
            this.handleCountryChange({ target: { value: country } });
        }
    }

    handleCountryChange(event, isDirect = false) {
        const countryName = event.target.value;
        const locations = {
            'Earth': [[0, 0], 2],
            'Wales': [[51.4816, -3.1791], 4],
            'Australia': [[-25.2744, 133.7751], 4]
        };
        const selectedLocation = event.target.value;
        const location = locations[selectedLocation];
        if (location) {
            this.changeMapView(location[0], location[1]);
            if (!isDirect) {
                window.history.pushState({}, '', `?country=${countryName}`);
            }
        }
    }

    changeMapView(coords, zoom) {
        this.map.setView(new L.LatLng(coords[0], coords[1]), zoom);
    }

	async loadData(jsonFileName) {
        try {
            const response = await fetch(`/assets/json/${jsonFileName}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            this.addFeatures(data.features, jsonFileName);
        } catch (error) {
            console.error("Failed to load data:", error);
            alert("This feature is coming soon.");
        }
    }

    addFeatures(features, jsonFileName) {
        // Xóa các marker hiện tại
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];  // Xóa mảng các marker
        
        features.forEach(feature => {
            const { geometry, properties } = feature;
            const { coordinates } = geometry;
            const { legend, l3classif } = properties;

            // Assuming legendColor maps directly from the 'legend' property
            const getHandle = jsonFileName !== 'earthtrack' ? legend : l3classif
            const legendColor = this.getLegendColor(getHandle, jsonFileName);

            const marker = L.circleMarker([coordinates[1], coordinates[0]], {
                color: '#000000',
                fillColor: legendColor,
                fillOpacity: 0.1,
                radius: 8,
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
            }).addTo(this.map);

            marker.bindPopup(this.createPopupContent(feature));
            marker.on('popupopen', () => {
                this.attachImageEventListeners();
            });
            this.markers.push(marker);  // Lưu marker vào mảng
        });
    }

    attachImageEventListeners() {
        document.querySelectorAll('.image-container').forEach(container => {
            container.addEventListener('click', () => {
                const imageUrl = container.getAttribute('data-url');
                this.openImageModal(imageUrl);
            });
        });
    }

	getLegendColor(handle, jsonFileName) {
        const colorDefault = '#808080';
        if (jsonFileName === 'earthtrack') {
            return earthtrack[handle] || colorDefault;
        } else if (jsonFileName === 'habitat_pts'){
            return habitatColors[handle] || colorDefault;
        } else if (jsonFileName === 'change_pts') {
            return changeColor[handle] || colorDefault;
        } else if (jsonFileName === 'fire_pts') {
            return fireColors[handle] || colorDefault;
        }
    }

	// Function to handle the creation of the popup content
    createPopupContent(feature) {
		const { images, impact, when, _CREATION_DATE, HabitatTypes, l4classif, persitence_text, waterseasonality_text, fireTime } = feature.properties;
        let content = '';
        content += `<div class="d-flex flex-row justify-content-between w-100">`;
        this.currentDataset === 'earthtrack' ? content += `<p><strong>LCCS point:</strong>
        ${l4classif ? l4classif : ''} ${persitence_text ? persitence_text : ''} ${waterseasonality_text ? waterseasonality_text : ''}</p>` : '';

		impact? content += `<p><strong>LCCS point:</strong>${impact}</p>` : '';
        HabitatTypes ? content += `<p><strong>LCCS point:</strong>${HabitatTypes}</p>` : '';

        content += `<p><span>Recorded the</span> ${when ? when : fireTime ? fireTime : _CREATION_DATE}</p>`;
        content += `</div>`;
        // Handling multiple images
        content += `<div class="d-flex flex-row flex-wrap justify-content-between w-100">`;
		if (images) {
			Object.keys(images).forEach(key => {
				const imageUrl = images[key];
				content +=`<div class="image-container" data-url="${imageUrl}">
                <span>${key}:</span>
                <img src="${imageUrl}" alt="${key}" style="max-width:90%;max-height:100px;margin: auto;border: solid 1px black"></div>`;
			});
		}
        content += `</div>`; // Close the inner flex-row div
		return content;
    }

    openImageModal(imageUrl) {
        let modal = document.getElementById('imageModal');
        if (modal) {
            // Set the image and show the modal
            modal.querySelector('.modal-content img').src = imageUrl;
            modal.style.display = 'block';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const leafletMap = new LeafletMap();
});