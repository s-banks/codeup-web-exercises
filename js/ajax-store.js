"use strict";
(function () {
	// (function() {
	// 	"use strict";
	// 	// TODO: Create an AJAX GET request for the file under data/inventory.json
	// 	$.get('data/inventory.json').done(function(data) {
	// 		console.log(data);
	// 		function appendData(data) {
	// 			let table = document.getElementById("insertProducts");
	// 			console.log(data);
	// 			for (let i = 0; i < data.length; i++) {
	// 				table.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
	// 			}
	// 		}
	// 	})
	// })();

	// $.get("/data/inventory.json").done(function (tools) {
	// 	$("#books").html("");
	// 	tools.forEach(function(tool) {
	// 		let trO = '<tr>';
	// 		let trC = '</tr>';
	// 		let td1 = "<h1>" + tool.title + "</h1>";
	// 		let td2 = "<p>By: " + tool.author + "</p>"
	// 		let td3 = "<h1>" + tool.title + "</h1>";
	// 		let td4 = "<h1>" + tool.title + "</h1>";
	// 		$("#books").append(h1 + p);
	// 	});
	// });


	$.get("/data/inventory.json").done(function (obj) {
		let tbody = document.getElementById('insertProducts');
		for (let i = 0; i < obj.length; i++) {
			let tr = "<tr>";
			tr += "<td>" + obj[i].title + "</td>" + "<td>" + obj[i].quantity.toString() + "</td>" + "<td>$" + obj[i].price.toFixed(2) + "</td>" + "<td>" + obj[i].categories + "</td></tr>";
			tbody.innerHTML += tr;
		}
	});




}())