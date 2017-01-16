// 使背景图片高度与窗口适应
$(function (){
    $(window).ready(function(){
        $(".fill-screen").css("height", window.innerHeight);
    });
    $(window).on("resize", function(){
        $(".fill-screen").css("height", window.innerHeight);
    });

// add bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

// add scrollspy smoothly
    $('nav a, .down-button a').click(function(){
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
          },1500,'easeInOutExpo');

    });

// parallax scrolling with stellar
    $(window).stellar();

    //nanogallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery();
    });
});

// $("#video-wallpaper").wallpaper({
//   source: {
//     poster:"background.jpg",
//     // mp4:"background.mp4",
//     // ogg:"background.ogg",
//     // webm:"background.webm",
//     video:"//www.youtube.com/embed/OzlGAXL-bPY"
//   }
// });
// header{display:block;position:relative;height:auto;}

//animation
new WOW().init();
