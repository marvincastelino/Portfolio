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
vid1.currentTime = 0;
vid1.volume = 0.2;     
vid1.play();
 })
$('#collapseOne').on('hide.bs.collapse', function pauseVid() {         
         vid1.pause();
 }) 

$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid2.currentTime = 0;
vid2.volume = 0.2;     
vid2.play();
 })
$('#collapseTwo').on('hide.bs.collapse', function pauseVid() {         
         vid2.pause();
 })            
// to control the video when collapse if show and hide
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid3.currentTime = 0; 
vid3.volume = 0.3;    
vid3.play();
 })
$('#collapseThree').on('hide.bs.collapse', function pauseVid() {         
         vid3.pause();
 })
$('#collapseFour').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid4.currentTime = 0; 
vid4.volume = 0.5;    
vid4.play();
})
$('#collapseFour').on('hide.bs.collapse', function pauseVid() {         
        vid4.pause();
})
$('#collapseFive').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid5.currentTime = 0; 
vid5.volume = 0.5;    
vid5.play();
})
$('#collapseFive').on('hide.bs.collapse', function pauseVid() {         
        vid5.pause();
})
$('#collapseSix').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseSix').offset().top }, 200); 
vid6.currentTime = 0; 
vid6.volume = 0.2;    
vid6.play();
})
$('#collapseSix').on('hide.bs.collapse', function pauseVid() {         
        vid6.pause();
})
$('#collapseSeven').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseSeven').offset().top }, 200); 
vid7.currentTime = 0; 
vid7.volume = 0.2;    
vid7.play();
})
$('#collapseSeven').on('hide.bs.collapse', function pauseVid() {         
        vid7.pause();
})
$('#collapseEight').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseEight').offset().top }, 200); 
vid8.currentTime = 0; 
vid8.volume = 0.2;    
vid8.play();
})
$('#collapseEight').on('hide.bs.collapse', function pauseVid() {         
        vid8.pause();
})
$('#collapseNine').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#collapseNine').offset().top }, 200); 
vid9.currentTime = 0; 
vid9.volume = 0.2;    
vid9.play();
})
$('#collapseNine').on('hide.bs.collapse', function pauseVid() {         
        vid9.pause();
})
$('#collapseZero').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 200); 
vid0.currentTime = 0; 
vid0.volume = 0.2;    
vid0.play();
})
$('#collapseNine').on('hide.bs.collapse', function pauseVid() {         
        vid0.pause();
})



});


