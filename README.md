# Праздники с Любовью - Сайт агенства

Многостраничный SPA-сайт для агенства ведущих и диджеев.

## 🎯 Структура проекта

```
agenstvo/
├── index.html              # Главная страница (SPA)
├── css/
│   ├── style.css          # Основные стили
│   ├── animations.css     # Анимации и переходы
│   └── responsive.css     # Адаптивная верстка
├── js/
│   ├── router.js          # SPA-роутинг
│   ├── animations.js      # Анимации при скролле
│   └── gallery.js         # Галерея фотографий
├── images/
│   ├── couples/           # Фото пар (добавьте свои)
│   └── hero/              # Фото для главной
└── videos/                # Локальные видео (опционально)
```

## 📸 Добавление фотографий

### Для главной страницы (карточки пар):
Добавьте в папку `images/couples/`:
- `couple1.jpg` - Любаша & Lex$is
- `couple2.jpg` - Юля & RDJ
- `couple3.jpg` - Сергей & Freeze

### Для галерей на страницах пар:
Добавьте в папку `images/couples/`:

**Пара 1 (Любаша & Lex$is):**
- `couple1-1.jpg`
- `couple1-2.jpg`
- `couple1-3.jpg`
- `couple1-4.jpg`
- `couple1-5.jpg`

**Пара 2 (Юля & RDJ):**
- `couple2-1.jpg`
- `couple2-2.jpg`
- `couple2-3.jpg`
- `couple2-4.jpg`
- `couple2-5.jpg`

**Пара 3 (Сергей & Freeze):**
- `couple3-1.jpg`
- `couple3-2.jpg`
- `couple3-3.jpg`
- `couple3-4.jpg`
- `couple3-5.jpg`

## 🎥 Добавление видео

### Вариант 1: YouTube/Vimeo (рекомендуется)
Замените блоки `.video-placeholder` в `index.html` на iframe:

```html
<div class="video-card">
    <iframe 
        width="100%" 
        height="250" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

### Вариант 2: Локальные видео
Добавьте видео в папку `videos/` и замените placeholder:

```html
<div class="video-card">
    <video controls width="100%">
        <source src="videos/couple1-video1.mp4" type="video/mp4">
    </video>
</div>
```

## 📞 Изменение контактов

В файле `index.html` найдите секцию `#contacts` и измените:

```html
<a href="tel:+79999999999" class="contact-link">+7 (999) 999-99-99</a>
```

Замените номер телефона на свой.

## 🎨 Настройка цветов

В файле `css/style.css` измените переменные в `:root`:

```css
:root {
    --primary-color: #FF6B9D;      /* Основной розовый */
    --secondary-color: #FFA8C5;    /* Светло-розовый */
    --text-dark: #2C3E50;          /* Цвет текста */
}
```

## 🚀 Запуск сайта

1. Откройте `index.html` в браузере
2. Или используйте локальный сервер:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Затем откройте http://localhost:8000
   ```

## 📱 Особенности

- ✅ SPA с плавными переходами между страницами
- ✅ Адаптивный дизайн (мобильные, планшеты, десктоп)
- ✅ Галерея с перелистыванием (стрелки, точки, свайп)
- ✅ Интеграция с VK комментариями
- ✅ Анимации при скролле
- ✅ Lazy loading изображений
- ✅ Поддержка старых браузеров (с fallback)

## 🔮 Будущие расширения

### Добавление формы заявки

В секции контактов добавьте:

```html
<form class="contact-form">
    <input type="text" placeholder="Ваше имя" required>
    <input type="tel" placeholder="Телефон" required>
    <input type="date" placeholder="Дата события" required>
    <select>
        <option>Любаша & Lex$is</option>
        <option>Юля & RDJ</option>
        <option>Сергей & Freeze</option>
    </select>
    <button type="submit" class="btn btn-primary">Отправить заявку</button>
</form>
```

## 📝 Редактирование текстов

Все тексты находятся в `index.html`:
- Описания пар - в блоках `.couple-description`
- Заголовки - в тегах `<h1>`, `<h2>`, `<h3>`
- Подзаголовки - в `.couple-tagline`

## 🌐 Браузеры

Протестировано в:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Мобильные браузеры (iOS Safari, Chrome Mobile)

## 💡 Советы

1. Оптимизируйте изображения перед загрузкой (рекомендуется до 500KB)
2. Используйте формат WebP для лучшей производительности
3. Для видео лучше использовать YouTube/Vimeo (экономия трафика)
4. Регулярно обновляйте фото и видео с праздников

## 📧 Поддержка

При возникновении вопросов обращайтесь к разработчику.
