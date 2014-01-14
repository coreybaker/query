//created by Corey Baker
//using version 3.8 of Esri's JS API
//build using ok coding practices and lots of heart

var baseMap;

require (["esri/map","esri/layers/FeatureLayer",
"dojo/domReady!"


	],

function(Map, FeatureLayer){

baseMap = new Map("esriMap",{
	center: [-95.643783, 38.729942],
	zoom: 4, 
	basemap: "gray"
}); //end basemap


var demographicFeatureLayer = "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/3";

var demographicLayerConstruct = new FeatureLayer(demographicFeatureLayer, {
	mode: FeatureLayer.MODE_ONDEMAND, 
	displayOnPan: false, 
	outFields: ["*"],
	id: "2000 Demographics",

}); //end featurelayer construction


//adds 

baseMap.addLayer(demographicLayerConstruct);





}); //end require statement