# Resumen 08: Plan de Pruebas (Sprint 1) y Documentación Técnica de Sprints del Proyecto

- **Documento Original Principal (8.º documento Office de referencia):** [`../Plan_de_pruebas_Sprint1.docx`](../Plan_de_pruebas_Sprint1.docx)
- **Documentos Técnicos Articulados en `documentacion/`:**
  - [`../sprint.md`](../sprint.md) *(Planificación Ágil Reestructurada Sprints 1, 2 y 3)*
  - [`../sprint_1_planificacion_programadores.md`](../sprint_1_planificacion_programadores.md) *(Plan Técnico Sprint 1 — 29 SP)*
  - [`../sprint_2_planificacion_diseno_desarrollo.md`](../sprint_2_planificacion_diseno_desarrollo.md) *(Plan Técnico Sprint 2 Fase Diseño/UI — 37 SP)*
  - [`../sprint_2.md`](../sprint_2.md) *(Guía de Historias Restantes del Sprint 2 — 29 SP)*
  - [`../DOCUMENTACION_CAMBIOS.md`](../DOCUMENTACION_CAMBIOS.md) *(Bitácora de arquitectura, refactorización y entregas de Sprints 1 y 2)*
  - [`../PROMPT_BOCETO_HOME_CLAUDE.md`](../PROMPT_BOCETO_HOME_CLAUDE.md) *(Identidad visual y guía de estilos VELORA)*

---

## 1. Matriz Oficial del Plan de Pruebas — Sprint 1 (`Plan_de_pruebas_Sprint1.docx`)

- **Alcance:** Equipo VELORA · Portal SGCS 2026 · Historias `US-01`, `US-02`, `US-03`, `US-04` y `US-16`.
- **Resultado Global:** **25 pruebas ejecutadas · 25 aprobadas (`Sí`)**.
- **Estructura obligatoria de columnas para matrices QA (6 columnas):** `ID` | `Prueba` | `Entrada` | `Resultado esperado` | `Resultado obtenido` | `¿Pasó la prueba?`

### Casos de Prueba Verificados *(Tabla completa de `Plan_de_pruebas_Sprint1.docx`)*

| ID | Historia | Prueba | Entrada | Resultado Esperado | Resultado Obtenido | Estado |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: |
| **US1-1** | US-01 | Enlace «Módulo Calidad» | Click en el enlace | Acceder a «Gestión de calidad del Software» | Abre `calidad.html` | Sí |
| **US1-2** | US-01 | Enlace «Sobre Nosotros» | Click en el enlace | Acceder a «Sobre Nosotros» | Abre `nosotros.html` | Sí |
| **US1-3** | US-01 | Menú hamburguesa (375px) | Click en el botón | Se despliega el menú | Menú visible, `aria-expanded=true` | Sí |
| **US1-4** | US-01 | Scroll con menú abierto | Abrir el menú | El fondo no se desplaza | `body` con `overflow: hidden` | Sí |
| **US1-5** | US-01 | Cierre del menú | Tecla `Escape` | El menú se cierra | Menú cerrado | Sí |
| **US1-6** | US-01 | Responsive | Anchos `375`, `414`, `768`, `1024` y `1440px` | Sin scroll horizontal | Sin desbordes en las 3 páginas | Sí |
| **US1-7** | US-01 | Enlaces del sitio | Revisar todos los `href` | Ningún enlace roto de Sprint 1 | Enlaces de Sprint 1 funcionan | Sí |
| **US2-1** | US-02 | Pestaña «ISO/IEC 9126» | Click en la pestaña | Se muestra el panel ISO 9126 | Panel visible, el anterior se oculta | Sí |
| **US2-2** | US-02 | Navegar con teclado | Flecha `→` | Pasa a «ISO 25000» | Panel ISO 25000 visible | Sí |
| **US2-3** | US-02 | Navegar con teclado | Flecha `←` | Vuelve a «ISO 9126» | Panel ISO 9126 visible | Sí |
| **US3-1** | US-03 | Cantidad de flip-cards | Abrir `#tecnicas` | 8 tarjetas | 8 tarjetas (Caja Negra, Caja Blanca, Unitaria, Integración, Sistema, Aceptación, Estática, Dinámica) | Sí |
| **US3-2** | US-03 | Girar tarjeta | Click | Muestra el reverso | Tarjeta girada | Sí |
| **US3-3** | US-03 | Volver la tarjeta | 2.º click | Vuelve al frente | Tarjeta al frente | Sí |
| **US3-4** | US-03 | Girar con teclado | Tecla `Enter` | Muestra el reverso | Tarjeta girada | Sí |
| **US3-5** | US-03 | Volver con teclado | Tecla `Escape` | Vuelve al frente | Tarjeta al frente | Sí |
| **US3-6** | US-03 | Giro en celular | Toque (`375px`) | Gira al primer toque | Gira al primer toque | Sí |
| **US4-1** | US-04 | Filtro «Todas» | Click | 12 herramientas | 12 visibles (Jira, Bugzilla, GitHub Issues, ESLint, SonarQube, Pylint, TestRail, Zephyr, Cypress, Playwright, Selenium, Jest) | Sí |
| **US4-2** | US-04 | Filtro «Bug Trackers» | Click | 3 herramientas | 3 visibles, botón activo | Sí |
| **US4-3** | US-04 | Filtro «Linters» | Click | 3 herramientas | 3 visibles, botón activo | Sí |
| **US4-4** | US-04 | Filtro «Gestión de Pruebas» | Click | 2 herramientas | 2 visibles, botón activo | Sí |
| **US4-5** | US-04 | Filtro «Automatización» | Click | 4 herramientas | 4 visibles, botón activo | Sí |
| **US4-6** | US-04 | Volver a «Todas» | Click | Restablece vista completa | 12 visibles | Sí |
| **US16-1**| US-16 | Tarjetas del equipo | Abrir `nosotros.html` | 3 integrantes | Bruno (`sanma`), Gael e Iasser | Sí |
| **US16-2**| US-16 | Hover en tarjeta | Pasar el mouse | La tarjeta se eleva | Sube `4px` (`translateY(-4px)`) | Sí |
| **US16-3**| US-16 | Pantalla chica | Ancho `375px` | Sin desbordes | Sin scroll horizontal | Sí |

- **Observación original (`US1-7`):** Al cierre del Sprint 1 se corrigieron los enlaces del footer y logo en `index.html`; posteriormente en el Sprint 2 se habilitaron `metodologias.html`, `recursos.html` y `nosotros.html#contacto` *(ver `DOCUMENTACION_CAMBIOS.md`, sección 13)*.

---

## 2. Estado General de Sprints y Historias de Usuario (`sprint.md` y `sprint_2.md`)

### Sprint 1: Fundaciones, Calidad y Estructura Base del SDLC *(Duración: 4 semanas en `sprint.md` / 2 semanas en plan inicial)*
- **Completadas (`✅`):** `US-01` (8 SP), `US-02` (5 SP), `US-03` (5 SP), `US-04` (8 SP), `US-16` (3 SP) → **29 SP entregados**.
- **En curso (`🔄` según `sprint.md`):**
  - `US-05`: Sección 'SDLC' (Línea de tiempo de Requisitos, Diseño, Desarrollo, Pruebas, Despliegue, Mantenimiento).
  - `US-06`: Sección 'Modelos Tradicionales' (Cascada, Modelo en V e Iterativo: ventajas, desventajas y cuándo usarlos).

### Sprint 2: Metodologías Ágiles, Interacción y JS *(Duración: 4 semanas)*
- **Entregadas / Completadas (`✅`):**
  - **Fase 1 — Diseño & Maquetación UX/UI (37 SP, `sprint_2_planificacion_diseno_desarrollo.md`):**
    - `US-08` (8 SP): Manifiesto Ágil (4 valores y 12 principios) y comparativa de paradigmas en `metodologias.html`.
    - `US-07` & `US-09` (5 SP): 4 diagramas vectoriales SVG nativos (*Ciclo Sprint Scrum, Flujo Kanban & Pull System, Bucles XP, Modelo en V*) + visor modal **Lightbox** en `js/agile.js`.
    - `US-10` (8 SP): Sección profunda de Scrum (píldoras de Roles, Eventos, Artefactos + stepper interactivo del Sprint en `js/agile.js`).
    - `US-11` (8 SP): Tablero Kanban interactivo con 4 columnas (*Backlog*, *En Proceso [WIP: 3]*, *Pruebas QA [WIP: 2]*, *Finalizado*), drag-and-drop nativo, botones `←`/`→` y alerta `.wip-exceeded` en `js/agile.js`.
    - `US-17` (5 SP): Formulario de contacto accesible en `nosotros.html#contacto` con validación cliente en `js/contact-form.js`.
    - `US-13` (3 SP): FAQ Ágil implementada con `<details>` y `<summary>` HTML5 nativo (0 líneas de JS).
  - **Fase 2 — Módulos Interactivos y Centro de Recursos (21 SP entregados de 29 SP en `sprint_2.md`):**
    - `US-18` (8 SP): Comparador Interactivo de Metodologías en `metodologias.html#comparador` (`js/comparator.js`, 6 metodologías y 7 atributos homogéneos, mínimo 1 seleccionada, acciones rápidas).
    - `US-19` (8 SP): Encuesta de Preferencias Metodológicas (Wizard de 5 pasos en `metodologias.html#asistente`, `js/survey-wizard.js`, suma ponderada normalizada a 100% por método del mayor resto, rutas QA A=Cascada, B=Scrum, C=Kanban, D=XP).
    - `US-12` (5 SP): Glosario de Términos en `recursos.html#glosario` (`js/glossary.js`, 33 términos en 5 categorías, filtro en vivo sin tildes `normalize('NFD')` + abecedario A–Z con Ñ).
- **Pendientes por Implementar del Sprint 2 (`⏳` — 8 SP restantes según `sprint.md` y `sprint_2.md`):**
  1. **`US-14` — Enlaces de Interés (3 SP, Prioridad BAJA):** Grilla de tarjetas de recursos externos por categoría (*Estándar Oficial, Manifiestos y Guías, Herramientas del Ecosistema, Comunidades y Certificaciones*) con uso obligatorio de `target="_blank" rel="noopener noreferrer"` y 0 enlaces rotos *(ver `sprint_2.md`, líneas 177–202)*.
  2. **`US-15` — Ejercicios y Casos Prácticos (5 SP, Prioridad BAJA):** 4 casos prácticos (*1: Software Médico vs. App Delivery; 2: Cuello de botella Kanban y Lead Time; 3: Caja Negra vs. Caja Blanca en fallo de autenticación; 4: Estimación de Sprint y Burndown Chart*) con nivel de dificultad (Básico, Intermedio, Avanzado), solución **oculta por defecto**, botón `.btn-reveal-solution` con `aria-expanded="false|true"` que alterna entre *"Mostrar Solución Explicada"* y *"Ocultar Solución"*, y caja de *"Lección Aprendida"* *(ver `sprint_2.md`, líneas 205–235)*.

### Sprint 3: Correcciones y Aseguramiento de Calidad (QA) *(Alcance en `sprint.md`, líneas 53–60)*
- Dedicado exclusivamente a *bug fixing*, revisión UI/UX de Sprints 1 y 2, auditoría de accesibilidad **WCAG 2.1 AA**, pruebas *cross-browser* (Chromium, Firefox, Safari móvil/escritorio) y optimización de rendimiento (Lighthouse y consola 100% limpia).

---

## 3. Reglas de Arquitectura y Sistema de Diseño Actual (`DOCUMENTACION_CAMBIOS.md` y `PROMPT_BOCETO_HOME_CLAUDE.md`)

1. **Páginas HTML Activas (5):** `index.html`, `calidad.html`, `metodologias.html`, `recursos.html`, `nosotros.html` (todas comparten la misma barra de navegación global sincronizada con `data-page` y `aria-current="page"`).
2. **Arquitectura CSS Modular (`css/styles.css` como orquestador `@import`):**
   - `variables.css` (tokens), `reset.css` (base, `.sr-only`, `[hidden]`), `layout.css` (header `z-index: 1100`, `.mobile-nav` `z-index: 1050`, subnav sticky, footer), `hero.css`, `components.css`, `agile.css`, `interactive.css`, `resources.css`, `responsive.css` (breakpoints `1024px`, `768px`, `580px`, `480px`, `375px`).
3. **Arquitectura JS Compatible con `file://`:**
   - Scripts expuestos en `window` y cargados secuencialmente sin bloqueo CORS: `navbar.js`, `quality-tabs.js`, `quality-cards.js`, `tools-filter.js`, `agile.js` (consolida Lightbox, Scrum stepper y Kanban), `contact-form.js`, `comparator.js`, `survey-wizard.js`, `glossary.js` y `main.js`.
4. **Identidad Visual VELORA (`PROMPT_BOCETO_HOME_CLAUDE.md`, sección 2):**
   - Fondos oscuros: `#0A0F1D`, `#111827`, `#0F172A`.
   - Acentos: Cyan `#00C2FF` / `#0284C7` y Magenta/Púrpura `#D946EF` / `#8B5CF6`.
   - Gradiente insignia: `linear-gradient(135deg, #00C2FF 0%, #8B5CF6 50%, #D946EF 100%)`.
   - Tipografías: `'Plus Jakarta Sans'` / `'Outfit'`.
5. **Leyes de UX Aplicadas (`DOCUMENTACION_CAMBIOS.md`, secciones 7 y 10):** Ley de Hick, Ley de Fitts (áreas táctiles ≥ 44x44px), Ley de Jakob, Ley de Miller, Ley de Proximidad, Efecto Von Restorff (alerta roja `.wip-exceeded`), Regla Peak-End y Umbral de Doherty (transiciones `0.25s`).

