    //  loader
$(window).on("load",function(){
     $(".loader-container").fadeOut(1500);
});
  //  toggle-button
$(".toggle").click(function () {
    $(".responsive").slideToggle("fast", function () {});
  });
    //   b-carousel
$('.b-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplaySpeed: 500,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    // t-carousel
$('.t-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplaySpeed: 500,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    //   window on scroll
$(window).on("scroll",function(){
    if ($(window).scrollTop()) {
        $('nav').addClass("white");
        $(".logo h2").addClass("black");
        $(".call a").addClass("black");
        $(".nav li a").addClass("black");
    }
    else{
        $('nav').removeClass('white');
        $(".logo h2").removeClass("black");
        $(".call h4").removeClass("black");
        $(".nav li a").removeClass("black");
    }
})
