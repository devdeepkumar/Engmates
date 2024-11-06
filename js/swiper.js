

/*
=================================================
? => Swiper Js :----
=================================================
*/


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        loop: true, // Enable continuous loop
        loopedSlides: 3, // Adjust this to match how many slides should be duplicated
        loopAdditionalSlides: 3, // Ensures proper duplication for smooth looping
    });

    // Pause autoplay on hover
    var swiperContainer = document.querySelector('.mySwiper');
    swiperContainer.addEventListener('mouseenter', function () {
        swiper.autoplay.stop(); // Stop autoplay when hovering
    });
    swiperContainer.addEventListener('mouseleave', function () {
        swiper.autoplay.start(); // Resume autoplay when hover ends
    });
});
