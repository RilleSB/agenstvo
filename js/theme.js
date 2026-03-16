(function() {
    'use strict';

    const btn = document.querySelector('.theme-toggle');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    function init() {
        // Проверяем сохранённую тему
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
        } else {
            // Автоопределение системной темы
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }

        // Кнопка переключения
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });

        // Следим за изменением системной темы
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
