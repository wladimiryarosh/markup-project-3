$(document).ready(function() {
    $('.menu-btn').on('click', function () {
        $(this).addClass('active');
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1440: {
                items:4
            }
        }
    });
});
