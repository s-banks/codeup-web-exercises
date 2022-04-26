"use strict";
(function () {

	function getHighestNumber(a, b, c) {
		if (isANumber(a) && isANumber(b) && isANumber(c)) {
			return Math.max(a, b, c);
		} else {
			return false;
		}
	}

	function add(x,y) {
		if (!isNaN(parseNumber(x)) && !isNaN(parseNumber(y))) {
			return parseNumber(x) + parseNumber(y);
		} else {
			return false;
		}
	}





}())