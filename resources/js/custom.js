var counter = { var: 500 },
tal = document.getElementById("c__ticker"),
slow__ease = SlowMo.ease.config(0.7, 0.7, false),
window_w = $(window).width();
window_h = $(window).height();
console.log(window_w)
    
 TweenMax.to(counter, 10, {
      var: 100, 
      onUpdate: function () {
          tal.innerHTML = Math.ceil(counter.var);
      },
      ease: Power4.easeOut
  });



var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

var app = new PIXI.Application( {antialias: true, transparent: true, resolution: 1});
document.getElementById('header__c').appendChild(app.view);
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
resize();
app.stage.interactive = true;
var postition = 0, bg, bg2, mask;

var stage = new PIXI.Container();

var loader = PIXI.loader
    .add('assets/resources/img/forest.jpg')
    .add('assets/resources/img/c_mask.png')
    .load(slide__1);    

    function slide__1() {
        bg = new PIXI.Sprite(
            PIXI.loader.resources['assets/resources/img/forest.jpg'].texture
        );
        bg2 = new PIXI.Sprite(
            PIXI.loader.resources['assets/resources/img/forest.jpg'].texture
        );
        bg.x = app.screen.width / 2;        
        bg2.x = app.screen.width / 2;        
        bg.pivot.x = bg.width / 2;        
        bg2.pivot.x = bg.width / 2;        
        app.ticker.add(function() {
            postition += 1;
            var hh = 1304;
            bg.y = -postition;
            bg.y %= hh * 2;
            if(bg.y < 0)
            {
                bg.y += hh * 2;
            }
            bg.y -= hh;
        
            bg2.y = -postition + hh;
            bg2.y %= hh * 2;
            if(bg2.y < 0)
            {
                bg2.y += hh * 2;
            }
            bg2.y -= hh;
        });
        
        
        mask_c = new PIXI.Sprite(
            PIXI.loader.resources['assets/resources/img/c_mask.png'].texture
        );
       
         
        updateContainer();
        $(window).resize(function () {
                updateContainer();
        });  
         
        mask_c.width = 500;
        mask_c.height = 510;
        bg.mask = mask_c;  
        bg2.mask = mask_c;      
        
        // Move mask to the center
        mask_c.x = app.screen.width / 2;
        // mask.y = app.screen.height;
        mask_c.pivot.x = mask_c.width / 1.49;
        mask_c.pivot.y = mask_c.height / 1;
        
        TweenMax.set(mask_c,{pixi:{y: (app.screen.height)}})

    
        var c__move = new TimelineMax({ repeat: -1, yoyo:true })
        .to(mask_c, 2.5, {pixi:{ y: app.screen.height/1.02}});
        app.stage.addChild(mask_c);
        app.stage.addChild(bg);
        app.stage.addChild(bg2);  
        
        app.render(stage);
             
        function updateContainer() {
            waitForFinalEvent(function(){
                if (window.innerWidth >= 1580) {
                    mask_c.scale.set(0.9,0.9)
                }  
                if (window.innerWidth >= 1800) {
                    mask_c.scale.set(1.05,1.05)
                }              
            }, 500, "some unique string");
        }
       
    };


 // Listen for window resize events
window.addEventListener('resize', resize);
// Resize function window
function resize() {
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
}   



//Cubes animation

var w_divide = (window_w);

console.log(w_divide)


$(window).on('load', function(){


var geom_ease = CustomEase.create("custom", "M0,0 C0,0 -0.008,-0.043 0.014,0.06 0.019,0.085 0.015,0.115 0.03,0.12 0.22,0.184 0.787,0.574 0.948,0.84 1,0.926 1,1 1,1");
var gemo_1 = new TimelineMax({ repeat:-1})
.to('#geom1', 1, {autoAlpha:1},"cb_1")
.to('#geom1', 19, {y:-1300,x:1000,rotation:220,transformOrigin:"center center",ease: geom_ease},"cb_2")
.to('#dot1', 21,{y:-1300,x:1000,transformOrigin:"center center",ease: geom_ease},"cb_2")
.to('#geom2', 1, {autoAlpha:1},"cb_1")
.to('#geom2', 17, {y:-1200,x:-1000,rotation:190,ease: geom_ease},"cb_2")
.to('#dot2', 19,{y:-1200,x:-1400,ease: geom_ease,delay:1.5},"cb_2")
.to('#geom3', 1, {autoAlpha:1},"cb_1")
.to('#geom3', 19, {y:-1100,x:300,rotation:90,ease: geom_ease},"cb_2")
.to('#dot3', 17,{y:-1100,x:300,ease: geom_ease},"cb_2")
.to('#geom4', 1, {autoAlpha:1},"cb_1")
.to('#geom4', 20, {y:-1200,x:1500,rotation:240,delay:2,ease: geom_ease},"cb_2")
.to('#geom5', 1, {autoAlpha:1},"cb_1")
.to('#geom5', 28, {y:-1200,x:-300,rotation:240,delay:3.5,transformOrigin:"center center",ease: geom_ease},"cb_2")
.to('#dot4', 22,{y:-1200,x:-300,ease: geom_ease,delay:5},"cb_2")
.to('#geom6', 1, {autoAlpha:1},"cb_1")
.to('#geom6',20, {y:-800,x:-1300,rotation:240,transformOrigin:"center center",ease: geom_ease},"cb_2")
.to('#cube1', 1, {autoAlpha:1},"cb_1")
.to('#cube1', 10,{y:-382,x:502,rotation:140,transformOrigin:"center center",delay:10,ease: geom_ease}, "cb_2")
.to('#cube-dot-1', 11,{x:-700,y:-300,ease: geom_ease,transformOrigin:"center center",delay:20},"cb_2")
.to('#cube-face-1', 10, {x:-700,y:200,rotation:240,ease: geom_ease,transformOrigin:"center center",delay:20},"cb_2")
.to('#cube-face-2', 10, {x:-800,y:-300,rotation:240,ease: geom_ease,transformOrigin:"center center",delay:20},"cb_2")
.to('#cube-face-3', 10, {x:-700,y:-600,rotation:180,ease: geom_ease,transformOrigin:"center center",delay:20},"cb_2")



var t_cube1 = new TimelineMax({paused: true,onComplete:function(){
    TweenLite.set('#cube-face-1, #cube-face-2, #cube-face-3', {clearProps:"all"});
    TweenLite.set('#cube1', {clearProps:"all"});
}})

// .to('#cube-dot-1', 30,{y:-500,ease: geom_ease, delay:22},"cb_2")
// .to('#cube-face-1', 2,{y:-100,x:-10,rotation:140,transformOrigin:"center center",delay:2,ease: geom_ease}, "cb_2")
// .to('#cube-face-2', 22,{x:-500,y:-200,rotation:170,delay:22,transformOrigin:"center center",ease: geom_ease}, "cb_2")
// .to('#cube-face-3', 25,{y:-800,x:0,rotation:240,delay:22,transformOrigin:"center center",ease: geom_ease}, "cb_2")
// .to('#cube2', 1, {autoAlpha:1},"cb_1")
// .to('#cube2', 22,{y:-1000,x:-1100,rotation:320,delay:20,ease: geom_ease}, "cb_2")
// .to('#cube-face-1a', 10,{y:-500,x:200,rotation:140,delay:28,ease: geom_ease}, "cb_2")
// .to('#cube-face-2a', 10,{y:700,x:-400,rotation:140,delay:28,ease: geom_ease}, "cb_2")
// .to('#cube-face-3a', 10,{y:-1000,x:800,rotation:140,delay:28,ease: geom_ease}, "cb_2")

var scratch = new TimelineMax({ repeat: -1, repeatDelay:3})
.to('.scratch__top', 1.5, {y:"-100%",x:"100%", ease:Power4.easeOut},"sc")
.to('.scratch__middle',1.8, {y:"-100%",x:"100%", ease:Power4.easeOut,delay:.2},"sc")
.to('.scratch__bottom',2.2, {y:"-100%",x:"100%", ease:Power4.easeOut,delay:.4},"sc")    
    

});



