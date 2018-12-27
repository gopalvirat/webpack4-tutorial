function intcont() {
    TweenLite.set(".abt_design_love .original", { rotation: 90, x: -90});
    TweenMax.set( ".video_placeholder", { transformStyle: 'preserve-3d'  });
    TweenLite.set(".tm_name", {x:-100, rotation: 90, autoAlpha: 0})
}
var abt_digits = $('.heart_small_info.digits'),
abt_digits_ease =  Linear.easeNone;
var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0})
.to(abt_digits, .3, {text:"79° 59' 41.129'' E", ease:abt_digits_ease})
.to(abt_digits, .4, {text:"74° 56' 48.374'' W",ease:abt_digits_ease})
.to(abt_digits, 1, {text:"71° 54' 41.490'' E", ease:abt_digits_ease})
.to(abt_digits, .4, {text:"89° 60' 50.895'' S",ease:abt_digits_ease})
.to(abt_digits, 1, {text:"65° 56' 61.328'' N", ease:abt_digits_ease})
$(".tm_slide").hover(function() {
TweenMax.to($(this).find('.tm_name'),.3,{x:-48, autoAlpha: 1, ease: Sine.easeOut})
},function() {
TweenMax.to($(this).find('.tm_name'),.3,{x:-100, autoAlpha: 0, ease: Sine.easeOut})
})
TweenMax.to("#turbwave", 8, {
  attr:{"baseFrequency":0.01},
  repeat:-1,
  yoyo:true
});
$(".slide_1").hover(function() {
TweenLite.to("#emp_1 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_1 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})
$(".slide_2").hover(function() {
TweenLite.to("#emp_2 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_2 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})
$(".slide_3").hover(function() {
TweenLite.to("#emp_3 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_3 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})
$(".slide_4").hover(function() {
TweenLite.to("#emp_4 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_4 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})
$(".slide_5").hover(function() {
TweenLite.to("#emp_5 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_5 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})
$(".slide_6").hover(function() {
TweenLite.to("#emp_6 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_6 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})
$(".slide_7").hover(function() {
TweenLite.to("#emp_7 feGaussianBlur", .3, {attr:{stdDeviation:"60 0"}, clearProps:"all", ease: Sine.easeOut})
},function() {
TweenLite.to("#emp_7 feGaussianBlur", .3, {attr:{stdDeviation:"0 0"}, clearProps:"all", ease:Sine.easeOut})
})

$( ".glitch-img" ).mgGlitch({
			destroy : false,
			glitch: true,
			scale: true,
			blend : true,
			blendModeType : 'hue',
			glitch1TimeMin : 100,
			glitch1TimeMax : 200,
			glitch2TimeMin : 50,
			glitch2TimeMax : 215,
			zIndexStart : 1,
});
$("#emp_slider").scrollbox({
    linear: true,
    step: 50,
    direction: 'h',
    delay: 0,
    speed: 350,
    startDelay: 0,
    distance: 400
  });
	intcont();
$(".mute-video").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).removeClass('unmute-video');
    } else {
        $("video").prop('muted', true);
        $(this).addClass('unmute-video');
    }
});
	$('.vd_scroller_bar .middle_track').mouseover(function (e){
		TweenLite.to(".scrollbar_content", 0.1, {display: 'block' });
    $('.video_play_btn').hide();
	})
	$('.vd_scroller_bar .middle_track').mouseout(function (e){
		TweenLite.to(".scrollbar_content", 0.1, {display: 'none' });
    $('.video_play_btn').show();
	})
  $('.video_placeholder').tilt({
    maxTilt:20,
    perspective:1500,
    reset: false
  })
var video = $(".about_video").get(0);
$(".video_play_btn").click(function(e) {
		video.play();
			$('.video_play_btn').css("visibility", "hidden");
    	return false;
});
$(".about_video").click(function(e) {
		video.pause();
			$('.video_play_btn').css("visibility", "visible");
    	return false;
});
