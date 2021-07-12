var vid0 = document.getElementById("vid_frame0");
var vid = document.getElementById("vid_frame");
var vid1 = document.getElementById("vid_frame1");
var vid2 = document.getElementById("vid_frame2");
var vid3 = document.getElementById("vid_frame3");
$(function() {   
// this bring to the top of the page - ice.html
$('#collapseZero').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid0.currentTime = 0;
vid0.volume = 0.5;     
vid0.play();
 })
$('#collapseZero').on('hide.bs.collapse', function pauseVid() {         
         vid0.pause();
 }) 
$('#collapseOne').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid.currentTime = 0;
vid.volume = 0.5;     
vid.play();
 })
$('#collapseOne').on('hide.bs.collapse', function pauseVid() {         
         vid.pause();
 }) 

$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid1.currentTime = 0;
vid1.volume = 0.5;     
vid1.play();
 })
$('#collapseTwo').on('hide.bs.collapse', function pauseVid() {         
         vid1.pause();
 })            
// to control the video when collapse if show and hide
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid2.currentTime = 3;
vid2.volume = 0.5;     
vid2.play();
 })
$('#collapseThree').on('hide.bs.collapse', function pauseVid() {         
         vid2.pause();
 })

 $('#collapseFour').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid3.currentTime = 0;
vid3.volume = 0.5;     
vid3.play();
 })
$('#collapseFour').on('hide.bs.collapse', function pauseVid() {         
         vid3.pause();
 })

$('.expander').click(function(){
    var idToToggle = $(this).attr('href');
    $(idToToggle).collapse('toggle');
});

});


