$(function(){
var w_width = $(window).width();
$(".ne_screen_slider").owlCarousel({
	items:1,
	loop: true,
	center: true,
	nav: true,
	dots: false,
});
var controller = new ScrollMagic.Controller();
var nina_avtar = new TimelineMax()
  var leaf_scene = new ScrollMagic.Scene({triggerElement:".ne_sec_2"})
  .setTween(nina_avtar)
  .addTo(controller);
	TweenMax.to(".cl_block_1", 140, {x: w_width + 211, ease:Linear.easeNone,repeat:-1})
	TweenMax.to(".cl_block_1", 3, {y:10, ease: Power0.easeOut, repeat:-1,yoyo:true})
	TweenMax.to(".cl_block_2", 180, {x: w_width + 219,ease:Linear.easeNone,repeat:-1})
	TweenMax.to(".cl_block_2", 2.5, {y: 15, ease: Power0.easeOut, repeat:-1,yoyo:true})
	TweenMax.to(".cl_block_3", 220, {x: w_width + 130,ease:Linear.easeNone,repeat:-1, delay: .2})
	TweenMax.to(".cl_block_3", 2.5, {y: 35, ease: Power0.easeOut, repeat:-1,yoyo:true})
});
