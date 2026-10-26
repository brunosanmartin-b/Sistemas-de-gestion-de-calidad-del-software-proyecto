// ============================================
// comparator.js — US-18
// Comparador interactivo de metodologías (tabla dinámica)
// ============================================

const METODOLOGIAS_DATA = {
    cascada: {
        id: 'cascada',
        nombre: 'Cascada',
        familia: 'tradicional',
        enfoque: 'Predictivo y secuencial. Cada fase requiere aprobación formal antes de iniciar la siguiente.',
        flexibilidadCambio: 'Baja. Los cambios de alcance son costosos y pasan por un comité de control de cambios (CCB).',
        roles: 'Jerárquicos y especializados: Gerente de Proyecto, Analista, Diseñador, Desarrollador y QA Tester.',
        entregable: 'Entrega única del producto completo al final del proyecto.',
        cliente: 'Solo al inicio (definición de requisitos) y al final (pruebas de aceptación y entrega).',
        documentacion: 'Exhaustiva y contractual: cada fase produce documentos formales que se aprueban.',
        idealPara: 'Proyectos críticos y regulados (aeroespacial, médico) con requisitos fijos e inmutables.'
    },
    'modelo-v': {
        id: 'modelo-v',
        nombre: 'Modelo en V',
        familia: 'tradicional',
        enfoque: 'Predictivo con verificación simétrica: cada fase de desarrollo tiene su fase de pruebas asociada.',
        flexibilidadCambio: 'Baja. Un cambio obliga a rehacer la especificación y su plan de pruebas correspondiente.',
        roles: 'Especializados: analistas y diseñadores en la rama izquierda, testers y QA en la rama derecha.',
        entregable: 'Producto final verificado y validado nivel por nivel (unitario, integración, sistema, aceptación).',
        cliente: 'Define requisitos al inicio y valida en las pruebas de aceptación finales.',
        documentacion: 'Muy alta: especificaciones y planes de prueba trazables entre cada nivel de la V.',
        idealPara: 'Sistemas embebidos o de seguridad crítica donde la trazabilidad de pruebas es obligatoria.'
    },
    iterativo: {
        id: 'iterativo',
        nombre: 'Iterativo',
        familia: 'tradicional',
        enfoque: 'Desarrollo en ciclos repetidos que refinan el producto, con una planificación global previa.',
        flexibilidadCambio: 'Media. Los cambios se incorporan en la siguiente iteración planificada.',
        roles: 'Roles definidos de un proyecto tradicional, con mayor colaboración entre fases.',
        entregable: 'Versiones parciales del sistema al final de cada iteración, cada una más completa.',
        cliente: 'Revisa el resultado de cada iteración y aporta retroalimentación para la siguiente.',
        documentacion: 'Moderada: se actualiza en cada iteración junto con el diseño.',
        idealPara: 'Proyectos grandes con riesgo técnico donde conviene validar el diseño de forma temprana.'
    },
    scrum: {
        id: 'scrum',
        nombre: 'Scrum',
        familia: 'agil',
        enfoque: 'Adaptativo y empírico en ciclos fijos (Sprints de 1 a 4 semanas) orientados al valor.',
        flexibilidadCambio: 'Alta entre Sprints. El Product Backlog se reprioriza; el Sprint Backlog se protege.',
        roles: 'Scrum Team sin jerarquías internas: Product Owner, Scrum Master y Developers.',
        entregable: 'Incremento utilizable que cumple la Definición de Hecho al cierre de cada Sprint.',
        cliente: 'Continuo a través del Product Owner y participación activa en la Sprint Review.',
        documentacion: 'Ligera: se prioriza el software funcionando; los artefactos son transparentes y vivos.',
        idealPara: 'Productos innovadores y software comercial que requiere validación rápida de mercado.'
    },
    kanban: {
        id: 'kanban',
        nombre: 'Kanban',
        familia: 'agil',
        enfoque: 'Flujo continuo guiado por demanda (sistema Pull), visualización del trabajo y límites WIP.',
        flexibilidadCambio: 'Muy alta. Las tareas se repriorizan mientras no hayan entrado a "En Proceso".',
        roles: 'No prescribe roles; respeta la estructura existente y fomenta la mejora continua.',
        entregable: 'Entrega continua de cada tarea terminada, sin timeboxes obligatorios.',
        cliente: 'Interacción fluida según las prioridades del tablero en tiempo real.',
        documentacion: 'Mínima: políticas explícitas del tablero y métricas de flujo (Lead Time, Cycle Time).',
        idealPara: 'Equipos de soporte, mantenimiento, operaciones DevOps o servicios con demanda impredecible.'
    },
    xp: {
        id: 'xp',
        nombre: 'Extreme Programming (XP)',
        familia: 'agil',
        enfoque: 'Excelencia técnica con ciclos de retroalimentación inmediatos (TDD, pares, integración continua).',
        flexibilidadCambio: 'Extrema. El refactoring continuo y las pruebas automatizadas abaratan cada cambio.',
        roles: 'Programadores en pareja, Coach, Tracker y Cliente en el sitio (On-site Customer).',
        entregable: 'Versiones pequeñas y frecuentes con integración continua diaria.',
        cliente: 'Integrado en el equipo: aclara dudas y redacta las pruebas de aceptación.',
        documentacion: 'Mínima: el código limpio y las pruebas automatizadas actúan como documentación.',
        idealPara: 'Software con requisitos volátiles donde la calidad del código es crítica.'
    }
};

const COMPARATOR_ATTRIBUTES = [
    { key: 'enfoque',            label: 'Enfoque principal' },
    { key: 'flexibilidadCambio', label: 'Gestión del cambio' },
    { key: 'roles',              label: 'Estructura de roles' },
    { key: 'entregable',         label: 'Ciclo y entrega' },
    { key: 'cliente',            label: 'Involucramiento del cliente' },
    { key: 'documentacion',      label: 'Nivel de documentación' },
    { key: 'idealPara',          label: 'Ideal para' }
];

const COMPARATOR_PRESETS = {
    'tradicional-agil': ['cascada', 'scrum'],
    'scrum-kanban':     ['scrum', 'kanban']
};

function initComparator() {
    const app = document.getElementById('comparatorApp');
    if (!app) return;

    const chipGroups = {
        tradicional: app.querySelector('[data-family="tradicional"]'),
        agil:        app.querySelector('[data-family="agil"]')
    };
    const statusEl   = document.getElementById('comparatorStatus');
    const tableWrap  = document.getElementById('comparatorTableWrap');
    const table      = document.getElementById('comparatorTable');
    const emptyState = document.getElementById('comparatorEmpty');
    const emptyText  = document.getElementById('comparatorEmptyText');
    const caption    = table ? table.querySelector('caption') : null;

    const methodIds = Object.keys(METODOLOGIAS_DATA);
    let selected = ['cascada', 'scrum'];

    // ---- Chips de selección (checkboxes estilizados) ----
    methodIds.forEach(id => {
        const method = METODOLOGIAS_DATA[id];
        const group = chipGroups[method.familia];
        if (!group) return;

        const label = document.createElement('label');
        label.className = 'comparator-chip';
        label.dataset.method = id;
        label.innerHTML = `
            <input type="checkbox" class="comparator-checkbox" value="${id}">
            <span class="comparator-chip-dot" aria-hidden="true"></span>
            <span class="comparator-chip-name">${method.nombre}</span>
            <svg class="comparator-chip-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;
        group.appendChild(label);
    });

    const checkboxes = app.querySelectorAll('.comparator-checkbox');

    function announce(message, isWarning) {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.classList.toggle('is-warning', !!isWarning);
    }

    function syncChips() {
        checkboxes.forEach(cb => {
            cb.checked = selected.includes(cb.value);
            cb.closest('.comparator-chip').classList.toggle('is-selected', cb.checked);
        });
    }

    function buildCell(tag, text, className) {
        const cell = document.createElement(tag);
        if (className) cell.className = className;
        cell.textContent = text;
        return cell;
    }

    function renderTable() {
        // Mantener el orden del catálogo, no el orden de selección
        const columns = methodIds.filter(id => selected.includes(id));

        if (columns.length < 2) {
            if (tableWrap) tableWrap.hidden = true;
            if (emptyState) emptyState.hidden = false;
            if (emptyText) {
                emptyText.textContent = columns.length === 1
                    ? `Seleccionaste ${METODOLOGIAS_DATA[columns[0]].nombre}. Selecciona al menos una metodología más para comparar.`
                    : 'Selecciona al menos dos metodologías para comparar.';
            }
            return;
        }

        if (emptyState) emptyState.hidden = true;
        if (tableWrap) tableWrap.hidden = false;

        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        headRow.appendChild(buildCell('th', 'Atributo', 'comparator-corner'));
        columns.forEach(id => {
            const method = METODOLOGIAS_DATA[id];
            const th = document.createElement('th');
            th.scope = 'col';
            th.dataset.method = id;
            th.innerHTML = `
                <span class="comparator-family">${method.familia === 'agil' ? 'Ágil' : 'Tradicional'}</span>
                <span class="comparator-method-name">${method.nombre}</span>`;
            headRow.appendChild(th);
        });
        thead.appendChild(headRow);

        const tbody = document.createElement('tbody');
        COMPARATOR_ATTRIBUTES.forEach(attr => {
            const row = document.createElement('tr');
            const rowHead = buildCell('th', attr.label);
            rowHead.scope = 'row';
            row.appendChild(rowHead);
            columns.forEach(id => row.appendChild(buildCell('td', METODOLOGIAS_DATA[id][attr.key])));
            tbody.appendChild(row);
        });

        table.replaceChildren(...(caption ? [caption] : []), thead, tbody);
        table.dataset.columns = columns.length;
    }

    function update(message, isWarning) {
        syncChips();
        renderTable();

        if (message) {
            announce(message, isWarning);
        } else if (selected.length > 4) {
            announce(`Comparando ${selected.length} metodologías. Para una lectura cómoda se recomienda comparar entre 2 y 4.`);
        } else if (selected.length >= 2) {
            announce(`Comparando ${selected.length} metodologías.`);
        } else {
            announce('');
        }
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                selected.push(cb.value);
                update();
                return;
            }
            if (selected.length === 1) {
                // Mínimo una metodología seleccionada
                cb.checked = true;
                announce('Debe quedar al menos una metodología seleccionada. Usa "Limpiar selección" para empezar de nuevo.', true);
                return;
            }
            selected = selected.filter(id => id !== cb.value);
            update();
        });
    });

    app.querySelectorAll('[data-comparator-preset]').forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = COMPARATOR_PRESETS[btn.dataset.comparatorPreset];
            if (!preset) return;
            selected = [...preset];
            update();
        });
    });

    const clearBtn = app.querySelector('[data-comparator-clear]');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            selected = [];
            update('Selección limpiada.');
        });
    }

    update();
}
