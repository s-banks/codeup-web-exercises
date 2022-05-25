"use strict";
(function () {
function helpMe() {
	$.get("/data/inventory.json").done(function (obj) {
		let tbody = document.getElementById('insertProducts');
		for (let i = 0; i < obj.length; i++) {
			let tr = "<tr>";
			tr += "<td>" + obj[i].title + "</td>" + "<td>" + obj[i].quantity.toString() + "</td>" + "<td>$" + obj[i].price.toFixed(2) + "</td>" + "<td>" + obj[i].categories + "</td></tr>";
			tbody.innerHTML += tr;
		}
	});
}
helpMe();

	const element = document.getElementById("refresh");
	element.addEventListener("click", updateData);

	function updateData() {
		document.querySelector('#insertProducts').innerHTML = "";
		helpMe();
}
}())