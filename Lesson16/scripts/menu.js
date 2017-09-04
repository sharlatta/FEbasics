$(function () {
    $('.menu-btn').click(openMenu);
    $('.menu-close-btn').click(closeMenu);

    function openMenu() {
        $('.menu-container').addClass('opened');
    }

      function closeMenu() {
        $('.menu-container').removeClass('opened');
    }
})