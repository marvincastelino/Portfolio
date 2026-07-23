var vid = document.getElementById("vid_frame");
var vid1 = document.getElementById("vid_frame1");
$(function() {   
// this bring to the top of the page - ice.html
$('#collapseOne').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid.currentTime = 0;
vid.volume = 0.2;     
vid.play();
 })
$('#collapseOne').on('hide.bs.collapse', function pauseVid() {         
         vid.pause();
 }) 

$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid1.currentTime = 0;
vid1.volume = 0.2;     
vid1.play();
 })
$('#collapseTwo').on('hide.bs.collapse', function pauseVid() {         
         vid1.pause();
 })            
// to control the video when collapse if show and hide
     
});


