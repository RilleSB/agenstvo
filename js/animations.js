(function() {
    'use strict';

    // Intersection Observer для анимаций при скролле
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.video-card, .couple-description p');

        // Проверка поддержки Intersection Observer
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll', 'animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            animatedElements.forEach(el => {
                el.classList.add('animate-on-scroll');
                observer.observe(el);
            });
        } else {
            // Fallback для старых браузеров
            animatedElements.forEach(el => {
                el.classList.add('animate-on-scroll', 'animated');
            });
        }
    }

    // Плавное появление navbar при скролле
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            } else {
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
            }

            lastScroll = currentScroll;
        });
    }

    // Lazy loading для изображений
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    // Плавная прокрутка для якорных ссылок
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && !href.startsWith('#home') && !href.startsWith('#couple') && !href.startsWith('#contacts')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Параллакс эффект для hero секции
    function initParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // Слайдер фона hero
    function initHeroSlider() {
        const slidesNodeList = document.querySelectorAll('.hero-slide');
        if (!slidesNodeList.length) return;

        const slides = Array.from(slidesNodeList);

        // Создаём перемешанный массив индексов — DOM не трогаем
        const order = slides.map((_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }

        slides.forEach(s => s.classList.remove('active', 'exit'));
        slides[order[0]].classList.add('active');
        let current = 0;

        setInterval(() => {
            const currentSlide = slides[order[current]];
            current = (current + 1) % order.length;
            const nextSlide = slides[order[current]];

            currentSlide.classList.add('exit');
            currentSlide.classList.remove('active');
            nextSlide.classList.add('active');

            setTimeout(() => {
                currentSlide.classList.remove('exit');
                currentSlide.style.transform = '';
            }, 800);
        }, 2000);
    }

    // Инициализация всех анимаций
    function init() {
        initScrollAnimations();
        initNavbarScroll();
        initLazyLoading();
        initSmoothScroll();
        initParallax();
        initHeroSlider();
    }

    // Запуск после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Переинициализация анимаций при смене страницы
    window.addEventListener('hashchange', () => {
        setTimeout(initScrollAnimations, 100);
    });
})();
