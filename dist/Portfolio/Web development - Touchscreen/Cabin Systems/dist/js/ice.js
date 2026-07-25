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
ytPlay(vid);
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
ytPlay(vid);
 })
$('#collapseThree').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid);
 })      
});


