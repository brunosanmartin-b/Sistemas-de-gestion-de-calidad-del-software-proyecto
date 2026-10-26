// ============================================
// glossary.js — US-12
// Glosario interactivo: búsqueda en tiempo real y filtro alfabético
// ============================================

const GLOSSARY_TERMS = [
    { termino: 'Backlog del Producto', categoria: 'Scrum', definicion: 'Lista emergente y ordenada de todo lo que se sabe necesario en el producto. Es la única fuente de trabajo para el Scrum Team y la gestiona el Product Owner.' },
    { termino: 'Caja Blanca', categoria: 'Testing', definicion: 'Técnica de prueba que diseña los casos a partir de la estructura interna del código (caminos, condiciones y bucles) para verificar su lógica.' },
    { termino: 'Caja Negra', categoria: 'Testing', definicion: 'Técnica de prueba que evalúa el comportamiento externo del software según sus requisitos, sin conocer su implementación interna.' },
    { termino: 'Ciclo de Vida del Software (SDLC)', categoria: 'SDLC', definicion: 'Conjunto de etapas por las que pasa un sistema: análisis de requisitos, diseño, implementación, pruebas, despliegue y mantenimiento.' },
    { termino: 'Cycle Time', categoria: 'Kanban', definicion: 'Tiempo que transcurre desde que el equipo comienza a trabajar en una tarea hasta que la finaliza. Mide la eficiencia del proceso interno.' },
    { termino: 'Daily Scrum', categoria: 'Scrum', definicion: 'Evento diario de 15 minutos en el que los Developers inspeccionan el progreso hacia el Sprint Goal y adaptan el plan de las próximas 24 horas.' },
    { termino: 'Defecto (Bug)', categoria: 'Testing', definicion: 'Imperfección en el software que provoca que no cumpla con un requisito o se comporte de manera inesperada.' },
    { termino: 'Definition of Done (DoD)', categoria: 'Scrum', definicion: 'Acuerdo formal con los criterios de calidad que debe cumplir un incremento para considerarse terminado (pruebas, revisión de código, accesibilidad, etc.).' },
    { termino: 'Definition of Ready (DoR)', categoria: 'Scrum', definicion: 'Criterios que una historia de usuario debe cumplir antes de entrar a un Sprint: estar clara, estimada y con criterios de aceptación definidos.' },
    { termino: 'Historia de Usuario', categoria: 'Scrum', definicion: 'Descripción breve de una funcionalidad desde la perspectiva del usuario: "Como [rol], quiero [objetivo] para [beneficio]", acompañada de criterios de aceptación.' },
    { termino: 'Incremento', categoria: 'Scrum', definicion: 'Resultado utilizable de un Sprint que suma valor al producto y cumple estrictamente la Definición de Hecho.' },
    { termino: 'Integración Continua', categoria: 'SDLC', definicion: 'Práctica de integrar el código de todo el equipo varias veces al día, ejecutando compilación y pruebas automatizadas en cada cambio.' },
    { termino: 'ISO/IEC 25000 (SQuaRE)', categoria: 'Calidad / ISO', definicion: 'Familia de normas para la evaluación de la calidad del producto software. Reemplaza a ISO 9126 y define un modelo de calidad con ocho características.' },
    { termino: 'ISO/IEC 9126', categoria: 'Calidad / ISO', definicion: 'Norma que define un modelo de calidad del software basado en seis características: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.' },
    { termino: 'Kanban', categoria: 'Kanban', definicion: 'Método de gestión del flujo de trabajo que visualiza las tareas en un tablero, limita el trabajo en curso y busca la mejora continua.' },
    { termino: 'Lead Time', categoria: 'Kanban', definicion: 'Tiempo total desde que se solicita una tarea hasta que se entrega al cliente. Es la métrica de flujo que percibe el usuario.' },
    { termino: 'Límite WIP', categoria: 'Kanban', definicion: 'Cantidad máxima de tareas permitidas en una columna del tablero (Work In Progress). Evita la sobrecarga y expone los cuellos de botella.' },
    { termino: 'Mantenibilidad', categoria: 'Calidad / ISO', definicion: 'Característica de calidad que indica la facilidad con la que el software puede modificarse para corregir defectos, mejorar o adaptarse a cambios.' },
    { termino: 'Métrica', categoria: 'Calidad / ISO', definicion: 'Medida cuantitativa del grado en que un sistema, componente o proceso posee un atributo determinado (por ejemplo, densidad de defectos o cobertura).' },
    { termino: 'Modelo en Cascada', categoria: 'SDLC', definicion: 'Modelo de desarrollo secuencial en el que cada fase debe completarse y aprobarse antes de comenzar la siguiente.' },
    { termino: 'Modelo en V', categoria: 'SDLC', definicion: 'Variante del modelo en cascada que asocia cada fase de desarrollo con un nivel de prueba correspondiente (unitario, integración, sistema y aceptación).' },
    { termino: 'Pair Programming', categoria: 'SDLC', definicion: 'Práctica de Extreme Programming en la que dos desarrolladores trabajan en un mismo puesto: uno escribe el código y el otro lo revisa en tiempo real.' },
    { termino: 'Product Owner', categoria: 'Scrum', definicion: 'Rol responsable de maximizar el valor del producto y de gestionar el Product Backlog, definiendo y comunicando el Objetivo del Producto.' },
    { termino: 'Prueba de Regresión', categoria: 'Testing', definicion: 'Prueba que se repite tras un cambio en el software para asegurar que las funcionalidades existentes siguen funcionando correctamente.' },
    { termino: 'Prueba Unitaria', categoria: 'Testing', definicion: 'Prueba que verifica de forma aislada el funcionamiento de la unidad más pequeña de código, como una función o un método.' },
    { termino: 'QA (Aseguramiento de la Calidad)', categoria: 'Calidad / ISO', definicion: 'Conjunto de actividades proactivas orientadas a los procesos que buscan prevenir defectos antes de que ocurran.' },
    { termino: 'QC (Control de la Calidad)', categoria: 'Calidad / ISO', definicion: 'Conjunto de actividades reactivas orientadas al producto que buscan detectar y corregir defectos mediante inspecciones y pruebas.' },
    { termino: 'Refactorización', categoria: 'SDLC', definicion: 'Mejora de la estructura interna del código sin alterar su comportamiento externo, para hacerlo más legible y mantenible.' },
    { termino: 'Retrospectiva', categoria: 'Scrum', definicion: 'Evento que cierra el Sprint, en el que el Scrum Team analiza cómo trabajó y acuerda mejoras concretas para el siguiente Sprint.' },
    { termino: 'Scrum Master', categoria: 'Scrum', definicion: 'Rol responsable de instaurar Scrum, facilitar los eventos y eliminar los impedimentos que afectan la efectividad del equipo.' },
    { termino: 'Sistema Pull', categoria: 'Kanban', definicion: 'Principio por el cual el equipo toma nuevo trabajo solo cuando tiene capacidad disponible, en lugar de que el trabajo le sea asignado.' },
    { termino: 'Sprint', categoria: 'Scrum', definicion: 'Evento de duración fija (de 1 a 4 semanas) en el que se crea un Incremento utilizable. Contiene a todos los demás eventos de Scrum.' },
    { termino: 'TDD (Desarrollo Guiado por Pruebas)', categoria: 'Testing', definicion: 'Práctica que consiste en escribir primero una prueba automatizada que falla, luego el código mínimo para que pase y finalmente refactorizar.' }
];

const GLOSSARY_ALPHABET = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .trim();
}

function initGlossary() {
    const grid = document.getElementById('glossaryGrid');
    if (!grid) return;

    const searchInput = document.getElementById('glossarySearch');
    const clearBtn    = document.getElementById('glossaryClear');
    const alphabetEl  = document.getElementById('glossaryAlphabet');
    const countEl     = document.getElementById('glossaryCount');
    const emptyEl     = document.getElementById('glossaryEmpty');
    const resetBtn    = document.getElementById('glossaryReset');

    const terms = [...GLOSSARY_TERMS]
        .sort((a, b) => a.termino.localeCompare(b.termino, 'es'))
        .map(t => ({
            ...t,
            letra: t.termino.charAt(0).toUpperCase().normalize('NFD').charAt(0),
            indice: normalizeText(`${t.termino} ${t.definicion}`)
        }));

    const lettersWithTerms = new Set(terms.map(t => t.letra));
    let activeLetter = 'todos';
    let query = '';

    // ---- Navegación alfabética ----
    const letterButtons = [];
    ['todos', ...GLOSSARY_ALPHABET].forEach(letter => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'glossary-letter';
        btn.dataset.letter = letter;
        btn.textContent = letter === 'todos' ? 'Todos' : letter;
        btn.setAttribute('aria-pressed', letter === activeLetter ? 'true' : 'false');
        if (letter !== 'todos' && !lettersWithTerms.has(letter)) {
            btn.disabled = true;
            btn.setAttribute('aria-label', `${letter}: sin términos`);
        }
        btn.addEventListener('click', () => {
            activeLetter = letter;
            render();
        });
        alphabetEl.appendChild(btn);
        letterButtons.push(btn);
    });

    // ---- Tarjetas ----
    const cards = terms.map(term => {
        const card = document.createElement('article');
        card.className = 'glossary-card';
        card.innerHTML = `
            <span class="glossary-badge">${term.categoria}</span>
            <h3 class="glossary-term">${term.termino}</h3>
            <p class="glossary-definition">${term.definicion}</p>`;
        grid.appendChild(card);
        return { term, card };
    });

    function render() {
        const normalizedQuery = normalizeText(query);
        let visible = 0;

        cards.forEach(({ term, card }) => {
            const matchesLetter = activeLetter === 'todos' || term.letra === activeLetter;
            const matchesQuery = !normalizedQuery || term.indice.includes(normalizedQuery);
            const show = matchesLetter && matchesQuery;
            card.hidden = !show;
            if (show) visible++;
        });

        letterButtons.forEach(btn => {
            const isActive = btn.dataset.letter === activeLetter;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        if (clearBtn) clearBtn.hidden = !query;
        if (emptyEl) emptyEl.hidden = visible > 0;
        if (countEl) {
            countEl.textContent = visible === terms.length
                ? `Mostrando los ${terms.length} términos del glosario.`
                : `${visible} de ${terms.length} términos coinciden con los filtros aplicados.`;
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            query = searchInput.value;
            render();
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchInput.value) {
                e.stopPropagation();
                searchInput.value = '';
                query = '';
                render();
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            query = '';
            render();
            searchInput.focus();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            searchInput.value = '';
            query = '';
            activeLetter = 'todos';
            render();
            searchInput.focus();
        });
    }

    render();
}
