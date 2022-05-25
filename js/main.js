$(document).ready(function() {
    $('.content-print__blocks-slaider').slick({


        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function() {
    $("#turn-off1").css("display", "none");
    $('#turn-on1').mouseenter(function() {
        $('#turn-on1').hide();
        $('#turn-off1').fadeIn("slow");
    })
    $('#turn-off1').mouseleave(function() {
        $('#turn-off1').hide();
        $('#turn-on1').fadeIn("slow");
    })

    $("#turn-off2").css("display", "none");
    $('#turn-on2').mouseenter(function() {
        $('#turn-on2').hide();
        $('#turn-off2').fadeIn("slow");
    })
    $('#turn-off2').mouseleave(function() {
        $('#turn-off2').hide();
        $('#turn-on2').fadeIn("slow");
    })

    $("#turn-off3").css("display", "none");
    $('#turn-on3').mouseenter(function() {
        $('#turn-on3').hide();
        $('#turn-off3').fadeIn("slow");
    })
    $('#turn-off3').mouseleave(function() {
        $('#turn-off3').hide();
        $('#turn-on3').fadeIn("slow");
    })

    $("#turn-off4").css("display", "none");
    $('#turn-on4').mouseenter(function() {
        $('#turn-on4').hide();
        $('#turn-off4').fadeIn("slow");
    })
    $('#turn-off4').mouseleave(function() {
        $('#turn-off4').hide();
        $('#turn-on4').fadeIn("slow");
    })

    $("#turn-off5").css("display", "none");
    $('#turn-on5').mouseenter(function() {
        $('#turn-on5').hide();
        $('#turn-off5').fadeIn("slow");
    })
    $('#turn-off5').mouseleave(function() {
        $('#turn-off5').hide();
        $('#turn-on5').fadeIn("slow");
    })

    $(".content-work__block-on").css("display", "none");
    $('.content-work__block-off').mouseenter(function() {
        $('.content-work__block-off').hide();
        $('.content-work__block-on').fadeIn("fast");
    })
    $('.content-work__block-on').mouseleave(function() {
        $('.content-work__block-on').hide();
        $('.content-work__block-off').fadeIn("fast");
    })

    $(".content-work__block-on-ad").css("display", "none");
    $('.content-work__block-off-ad').mouseenter(function() {
        $('.content-work__block-off-ad').hide();
        $('.content-work__block-on-ad').fadeIn("fast");
    })
    $('.content-work__block-on-ad').mouseleave(function() {
        $('.content-work__block-on-ad').hide();
        $('.content-work__block-off-ad').fadeIn("fast");
    })

    $(".content-work__block-on-logo").css("display", "none");
    $('.content-work__block-off-logo').mouseenter(function() {
        $('.content-work__block-off-logo').hide();
        $('.content-work__block-on-logo').fadeIn("fast");
    })
    $('.content-work__block-on-logo').mouseleave(function() {
        $('.content-work__block-on-logo').hide();
        $('.content-work__block-off-logo').fadeIn("fast");
    })

    $(".content-work__block-on-print").css("display", "none");
    $('.content-work__block-off-print').mouseenter(function() {

        $('.content-work__block-off-print').hide();
        $('.content-work__block-on-print').fadeIn("fast");
    })
    $('.content-work__block-on-print').mouseleave(function() {
        $('.content-work__block-on-print').hide();
        $('.content-work__block-off-print').fadeIn("fast");
    })
});