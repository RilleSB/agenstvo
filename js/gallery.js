(function() {
    'use strict';

    class Gallery {
        constructor(galleryElement) {
            this.gallery = galleryElement;
            this.slides = this.gallery.querySelectorAll('.gallery-slide');
            this.prevBtn = this.gallery.querySelector('.prev');
            this.nextBtn = this.gallery.querySelector('.next');
            this.dotsContainer = this.gallery.querySelector('.gallery-dots');
            this.currentSlide = 0;
            this.touchStartX = 0;
            this.touchEndX = 0;

            this.init();
        }

        init() {
            this.createDots();
            this.addEventListeners();
            this.showSlide(0);
        }

        createDots() {
            this.slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('gallery-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.showSlide(index));
                this.dotsContainer.appendChild(dot);
            });
            this.dots = this.dotsContainer.querySelectorAll('.gallery-dot');
        }

        addEventListeners() {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());

            // Touch events для свайпа
            this.gallery.addEventListener('touchstart', (e) => {
                this.touchStartX = e.changedTouches[0].screenX;
            });

            this.gallery.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            });
        }

        showSlide(index) {
            this.slides.forEach(slide => slide.classList.remove('active'));
            this.dots.forEach(dot => dot.classList.remove('active'));

            this.currentSlide = index;
            this.slides[this.currentSlide].classList.add('active');
            this.dots[this.currentSlide].classList.add('active');
        }

        nextSlide() {
            const next = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(next);
        }

        prevSlide() {
            const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.showSlide(prev);
        }

        handleSwipe() {
            const swipeThreshold = 50;
            const diff = this.touchStartX - this.touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        }
    }

    // Инициализация всех галерей на странице
    function initGalleries() {
        const galleries = document.querySelectorAll('.gallery');
        galleries.forEach(gallery => new Gallery(gallery));
    }

    // Запуск после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGalleries);
    } else {
        initGalleries();
    }
})();
