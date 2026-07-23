$(function() {   
// this bring to the top of the page - ice.html
    $('#collapseOne').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
$('#collapseTwo').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
$('#collapseThree').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })
$('#collapseFour').on('shown.bs.collapse', function playVid() {
$("html, body").animate({ scrollTop: $('#accordion').offset().top }, 1000);
     })

});


