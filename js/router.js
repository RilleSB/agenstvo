(function() {
    'use strict';

    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    // Инициализация VK виджетов
    function initVKWidgets() {
        if (typeof VK !== 'undefined') {
            VK.init({apiId: 35722294});
            
            VK.Widgets.Comments("vk_comments_couple1", {limit: 10, attach: "*"}, "couple1");
            VK.Widgets.Comments("vk_comments_couple2", {limit: 10, attach: "*"}, "couple2");
            VK.Widgets.Comments("vk_comments_couple3", {limit: 10, attach: "*"}, "couple3");
        }
    }

    // Навигация между страницами
    function navigateToPage(hash) {
        const targetPage = hash.substring(1) || 'home';
        
        pages.forEach(page => {
            if (page.id === targetPage) {
                page.classList.add('active');
                setTimeout(() => {
                    page.style.opacity = '1';
                }, 10);
            } else {
                page.style.opacity = '0';
                setTimeout(() => {
                    page.classList.remove('active');
                }, 400);
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Закрыть мобильное меню
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        }

        // Прокрутка наверх
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Обработка клика по ссылкам
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const hash = this.getAttribute('href');
            window.location.hash = hash;
        });
    });

    // Обработка изменения hash
    window.addEventListener('hashchange', function() {
        navigateToPage(window.location.hash);
    });

    // Бургер меню
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    });

    // Инициализация при загрузке
    const initHash = window.location.hash || '#home';
    // Сразу скрываем все страницы кроме нужной — до рендера
    pages.forEach(page => {
        if (page.id === initHash.substring(1)) {
            page.classList.add('active');
            page.style.opacity = '1';
        } else {
            page.classList.remove('active');
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        navigateToPage(initHash);
        initVKWidgets();
    });

    // Prefetch для быстрых переходов
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const hash = this.getAttribute('href');
            const targetPage = document.querySelector(hash);
            if (targetPage) {
                targetPage.style.willChange = 'opacity, transform';
            }
        });

        link.addEventListener('mouseleave', function() {
            const hash = this.getAttribute('href');
            const targetPage = document.querySelector(hash);
            if (targetPage) {
                targetPage.style.willChange = 'auto';
            }
        });
    });
})();
