const swiperGalleruPost = new Swiper('.slider-post-slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        nextEl: '.slider-post-next',
        prevEl: '.slider-post-prev',
    },
    // breakpoints: {
    //     320: {
    //         // slidesPerView: 'auto',
    //         spaceBetween: 30,
    //         slidesPerView: 1.5,
    //     },
    //     768: {
    //         slidesPerView: 2.3,
    //     },
    //     1240: {
    //         slidesPerView: 3.5,
    //     },
    // }
});