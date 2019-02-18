/**
 * Created by Aleksandr on 24.01.2019.
 */
/*
 * Custom scripts
 */
(function ($) {
    console.log("Hello gdfgdf");
    $('.btn_menu').click(function(eventObject){
        $(".main-nav").toggleClass('active');
        eventObject.preventDefault();
    });
    $('.screenshots-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.screenshots-carousel',
        dots: false,
        arrows: false
    });

    var photo = new UnsplashPhoto();

    photo.fetch();
    console.log(photo);

})(jQuery);