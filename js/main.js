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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function() {
    $("#turn-off1").css("display", "none");
    $('#turn-on1').click(function() {
        $('#turn-on1').hide();
        $('#turn-off1').fadeIn("slow");
    })
    $('#turn-off1').click(function() {
        $('#turn-off1').hide();
        $('#turn-on1').fadeIn("slow");
    })

    $("#turn-off2").css("display", "none");
    $('#turn-on2').click(function() {
        $('#turn-on2').hide();
        $('#turn-off2').fadeIn("slow");
    })
    $('#turn-off2').click(function() {
        $('#turn-off2').hide();
        $('#turn-on2').fadeIn("slow");
    })

    $("#turn-off3").css("display", "none");
    $('#turn-on3').click(function() {
        $('#turn-on3').hide();
        $('#turn-off3').fadeIn("slow");
    })
    $('#turn-off3').click(function() {
        $('#turn-off3').hide();
        $('#turn-on3').fadeIn("slow");
    })

    $("#turn-off4").css("display", "none");
    $('#turn-on4').click(function() {
        $('#turn-on4').hide();
        $('#turn-off4').fadeIn("slow");
    })
    $('#turn-off4').click(function() {
        $('#turn-off4').hide();
        $('#turn-on4').fadeIn("slow");
    })

    $("#turn-off5").css("display", "none");
    $('#turn-on5').click(function() {
        $('#turn-on5').hide();
        $('#turn-off5').fadeIn("slow");
    })
    $('#turn-off5').click(function() {
        $('#turn-off5').hide();
        $('#turn-on5').fadeIn("slow");
    })

    $(".content-work__block-on").css("display", "none");
    $('.content-work__block-off').click(function() {
        $('.content-work__block-off').hide();
        $('.content-work__block-on').fadeIn("fast");
    })
    $('.content-work__block-on').click(function() {
        $('.content-work__block-on').hide();
        $('.content-work__block-off').fadeIn("fast");
    })

    $(".content-work__block-on-ad").css("display", "none");
    $('.content-work__block-off-ad').click(function() {
        $('.content-work__block-off-ad').hide();
        $('.content-work__block-on-ad').fadeIn("fast");
    })
    $('.content-work__block-on-ad').click(function() {
        $('.content-work__block-on-ad').hide();
        $('.content-work__block-off-ad').fadeIn("fast");
    })

    $(".content-work__block-on-logo").css("display", "none");
    $('.content-work__block-off-logo').click(function() {
        $('.content-work__block-off-logo').hide();
        $('.content-work__block-on-logo').fadeIn("fast");
    })
    $('.content-work__block-on-logo').click(function() {
        $('.content-work__block-on-logo').hide();
        $('.content-work__block-off-logo').fadeIn("fast");
    })

    $(".content-work__block-on-print").css("display", "none");
    $('.content-work__block-off-print').click(function() {

        $('.content-work__block-off-print').hide();
        $('.content-work__block-on-print').fadeIn("fast");
    })
    $('.content-work__block-on-print').click(function() {
        $('.content-work__block-on-print').hide();
        $('.content-work__block-off-print').fadeIn("fast");
    })
});