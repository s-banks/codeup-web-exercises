"use strict";
(function () {


	let val;

	while (true) {
		val = parseFloat(prompt("Enter an odd number between 1 and 50."));
		if (val % 2 !== 0 && val >= 1 && val <= 50) {
			break;
		}
	}

	for(let itr = 1; itr <= 50; itr += 2) {
		if (itr === val) {
			console.log("Skipping this one " + val);
			continue;
		}
		console.log(itr);
	}



}())