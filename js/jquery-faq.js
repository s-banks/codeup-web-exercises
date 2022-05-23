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

		// $('#yellow-list').click(function () {
		// $('ul').children().last().css('background', 'yellow');
		// });

	$('#yellow-list').click(function() {
		$('ul').each(function(){
			$(this).children().last().css('background', 'yellow');
		});
	});

	$('h3').click(function() {
			$(this).next().children().css('font-weight', 'bold');
	});

	$('ul').click(function() {
			$(this).children().first().css('color', 'blue');
	});


	// 	$("li").each(function (index, element) {
	// 	if (index % 2 === 0) {
	// 		$(element).css("background", "rgba(113, 191, 148, .4)");
	// 	}
	// });




}())




// $('dt').click(function () {
// 	if ($(this).hasClass('class-here')) {
// 		$(this).removeClass('class-here');
// 	} else {
// 	#(this).addClass('class-here');
// }
// });