let wmsOptions = {
	crs: L.CRS.EPSG4326,
	layers: "",
	format: "image/png",
	transparent: "true",
	version: "1.3.0",
	attribution: ""
};

let basemapOnMap = "none";

class LeafletMap {
	constructor() {
		// .setView([52.1307, -3.7837], 8)
		this.map = L.map('map').setView([52.1307, -3.7837], 6);
		this.initData()
		this.initLayers();
		this.initControls();
		this.onchangeSelectAYear();
	}

	async initData() {
        try {
            this.listUrlData = await this.loadData('listUrl');
            this.baseMapData = await this.loadData('basemap');
            this.additionalData = await this.loadData('additional');
            this.defineColorLegend = await this.loadData('legend_define-color');
            this.moreInfo = await this.loadData('more-info');
        } catch (error) {
            console.error("Error loading data: ", error);
        }
    }

	initLayers() {
		this.osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 25,
			attribution: '© OpenStreetMap contributors',
			layerDefault: true
		});

		this.googleSatLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
			attribution: 'Google Maps Satellite',
			maxZoom: 25,
			layerDefault: true
		}).addTo(this.map);

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

	onchangeSelectAYear() {
		const selectElement = document.getElementById('select-a-year');
		selectElement.addEventListener('change', (event) => {
			this.removelayers()
			this.year = event.target.value
			this.filterValueOfTheYear(event.target.value)
		});
	}

	removelayers() {
		this.map.eachLayer((layer) => {
			if (!layer.options.layerDefault) {
				layer.remove()
			}
		});
	}

	filterValueOfTheYear(year) {
		this.createListOption('.basemap-listoption', this.baseMapData[year], 'radio')
		this.createListOption('.additionallayer-listoption', this.additionalData[year], 'checkbox')
		this.currentUrl = this.listUrlData[year]
	}

	createListOption(parentNodeClass, data, type) {
		const parentNode = document.querySelector(parentNodeClass)
		parentNode.innerHTML = '';
		const list = []
		data.forEach((item, index) => {
			let content = `<div class="option_item">
				<div>
					<input id="${item.layer}" value="${item.layer}" type="${type}" name="${item.type === 'checkbox' ? 'checkbox' : 'basemaps'}"/>
					<label for="${item.layer}">${item.title}</label>
				</div>
				<p class="icon-atfer-selected-year">
					${item.download ? `<a target="_blank" href="https://earthtrack.aber.ac.uk/download/map/${this.year}/${this.getUrlFile(item.layer)}"><img src="/assets/icon/download.svg"></a>` : ''}
					<span class="openpopup-${type}" data-title="${item.title}" data-layer="${item.layer}"><img src="/assets/icon/questionmark.svg"></span>
					<span class="dropdown-${type}" data-index="${type + index}" style="width:15px"> <img width="100%" src="/assets/img/downarrow.svg"></span>
			  	</p>
			</div>
			<div class="info" data-index="${type + index}">
				${this.getLegendInfo(item.layer)}
			</div>`
			list.push(content);
		})
		parentNode.innerHTML = list.join('')
		this.attachClickHandlers(type)
	}

	getUrlFile(layer) {
		const attribute = layer.split("_")[1]
		const listFiles = {
			l3: { file: `level3_${this.year}_cut.tif` },
			l3Plus: { file: `level3_plus_${this.year}_cut.tif` },
			cc: { file: `cc_${this.year}_cut.tif` },
			ccc: { file: `L4_canopyco_Wales_${this.year}_cut.tif` },
			lifeform: { file: `lifeform_${this.year}_cut.tif` },
			leafpheno: { file: `leaftype_phenology_${this.year}.tif` },
			com: { file: `Wales_SemiNatSps_Community_${this.year}_final_vegSpsoutWoodyArtifCulti_cut.tif` },
			waterP: { file: `waterP_${this.year}_cut.tif` },
			waterPC: { file: `L4_water_persist_n_seas_${this.year}_cut.tif` },
			waterPC3: { file: `L4_water_persist_n_seas_${this.year}_cut.tif` },
			biom: { file: `biomass_10m_${this.year}_reclass_cut.tif` },
			habd: { file: `habitat_detailed_Wales_${this.year}_cut.tif` },
			habb: { file: `habitat_broad_Wales_${this.year}_cut.tif` }
		};
		return listFiles[attribute].file
	}

	attachClickHandlers(type) {
		this.toggleLegendInfo(type)
		this.openPopup(type)
		this.callService(type)
	}

	callService(type) {
		const inputs = document.querySelectorAll(`input[type=${type}]`);
		inputs.forEach(input => {
			input.addEventListener('change', (event) => {
				if (input.checked && !this.checkContainLayer(event.target.value)) {
					wmsOptions.layers = event.target.value
					L.tileLayer.wms(this.currentUrl, wmsOptions).addTo(this.map);
				}
				else if (!input.checked) {
					this.removelayerCheckbox(event.target.value);
				}
			})
		})
	}

	removelayerCheckbox(layers) {
		this.map.eachLayer((layer) => {
			if (layer.options && layer.options.layers === layers) {
				layer.remove()
				return
			}
		});
	}

	checkContainLayer(layers) {
		let found = false;
		this.map.eachLayer((layer) => {
			if (layer.options && layer.options.layers === layers) {
				found = true;
			}
		});
		return found;
	}
	
	openPopup(type) {
		const button = document.querySelectorAll(`.openpopup-${type}`);
		const popup = document.querySelector('.popup_more-info')
		button.forEach(toggle => {
			toggle.addEventListener('click', () => {
				const layer = toggle.getAttribute('data-layer');
				const title = toggle.getAttribute('data-title');
				popup.classList.toggle('open')
				popup.innerHTML = `<div style="text-align:center">${title}</div> <button class="close">X</button>` + this.addInfoHtml(this.getInfo(layer, this.moreInfo), layer)
			});
		});
		this.getButtonClose(popup)
	}

	getButtonClose(popup) {
		const overlay = document.querySelector('.over-lay')
		// const close = document.querySelector('.close')
		this.closePopup(popup, overlay)
		// this.closePopup(popup, close)
	}

	closePopup(popup, el) {
		el.addEventListener('click', () => {
			popup.classList.remove('open')
		})
	}

	getInfo(layer, data) {
		const attribute = layer.split("_")[1]
		return data[attribute]
	}

	addInfoHtml(data, layer) {
		return `<div class="item-info">
			<span class="title">The map</span>
			<p class="content">${data.map}</p>
		</div>
		<div class="item-info">
			<span class="title">The product</span>
			<p class="content">${data.subject}</p>
		</div>
		<div class="item-info">
			<span class="title">Spatial resolution</span>
			<p class="content">${data.res}</p>
		</div>
		<div class="item-info">
			<span class="title">The classes</span>
			<div class="content">${this.getLegendInfo(layer)}</div>
		</div>
		<div class="item-info">
			<span class="title">More info</span>
			<p class="content">More information on the official website(s): <a href="${data.url ? data.url : data.url_lw}">here</a></p>
		</div>
		`
	}

	toggleLegendInfo(type) {
		const dropdownToggles = document.querySelectorAll(`.dropdown-${type}`);
		dropdownToggles.forEach(toggle => {
			toggle.addEventListener('click', () => {
				const index = toggle.getAttribute('data-index');
				const infoDiv = document.querySelector(`.info[data-index="${index}"]`);
				infoDiv.classList.toggle('open')
			});
		});
	}

	getLegendInfo(layer) {
		const attribute = layer.split("_")[1]
		return this.createListElColor(this.defineColorLegend[attribute]).join('')
	}

	createListElColor(arr) {
		const list = []
		arr.forEach(item => {
			let content = `<div style="display:flex; align-items:center; margin-bottom:8px"> 
				<span class="dot" style="display:block;width:15px;height:15px;border-radius:50%;background-color:rgb(${item.r}, ${item.g}, ${item.b})"></span> 
				<p style="margin-bottom:0px; margin-left:8px">${item.title}</p> 
			</div>`
			list.push(content)
		})
		return list
	}

	createLegend(map) {
		const buttonlayer = L.DomUtil.create('div', 'button-layer_map');
		const childDiv = document.createElement('div');
		buttonlayer.innerHTML = '<img src="../assets/img/layer.png" style="width: 30px; height: 30px;">';
		this.addOnButton(childDiv);
		buttonlayer.appendChild(childDiv);
		buttonlayer.onclick = () => {
			if (!buttonlayer.classList.contains("active")) {
				buttonlayer.classList.add('active');
			}
		}
		this.clickOutSite(buttonlayer)
		return buttonlayer;
	}

	clickOutSite(el) {
		document.addEventListener('click', (event) => {
			if (!el.contains(event.target)) {
				el.classList.remove('active', 'open');
			}
		});
	}

	addOnButton(el) {
		el.classList.add('leaflet-control-custom');
		this.buttons = [];
		this.createButton(el, this.osmLayer, 'OpenStreetMap', 'https://earthtrack.aber.ac.uk/img/basemaps/osm.png', true);
		this.createButton(el, this.googleSatLayer, 'Google Map Sat', 'https://earthtrack.aber.ac.uk/img/basemaps/gmSat.png');
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

	async loadData(jsonFileName) {
		try {
			const response = await fetch(`/assets/json/interactive-map/${jsonFileName}.json`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return await response.json();
		} catch (error) {
			console.error("Failed to load data:", error);
			alert("This feature is coming soon.");
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const leafletMap = new LeafletMap();
});