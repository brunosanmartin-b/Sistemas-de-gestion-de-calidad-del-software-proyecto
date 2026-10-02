// ============================================
// navbar.js — US-01
// Menú hamburguesa, control de páginas y scroll
// ============================================

function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const header    = document.getElementById('header');

    // 1. Detectar página actual y marcar enlace activo
    const rawPath = window.location.pathname;
    let currentPage = rawPath.substring(rawPath.lastIndexOf('/') + 1) || 'index.html';
    if (!currentPage || currentPage === '') currentPage = 'index.html';

    // Marcar enlaces de páginas principales en header y mobile-nav
    document.querySelectorAll('[data-page]').forEach(link => {
        const targetPage = link.getAttribute('data-page');
        if (targetPage === currentPage) {
            link.classList.add('active-page');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active-page');
            link.removeAttribute('aria-current');
        }
    });

    // 2. Control del menú hamburguesa móvil
    if (hamburger && mobileNav) {
        function setNavState(isOpen) {
            mobileNav.classList.toggle('open', isOpen);
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen.toString());
            hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !mobileNav.classList.contains('open');
            setNavState(isOpen);
        });

        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
                setNavState(false);
                hamburger.focus();
            }
        });

        // Cerrar al hacer clic en cualquier enlace dentro del menú móvil
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setNavState(false);
            });
        });

        // Cerrar al redimensionar a pantalla de escritorio (>768px)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
                setNavState(false);
            }
        });
    }

    // 3. Efecto scroll en Header
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // 4. Rastreo de secciones internas (Subnav en calidad.html)
    const subnavLinks = document.querySelectorAll('.subnav-link');
    const sections = document.querySelectorAll('section[id]');

    if (sections.length && subnavLinks.length) {
        const subnavObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    subnavLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${currentId}`) {
                            subnavLinks.forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-20% 0px -65% 0px' });

        sections.forEach(s => subnavObserver.observe(s));
    }

    // 5. Scroll suave para enlaces internos en la misma página con cálculo de offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerHeight = header ? header.offsetHeight : 72;
                    const subnav = document.querySelector('.subnav');
                    const subnavHeight = subnav ? subnav.offsetHeight : 0;
                    const totalOffset = headerHeight + subnavHeight + 12;

                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - totalOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Expose globally for classic scripts (file://) and support ES modules
if (typeof window !== 'undefined') {
    window.initNavbar = initNavbar;
}
