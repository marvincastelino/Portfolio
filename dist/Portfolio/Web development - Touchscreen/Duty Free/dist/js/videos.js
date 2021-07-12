var vid = document.getElementById("vid_frame");
var vid1 = document.getElementById("vid_frame1");
var vid2 = document.getElementById("vid_frame2");
$(function() {   
// this bring to the top of the page - ice.html
$('#collapseFive').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid.currentTime = 0;
vid.volume = 0.2;     
vid.play();
 })
$('#collapseFive').on('hide.bs.collapse', function pauseVid() {         
         vid.pause();
 }) 

$('#collapseSix').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid1.currentTime = 0;
vid1.volume = 0.2;     
vid1.play();
 })
$('#collapseSix').on('hide.bs.collapse', function pauseVid() {         
         vid1.pause();
 })            
// to control the video when collapse if show and hide
$('#collapseSeven').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid2.currentTime = 0; 
vid2.volume = 0.2;    
vid2.play();
 })
$('#collapseSeven').on('hide.bs.collapse', function pauseVid() {         
         vid2.pause();
 })      
});


