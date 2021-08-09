const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
    let swiper = new Swiper(el, {
        slidesPerView: 400,
        lazy: {
            loadPrevNext: true,
        },
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: el.querySelector('.arrow_right'),
            prevEl: el.querySelector('.arrow_left'),
        },
    });
});
