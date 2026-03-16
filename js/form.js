(function() {
    'use strict';

    const TOKEN = '8707699671:AAGCzEmFQp_Tw-s3AVv3ihnVTer1SIGy0kg';
    const CHAT_ID = '897018901';

    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name    = document.getElementById('formName').value.trim();
        const phone   = document.getElementById('formPhone').value.trim();
        const date    = document.getElementById('formDate').value;
        const couple  = document.getElementById('formCouple').value;
        const comment = document.getElementById('formComment').value.trim();
        const status  = document.getElementById('formStatus');

        const text = [
            '📋 Новая заявка!',
            `👤 Имя: ${name}`,
            `📞 Телефон: ${phone}`,
            date    ? `📅 Дата: ${date}` : null,
            couple  ? `🎤 Пара: ${couple}` : null,
            comment ? `💬 Комментарий: ${comment}` : null,
        ].filter(Boolean).join('\n');

        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        status.textContent = 'Отправляем...';
        status.style.color = '';

        try {
            const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: CHAT_ID, text })
            });

            if (res.ok) {
                status.textContent = '✅ Заявка отправлена! Мы свяжемся с вами.';
                status.style.color = '#27ae60';
                form.reset();
            } else {
                throw new Error();
            }
        } catch {
            status.textContent = '❌ Ошибка. Позвоните нам напрямую.';
            status.style.color = '#e74c3c';
        } finally {
            btn.disabled = false;
        }
    });
})();
