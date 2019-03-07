var jq = jQuery.noConflict();

jq(document).ready(function()
{
  /*-------For sticky navigation------*/
  //   jq('.js--section-features').waypoint(function(direction) {
  //     if (direction == "down") {
  //         jq('#header').addClass('sticky');
  //     } else {
  //         jq('#header').removeClass('sticky');
  //     }
  //     }, {
  //       offset: '60px'
  //   });
  // /*-------Scroll on buttons------*/
  //   jq('.js--scroll-to-plans').click(function() {
  //     jq('html, body').animate({scrollTop: jq('.js--section-plans').offset().top}, 1000);
  //   });
  //   jq('.js--scroll-to-start').click(function(){
  //     jq('html, body').animate({scrollTop: jq('.js--section-features').offset().top}, 1000);
  //   });
  //   /*-------navigation scroll------*/
  //   jq(function() {
  //       jq('a[href*=#]:not([href=#])').click(function() {
  //           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //               var target = jq(this.hash);
  //               target = target.length ? target : jq('[name=' + this.hash.slice(1) +']');
  //                 if (target.length) {
  //                   jq('html,body').animate({scrollTop: target.offset().top}, 1000);
  //                   return false;
  //               }
  //           }
  //       });
  //   });
    /*-------animations on scroll------*/
    // jq('.js--wp1').waypoint(function(direction){
    //   jq('.js--wp1').addClass('animated fadeIn');
    // }, {
    //   offset: '60%'
    // });

    jq('.js--wp2').waypoint(function(direction){
      jq('.js--wp2').addClass('animated fadeInUp');
    }, {
      offset: '80%'
    });

    jq('.js--wp3').waypoint(function(direction){
      jq('.js--wp3').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    jq('.js--wp4').waypoint(function(direction){
      jq('.js--wp4').addClass('animated pulse');
    }, {
      offset: '40%'
    });



    jq('.js--mobile-nav-icon').click(function() {
      var nav = jq('.js--main-nav');
     /* var icon = jq('.js--mobile-nav-icon .ion-icon'); */
      nav.slideToggle(200)
     /* if (icon.hasClass('.ion-icon')) {
        icon.addClass('<ion-icon name="close">');
        icon.removeClass('.ion-icon');
      } else {
        icon.addClass('.ion-icon');
        icon.removeClass('<ion-icon name="close">');
      } */
    });
});
