$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/chevron_carousel/chevron_left.png" alt="left"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/chevron_carousel/chevron_right.png" alt="right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});