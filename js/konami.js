"use strict";

function buttonToggle() {
	let toggle = document.getElementById("cheater");
	if (toggle.style.display === "none") {
		toggle.style.display = "block";
	} else {
		toggle.style.display = "none";
	}
}

(function () {
	let konamiFrame = {
		konamiTrigger: function() {
			let konamiCode = [38,38,40,40,37,39,37,39,66,65,13],
				started = false,
				count = 0;
			$(document).keyup(function(e){
				let reset = function() {
					started = false;
					count = 0;
				};
				let key = e.keyCode;
				if(!started){
					if(key == 38){
						started = true;
					}
				}
				if (started){
					if (konamiCode[count] == key){
						count++;
					} else {
						reset();
					}
					if (count == 11){
						document.getElementById('csssheet').href = 'css/konami.css';
						window.open('https://youtu.be/dQw4w9WgXcQ?t=43', '_blank');
						reset();
					}
				} else {
					reset();
				}
			});
		}
	}
	konamiFrame.konamiTrigger();


	let doomFrame = {
		doomTrigger: function() {
			let doomCode = [17,18,192,73,68,68,81,68,13],
				started = false,
				count = 0;
			$(document).keyup(function(e){
				let reset = function() {
					started = false;
					count = 0;
				};
				let key = e.keyCode;
				if(!started){
					if(key == 17){
						started = true;
					}
				}
				if (started){

					if (doomCode[count] == key){
						count++;
					} else {
						reset();
					}
					if (count == 9){
						document.getElementById('csssheet').href = 'css/doom.css';
						reset();
					}
				} else {
					reset();
				}
			});
		}
	}
	doomFrame.doomTrigger();

	let gtaFrame = {
		gtaTrigger: function() {
			let gtaCode = [82,79,67,75,69,84,77,65,78,13],
				started = false,
				count = 0;
			$(document).keyup(function(e){
				let reset = function() {
					started = false;
					count = 0;
				};
				let key = e.keyCode;
				if(!started){
					if(key == 82){
						started = true;
					}
				}
				if (started){

					if (gtaCode[count] == key){
						count++;
					} else {
						reset();
					}
					if (count == 10){
						document.getElementById('csssheet').href = 'css/gta.css';
						reset();
					}
				} else {
					reset();
				}
			});
		}
	}

	gtaFrame.gtaTrigger();

	let homeFrame = {
		homeTrigger: function() {
			let homeCode = [72,79,77,69,13],
				started = false,
				count = 0;
			$(document).keyup(function(e){
				let reset = function() {
					started = false;
					count = 0;
					return;
				};
				let key = e.keyCode;
				if(!started){
					if(key == 72){
						started = true;
					}
				}
				if (started){

					if (homeCode[count] == key){
						count++;
					} else {
						reset();
					}
					if (count == 5){
						document.getElementById('csssheet').href = 'css/initial.css';
						reset();
					}
				} else {
					reset();
				}
			});
		}
	}
	homeFrame.homeTrigger();

}())

