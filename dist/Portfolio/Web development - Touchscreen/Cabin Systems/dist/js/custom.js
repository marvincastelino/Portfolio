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
var vid2 = document.getElementById("vid_frame2");
var vid3 = document.getElementById("vid_frame3");
var vid4 = document.getElementById("vid_frame4");
var vid5 = document.getElementById("vid_frame5");
var vid6 = document.getElementById("vid_frame6");
var vid7 = document.getElementById("vid_frame7");
var vid8 = document.getElementById("vid_frame8");
var vid9 = document.getElementById("vid_frame9");
var vid10 = document.getElementById("vid_frame10");
var vid11 = document.getElementById("vid_frame11");
var vid12 = document.getElementById("vid_frame12");
var vid13 = document.getElementById("vid_frame13");
var vid14 = document.getElementById("vid_frame14");

$(function() {   
$('#a').on('shown.bs.tab', function playVid() {
ytPlay(vid1);
 })
$('#a').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid1);
}) 

$('#b').on('shown.bs.tab', function playVid() {
ytPlay(vid2);
 })
$('#b').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid2);
 })

$('#c').on('shown.bs.tab', function playVid() {
ytPlay(vid3);
 })
$('#c').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid3);
})
$('#d').on('shown.bs.tab', function playVid() {
ytPlay(vid4);
 })
$('#d').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid4);
})
$('#e').on('shown.bs.tab', function playVid() {
ytPlay(vid5);
 })
$('#e').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid5);
})
$('#f').on('shown.bs.tab', function playVid() {
ytPlay(vid6);
 })
$('#f').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid6);
})
$('#g').on('shown.bs.tab', function playVid() {
ytPlay(vid7);
 })
$('#g').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid7);
}) 

$('#h').on('shown.bs.tab', function playVid() {
ytPlay(vid8);
 })
$('#h').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid8);
 })

$('#i').on('shown.bs.tab', function playVid() {
ytPlay(vid9);
 })
$('#i').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid9);
})
$('#j').on('shown.bs.tab', function playVid() {
ytPlay(vid10);
 })
$('#j').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid10);
})
$('#k').on('shown.bs.tab', function playVid() {
ytPlay(vid11);
 })
$('#k').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid11);
})
$('#l').on('shown.bs.tab', function playVid() {
ytPlay(vid12);
 })
$('#l').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid12);
})
$('#m').on('shown.bs.tab', function playVid() {
ytPlay(vid13);
 })
$('#m').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid13);
}) 

$('#n').on('shown.bs.tab', function playVid() {
ytPlay(vid14);
 })
$('#n').on('hidden.bs.tab', function pauseVid() {         
         ytPause(vid14);
 })


});       