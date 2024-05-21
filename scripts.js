document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const tabs = document.querySelectorAll('.tab');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('inactive');
            } else {
                slide.classList.remove('active');
                slide.classList.add('inactive');
            }
        });
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            if (index !== currentSlide) {
                stopSlideInterval();
                showSlide(index);
                startSlideInterval();
            }
        });
    });

    startSlideInterval(); // Начать автоматическое перелистывание слайдов
});
