// ============================================
// quality-cards.js — US-03
// Flip-cards: click, touch y accesibilidad
// ============================================

function initQualityCards() {
    const flipCards = document.querySelectorAll('.flip-card');

    if (!flipCards.length) return;

    flipCards.forEach(card => {
        // Accessibility setup
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');

        const toggle = () => {
            const isFlipped = card.classList.toggle('flipped');
            card.setAttribute('aria-pressed', isFlipped.toString());
        };

        // Click event
        card.addEventListener('click', toggle);

        // Touch event handling — prevents accidental flipping when scrolling on mobile
        let touchStartX = 0;
        let touchStartY = 0;
        let hasMoved = false;

        card.addEventListener('touchstart', (e) => {
            hasMoved = false;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        card.addEventListener('touchmove', (e) => {
            const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
            const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
            if (deltaX > 10 || deltaY > 10) {
                hasMoved = true;
            }
        }, { passive: true });

        card.addEventListener('touchend', (e) => {
            if (!hasMoved) {
                e.preventDefault();
                toggle();
            }
        });

        // Keyboard navigation: Space / Enter to flip, Escape to reset
        card.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle();
            }
            if (e.key === 'Escape') {
                card.classList.remove('flipped');
                card.setAttribute('aria-pressed', 'false');
            }
        });
    });
}

// Expose globally for classic scripts (file://) and support ES modules
if (typeof window !== 'undefined') {
    window.initQualityCards = initQualityCards;
}
