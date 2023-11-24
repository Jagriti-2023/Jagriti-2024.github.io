let ttl = gsap.timeline();
ttl.from('#road',{
  opacity:0,
     y: 25,
    duration:2
}).from('#house',{
  opacity:0,
     y: 25,
    duration:2
}).from('#branch1',{
  opacity:0,
     x: 25,
    duration:2
}).from('#branch2',{
  opacity:0,
     x: -25,
    duration:2
}).from('#month',{
    opacity:0,
     onStart: function () {
        $('#month').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    },
    duration:1

}).from('#date_d',{
    opacity:0,
     onStart: function () {
        $('#date_d').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    },
    duration:1

}).from('#gcect_text',{
    opacity:0,
    x:-20,
    duration:1
}).from('#gcect_ev',{
    opacity:0,
    
    x:-20,
    duration:1

    
}).from('#btn_play',{
  opacity:0,
  y:20,
  duration:2
})



gsap.from('#bat',{
opacity:0,
duration:2.5,
repeat:-1

})


var swiper = new Swiper('.blog-slider', {
    autoplay: {
    delay: 5000,
  }, 
     spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
       //autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });



    $(function(){
var overlay = $('<div id="overlay"></div>');
overlay.show();
overlay.appendTo(document.body);
$('.popup').show();
$('.close').click(function(){
$('.popup').hide();
overlay.appendTo(document.body).remove();
return false;
});


 

$('.x').click(function(){
$('.popup').hide();
overlay.appendTo(document.body).remove();
return false;
});
});


// clock

$(document).ready(function() {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2023-04-07 15:59", "Asia/Kolkata");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: false,
      autostart: false
    });
    console.log("Date has already passed!")
    document.getElementById('clock').style.display = 'none';
    document.getElementById('pop_up').style.display='none';
  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!")
        }
      }
    });
    
    // Check when timer reaches 0, then stop at 0
    setTimeout(function() {
      checktime();
    }, 1000);
    
    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});

// navbar

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


document.getElementById('mhome').addEventListener('click',()=>{
  window.location.href = '#home'
  document.getElementById("mySidenav").style.width = "0";
})

document.getElementById('mabout').addEventListener('click',()=>{
  window.location.href = '#about'
  document.getElementById("mySidenav").style.width = "0";
})
document.getElementById('mevents').addEventListener('click',()=>{
  window.location.href = '#events'
  document.getElementById("mySidenav").style.width = "0";
})
document.getElementById('mgallery').addEventListener('click',()=>{
  window.location.href = '#gallery'
  document.getElementById("mySidenav").style.width = "0";
})
document.getElementById('msponsors').addEventListener('click',()=>{
  window.location.href = '#sponsors'
  document.getElementById("mySidenav").style.width = "0";
})
document.getElementById('mteam').addEventListener('click',()=>{
  window.location.href = '#team'
  document.getElementById("mySidenav").style.width = "0";
})
document.getElementById('mcontact').addEventListener('click',()=>{
  window.location.href = '#contact'
  document.getElementById("mySidenav").style.width = "0";
})