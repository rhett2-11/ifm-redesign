// scrollTop is the vertical still position
var scrollTop = $(document).scrollTop();
// scrollLeft is the horizontal still position        
var scrollLeft = $(document).scrollLeft();
var headerHeight = $('.nav-button').outerHeight();

$(window).scroll(function() {
    // scrolledTop is new vertical position just obtained
    var scrolledTop = $(document).scrollTop();

    // optionally emulate non-fixed positioning behavior
    if (scrolledTop > headerHeight){
        $('.nav-button').addClass('mobile-nav-off-canvas');
        $('.nav-menu').addClass('desktop-nav-off-canvas');
        $('.top-nav').addClass('top-nav-off-canvas');
    } else {
        $('.nav-button').removeClass('mobile-nav-off-canvas');     
        $('.nav-menu').removeClass('desktop-nav-off-canvas');
        $('.top-nav').removeClass('top-nav-off-canvas');                
    }

    if (scrolledTop > scrollTop){
        // scrolling down
        if($(window).scrollTop() <= 0) {
            $('.nav-button').removeClass('mobile-nav-off-canvas');     
            $('.nav-menu').removeClass('desktop-nav-off-canvas');
            $('.top-nav').removeClass('top-nav-off-canvas');                    
                    
        }

    } else {
        //scrolling up
        $('.nav-button').removeClass('mobile-nav-off-canvas');
        $('.nav-menu').removeClass('desktop-nav-off-canvas'); 
        $('.top-nav').removeClass('top-nav-off-canvas');                               
    }

    scrollTop = $(document).scrollTop();

    // if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //     $('.nav-button').addClass('mobile-nav-off-canvas');
    //     $('.nav-menu').addClass('desktop-nav-off-canvas');
    //     $('.top-nav').addClass('top-nav-off-canvas');
    // } else {
    //     $('.nav-button').removeClass('mobile-nav-off-canvas');     
    //     $('.nav-menu').removeClass('desktop-nav-off-canvas');
    //     $('.top-nav').removeClass('top-nav-off-canvas');                
    // }

});

$("#showMenu").click(function(){
    $('#hideMenu').removeClass('bounceOutDown');            
    $('#showMenu').addClass('bounceOutDown');
    $('#showMenu').addClass('hideButton');
    $('#rightNavArrow').addClass('animated fadeInRight');
    $('#hideMenu').removeClass('hideButton');
    $('.nav-menu').toggleClass('show-nav-menu');
    $('main').toggleClass('glass-overlay');
});

$("#hideMenu").click(function(){
    $('#showMenu').removeClass('bounceOutDown');            
    $('#hideMenu').addClass('bounceOutDown');
    $('#hideMenu').addClass('hideButton');
    $('#rightNavArrow').removeClass('animated fadeInRight');            
    $('#showMenu').removeClass('hideButton');
    $('.nav-menu').toggleClass('show-nav-menu');
    $('main').toggleClass('glass-overlay');
});

//show and hide nav arrows based on horizontal scrolling location
$(".menu-items").on("scroll", function (e) {
    
    var horizontal = e.currentTarget.scrollLeft;

    if (horizontal > 100){
        $("#leftNavArrow").removeClass('animated fadeOutLeft'); 
        $("#leftNavArrow").addClass('animated fadeInLeft'); 
    } else {
        $("#leftNavArrow").addClass('animated fadeOutLeft');         
    }

    if (horizontal > 300){
        $("#rightNavArrow").addClass('animated fadeOutRight'); 
    } else {
        $("#rightNavArrow").removeClass('animated fadeOutRight');         
        $("#rightNavArrow").addClass('animated fadeInRight');         
    }
});

//click arrows to scroll to mobile horizontal nav links
$(document).on('click', '#rightNavArrow', function (event) {
    event.preventDefault();
    $('.menu-items').animate({
        scrollLeft: $($.attr(this, 'href')).offset().left
    }, 2000);
});

$(document).on('click', '#leftNavArrow', function (event) {
    event.preventDefault();
    $('.menu-items').animate({
        scrollLeft: $($.attr(this, 'href')).offset().left
    }, 2000);
});

//active nav link
var page = location.pathname.split('/').pop();
$('.menu-items a[href="' + page + '"]').addClass('active')

$(document).ready(function(){
	$('#navBack').click(function(){
        $("#navBack").removeClass('fa-arrow-left');                         
        $("#navBack").addClass('fa-circle-notch fa-spin');                         
        parent.history.back();
        return false;
        $("#navBack").removeClass('fa-circle-notch fa-spin');                                                                     
        $("#navBack").addClass('fa-arrow-left');                                                                     
    });
});

// loader
function id(v){return document.getElementById(v); }

function loadbar() {
    var ovrl = id("loaderOverlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
        c += 1;
        var perc = ((100/tot*c) << 0) +"%";
        prog.style.width = perc;
        stat.innerHTML = perc;
        if(c===tot) return doneLoading();
    }
    function doneLoading(){
        $('#loaderOverlay img').removeClass('fadeIn');
        // $('#loaderOverlay img').addClass('fadeOut');
        $('#progress').addClass('fadeOut');
        $('#progstat').addClass('fadeOut');

        setTimeout(function(){ 
            $('#loaderOverlay img').addClass('bounceOut');             
        }, 500);

        setTimeout(function(){ 
            ovrl.style.opacity = 0;      
        }, 1000);

        setTimeout(function(){ 
            $('#showMenu').removeClass('bounceOut');                                  
            $('#showMenu').addClass('bounceInUp');
        }, 1500);

        setTimeout(function(){ 
            ovrl.style.display = "none";                                
        }, 1800);
    }
    for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
    }    
}

document.addEventListener('DOMContentLoaded', loadbar, false);


