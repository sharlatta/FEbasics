var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 12,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        470: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});