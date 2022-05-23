"use strict";
(function () {
		$( "dd" ).addClass( "invisible" );

		$('dt').click(function () {
			$(this).toggleClass('highlight');
			$(this).next().toggleClass('invisible');
		});

		$('a').click(function () {
		$('dd').toggleClass('invisible');
	});

}())



// $('dt').click(function () {
// 	if ($(this).hasClass('class-here')) {
// 		$(this).removeClass('class-here');
// 	} else {
// 	#(this).addClass('class-here');
// }
// });