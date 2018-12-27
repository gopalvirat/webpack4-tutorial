$( window ).on("load", function() {
  
  TweenMax.to(".paper_c-cont img", 1, {scale:1,rotation:180});
  TweenMax.to(".paper2 img", 1.5, {scale:1,rotation:180});


  $(".home__frontview").mousemove(function(e) {
    parallaxposter(e, ".home__slide--t-top", -80); 
    parallaxposter(e, ".home__slide--t-bottom", 60);    
});

function parallaxposter(e, target, movement) {
    var $this = $(".home__frontview");
    var relX = e.pageX - $this.offset().left;
    
    TweenMax.to(target, 2, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
    
    })
}
 });