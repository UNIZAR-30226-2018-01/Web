$(document).ready(function() {

	$('.button5').click(function() {

		type = $(this).attr('data-type');

		$('.overlay-container5').fadeIn(function() {

			window.setTimeout(function(){
				$('.window-container5.'+type).addClass('window-container5-visible');
			}, 100);

		});
	});

	$('.close5').click(function() {
		$('.overlay-container5').fadeOut().end().find('.window-container5').removeClass('window-container5-visible');
		location.reload();
	});

});
