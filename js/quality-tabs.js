// ============================================
// quality-tabs.js — US-02
// Lógica de pestañas para normas ISO
// ============================================

function initQualityTabs() {
    const tabBtns   = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (!tabBtns.length) return;

    function activateTab(targetId) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === targetId);
            btn.setAttribute('aria-selected', btn.dataset.tab === targetId ? 'true' : 'false');
        });
        tabPanels.forEach(panel => {
            const isActive = panel.id === targetId;
            panel.classList.toggle('active', isActive);
            panel.setAttribute('hidden', !isActive);
        });
    }

    // Click
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.tab));
    });

    // Keyboard navigation: left/right arrows
    const tabList = tabBtns[0]?.closest('[role="tablist"]');
    if (tabList) {
        tabList.addEventListener('keydown', (e) => {
            const btns = [...tabBtns];
            const index = btns.indexOf(document.activeElement);
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextBtn = btns[(index + 1) % btns.length];
                nextBtn?.focus();
                activateTab(nextBtn.dataset.tab);
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevBtn = btns[(index - 1 + btns.length) % btns.length];
                prevBtn?.focus();
                activateTab(prevBtn.dataset.tab);
            }
        });
    }

    // Initialize first tab
    if (tabBtns[0]) activateTab(tabBtns[0].dataset.tab);
}

// Expose globally for classic scripts (file://) and support ES modules
if (typeof window !== 'undefined') {
    window.initQualityTabs = initQualityTabs;
}
