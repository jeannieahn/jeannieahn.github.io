$(document).ready(function(){

	$("#reminder").click(function() {
		if ($('.popup').hasClass('popup-active')) {
			$('.popup').removeClass('popup-active');
			setTimeout(function(){
				$('.popup').hide();
			}, 600);
		} else {
		$('.popup').show();
		setTimeout (function(){
			$(".popup").addClass('popup-active');
		}, 0);
	}
	});

});
