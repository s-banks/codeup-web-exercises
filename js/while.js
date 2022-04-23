"use strict";
(function () {
	console.log("--------------- \n---------------");
	function bitCount (){
		let val = 1;
		while (val < 65536) {
			val *= 2;
			console.log(val);
		}
	}

	bitCount();

	console.log("--------------- \n---------------");

	//
	function iceCream () {
		let totalInv = Math.floor(Math.random() * 51) + 50;
		let custCount = 0;
		do {
			custCount++;
			let orderCount = Math.floor(Math.random() * 5) + 1;
			console.log("Order placed for " + orderCount + " cones. We have " + totalInv + " currently in stock.");
			if (orderCount > totalInv) {
				console.log("Sorry, I do not have enough to fill that order");
			} else {
				totalInv -= orderCount;
				console.log("Thank you, we have " + totalInv + " left.");
			}
		} while (totalInv > 0);
		console.log("Ok, all done, no cones left in stock.");
	}
	iceCream();

}())