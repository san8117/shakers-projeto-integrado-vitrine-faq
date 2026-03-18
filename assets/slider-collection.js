document.addEventListener('DOMContentLoaded', function () {


    const swiperCollection = new Swiper ('.colletion-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: 'horizontal',
        loop: true,
        

        navigation: {
            nextEl: '.collection-button-next',
            prevEl: '.collection-button-prev',
        },



    });
});




