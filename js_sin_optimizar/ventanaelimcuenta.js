$(document).ready(function() {

	$('.button3').click(function() {

		type = $(this).attr('data-type');

		$('.overlay-container3').fadeIn(function() {

			window.setTimeout(function(){
				$('.window-container3.'+type).addClass('window-container3-visible');
			}, 100);

		});
	});

	$('.close3').click(function() {
		$('.overlay-container3').fadeOut().end().find('.window-container3').removeClass('window-container3-visible');
	});

});
