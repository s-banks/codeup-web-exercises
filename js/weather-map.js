"use strict";

//Sets up basic map and styling
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/shroud2/cl3m9j9z4002z14qqu70q5tn5',
	center: [-98.48813, 29.42369], // starting position [lng, lat]
	zoom: 10 // starting zoom
});


























//Example code from lecture
//const URL = "https://api.openweathermap.org/data/2.5/onecall";
// $.get(URL, {
// 	APPID: OPEN_WEATHER_APPID,
// 	lat: 40.7485452,
// 	lon: -73.9879522,
// 	units: "imperial"
// }).done(function(results) {console.log(results)});
//
// geocode("Spring Branch, US", MAPBOX_API_KEY).then(function (data) {
// 	$.get(URL, {
// 		APPID: OPEN_WEATHER_APPID,
// 		lat: data[1],
// 		lon: data[0],
// 		units: "imperial"
// 	}).done(function (results) {
// 		console.log(results);
// 	})
// });