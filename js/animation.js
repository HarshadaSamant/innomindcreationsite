$(document).ready(function(){

  /*-------animations on scroll------*/
    $('#type').waypoint(function(direction){
      // $('#type').addClass('animated');
      typeWriter();
    }, {
      offset: '10%'
    });

/*-----------typewriter animation------------*/
    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    var speed = 50;

    function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    }
})
