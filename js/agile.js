// ============================================
// agile.js — Módulo Interactivo Sprint 2 (VELORA)
// Consolidación de Lightbox (US-07/09), Scrum (US-10) y Kanban (US-11)
// Cero dependencias — Ligero, modular y accesible
// ============================================

function initAgile() {
    // --------------------------------------------
    // 1. LIGHTBOX MODAL REUTILIZABLE (US-07 & US-09)
    // --------------------------------------------
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        const closeBtn    = modal.querySelector('.lightbox-close');
        const backdrop    = modal.querySelector('.lightbox-backdrop');
        const titleEl     = modal.querySelector('.lightbox-title');
        const bodyEl      = modal.querySelector('.lightbox-body');
        const captionEl   = modal.querySelector('.lightbox-caption');
        let triggerEl     = null;

        function openLightbox(title, svgContent, caption, trigger) {
            triggerEl = trigger;
            if (titleEl)   titleEl.textContent   = title || 'Diagrama Técnico';
            if (captionEl) captionEl.textContent = caption || '';
            if (bodyEl)    bodyEl.innerHTML      = svgContent;

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            if (closeBtn) closeBtn.focus();
        }

        function closeLightbox() {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (bodyEl) bodyEl.innerHTML = '';
            if (triggerEl) {
                triggerEl.focus();
                triggerEl = null;
            }
        }

        document.querySelectorAll('[data-lightbox-trigger]').forEach(trigger => {
            const handler = (e) => {
                e.preventDefault();
                const card = trigger.closest('.diagram-card');
                if (!card) return;

                const title = card.getAttribute('data-title') || card.querySelector('.diagram-title')?.textContent;
                const caption = card.getAttribute('data-caption') || card.querySelector('.diagram-desc')?.textContent;
                const svgEl = card.querySelector('.diagram-preview svg');
                const svgContent = svgEl ? svgEl.outerHTML : '<p>Esquema no disponible</p>';

                openLightbox(title, svgContent, caption, trigger);
            };

            trigger.addEventListener('click', handler);
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') handler(e);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (backdrop) backdrop.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            // Trampa de foco: el botón de cierre es el único control del modal
            if (e.key === 'Tab' && closeBtn) {
                e.preventDefault();
                closeBtn.focus();
            }
        });
    }

    // --------------------------------------------
    // 2. SCRUM: TABS Y STEPPER INTERACTIVO (US-10)
    // --------------------------------------------
    const pillButtons = document.querySelectorAll('.scrum-pill-btn');
    const tabContents = document.querySelectorAll('.scrum-tab-content');

    if (pillButtons.length && tabContents.length) {
        pillButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-scrum-tab');
                pillButtons.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                const activeContent = document.getElementById(target);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    }

    const stepButtons = document.querySelectorAll('.sprint-step-btn');
    const detailTitle = document.getElementById('stepDetailTitle');
    const detailTimebox = document.getElementById('stepDetailTimebox');
    const detailGoal = document.getElementById('stepDetailGoal');
    const detailParticipants = document.getElementById('stepDetailParticipants');
    const detailOutputs = document.getElementById('stepDetailOutputs');

    const stepData = {
        planning: {
            title: "Sprint Planning (Planificación del Sprint)",
            timebox: "Máx 8 horas (Sprint de 1 mes) / 2 a 4 horas (Sprint 2 semanas)",
            goal: "Definir qué trabajo se puede realizar en el Sprint (Sprint Goal) y cómo se logrará dicho incremento.",
            participants: "Todo el Scrum Team: Product Owner, Scrum Master y Developers.",
            outputs: "Sprint Goal acordado y Sprint Backlog con historias descompuestas en tareas técnicas accionables."
        },
        daily: {
            title: "Daily Scrum (Reunión Diaria)",
            timebox: "15 minutos estrictos cada día a la misma hora y lugar",
            goal: "Inspeccionar el progreso hacia el Sprint Goal y adaptar el Sprint Backlog según sea necesario.",
            participants: "Developers (obligatorio). Scrum Master y Product Owner pueden participar si actúan como devs.",
            outputs: "Plan sincronizado para las próximas 24 horas y detección temprana de bloqueos técnicos o impedimentos."
        },
        review: {
            title: "Sprint Review (Revisión del Sprint)",
            timebox: "Máximo 4 horas (Sprint de 1 mes) / 2 horas (Sprint de 2 semanas)",
            goal: "Inspeccionar el resultado del Sprint (Incremento) y determinar adaptaciones futuras al Product Backlog.",
            participants: "Scrum Team completo e Interesados clave (Stakeholders, clientes, usuarios finales).",
            outputs: "Feedback directo sobre el software funcional y Product Backlog revisado y repriorizado para el siguiente Sprint."
        },
        retro: {
            title: "Sprint Retrospective (Retrospectiva)",
            timebox: "Máximo 3 horas (Sprint de 1 mes) / 1.5 horas (Sprint de 2 semanas)",
            goal: "Planificar formas de aumentar la calidad y efectividad del equipo (personas, relaciones, procesos y herramientas).",
            participants: "Scrum Team exclusivamente (PO, SM, Developers) en un ambiente de confianza psicológica.",
            outputs: "Plan de mejora accionable con 1 o 2 experimentos o acuerdos que se implementarán de inmediato en el próximo Sprint."
        }
    };

    if (stepButtons.length && detailTitle) {
        stepButtons.forEach(btn => {
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
            btn.addEventListener('click', () => {
                const stepKey = btn.getAttribute('data-step');
                const data = stepData[stepKey];
                if (!data) return;

                stepButtons.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');

                detailTitle.textContent        = data.title;
                detailTimebox.textContent      = data.timebox;
                detailGoal.textContent         = data.goal;
                detailParticipants.textContent = data.participants;
                detailOutputs.textContent      = data.outputs;
            });
        });
    }

    // --------------------------------------------
    // 3. TABLERO KANBAN & LÍMITES WIP (US-11)
    // --------------------------------------------
    const board = document.getElementById('kanbanBoard');
    if (board) {
        const columns = {
            backlog:  { el: document.getElementById('col-backlog'), limit: Infinity, badge: document.getElementById('badge-backlog') },
            progress: { el: document.getElementById('col-progress'), limit: 3, badge: document.getElementById('badge-progress') },
            qa:       { el: document.getElementById('col-qa'), limit: 2, badge: document.getElementById('badge-qa') },
            done:     { el: document.getElementById('col-done'), limit: Infinity, badge: document.getElementById('badge-done') }
        };

        const colOrder = ['backlog', 'progress', 'qa', 'done'];
        const colNames = { backlog: 'Backlog', progress: 'En Proceso', qa: 'Pruebas QA', done: 'Finalizado' };

        function moveCard(card, targetColId) {
            const targetIndex = colOrder.indexOf(targetColId);
            const targetContainer = columns[targetColId]?.el?.querySelector('.kanban-cards-container');
            if (targetIndex === -1 || !targetContainer) return;
            targetContainer.appendChild(card);
            updateCardButtons(card, targetIndex);
            updateWipCounts();
        }

        function updateWipCounts() {
            let totalActive = 0;
            let totalDone = 0;

            colOrder.forEach(colKey => {
                const colObj = columns[colKey];
                if (!colObj.el) return;

                const cardsContainer = colObj.el.querySelector('.kanban-cards-container');
                const count = cardsContainer ? cardsContainer.querySelectorAll('.kanban-card').length : 0;

                if (colKey === 'done') totalDone += count;
                else totalActive += count;

                if (colObj.badge) {
                    colObj.badge.textContent = colObj.limit === Infinity ? `${count} tareas` : `${count} / ${colObj.limit} WIP`;
                }

                if (count > colObj.limit) colObj.el.classList.add('wip-exceeded');
                else colObj.el.classList.remove('wip-exceeded');
            });

            const statActive = document.getElementById('kanbanStatActive');
            const statDone = document.getElementById('kanbanStatDone');
            if (statActive) statActive.textContent = `${totalActive} ${totalActive === 1 ? 'Activa' : 'Activas'}`;
            if (statDone) statDone.textContent = `${totalDone} ${totalDone === 1 ? 'Finalizada' : 'Finalizadas'}`;
        }

        board.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-move');
            if (!btn) return;

            const direction = btn.getAttribute('data-dir');
            const card = btn.closest('.kanban-card');
            const currentCol = card ? card.closest('.kanban-col') : null;
            if (!card || !currentCol) return;

            const currentColId = currentCol.id.replace('col-', '');
            const currentIndex = colOrder.indexOf(currentColId);
            if (currentIndex === -1) return;

            const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
            if (targetIndex >= 0 && targetIndex < colOrder.length) {
                moveCard(card, colOrder[targetIndex]);

                // Mantener el foco del teclado en la tarjeta movida
                const sameBtn = card.querySelector(`.btn-move[data-dir="${direction}"]`);
                const otherBtn = card.querySelector(`.btn-move[data-dir="${direction === 'next' ? 'prev' : 'next'}"]`);
                (sameBtn && sameBtn.style.visibility !== 'hidden' ? sameBtn : otherBtn)?.focus();
            }
        });

        function updateCardButtons(card, colIndex) {
            const prevBtn = card.querySelector('.btn-move[data-dir="prev"]');
            const nextBtn = card.querySelector('.btn-move[data-dir="next"]');
            const code = card.querySelector('.card-code')?.textContent || 'tarjeta';
            if (prevBtn) {
                prevBtn.style.visibility = colIndex === 0 ? 'hidden' : 'visible';
                if (colIndex > 0) {
                    prevBtn.title = `Mover a ${colNames[colOrder[colIndex - 1]]}`;
                    prevBtn.setAttribute('aria-label', `Mover ${code} a ${colNames[colOrder[colIndex - 1]]}`);
                }
            }
            if (nextBtn) {
                nextBtn.style.visibility = colIndex === colOrder.length - 1 ? 'hidden' : 'visible';
                if (colIndex < colOrder.length - 1) {
                    nextBtn.title = `Mover a ${colNames[colOrder[colIndex + 1]]}`;
                    nextBtn.setAttribute('aria-label', `Mover ${code} a ${colNames[colOrder[colIndex + 1]]}`);
                }
            }
        }

        // Arrastrar y soltar (drag-and-drop) entre columnas
        let draggedCard = null;

        board.querySelectorAll('.kanban-card').forEach(card => {
            card.setAttribute('draggable', 'true');
            card.addEventListener('dragstart', (e) => {
                draggedCard = card;
                card.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', card.id);
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                draggedCard = null;
                board.querySelectorAll('.kanban-cards-container.drag-over').forEach(c => c.classList.remove('drag-over'));
            });
        });

        colOrder.forEach(colKey => {
            const container = columns[colKey].el?.querySelector('.kanban-cards-container');
            if (!container) return;
            container.addEventListener('dragover', (e) => {
                if (!draggedCard) return;
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                container.classList.add('drag-over');
            });
            container.addEventListener('dragleave', (e) => {
                if (!container.contains(e.relatedTarget)) container.classList.remove('drag-over');
            });
            container.addEventListener('drop', (e) => {
                e.preventDefault();
                container.classList.remove('drag-over');
                if (draggedCard) moveCard(draggedCard, colKey);
            });
        });

        document.querySelectorAll('.kanban-card').forEach(card => {
            const currentCol = card.closest('.kanban-col');
            if (currentCol) {
                const colId = currentCol.id.replace('col-', '');
                updateCardButtons(card, colOrder.indexOf(colId));
            }
        });

        updateWipCounts();

        const resetBtn = document.getElementById('btnResetKanban');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                const initial = [
                    { id: 'card-1', col: 'backlog' },
                    { id: 'card-2', col: 'backlog' },
                    { id: 'card-3', col: 'progress' },
                    { id: 'card-4', col: 'progress' },
                    { id: 'card-5', col: 'qa' },
                    { id: 'card-6', col: 'done' }
                ];
                initial.forEach(item => {
                    const card = document.getElementById(item.id);
                    const target = columns[item.col]?.el?.querySelector('.kanban-cards-container');
                    if (card && target) {
                        target.appendChild(card);
                        updateCardButtons(card, colOrder.indexOf(item.col));
                    }
                });
                updateWipCounts();
            });
        }

        const overloadBtn = document.getElementById('btnOverloadKanban');
        if (overloadBtn) {
            overloadBtn.addEventListener('click', () => {
                const progressContainer = columns['progress'].el.querySelector('.kanban-cards-container');
                const backlogCards = columns['backlog'].el.querySelectorAll('.kanban-card');
                let moved = 0;
                backlogCards.forEach(c => {
                    if (moved < 2) {
                        progressContainer.appendChild(c);
                        updateCardButtons(c, 1);
                        moved++;
                    }
                });
                updateWipCounts();
            });
        }
    }
}
