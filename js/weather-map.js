"use strict";

//Sets up basic map and styling
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/shroud2/cl3m9j9z4002z14qqu70q5tn5',
	center: [-98.48813, 29.42369], // starting position [lng, lat]
	zoom: 10 // starting zoom
})

//add zoom control to map
map.addControl(new mapboxgl.NavigationControl());

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.42369&lon=-98.48813&appid=' + OPEN_WEATHER_APPID + '&units=imperial')
	.then(response => response.json())
	.then(data => {
		document.querySelector('#current-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data['current']["weather"]['0'].icon}@4x.png" className="img-fluid rounded-start "alt="...">`
		document.querySelector('#current-temp').innerHTML = Math.round(data["current"].temp) //current temp
		document.querySelector('#feels-like').innerHTML =Math.round(data["current"].feels_like) //feels like temp
		document.querySelector('#hi-low').innerHTML =Math.round(data["daily"]["0"]["temp"].max) + '/' + Math.round(data["daily"]["0"]["temp"].min) //high temp today
	})





//click events to only show the map on the desired pages
document.querySelector("#pills-home-tab").addEventListener("click", showMap);
document.querySelector("#pills-5day-tab").addEventListener("click", showMap);
document.querySelector("#pills-contact-tab").addEventListener("click", hideMap);

//hide map function
function hideMap() {
	document.querySelector("#map").style.display = "none";
}
//show map function
function showMap() {
	document.querySelector("#map").style.display = "block";
}

//searchbox function
let button = document.querySelector('#submit');
let input = document.querySelector('#search');
button.addEventListener('click', function(name){
	geocode(input.value, MAPBOX_API_KEY).then(function(results) {
		let lat = results[1]
		let lon = results[0]
		map.flyTo({
			center: [lon, lat],
			zoom: 10,
			essential: true
		});
		let state = input.value.slice(-2,);
		let city = input.value.slice(0, -4);
		let cityCaps = city.charAt(0).toUpperCase() + city.slice(1);
		let stateCaps = state.toUpperCase();
		let locationName = cityCaps + ", " + stateCaps;
		document.querySelector('#h2Location').innerHTML = locationName;
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}` + '&appid=' + OPEN_WEATHER_APPID + '&units=imperial')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				document.querySelector('#current-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data['current']["weather"]['0'].icon}@4x.png" className="img-fluid rounded-start "alt="...">`
				document.querySelector('#current-temp').innerHTML = Math.round(data["current"].temp) //current temp
				document.querySelector('#feels-like').innerHTML =Math.round(data["current"].feels_like) //feels like temp
				document.querySelector('#hi-low').innerHTML =Math.round(data["daily"]["0"]["temp"].max) + '/' + Math.round(data["daily"]["0"]["temp"].min) //high temp today
			})
	})
 })










//Example code from lecture
// const URL = "https://api.openweathermap.org/data/2.5/onecall";
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
// 		console.log(data[1]);
// 	})
//});