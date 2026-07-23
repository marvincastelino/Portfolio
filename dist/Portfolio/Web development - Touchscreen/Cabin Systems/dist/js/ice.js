var vid = document.getElementById("myVideo");
$(function() {   
// this bring to the top of the page - ice.html
    $('#collapseOne').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
     })
$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
     })
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
vid.currentTime = 0;     
vid.play();
     })
$('#collapsefour').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
     })
$('#collapsefive').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
     })
// to control the video when collapse if show and hide
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid.currentTime = 0;     
vid.play();
 })
$('#collapseThree').on('hide.bs.collapse', function pauseVid() {         
         vid.pause();
 })      
});


