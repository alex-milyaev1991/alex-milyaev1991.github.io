/*
 * Drop your static JS libraries in this folder.
 * For example, JQuery JS would go in here if
 * you aren't loading it from their CDN.
 */

function assetsFunction(){
	alert('Hello, I am a static javascript file copied from ./src/assets/js to ./public/js');
	console.log("dsfsfs");


	(function ($) {
		$('.fade').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});

	})(jQuery);

}
