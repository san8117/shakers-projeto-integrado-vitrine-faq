document.addEventListener('DOMContentLoaded', function () {


    const swiper = new Swiper('.colletion-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },



    });
});




