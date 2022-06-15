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
    $('.button-close').click(function() {
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
    $('.button-close').click(function() {
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
    $('.button-close').click(function() {
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
    $('.button-close').click(function() {
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
    $('.button-close').click(function() {
        $('#turn-off5').hide();
        $('#turn-on5').fadeIn("slow");
    })
    $("#turn-off6").css("display", "none");
    $('#turn-on6').mouseenter(function() {
        $('#turn-on6').hide();
        $('#turn-off6').fadeIn("slow");
    })
    $('#turn-off6').mouseleave(function() {
        $('#turn-off6').hide();
        $('#turn-on6').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off6').hide();
        $('#turn-on6').fadeIn("slow");
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


$("#side-menu__block2").css("display", "none");
$('#side-menu__block1').click(function() {
    $('#side-menu__block1').hide();
    $('#side-menu__block2').fadeIn("slow");
})
$('#side-menu__block1').mouseenter(function() {
    $(".side-menu__arrow").animate({
        'margin-top': '28px'
    }, 1500);
})
$('#side-menu__block1').mouseleave(function() {
    $(".side-menu__arrow").animate({
        'margin-top': '247px'
    }, 1500);
})
$('#side-menu__block2').mouseleave(function() {
    $('#side-menu__block2').hide();
    $('#side-menu__block1').fadeIn("slow");
})
$('.side-menu__link').click(function() {
    $('#side-menu__block2').hide();
    $('#side-menu__block1').fadeIn("slow");
})




$('#side-menu-link1').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '4px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '15px',
            'width': '210px'
        }, 0);
    });
})



$('#side-menu-link2').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '40px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '50px',
            'width': '185px'
        }, 0);
    });
})

$('#side-menu-link3').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '76px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '85px',
            'width': '190px'
        }, 0);
    });
})


$('#side-menu-link4').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '110px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '120px',
            'width': '205px'
        }, 0);
    });
})

$('#side-menu-link5').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '145px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '155px',
            'width': '195px'
        }, 0);
    });
})


$('#side-menu-link6').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '180px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '190px',
            'width': '187px'
        }, 0);
    });
})

$('#side-menu-link7').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '215px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '225px',
            'width': '187px'
        }, 0);
    });
})


$('#side-menu-link8').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '250px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '260px',
            'width': '190px'
        }, 0);
    });
})


$('#side-menu-link9').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '285px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '295px',
            'width': '205px'
        }, 0);
    });
})

$('#side-menu-link10').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '320px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '330px',
            'width': '168px'
        }, 0);
    });
})

$('#side-menu-link11').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '355px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '365px',
            'width': '190px'
        }, 0);
    });
})

$('#side-menu-link12').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '390px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '400px',
            'width': '242px'
        }, 0);
    });
})

$('#side-menu-link13').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '425px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '435px',
            'width': '225px'
        }, 0);
    });
})

$('#side-menu-link14').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '460px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '470px',
            'width': '87px'
        }, 0);
    });
})

$('#side-menu-link15').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '495px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '505px',
            'width': '188px'
        }, 0);
    });
})

$('#side-menu-link16').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '530px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '540px',
            'width': '220px'
        }, 0);
    });
})

$('#side-menu-link17').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '565px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '575px',
            'width': '185px'
        }, 0);
    });
})

$('#side-menu-link18').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '600px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '610px',
            'width': '255px'
        }, 0);
    });
})

$('#side-menu-link19').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '635px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '645px',
            'width': '47px'
        }, 0);
    });
})


//меню для наружной рекламы

$('#side-menu-link21').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '4px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '15px',
            'width': '125px'
        }, 0);
    });
})



$('#side-menu-link22').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '40px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '50px',
            'width': '165px'
        }, 0);
    });
})

$('#side-menu-link23').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '76px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '85px',
            'width': '273px'
        }, 0);
    });
})


$('#side-menu-link24').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '110px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '120px',
            'width': '180px'
        }, 0);
    });
})

$('#side-menu-link25').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '145px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '155px',
            'width': '300px'
        }, 0);
    });
})


$('#side-menu-link26').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '180px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '190px',
            'width': '290px'
        }, 0);
    });
})

$('#side-menu-link27').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '215px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '225px',
            'width': '70px'
        }, 0);
    });
})


$('#side-menu-link28').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '250px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '260px',
            'width': '160px'
        }, 0);
    });
})


$('#side-menu-link29').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '285px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '295px',
            'width': '285px'
        }, 0);
    });
})

$('#side-menu-link30').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '320px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '330px',
            'width': '215px'
        }, 0);
    });
})

$('#side-menu-link31').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '355px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '365px',
            'width': '93px'
        }, 0);
    });
})

$('#side-menu-link32').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '390px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '400px',
            'width': '198px'
        }, 0);
    });
})

$('#side-menu-link33').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '425px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '435px',
            'width': '50px'
        }, 0);
    });
})

$('#side-menu-link34').mouseenter(function() {
    $('.side-menu__circle1').animate({
        'margin-top': '460px'
    }, 0, function() {
        $('.side-menu__line').animate({
            'margin-top': '470px',
            'width': '110px'
        }, 0);
    });
})