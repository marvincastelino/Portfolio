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

var vid = document.getElementById("vid_frame");
var vid1 = document.getElementById("vid_frame1");

$(function() {   
// this bring to the top of the page - ice.html
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



$('.expander').click(function(){
    var idToToggle = $(this).attr('href');
    $(idToToggle).collapse('toggle');
});

});


