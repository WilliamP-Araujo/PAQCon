const carouselContainer = document.querySelector('.carousel-container');
        const cards = document.querySelectorAll('.card');
        const cardWidth = cards[0].offsetWidth;

        let currentIndex = 0;

        function slideCarousel(direction) {
            if (direction === 'next') {
                currentIndex++;
            } else {
                currentIndex--;
            }

            if (currentIndex < 0) {
                currentIndex = cards.length - 1;
            } else if (currentIndex >= cards.length) {
                currentIndex = 0;
            }

            carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }

        // Adicione eventos de clique para os botões de navegação (próximo e anterior)
        // Exemplo:
        // const nextButton = document.querySelector('.next-button');
        // const prevButton = document.querySelector('.prev-button');
        // nextButton.addEventListener('click', () => slideCarousel('next'));
        // prevButton.addEventListener('click', () => slideCarousel('prev'));