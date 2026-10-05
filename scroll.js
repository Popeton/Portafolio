/* =========================================
   Navigation & External Links
   ========================================= */
function OpenLink(link) {
    window.open(link.value);
}

/* =========================================
   Language Toggle System
   ========================================= */
function setLanguage(lang) {
    const body = document.body;
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');

    if (lang === 'es') {
        body.classList.remove('lang-en');
        body.classList.add('lang-es');
        btnEn.classList.remove('active');
        btnEs.classList.add('active');
    } else {
        body.classList.remove('lang-es');
        body.classList.add('lang-en');
        btnEs.classList.remove('active');
        btnEn.classList.add('active');
    }
}