document.addEventListener("DOMContentLoaded", function() {
var w_width = $(window).width(),
		h_height = $(window).height(),
		$window = $(window),
		nav_cont = $('.naviagtion_cont'),
		menu_text = $('.menu_icon a'),menu_icon = $('.menu_icon');
		menu_icon.click(function(){nav_cont.toggleClass('show');$(this).toggleClass('active');$(menu_text).text(($(menu_text).text() == 'Close') ? 'Menu' : 'Close');
	});TweenLite.set(menu_text, { rotation: 90, y: 15, x: 3});
});
