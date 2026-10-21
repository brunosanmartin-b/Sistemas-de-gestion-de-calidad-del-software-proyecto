// ============================================
// main.js — Inicializador global VELORA
// ============================================

function initVelora() {
    // ---- Navbar (todas las páginas) ----
    if (typeof initNavbar === 'function') {
        initNavbar();
    }

    // ---- Módulos de calidad (calidad.html) ----
    if (typeof initQualityTabs === 'function') {
        initQualityTabs();
    }
    if (typeof initQualityCards === 'function') {
        initQualityCards();
    }
    if (typeof initToolsFilter === 'function') {
        initToolsFilter();
    }

    // ---- Módulos de Sprint 2 (metodologias.html / nosotros.html) ----
    if (typeof initAgile === 'function') {
        initAgile();
    }
    if (typeof initContactForm === 'function') {
        initContactForm();
    }

    // ---- Theme Toggle ----
    const themeToggle = document.getElementById('themeToggle');
    const headerLogo  = document.getElementById('headerLogo');
    const footerLogo  = document.getElementById('footerLogo');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('velora-theme', theme);
        } catch (e) {
            // Local storage access might be restricted in some file:// environments
        }
        const logoSrc = theme === 'dark' ? 'img/VELORA.png' : 'img/VELORA-N.png';
        if (headerLogo) headerLogo.src = logoSrc;
        if (footerLogo) footerLogo.src = logoSrc;
    }

    // Init: saved > system preference > light
    let saved = null;
    try {
        saved = localStorage.getItem('velora-theme');
    } catch (e) {
        saved = null;
    }

    if (saved) {
        setTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            let hasSaved = false;
            try {
                hasSaved = !!localStorage.getItem('velora-theme');
            } catch (err) {}
            if (!hasSaved) setTheme(e.matches ? 'dark' : 'light');
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVelora);
} else {
    initVelora();
}
