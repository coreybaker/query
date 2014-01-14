//created by Corey Baker
//using version 3.8 of Esri's JS API
//build using ok coding practices and lots of heart

var baseMap;

require (["esri/map", "dojo/domReady!"],

function(Map){

baseMap = new Map("esriMap",{
	center: [-95.643783, 38.729942],
	zoom: 4, 
	basemap: "gray"
}); //end basemap





}); //end require statement