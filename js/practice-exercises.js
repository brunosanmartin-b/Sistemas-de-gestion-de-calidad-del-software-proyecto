// ============================================
// practice-exercises.js — US-14 & US-15 (VELORA)
// Lógica interactiva para Ejercicios y Casos Prácticos (US-15)
// y filtrado seguro de Enlaces de Interés (US-14)
// Compatible con file:// (sin dependencias externas)
// ============================================

function initPracticeExercises() {
    // --------------------------------------------
    // 1. US-15: EJERCICIOS Y CASOS PRÁCTICOS
    // --------------------------------------------
    const exercisesContainer = document.getElementById('exercisesGrid');
    const exerciseFilterBtns = document.querySelectorAll('[data-exercise-filter]');
    const exerciseCountEl = document.getElementById('exercisesCount');

    if (exercisesContainer) {
        const cards = exercisesContainer.querySelectorAll('.exercise-card');

        // Asegurar por defecto que todas las soluciones estén ocultas al cargar la página
        cards.forEach(card => {
            const btn = card.querySelector('.btn-reveal-solution');
            const panel = card.querySelector('.exercise-solution-panel');
            const labelSpan = btn ? btn.querySelector('.btn-reveal-text') : null;

            if (panel) {
                panel.hidden = true;
                panel.classList.remove('is-revealed');
            }
            if (btn) {
                btn.setAttribute('aria-expanded', 'false');
                if (labelSpan) labelSpan.textContent = 'Mostrar Solución Explicada';
            }

            // Opciones interactivas de autoevaluación en cada caso práctico
            const optionBtns = card.querySelectorAll('.exercise-option-btn');
            const feedbackEl = card.querySelector('.exercise-QuickFeedback');

            optionBtns.forEach(optBtn => {
                optBtn.addEventListener('click', () => {
                    const isCorrect = optBtn.getAttribute('data-correct') === 'true';
                    const explanation = optBtn.getAttribute('data-feedback') || '';

                    optionBtns.forEach(b => {
                        b.classList.remove('selected-correct', 'selected-wrong');
                        b.setAttribute('aria-pressed', 'false');
                    });

                    optBtn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
                    optBtn.setAttribute('aria-pressed', 'true');

                    if (feedbackEl) {
                        feedbackEl.hidden = false;
                        feedbackEl.className = 'exercise-QuickFeedback ' + (isCorrect ? 'feedback-correct' : 'feedback-wrong');
                        feedbackEl.textContent = (isCorrect ? '✓ ¡Correcto! ' : '✕ Revisa este punto: ') + explanation;
                    }
                });
            });

            // Botón Mostrar / Ocultar Solución Explicada
            if (btn && panel) {
                btn.addEventListener('click', () => {
                    const isCurrentlyOpen = btn.getAttribute('aria-expanded') === 'true';
                    const nextState = !isCurrentlyOpen;

                    btn.setAttribute('aria-expanded', nextState ? 'true' : 'false');
                    panel.hidden = !nextState;
                    panel.classList.toggle('is-revealed', nextState);
                    card.classList.toggle('solution-open', nextState);

                    if (labelSpan) {
                        labelSpan.textContent = nextState ? 'Ocultar Solución' : 'Mostrar Solución Explicada';
                    }
                });
            }
        });

        // Filtro por nivel de dificultad (Todos, Básico, Intermedio, Avanzado)
        if (exerciseFilterBtns.length) {
            exerciseFilterBtns.forEach(filterBtn => {
                filterBtn.addEventListener('click', () => {
                    const level = filterBtn.getAttribute('data-exercise-filter');

                    exerciseFilterBtns.forEach(b => {
                        const active = b === filterBtn;
                        b.classList.toggle('active', active);
                        b.setAttribute('aria-pressed', active ? 'true' : 'false');
                    });

                    let visibleCount = 0;
                    cards.forEach(card => {
                        const cardLevel = card.getAttribute('data-difficulty');
                        const match = level === 'all' || cardLevel === level;
                        card.hidden = !match;
                        if (match) visibleCount++;
                    });

                    if (exerciseCountEl) {
                        exerciseCountEl.textContent = visibleCount === cards.length
                            ? `Mostrando los ${cards.length} casos prácticos`
                            : `Mostrando ${visibleCount} de ${cards.length} casos prácticos`;
                    }
                });
            });
        }
    }

    // --------------------------------------------
    // 2. US-14: ENLACES DE INTERÉS Y SEGURIDAD WEB
    // --------------------------------------------
    const linksGrid = document.getElementById('linksGrid');
    const linkFilterBtns = document.querySelectorAll('[data-link-filter]');
    const linksCountEl = document.getElementById('linksCount');

    if (linksGrid) {
        const linkCards = linksGrid.querySelectorAll('.resource-link-card');

        // Garantizar en tiempo de ejecución que el 100% de los enlaces externos tengan target="_blank" y rel="noopener noreferrer"
        linksGrid.querySelectorAll('a[href^="http"]').forEach(anchor => {
            anchor.setAttribute('target', '_blank');
            anchor.setAttribute('rel', 'noopener noreferrer');
        });

        if (linkFilterBtns.length) {
            linkFilterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.getAttribute('data-link-filter');

                    linkFilterBtns.forEach(b => {
                        const active = b === btn;
                        b.classList.toggle('active', active);
                        b.setAttribute('aria-pressed', active ? 'true' : 'false');
                    });

                    let visible = 0;
                    linkCards.forEach(card => {
                        const cardCat = card.getAttribute('data-link-category');
                        const match = cat === 'all' || cardCat === cat;
                        card.hidden = !match;
                        if (match) visible++;
                    });

                    if (linksCountEl) {
                        linksCountEl.textContent = visible === linkCards.length
                            ? `Mostrando ${linkCards.length} recursos verificados`
                            : `Mostrando ${visible} de ${linkCards.length} recursos verificados`;
                    }
                });
            });
        }
    }
}

if (typeof window !== 'undefined') {
    window.initPracticeExercises = initPracticeExercises;
}

