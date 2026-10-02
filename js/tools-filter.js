// ============================================
// tools-filter.js — US-04
// Filtrado en tiempo real por categoría
// ============================================

function initToolsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const toolCards  = document.querySelectorAll('.tool-card');
    const noResults  = document.querySelector('.no-results');

    if (!filterBtns.length || !toolCards.length) return;

    function applyFilter(category) {
        let visibleCount = 0;

        toolCards.forEach(card => {
            const match = category === 'all' || card.dataset.category === category;
            card.classList.toggle('hidden', !match);

            if (match) {
                visibleCount++;
                card.classList.remove('fade-in');
                void card.offsetWidth; // Force reflow to replay CSS animation
                card.classList.add('fade-in');
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');

            applyFilter(btn.dataset.category);
        });
    });

    // Init — activate "Todas" by default
    const defaultBtn = document.querySelector('.filter-btn[data-category="all"]');
    if (defaultBtn) {
        defaultBtn.classList.add('active');
        defaultBtn.setAttribute('aria-pressed', 'true');
        applyFilter('all');
    }
}

// Expose globally for classic scripts (file://) and support ES modules
if (typeof window !== 'undefined') {
    window.initToolsFilter = initToolsFilter;
}
