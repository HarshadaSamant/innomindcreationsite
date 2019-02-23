/*-----------------------------testimonial------------------------------------------*/
var jq = jQuery.noConflict();

jq(document).ready(function(){
    jq("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});
