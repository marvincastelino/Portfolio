function ytPlay(el) {
  if (!el) return;
  if (el.tagName === 'IFRAME') {
    var base = el.getAttribute('data-base-src') || el.src.split('?')[0];
    if (!el.getAttribute('data-base-src')) el.setAttribute('data-base-src', base);
    el.src = base + '?rel=0&autoplay=1';
  } else if (el.play) {
    el.currentTime = 0;
    el.play();
  }
}
function ytPause(el) {
  if (!el) return;
  if (el.tagName === 'IFRAME') {
    var base = el.getAttribute('data-base-src') || el.src.split('?')[0];
    el.src = base + '?rel=0';
  } else if (el.pause) {
    el.pause();
  }
}

var vid0 = document.getElementById("vid_frame0");
var vid = document.getElementById("vid_frame");
var vid1 = document.getElementById("vid_frame1");
var vid2 = document.getElementById("vid_frame2");
var vid3 = document.getElementById("vid_frame3");
$(function() {   
// this bring to the top of the page - ice.html
$('#collapseZero').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid0);
 })
$('#collapseZero').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid0);
 }) 
$('#collapseOne').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid);
 })
$('#collapseOne').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid);
 }) 

$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid1);
 })
$('#collapseTwo').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid1);
 })            
// to control the video when collapse if show and hide
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid2);
 })
$('#collapseThree').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid2);
 })

 $('#collapseFour').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid3);
 })
$('#collapseFour').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid3);
 })

$('.expander').click(function(){
    var idToToggle = $(this).attr('href');
    $(idToToggle).collapse('toggle');
});

});


