//created by Corey Baker
//using version 3.8 of Esri's JS API
//build using ok coding practices and lots of heart



require (["esri/map",
"esri/dijit/Popup",
"esri/dijit/PopupTemplate",
"dojo/dom-class",
"dojo/dom-construct",
"dojo/on",
"esri/layers/FeatureLayer",
"dojo/domReady!"


	],

function(Map, Popup, PopupTemplate, domClass, domConstruct, dojoOn, FeatureLayer){


var mapPopup = new Popup({
	titleInBody:false
}, domConstruct.create("div"));



var baseMap = new Map("esriMap",{
	center: [-95.643783, 38.729942],
	zoom: 4, 
	basemap: "gray", 
	infoWindow: Popup 
}); //end basemap


//have to read some dojo docs to fully understand this
//but basically you're adding a class to the map div in html 
//this will allow you to customize the popup via straight CSS opposed to writing it in JS
//to be awesome at the JS API you must understand what Dojo is doing
//looks like this is adding the class of popup to my div
//but it is also adding another class of map while my id="esriMap"
//dojo docs are sort of helping with this....

domClass.add("esriMap", "popup");






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