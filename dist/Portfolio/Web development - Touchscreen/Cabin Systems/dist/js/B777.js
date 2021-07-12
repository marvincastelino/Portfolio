var vid = document.getElementById("myVideo");
$(function() {   
// this bring to the top of the page
$('#collapseOne').on('shown.bs.collapse', function () {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
$('#collapseTwo').on('shown.bs.collapse', function () {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
vid.currentTime = 0;
vid.play();
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
//     vid.pause();
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
//  vid.pause();
//  })
// $('#Mobile').on('shown.bs.tab', function playVid() {
//  vid.currentTime = 0;
//  vid.play();
//  })
// $('#Mobile').on('shown.bs.tab', function playVid() {
//  vid.pause();
//  })       


});


