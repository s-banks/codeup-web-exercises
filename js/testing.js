
// let str = "San Antonio, tx";
// let state = str.slice(-2,);
// let city = str.slice(0, -4);
// let cityCaps = city.charAt(0).toUpperCase() + city.slice(1);
// let stateCaps = state.toUpperCase();
// let locationName = cityCaps + ", " + stateCaps;
// document.querySelector("#demo").innerHTML = str.length;
// document.querySelector("#demo2").innerHTML = state;
// document.querySelector("#demo3").innerHTML = city;
// document.querySelector("#demo4").innerHTML = locationName;

//
// geocode('kuwait city', MAPBOX_API_KEY).then(function(results) {
//     console.log(results);
// })
//
// reverseGeocode({lat: 29.375, lng: 47.98}, MAPBOX_API_KEY).then(function(results) {
//     console.log(results);
// })


// geocode(str, MAPBOX_API_KEY).then(function(results) {
//     // do something with results
//     console.log(results);
// })



fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.42369&lon=-98.48813&appid=' + OPEN_WEATHER_APPID + '&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data)

            let formattedDate = data["daily"]["0"].dt * 1000;
let d = new Date(formattedDate).toLocaleDateString("en-US", { dateStyle: 'full' });
            console.log(d);
            let filter = d.slice(0, -6)
            console.log(filter);
    })



//toggles the highlight class on each li
// let liList = document.querySelectorAll("li");
// for (let x of liList) {
//     x.classList.toggle("highlight");
// }


//Set different font color based on array for all spans in a document
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// document.querySelectorAll('span').forEach((sp, ind) => {
//     sp.style.color = colors[ind];
// });
