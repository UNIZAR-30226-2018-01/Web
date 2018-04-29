$(document).ready(function() {

	$('.button2').click(function() {

		type = $(this).attr('data-type');

		$('.overlay-container2').fadeIn(function() {

			window.setTimeout(function(){
				$('.window-container2.'+type).addClass('window-container2-visible');
			}, 100);

		});
	});

	$('.close2').click(function() {
		$('.overlay-container2').fadeOut().end().find('.window-container2').removeClass('window-container2-visible');
		location.reload();
	});

});
