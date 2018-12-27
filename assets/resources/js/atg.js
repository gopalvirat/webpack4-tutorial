$(".atg_sm_slider").owlCarousel({
  items: 1,
  center: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  freeDrag: false,
  nav: false,
  dots: false,
  smartSpeed:450,
  autoplay:true,
  loop:true,
  autoplaySpeed: 500,
  autoPlayTimeout:200,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn'
});
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax()
  .to(".macbook_frame span img", 40, {y:-1047, ease: Power1.easeOut})
  var leaf_scene = new ScrollMagic.Scene({triggerElement:".macbook_frame",triggerHook:0.5, offset: 100})
  .setTween(tween)
  .addTo(controller);
var home_tween = new TimelineMax()
  .to(".elem_2", 2.5, {x:-300,y: 300, ease:Power1.easeOut},"s_elem")
  .to(".elem_9", 2.5, {x:150, ease:Power1.easeOut, delay: 0.5},"s_elem")
  .to(".elem_8", 4, {x:250, ease:Power1.easeOut},"s_elem")
  .to(".elem_1", 2.5, {x:-150,y: -100, ease:Power1.easeOut},"s_elem")
  .to(".elem_5", 2.5, {y:-200,x:-350, ease:Power1.easeOut},"s_elem")
  .to(".elem_7", 3.5, {y:-80,x:300, ease:Power1.easeOut},"s_elem")
  .to(".elem_6", 3, {y:-200,x:100, ease:Power1.easeOut},"s_elem")
  .to(".elem_3", 3.5, {y:-250, x:100, ease:Power1.easeOut},"s_elem")
  var leaf_scene = new ScrollMagic.Scene({triggerElement:".home_portfolio", duration:"100%", triggerHook:0})
  .setTween(home_tween)
  .addTo(controller);
TweenLite.set(".elem_layer span, .inner_cont h1", {backfaceVisibility:"hidden",transformStyle:"preserve-3d",z: 0.1,rotationZ: 0.01});
var controller = new ScrollMagic.Controller(),
    scale_value_leaf = 1,
    lf_ease = Power4.easeOut;
  var leaf_1 = $('.iphone_elem_1 span'),
      leaf_2 = $('.iphone_elem_2 span'),
      leaf_3 = $('.iphone_elem_3 span'),
      leaf_4 = $('.iphone_elem_4 span'),
      leaf_5 = $('.iphone_elem_5 span'),
      leaf_6 = $('.iphone_elem_6 span');
var iphone_t_l = new TimelineMax({overwrite: false})
.to(leaf_1, 1.6, { transformOrigin: "left bottom", scale:scale_value_leaf,ease:lf_ease},"leaf")
.to(leaf_2, 1.4, {transformOrigin: "left bottom", scale:scale_value_leaf,ease:lf_ease},"leaf")
.to(leaf_3, 1.1, {transformOrigin: "left top",scale:scale_value_leaf,ease:lf_ease},"leaf")
.to(leaf_4, 1.2, {transformOrigin: "bottom left",scale:scale_value_leaf,ease:lf_ease},"leaf")
.to(leaf_5, 1.4, {transformOrigin: "right bottom", scale:scale_value_leaf,ease:lf_ease},"leaf")
.to(leaf_6, 1, { transformOrigin: "right bottom",scale:scale_value_leaf,ease:lf_ease},"leaf");
var leaf_scene = new ScrollMagic.Scene({triggerElement:".s_7_ml_cont", triggerHook:0.6, offset: 100})
.setTween(iphone_t_l)
.addTo(controller);
var iphone_b_l = new TimelineMax()
.to(".iphone_elem_3 span", 1.7, { overwrite: false, transformOrigin: "left top", scale:1, ease: Power1.easeOut},"leaf")
var leaf_scene_b = new ScrollMagic.Scene({triggerElement:".s_7_ml_cont", triggerHook:0.3, offset: 250})
.setTween(iphone_b_l)
.addTo(controller);
var leaf_tween_v = 6;
var rep_l_tween = new TimelineMax({repeat:-1, yoyo:true,overwrite: false, immediateRender: false,ease:Power0.easeNone})
.to(".iphone_elem_1 span", leaf_tween_v , {transformOrigin: "bottom left", rotation: -8},"re")
.to(".iphone_elem_2 span", leaf_tween_v, {transformOrigin: "bottom right", rotation:8},"re")
.to(".iphone_elem_3 span", leaf_tween_v, {transformOrigin: "left top", rotation: 8},"re")
.to(".iphone_elem_4 span", leaf_tween_v, {transformOrigin: "bottom left", rotation:4},"re")
.to(".iphone_elem_5 span", leaf_tween_v, {transformOrigin: "right bottom", rotation:-8},"re")
.to(".iphone_elem_6 span", leaf_tween_v, {transformOrigin: "right bottom", rotation:-5},"re")
var repeat_scene = new ScrollMagic.Scene({triggerElement:".s_7_ml_cont", triggerHook:0.5, offset: 100})
.setTween(rep_l_tween)
.addTo(controller);
    var
    $body = $(".section_1"),
    elem_1    = $(".elem_1 span"),
    elem_2    = $(".elem_2 span"),
    elem_3    = $(".elem_3 span"),
    elem_4    = $(".elem_4 span"),
    elem_5    = $(".elem_5 span"),
    elem_6    = $(".elem_6 span"),
    elem_7    = $(".elem_7 span"),
    elem_8    = $(".elem_8 span"),
    elem_9    = $(".elem_9 span"),
    elem_title = $(".inner_cont h1");
  	$body.mousemove(function(e) {
    var xPos = e.pageX / $body.width() - 0.5
    var yPos = e.pageY / $body.height() - 0.5
    TweenLite.to(elem_1, 2.5, { y:20*xPos, x:25*yPos, ease:Expo.easeOut});
		TweenLite.to(elem_2, 1.5, { x:45*xPos, y:75*yPos, ease:Sine.easeOut });
    TweenLite.to(elem_3, 2, { rotation:-25*xPos,y:-35*xPos, x:-25*yPos, ease:Sine.easeOut,transformOrigin:"left bottom"});
    TweenLite.to(elem_4, 2, { x:15*yPos, y:25*xPos, ease:SlowMo.ease.config(0.7, 0.7, false)});
    TweenLite.to(elem_5, 2.5, { y:35*xPos, x:45*yPos, ease:Sine.easeOut });
    TweenLite.to(elem_6, 3, { x:-35*yPos, ease:Expo.easeOut });
    TweenLite.to(elem_7, 2, { y:-35*yPos, x:-25*xPos, ease:SlowMo.ease.config(0.7, 0.7, false) });
    TweenLite.to(elem_8, 2, { x:55*xPos, ease:Sine.easeOut});
    TweenLite.to(elem_9, 1, { y:-35*xPos, x:-35*yPos, ease:Back.easeOut.config(1.7) });
    TweenLite.to(elem_title,2, { y:30*xPos, x:15*yPos, ease:Sine.easeOut });
});
 if ($(".atg_folio").length) {
function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $word = $("path#word");
	pathPrepare($word);
	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add(TweenMax.to($word, 0.1, {strokeDashoffset: 0, ease:Sine.easeOut}))
	var scene = new ScrollMagic.Scene({triggerElement: ".section_4", duration:"2800",triggerHook:1,tweenChanges: true})
					.setTween(tween)
					.addTo(controller);
  var scene = new ScrollMagic.Scene({triggerElement: ".section_4", duration: "200%",triggerHook:0.25})
						.setPin(".atg_scrollto_cont")
						.addTo(controller);
            var controller = new ScrollMagic.Controller();
            controller.scrollTo(function(target) {});
            controller.scrollTo(function(target) {
              TweenMax.to(window, 1, {
                scrollTo : {
                  y : target,
                  autoKill : true
                },
                ease : Cubic.easeInOut
              });
            });
            }
            $(document).on("click", ".s_l_nav_num a[href*=\\#]", function(e) {
              var id = $(this).attr("href");
              if($(id).length > 0) {
                e.preventDefault();
                controller.scrollTo(id);
                if (window.history && window.history.pushState) {
                  history.pushState("", document.title, id);
                }
              }
            });
	new ScrollMagic.Scene({triggerElement: ".s_4_header", duration:"200"})
					.setClassToggle("#s_home", "active")
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".s_4_plant", duration:"100%"})
					.setClassToggle("#s_seedling", "active")
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".s_4_ipad", duration:"100%"})
					.setClassToggle("#s_seeds", "active")
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".s_4_branding", duration:"100%"})
					.setClassToggle("#s_branding", "active")
					.addTo(controller);
