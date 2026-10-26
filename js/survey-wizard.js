// ============================================
// survey-wizard.js — US-19
// Encuesta de preferencias metodológicas (Wizard paso a paso)
// con algoritmo de recomendación ponderado
// ============================================

const SURVEY_QUESTIONS = [
    {
        id: 1,
        tema: 'Estabilidad de los requerimientos',
        pregunta: '¿Qué nivel de estabilidad tienen los requisitos de tu proyecto?',
        opciones: [
            { texto: 'Completamente estables, definidos contractualmente y no cambiarán.', pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 0 } },
            { texto: 'Se conoce la visión general, pero evolucionarán según la respuesta de los usuarios.', pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 2 } },
            { texto: 'Son tareas dinámicas, tickets de soporte y cambios imprevistos diarios.', pesos: { cascada: 0, scrum: 1, kanban: 3, xp: 1 } },
            { texto: 'Requisitos complejos con alta incertidumbre técnica donde la calidad es lo más crítico.', pesos: { cascada: 0, scrum: 1, kanban: 1, xp: 3 } }
        ]
    },
    {
        id: 2,
        tema: 'Disponibilidad del cliente / Product Owner',
        pregunta: '¿Cuál es la disponibilidad y nivel de involucramiento del cliente final?',
        opciones: [
            { texto: 'Baja disponibilidad: solo puede participar en la firma inicial y la entrega final.', pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 0 } },
            { texto: 'Disponible para reuniones periódicas de revisión cada 1 a 2 semanas.', pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 1 } },
            { texto: 'Interacción continua para priorizar solicitudes según van ingresando.', pesos: { cascada: 0, scrum: 1, kanban: 3, xp: 1 } },
            { texto: 'Totalmente integrado con el equipo de desarrollo para pruebas y validaciones diarias.', pesos: { cascada: 0, scrum: 1, kanban: 0, xp: 3 } }
        ]
    },
    {
        id: 3,
        tema: 'Tamaño y madurez del equipo',
        pregunta: '¿Cómo está conformado el equipo que desarrollará el proyecto?',
        opciones: [
            { texto: 'Equipo grande con roles especializados y una estructura jerárquica definida.', pesos: { cascada: 3, scrum: 0, kanban: 1, xp: 0 } },
            { texto: 'Equipo pequeño (3 a 9 personas), multifuncional y autoorganizado.', pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 2 } },
            { texto: 'Equipo de soporte u operaciones que atiende solicitudes a medida que llegan.', pesos: { cascada: 0, scrum: 0, kanban: 3, xp: 0 } },
            { texto: 'Equipo reducido de desarrolladores experimentados que programan en parejas.', pesos: { cascada: 0, scrum: 1, kanban: 0, xp: 3 } }
        ]
    },
    {
        id: 4,
        tema: 'Criticidad y regulación del sistema',
        pregunta: '¿Qué tan crítico es el sistema y qué exigencias de regulación tiene?',
        opciones: [
            { texto: 'Sistema crítico y regulado (salud, aeronáutica, banca) sujeto a auditorías formales.', pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 1 } },
            { texto: 'Producto comercial (SaaS, app) que necesita validar rápido su valor en el mercado.', pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 1 } },
            { texto: 'Servicio en producción donde lo prioritario es resolver incidencias y destrabar cuellos de botella.', pesos: { cascada: 0, scrum: 0, kanban: 3, xp: 0 } },
            { texto: 'Software donde un defecto es muy costoso y se exige excelencia técnica (TDD, revisión continua).', pesos: { cascada: 1, scrum: 1, kanban: 0, xp: 3 } }
        ]
    },
    {
        id: 5,
        tema: 'Frecuencia de entregas',
        pregunta: '¿Cuál es el ritmo o frecuencia esperada de entrega de valor?',
        opciones: [
            { texto: 'Un único lanzamiento final formal cuando el producto esté 100% completo.', pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 0 } },
            { texto: 'Versiones incrementales cada 2 a 4 semanas para recibir feedback temprano.', pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 2 } },
            { texto: 'Flujo constante: cada tarea finalizada y probada pasa a producción de inmediato.', pesos: { cascada: 0, scrum: 1, kanban: 3, xp: 1 } },
            { texto: 'Entregas muy frecuentes guiadas por integración continua y pruebas automatizadas (TDD).', pesos: { cascada: 0, scrum: 1, kanban: 1, xp: 3 } }
        ]
    }
];

// Orden fijo: también define el desempate (determinista)
const SURVEY_METHODS = {
    scrum: {
        nombre: 'Scrum',
        justificacion: 'Tu proyecto combina requisitos que evolucionan con un cliente disponible para revisar avances periódicos. Los Sprints de duración fija permiten entregar incrementos utilizables, inspeccionar el resultado en cada Sprint Review y adaptar el Product Backlog sin perder foco.',
        riesgos: [
            'Requiere un Product Owner con disponibilidad y autoridad real para priorizar.',
            'Sin una Definición de Hecho estricta, la presión del Sprint puede generar deuda técnica.',
            'Las ceremonias pierden valor si se convierten en reuniones de reporte.'
        ]
    },
    kanban: {
        nombre: 'Kanban',
        justificacion: 'El trabajo llega de forma continua e impredecible y lo prioritario es mantener el flujo. Visualizar las tareas en un tablero y limitar el WIP expone los cuellos de botella y reduce el Lead Time sin imponer iteraciones fijas.',
        riesgos: [
            'Sin límites WIP respetados, el tablero se convierte en una simple lista de tareas.',
            'La ausencia de timeboxes puede diluir la planificación de mediano plazo.',
            'Es necesario medir el flujo (Lead Time, Cycle Time) para mejorar de forma objetiva.'
        ]
    },
    xp: {
        nombre: 'Extreme Programming (XP)',
        justificacion: 'La calidad técnica es crítica y los requisitos son inciertos. Las prácticas de XP —TDD, programación en parejas, integración continua y cliente en el sitio— reducen el costo de cada cambio y detectan defectos en minutos.',
        riesgos: [
            'Exige un equipo con alta disciplina técnica y experiencia en pruebas automatizadas.',
            'La programación en parejas requiere cultura colaborativa y tiempo de adaptación.',
            'Depende de un cliente muy involucrado en el día a día del equipo.'
        ]
    },
    cascada: {
        nombre: 'Modelo Tradicional / Cascada',
        justificacion: 'Los requisitos son estables, el cliente participa principalmente al inicio y al final, y el contexto exige documentación formal y aprobaciones por fase. Un enfoque predictivo brinda la trazabilidad que requieren auditorías y certificaciones.',
        riesgos: [
            'Los errores de requisitos se detectan tarde y su corrección es costosa.',
            'El cliente no ve software funcionando hasta las etapas finales.',
            'Cualquier cambio de alcance requiere un proceso formal de control de cambios.'
        ]
    }
};

function initSurveyWizard() {
    const wizard = document.getElementById('surveyWizard');
    if (!wizard) return;

    const stepLabel   = document.getElementById('wizardStepLabel');
    const percentEl   = document.getElementById('wizardPercent');
    const progress    = document.getElementById('wizardProgress');
    const progressBar = document.getElementById('wizardProgressBar');
    const bodyEl      = document.getElementById('wizardBody');
    const errorEl     = document.getElementById('wizardError');
    const navEl       = document.getElementById('wizardNav');
    const prevBtn     = document.getElementById('wizardPrev');
    const nextBtn     = document.getElementById('wizardNext');
    const resultEl    = document.getElementById('wizardResult');

    const total = SURVEY_QUESTIONS.length;
    let current = 0;
    let answers = new Array(total).fill(null);

    function updateProgress() {
        const answered = answers.filter(a => a !== null).length;
        const percent = Math.round((answered / total) * 100);
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (progress) progress.setAttribute('aria-valuenow', percent);
        if (percentEl) percentEl.textContent = `${percent}% completado`;
    }

    function showError(message) {
        if (errorEl) errorEl.textContent = message || '';
    }

    function renderStep(moveFocus) {
        const question = SURVEY_QUESTIONS[current];
        const name = `survey-q${question.id}`;

        if (stepLabel) stepLabel.textContent = `Paso ${current + 1} de ${total}`;

        const optionsHtml = question.opciones.map((opt, index) => `
            <label class="wizard-option${answers[current] === index ? ' is-selected' : ''}">
                <input type="radio" class="wizard-radio" name="${name}" value="${index}"${answers[current] === index ? ' checked' : ''}>
                <span class="wizard-option-check" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span class="wizard-option-text">${opt.texto}</span>
            </label>`).join('');

        bodyEl.innerHTML = `
            <fieldset class="wizard-step">
                <legend class="wizard-question" tabindex="-1">
                    <span class="wizard-topic">${question.tema}</span>
                    ${question.pregunta}
                </legend>
                <div class="wizard-options">${optionsHtml}</div>
            </fieldset>`;

        bodyEl.querySelectorAll('.wizard-radio').forEach(radio => {
            radio.addEventListener('change', () => {
                answers[current] = Number(radio.value);
                bodyEl.querySelectorAll('.wizard-option').forEach(opt => {
                    opt.classList.toggle('is-selected', opt.contains(radio));
                });
                showError('');
                updateProgress();
            });
        });

        prevBtn.disabled = current === 0;
        nextBtn.textContent = current === total - 1 ? 'Ver resultados' : 'Siguiente →';
        showError('');
        updateProgress();

        if (moveFocus) {
            const legend = bodyEl.querySelector('.wizard-question');
            if (legend) legend.focus({ preventScroll: true });
        }
    }

    function calculateScores() {
        const scores = { scrum: 0, kanban: 0, xp: 0, cascada: 0 };
        answers.forEach((answerIndex, qIndex) => {
            const pesos = SURVEY_QUESTIONS[qIndex].opciones[answerIndex].pesos;
            Object.keys(scores).forEach(key => { scores[key] += pesos[key] || 0; });
        });
        return scores;
    }

    // Porcentajes normalizados que suman exactamente 100 (método del mayor resto)
    function toPercentages(scores) {
        const keys = Object.keys(scores);
        const sum = keys.reduce((acc, k) => acc + scores[k], 0);
        if (sum === 0) return Object.fromEntries(keys.map(k => [k, 0]));

        const raw = keys.map(k => ({ key: k, exact: (scores[k] / sum) * 100 }));
        raw.forEach(r => { r.value = Math.floor(r.exact); });
        let remainder = 100 - raw.reduce((acc, r) => acc + r.value, 0);
        [...raw]
            .sort((a, b) => (b.exact - b.value) - (a.exact - a.value))
            .forEach(r => { if (remainder > 0) { r.value++; remainder--; } });

        return Object.fromEntries(raw.map(r => [r.key, r.value]));
    }

    function renderResult() {
        const scores = calculateScores();
        const percentages = toPercentages(scores);
        const order = Object.keys(SURVEY_METHODS);

        // Ganador determinista: mayor puntaje; ante empate, el primero en SURVEY_METHODS
        const winner = order.reduce((best, key) => (scores[key] > scores[best] ? key : best), order[0]);
        const ranking = [...order].sort((a, b) => scores[b] - scores[a] || order.indexOf(a) - order.indexOf(b));
        const method = SURVEY_METHODS[winner];

        const barsHtml = ranking.map(key => `
            <li class="wizard-bar-row${key === winner ? ' is-winner' : ''}">
                <div class="wizard-bar-label">
                    <span>${SURVEY_METHODS[key].nombre}</span>
                    <strong>${percentages[key]}%</strong>
                </div>
                <div class="wizard-bar-track" aria-hidden="true">
                    <div class="wizard-bar-fill" data-method="${key}" style="width: 0%" data-width="${percentages[key]}"></div>
                </div>
            </li>`).join('');

        const risksHtml = method.riesgos.map(r => `<li>${r}</li>`).join('');

        resultEl.innerHTML = `
            <div class="wizard-result-head">
                <span class="wizard-result-badge">Recomendada para tu proyecto</span>
                <h3 class="wizard-result-title" tabindex="-1">${method.nombre}</h3>
            </div>
            <div class="wizard-result-grid">
                <div class="wizard-result-block">
                    <h4>Compatibilidad por metodología</h4>
                    <ul class="wizard-bars">${barsHtml}</ul>
                </div>
                <div class="wizard-result-block">
                    <h4>Justificación</h4>
                    <p>${method.justificacion}</p>
                    <div class="wizard-risks">
                        <strong>Riesgos a considerar</strong>
                        <ul>${risksHtml}</ul>
                    </div>
                </div>
            </div>
            <div class="wizard-result-actions">
                <button class="btn btn-secondary" type="button" id="wizardRestart">↺ Reiniciar encuesta</button>
            </div>`;

        bodyEl.hidden = true;
        navEl.hidden = true;
        resultEl.hidden = false;
        if (stepLabel) stepLabel.textContent = 'Resultado';

        // Animar las barras después del primer pintado
        requestAnimationFrame(() => {
            resultEl.querySelectorAll('.wizard-bar-fill').forEach(bar => {
                bar.style.width = `${bar.dataset.width}%`;
            });
        });

        const title = resultEl.querySelector('.wizard-result-title');
        if (title) title.focus({ preventScroll: true });

        document.getElementById('wizardRestart').addEventListener('click', restart);
    }

    function restart() {
        answers = new Array(total).fill(null);
        current = 0;
        resultEl.hidden = true;
        resultEl.innerHTML = '';
        bodyEl.hidden = false;
        navEl.hidden = false;
        renderStep(true);
    }

    nextBtn.addEventListener('click', () => {
        if (answers[current] === null) {
            showError('Selecciona una opción para continuar.');
            const firstRadio = bodyEl.querySelector('.wizard-radio');
            if (firstRadio) firstRadio.focus();
            return;
        }
        if (current < total - 1) {
            current++;
            renderStep(true);
        } else {
            renderResult();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (current === 0) return;
        current--;
        renderStep(true);
    });

    renderStep(false);
}
