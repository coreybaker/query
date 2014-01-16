//created by Corey Baker
//using version 3.8 of Esri's JS API
//build using ok coding practices and lots of heart



require (["esri/map",
"esri/InfoTemplate",
"esri/symbols/SimpleFillSymbol",
"esri/symbols/SimpleLineSymbol",
"esri/renderers/SimpleRenderer",
"dojo/dom-class",
"dojo/dom-construct",
"dojo/on",
"dojo/_base/Color",
"esri/layers/FeatureLayer",
"dojo/domReady!"


	],

function(Map, InfoTemplate, SFS, SLS, Render, domClass, domConstruct, dojoOn, Color, FeatureLayer){





var baseMap = new Map("esriMap",{
	center: [-95.643783, 38.729942],
	zoom: 4, 
	basemap: "gray"
}); //end basemap


//Where the map popup, fill symbol, and render are defined

var featureLayerPopup = new InfoTemplate("Attributes", "${*}");

featureLayerPopup.setTitle("${NAME}");

featureLayerPopup.setContent("<div id='popUpContent'><ul>" +
		"<li>Population 2007:  ${POP2007}</li>\n" +
		"<li>Population 2000:  ${POP2000}</li>\n" +
		"<li>Population White: ${WHITE}</li>" +
		"<li>Population Black: ${BLACK}</li>\n" +
		"<li>Population Asian: ${ASIAN}</li>\n" +
		"</ul>" +
		"</div><br>\n" +
		"We'd love for you to see more");

var fillSymbol = new SFS(SFS.STYLE_SOLID, new SLS(SLS.STYLE_SOLID, new Color([255,0,0]), 2), new Color([255,255,0,0.25])
		);

var render = new Render(fillSymbol);

//End map popup, fill symbol, and renderer

var demographicFeatureLayer = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/3";

var demographicLayerConstruct = new FeatureLayer(demographicFeatureLayer, {
	mode: FeatureLayer.MODE_ONDEMAND, 
	displayOnPan: false, 
	outFields: ["*"],
	id: "2000 Demographics",


}); //end featurelayer construction


//adds & sets

demographicLayerConstruct.setInfoTemplate(featureLayerPopup);
demographicLayerConstruct.setRenderer(render);
baseMap.addLayer(demographicLayerConstruct);






}); //end require statement