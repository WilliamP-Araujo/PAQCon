var swiper = new Swiper(".slide-conteudo", {
    slidesPerView: 3,
    spaceBetween: 20, // Ajuste este valor conforme necessário para adicionar mais espaço entre os cartões
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10, // Espaçamento menor em telas menores
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 15, // Espaçamento menor em telas menores
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 20, // Espaçamento menor em telas menores
        }
    }
});
