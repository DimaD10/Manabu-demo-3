$(document).ready(function(){
    $('.retro__slider').slick({
        zIndex: 1,
        appendArrows: $('.retro__arrows'),
    });
    $('.emo__slider').slick({
        zIndex: 1,
        appendArrows: $('.emo__arrows'),
    });
    $('.product-preview__slider').slick({
        zIndex: 5,
        appendArrows: $('.slider__controller'),
    });
});