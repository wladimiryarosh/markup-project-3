$(document).ready(function() {
    $('#btn-m-menu-active').on('click', function () {
        $('#mobile-menu').addClass('active');
        $('#btn-m-menu-active').addClass('action-open-menu');
        $('#btn-m-menu-close').addClass('action-close-menu');
    });
    $('#btn-m-menu-close').on('click', function () {
        $('#mobile-menu').removeClass('active');
        $('#btn-m-menu-close').removeClass('action-close-menu');
        $('#btn-m-menu-active').removeClass('action-open-menu');
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
