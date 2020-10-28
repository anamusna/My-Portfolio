$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate(
			{
				scrollTop : $($anchor.attr('href')).offset().top
			},
			1500,
			'easeInOutExpo'
		);
		event.preventDefault();
	});
});

// Highlight the top navbar as scrolling occurs
$('body').scrollspy({
	target : '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});

// Navbar color change

$(document).ready(function() {
	// Transition effect for navbar
	$(window).scroll(function() {
		// checks if window is scrolled more than an amount of px, adds/removes solid class
		if ($(this).scrollTop() > 600) {
			$('.navbar-default').addClass('solid');
		} else {
			$('.navbar-default').removeClass('solid');
		}
	});
});
