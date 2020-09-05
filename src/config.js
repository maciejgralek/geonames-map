export const config = {
	url: "https://txdata.usgs.gov/search_api/2.1/services.ashx/search?",
	external: {
		google: {
			url: "https://www.google.com/maps/@?api=1&map_action=map&",
			zoom: "12",
		},
		NA: {
			url: "https://naturalatlas.com/map/@",
		},
	},
	debounceInputTime: 300,
	saveTime: 5000,
	sidebarWidth: 350,
	sidebarExpandedWidth: 420,
	defaultMapView: {
		center: [41.5131, -103.4160],
		zoom: 5,
	},
	maps: {
		USGS: {
			name: "USGS Topo",
			url: "https://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer",
			options: {
				maxZoom: 16,
			},
			vector: false,
			esri: true,
			esriBasemap: false,
		},
		USA_Topo_Maps: {
			name: "ArcGIS USA Topo Maps",
			url: "https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer",
			options: {
				maxZoom: 16,
			},
			attribution: true,
			vector: false,
			esri: true,
			esriBasemap: false,
		},
		World_Imagery: {
			name: "ArcGIS World Imagery",
			url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
			options: {
				maxZoom: 16,
			},
			attribution: true,
			vector: false,
			esri: true,
			esriBasemap: false,
		},
		World_Street_Map: {
			name: "ArcGIS World Street Map",
			url: "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
			attribution: true,
			options: {
				maxZoom: 16,
			},
			vector: false,
			esri: true,
			esriBasemap: false,
		},
		Open_Street_Map_Mapnik: {
			name: "Open Street Map (Mapnik)",
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			options: {
				maxZoom: 19,
			},
			vector: false,
			esri: false,
			esriBasemap: false,
		},
		Open_Street_Map_DE: {
			name: "Open Street Map (DE)",
			url: "https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",
			options: {
				maxZoom: 18,
			},
			vector: false,
			esri: false,
			esriBasemap: false,
		},
		Open_Topo_Map: {
			name: "Open Topo Map",
			url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
			options: {
				maxZoom: 17,
			},
			vector: false,
			esri: false,
			esriBasemap: false,
		},
		USATopo: {
			name: "USA Topo",
			url: "",
			options: {},
			vector: false,
			esri: false,
			esriBasemap: true,
		},
		Streets: {
			name: "Streets",
			url: "",
			options: {},
			vector: false,
			esri: false,
			esriBasemap: true,
		},
		ImageryClarity: {
			name: "Imagery Clarity",
			url: "",
			options: {},
			vector: false,
			esri: false,
			esriBasemap: true,
		},
		ImageryFirefly: {
			name: "Imagery Firefly",
			url: "",
			options: {},
			vector: false,
			esri: false,
			esriBasemap: true,
		},
	},
	categories: [
		"Airport",
		"Area",
		"Basins",
		"Beaches & Capes",
		"Building",
		"Cemetery",
		"Census Divisions",
		"Church",
		"Cities & Populated Places",
		"Cliff",
		"Counties & Political Divisions",
		"Dams & Levees",
		"Flat",
		"Forests & Grasslands",
		"Gap",
		"Glaciers",
		"Lakes & Reservoirs",
		"Locale",
		"Mine",
		"Parks",
		"Pillar",
		"Post Office",
		"Ridge",
		"School",
		"Springs",
		"Streams & Canals",
		"Summit",
		"Trail",
		"Valley",
	],
	disabledFilterCategory: [
		"Cemetery",
		"Church",
		"Mine",
		"Post Office",
		"School"
	],
}