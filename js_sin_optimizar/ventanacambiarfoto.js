$(document).ready(function() {

	$('.button4').click(function() {

		type = $(this).attr('data-type');

		$('.overlay-container4').fadeIn(function() {

			window.setTimeout(function(){
				$('.window-container4.'+type).addClass('window-container4-visible');
			}, 100);

		});
	});

	$('.close4').click(function() {
		$('.overlay-container4').fadeOut().end().find('.window-container4').removeClass('window-container4-visible');
		location.reload();
	});

});
