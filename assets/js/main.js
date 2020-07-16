$('.js-open-menu').click(function () {
    $(".js-menu").fadeToggle(100);
    $('.header__burger').fadeOut(0);
    $(".header__burger-close").fadeToggle(0);
    document.body.style.overflowY = "hidden";
});


$('.js-close-menu').click(function () {
    $('.js-menu').fadeOut();
    $('.header__burger-close').fadeOut(0);
    $('.header__burger').fadeToggle(0);
     document.body.style.overflowY = "scroll";
});

