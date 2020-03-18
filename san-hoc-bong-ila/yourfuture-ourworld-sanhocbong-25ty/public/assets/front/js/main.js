(function ($) {
    "use strict";

    /*SCHOOL LOGO OWL*/
    var $schoolCarousel = $("#school-wrapper")

        $schoolCarousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        dotsSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 8
            }
        }
    });
    /*SCHOOL LOGO END*/

    /*SCROLL*/
    $('.scrollTrigger').click(function(e){
        e.preventDefault();
        var target = $(this).data('target');
        console.log(target);
        $('html, body').animate({scrollTop: $('#'+target).offset().top - 80}, 2000);

    })
}(jQuery));