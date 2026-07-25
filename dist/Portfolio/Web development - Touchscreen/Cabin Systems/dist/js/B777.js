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
// this bring to the top of the page
$('#collapseOne').on('shown.bs.collapse', function () {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
$('#collapseTwo').on('shown.bs.collapse', function () {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
ytPlay(vid);
     })
$('#collapseThree').on('shown.bs.collapse', function () {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
$('#collapseFour').on('shown.bs.collapse', function () {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
// $('#Mobile').on('shown.bs.collapse', function () {
//     vid.currentTime = 0;
// vid.play();
// })
// $('#Mobile').on('hidden.bs.collapse', function () {
//     ytPause(vid);
// })
// $("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
//      })
// $('#collapseSix').on('show.bs.collapse', function () {
// $("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
//      })
// $('#collapseSeven').on('show.bs.collapse', function () {
// $("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200);
//      })
// $('#Wi-Fi').on('shown.bs.tab', function playVid() {
//  vid.currentTime = 0;
//  vid.play();
//  })
// $('#Wi-Fi').on('hidden.bs.tab', function playVid() { 
//  ytPause(vid);
//  })
// $('#Mobile').on('shown.bs.tab', function playVid() {
//  vid.currentTime = 0;
//  vid.play();
//  })
// $('#Mobile').on('shown.bs.tab', function playVid() {
//  ytPause(vid);
//  })       


});


