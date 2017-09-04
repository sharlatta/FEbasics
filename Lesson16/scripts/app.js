$(function () {
    $('.menu-btn').click(openMenu);
    $('.menu-close-btn').click(closeMenu);

    function openMenu() {
        $('.menu-container').addClass('opened');
    }

    function closeMenu() {
        $('.menu-container').removeClass('opened');
    }

    var mySwiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        centeredSlides: true
    })
})