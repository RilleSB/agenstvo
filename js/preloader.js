(function() {
    'use strict';

    if (sessionStorage.getItem('visited')) return;

    const preloader = document.getElementById('preloader');
    document.body.style.overflow = 'hidden';
    document.getElementById('app').style.visibility = 'hidden';
    document.querySelector('.navbar').style.visibility = 'hidden';

    setTimeout(() => {
        preloader.classList.add('hidden');
        sessionStorage.setItem('visited', '1');
        setTimeout(() => {
            preloader.remove();
            document.body.style.overflow = '';
            document.getElementById('app').style.visibility = '';
            document.querySelector('.navbar').style.visibility = '';
        }, 800);
    }, 1500);
})();
