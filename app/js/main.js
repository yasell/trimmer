$(document).ready(function($) {

	// - back to top
	$(".back-top").hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
			$(".back-top").fadeIn();
		} else {
			$(".back-top").fadeOut();
		}
	});

	$(".back-top").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// - smooth scroll
	$(".header__menu-list").on("click", "a", function(event) {
		event.preventDefault();

		var el = $(this).attr("href");
		$("body,html").animate({
			scrollTop: $(el).offset().top
		}, 2000);
		return false;
	});
});
