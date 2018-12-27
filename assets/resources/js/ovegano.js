var top_position = $(document).scrollTop();
var $cloudContainer = $("#cloudContainer");
for(var i = 0; i <8; i ++){
   var cloud = $('<div class="cloud"></div>').appendTo($cloudContainer);
   TweenMax.fromTo(cloud,(Math.random()*50)+50,
   {left:-854,bottom:i*40,opacity:(Math.random()*0.9)+0.1},
   {left:"100%",top: "0",ease:Power0.easeNone,delay:Math.random()*5,repeat:-1});
};
function initCSS() {
  TweenLite.set(".kachori_corner", { rotation: 90});
	TweenLite.set(".kachori_content > *", { autoAlpha: 0});
	TweenLite.set(".salad_seq_7 ", { rotation:-30 });
	TweenLite.set(".salad_seq_9", { rotation:33 });
	TweenLite.set(".salad_seq_11", { rotation:-35 });
	TweenLite.set(".salad_seq_12", { rotation:-42 });
}

initCSS();
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax()
.to(".text-cont", 2.5,{y: "+=150", ease:Power4.easeOut},"text-fade").to(".text-cont", 2.5,{autoAlpha:0, ease: Sine.easeOut},"text-fade")
var home_scene = new ScrollMagic.Scene({duration: "100%",triggerElement:".home-portfolio-section",triggerHook:0,})
.setTween(tl).addTo(controller);
var ovegano_filling_letters = new ScrollMagic.Scene({triggerElement:".words_cont",triggerHook:0.1,duration: 400})
.setTween(".lt-pos_full", 2.5 ,{autoAlpha: 1, ease:Power4.easeOut}).addTo(controller);
var design_section_fixed = new ScrollMagic.Scene({triggerElement:".the_design_section",triggerHook:0,duration:"100%" })
.addTo(controller);
var kachori_image = new ScrollMagic.Scene({triggerElement:".the_design_section",triggerHook:0.6,duration:"60%" })
.setTween(".kachori_corner", 2.5 ,{x: 0, rotation: 0, ease:Sine.easeIn}).addTo(controller);
var kachori_content = new TimelineMax()
.to(".kachori_content h2", 5 ,{autoAlpha: 1, ease:Power4.easeOut, delay: .5}, "kc")
.to(".kachori_content p", 8 ,{autoAlpha: 1, ease:Sine.easeOut, delay: .8}, "kc")
var home_scene = new ScrollMagic.Scene({triggerElement:".the_design_section",triggerHook:0.6,duration:"100%"})
.setTween(kachori_content).addTo(controller);
var salad_section_fixed = new ScrollMagic.Scene({triggerElement:".the_design_section",triggerHook:0,duration: 500})
.addTo(controller);
var salad_animate = new TimelineMax()
.to(".salad_seq_1", 3 ,{ x: 118, y:39, autoAlpha:1, ease: SlowMo.easeIn}, "same")
.to(".salad_seq_2", 3 ,{ x: 67, y:53, autoAlpha:1, ease: SlowMo.easeIn}, "same")
.to(".salad_seq_3", 3 ,{ x:113, y:21, autoAlpha:1, ease: SlowMo.easeIn}, "same")
.to(".salad_seq_4", 3 ,{ x:141, y:36, autoAlpha:1, ease: SlowMo.easeIn}, "same")
.to(".salad_seq_5", 5 ,{ x: 72, y:-13, autoAlpha:1, ease: SlowMo.easeIn, delay: 1},"same")
.to(".salad_seq_6", 3 ,{ x:85, y:-35, autoAlpha:1, ease: SlowMo.easeIn, delay: .8},"same")
.to(".salad_seq_7", 3 ,{ x:113, y:11, rotation: 0, autoAlpha:1, ease: SlowMo.easeIn},"same")
.to(".salad_seq_8", 3.2 ,{ x:139, y:7, autoAlpha:1, ease: SlowMo.easeIn, delay: .5},"same")
.to(".salad_seq_9", 4.5 ,{ x:132, y:60, autoAlpha:1, ease: SlowMo.easeIn, delay: .6},"same")
.to(".salad_seq_10", 3.5 ,{ x:135, y:93, autoAlpha:1, ease: SlowMo.easeIn, delay: .5},"same")
.to(".salad_seq_11", 4 ,{ x:93, y:131, rotation: 0, autoAlpha:1, ease: SlowMo.easeIn, delay: 1},"same")
.to(".salad_seq_12", 4 ,{ x:188, y:91, rotation: 0, autoAlpha:1, ease: SlowMo.easeIn, delay: 1},"same")
.to(".salad_seq_13", 4 ,{ x:258, y:84, autoAlpha:1, ease: SlowMo.easeIn, delay: .9},"same")
.to(".ovegano_g-logo", 4 ,{y:-60, ease: Sine.easeIn},"same")
.to(".logo_g", 4 ,{ y:-34, ease: SlowMo.easeIn},"same")
.to(".ovegano_spoon", 4 ,{ x:-23, y:32,autoAlpha:1, ease: SlowMo.easeIn},"same")
var salad_scene = new ScrollMagic.Scene({triggerElement:".salad_section",triggerHook:0.4, duration:400})
.setTween(salad_animate).addTo(controller);
var puff_animate = new ScrollMagic.Scene({triggerElement:".ovegano_branding-stuff",triggerHook:0.3,duration:300 })
.setTween(".branding_puff", 2.5 ,{y: -40, rotation: 0, ease:Sine.easeIn}).addTo(controller);
