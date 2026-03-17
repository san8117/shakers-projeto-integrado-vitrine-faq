document.addEventListener('DOMContentLoaded', function () {


    const swiper = new Swiper('.colletion-container', {
        slidesPerView: 3,
        spaceBetween: 5,
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



    });
});




