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

var vid1 = document.getElementById("vid_frame1");
var vid0 = document.getElementById("vid_frame0");
var vid2 = document.getElementById("vid_frame2");
var vid3 = document.getElementById("vid_frame3");
var vid4 = document.getElementById("vid_frame4");
var vid5 = document.getElementById("vid_frame5");
var vid6 = document.getElementById("vid_frame6");
var vid7 = document.getElementById("vid_frame7");
var vid8 = document.getElementById("vid_frame8");
var vid9 = document.getElementById("vid_frame9");
$(function() {   
// this bring to the top of the page - ice.html
$('#collapseOne').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid1);
 })
$('#collapseOne').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid1);
 }) 

$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid2);
 })
$('#collapseTwo').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid2);
 })            
// to control the video when collapse if show and hide
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid3);
 })
$('#collapseThree').on('hide.bs.collapse', function pauseVid() {         
         ytPause(vid3);
 })
$('#collapseFour').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid4);
})
$('#collapseFour').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid4);
})
$('#collapseFive').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid5);
})
$('#collapseFive').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid5);
})
$('#collapseSix').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseSix').offset().top }, 200); 
ytPlay(vid6);
})
$('#collapseSix').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid6);
})
$('#collapseSeven').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseSeven').offset().top }, 200); 
ytPlay(vid7);
})
$('#collapseSeven').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid7);
})
$('#collapseEight').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseEight').offset().top }, 200); 
ytPlay(vid8);
})
$('#collapseEight').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid8);
})
$('#collapseNine').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseNine').offset().top }, 200); 
ytPlay(vid9);
})
$('#collapseNine').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid9);
})
$('#collapseZero').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
ytPlay(vid0);
})
$('#collapseNine').on('hide.bs.collapse', function pauseVid() {         
        ytPause(vid0);
})



});


