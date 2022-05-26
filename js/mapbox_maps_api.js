"use strict";
//Sets up basic map and styling
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/shroud2/cl3m9j9z4002z14qqu70q5tn5',
    center: [-98.48813, 29.42369], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

//add geocoding search
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
// Adds map zoom control
map.addControl(new mapboxgl.NavigationControl());


//creates marker at Casa Rio
const MARKER = new mapboxgl.Marker({ "color": "#669f60" })
	.setLngLat([-98.48813, 29.42369])
	.addTo(map);
//Click popup for Casa Rio
MARKER.setLngLat([-98.48813, 29.42369]);
const POPUP = new mapboxgl.Popup()
    .setHTML("<br><p style='color: red; font-size: 30px; font-weight: bold'>Casa Rio</p><p>430 E Commerce St. San Antonio, TX</p><img src='../img/casario.jpg' alt='casa rio'>");
MARKER.setPopup(POPUP);
//Casa Rio nav link
document.getElementById('casa-rio').addEventListener('click', () => {
    map.flyTo({
        center: [
            -98.48813,
            29.42369
        ],
        zoom: 15,
        essential: true
    });
});


//creates marker at Briarhurst Manor Estate
const MARKER2 = new mapboxgl.Marker({ "color": "#669f60" })
    .setLngLat([-104.90468, 38.85855])
    .addTo(map);
//Click popup for Briarhurst Manor Estate
MARKER2.setLngLat([-104.90468, 38.85855]);
const POPUP2 = new mapboxgl.Popup()
    .setHTML("<br><p style='color: red; font-size: 30px; font-weight: bold'>Briarhurst Manor Estate</p><p>404 Manitou Ave, Manitou Springs, CO 80829</p><img src='../img/briarhurst.jpg' alt='briarhurst manor'>");
MARKER2.setPopup(POPUP2);
//Briarhurst Manor Estate nav link
document.getElementById('briarhurst').addEventListener('click', () => {
    map.flyTo({
        center: [
            -104.90468,
            38.85855
        ],
        zoom: 15,
        essential: true
    });
});


//creates marker at A'tavola
const MARKER3 = new mapboxgl.Marker({ "color": "#669f60" })
    .setLngLat([-116.21334, 43.61918])
    .addTo(map);
//Click popup for A'tavola
MARKER3.setLngLat([-116.21334, 43.61918]);
const POPUP3 = new mapboxgl.Popup()
    .setHTML("<br><p style='color: red; font-size: 30px; font-weight: bold'>A'tavola</p><p>1515 W Grove St, Boise, ID</p><img src='../img/atavola.jpg' alt='A-tavolla'>");
MARKER3.setPopup(POPUP3);
//A'tavola nav link
document.getElementById('atavola').addEventListener('click', () => {
    map.flyTo({
        center: [
            -116.21334,
            43.61918
        ],
        zoom: 15,
        essential: true
    });
});




//Code axamples from lecture
//add popup that automatically opens at coords
// const CODEUP_POPUP = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map);

//add marker at codeup
// const MARKER = new mapboxgl.Marker()
// 	.setLngLat([-98.4896, 29.4269])
// 	.addTo(map);

//add draggable marker at codeup
// const MARKER = new mapboxgl.Marker()
//     .setLngLat([-98.4896, 29.4269])
//     .setDraggable(true)
//     .addTo(map);

//add marker and clickable popup at Santa Fe
//MARKER.setLngLat([-105.9378, 35.6870]);
// const POPUP = new mapboxgl.Popup()
//     .setHTML("<p>Santa Fe is a place that exist...</p>");
// MARKER.setPopup(POPUP);

// //geocodes address to coords and sets popup at that location
// geocode("1510 Polk St, Houston, TX 77003", MAPBOX_API_KEY).then(function (info) {
//     console.log(info);
//     const POPUP_TOYOTA = new mapboxgl.Popup()
//         .setLngLat(info)
//         .setHTML("<p>This is where the Rockets play!</p>")
//         .addTo(map)
// });

//returns address in console using the coords
// reverseGeocode({lat: 52.3352, lng: 4.8658}, MAPBOX_API_KEY).then(function(location) {
//     console.log(location);
// })

//sets new location when marker is dragged
// let LONG_LAT = [];
// MARKER.on("dragend", function () {
//     LONG_LAT = MARKER.getLngLat();
//     //document.getElementById("place").innerHTML = LONG_LAT;
//     map.flyTo({center: [LONG_LAT.lng, LONG_LAT.lat]})
//     reverseGeocode(LONG_LAT, MAPBOX_API_KEY).then(function (data) {
//         document.getElementById("place").innerHTML = data;
//     })
// })