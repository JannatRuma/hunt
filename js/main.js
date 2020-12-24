$(function () {
    //    smooth scroll of menu
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
    //    end of smooth scroll
    //    bannar slider srart
    $('#bannar-full').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fas fa-arrow-circle-left"></i>',
        nextArrow: '<i class="fas fa-arrow-circle-right"></i>',
        fade: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
    //    portfolio slider
    $('.portfolio-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
  ]
    });
    //    portfolio lightshot+ team part lightshot
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    //    client slider
    $('.client-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="far fa-chevron-circle-up"></i>',
        nextArrow: '<i class="far fa-chevron-circle-down"></i>',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: 0,
        asNavFor: '.feedback',
        autoPlay: true,
        autoplaySpeed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
    },
            {
                breakpoint: 480,

                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
    }
  ]
    });
    //    feedback part slider
    $('.feedback').slick({
        dots: false,
        infinite: true,
        arrows: false,
        asNavFor: '.client-slider',
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
    //    service part slider
    $('.service-bottom').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="far fa-chevron-circle-up"></i>',
        nextArrow: '<i class="far fa-chevron-circle-down"></i>',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: 0,
        autoPlay: true,
        autoplaySpeed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]
    });
    //    team part slider
    $('.team-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
    //    market slider
    $('.market-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
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

    //    counter plugin
    $(function () {
        $('.count-num').rCounter();
    });
    //    sticky menu and back to top
    var menudis = $(".nav-full").offset().top;
    //    alert(menudis);
    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        //        alert(scrolling);

        if (scrolling >= menudis) {
            $(".nav-full").addClass("sticky");
            $(".nav-full").fadeIn();
        } else {
            $(".nav-full").removeClass("sticky");
        }
        //        back to top button condition
        if (scrolling >= 200) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    })
    //    back to top button jquery
    $(".back-to-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
    //    smooth scroll
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    window.location.hash = hash;
                });
            }
        });
    });
})
