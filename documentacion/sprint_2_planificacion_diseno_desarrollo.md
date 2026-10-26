# PLANIFICACIÓN TÉCNICA DEL SPRINT 2 — EQUIPO VELORA
**Proyecto:** Portal Web de Sistemas de Gestión de Calidad del Software (SGCS 2026)  
**Metodología:** SCRUM Ágil  
**Duración Estimada:** 4 Semanas (Sprint 2)  
**Equipo de Trabajo:**
- **Scrum Master:** `sanma` (Bruno San Martín — Gestión, Tablero, Métricas y Facilitación)
- **Programador / Tester (Dev Lead):** `Gael` (Gael Rodriguez — Lógica JavaScript, Dinamismo, Interacción)
- **Diseñador / Tester (UX/UI Lead):** `Iasser` (Iasser Chahaud — Identidad Visual, Guía de Estilos, Maquetación CSS, Accesibilidad y Testing Visual)

---

## 1. Objetivo del Sprint 2 (Sprint Goal)
> **"Implementar el marco ágil completo, los módulos interactivos complejos (Lightbox, diagrama de ciclo de Sprint, tablero Kanban con límites WIP) y el canal de comunicación con el usuario mediante el formulario de contacto y feedback accesible."**

Al finalizar este Sprint, los usuarios del portal pueden explorar los fundamentos del Manifiesto Ágil, interactuar con el flujo oficial de Scrum y sus timeboxes reglamentarios, experimentar la gestión del flujo y cuellos de botella en un tablero Kanban interactivo con límites WIP, visualizar diagramas técnicos a pantalla completa en el Lightbox modal reutilizable, y enviar feedback mediante el formulario con validaciones en tiempo real.

---

## 2. Alcance Priorizado: 5 Historias de Usuario con Enfoque de Diseño (Iasser Chahaud)

En concordancia con el rol de **Diseñador UX/UI (Iasser Chahaud)** y la **Planificación Ágil Reestructurada**, se priorizaron e implementaron las 5 historias con mayor impacto visual, arquitectónico y de interfaz:

| Prioridad | ID | Historia de Usuario | Story Points (SP) | Responsable Diseño | Responsable JS | QA / Validador |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **Alta (1)** | **US-08** | Sección 'Metodologías Ágiles' (Manifiesto, 4 Valores, 12 Principios) | 8 SP | **Iasser** | Gael | sanma / Iasser |
| **Media (2)**| **US-07/09** | Ilustraciones Técnicas y Componente Lightbox Modal Reutilizable | 5 SP | **Iasser** | Gael | Iasser |
| **Alta (3)** | **US-10** | Sección Profunda Scrum (Roles, Artefactos, Ceremonias y Diagrama Interactivo) | 8 SP | **Iasser** | Gael | sanma / Iasser |
| **Alta (4)** | **US-11** | Sección Profunda Kanban (Tablero Interactivo con Límites WIP) | 8 SP | **Iasser** | Gael | Iasser |
| **Media (5)**| **US-17** | Formulario de Contacto & Feedback Accesible con Validación | 5 SP | **Iasser** | Gael | sanma / Iasser |
| *(Extra)* | **US-13** | Sección 'FAQ' (Acordeón Interactivo de Dudas Metodológicas) | 3 SP | **Iasser** | Gael | Iasser |
| **Total** | | **Velocidad Entregada del Sprint 2 (Fase Diseño & UI)** | **37 SP** | | | |

---

## 3. Desglose Detallado de Tareas Técnicas por Historia de Usuario

### US-08: Sección "Metodologías Ágiles" (8 SP)
- [x] **[Diseño/CSS - Iasser]**:
  - Maquetar el módulo integral en `metodologias.html`.
  - Diseñar el banner central del **Manifiesto Ágil** con gradiente sutil y contraste accesible.
  - Maquetar la grilla de los **4 Valores Fundamentales** con tarjetas de comparación dual: valor prioritario en color de acento (`var(--accent)`) vs. valor secundario tachado con tipografía atenuada.
  - Estructurar la cuadrícula responsive para los **12 Principios Ágiles**, utilizando insignias circulares numeradas e iconografía limpia.
  - Diseñar tarjetas explicativas comparativas entre enfoques Tradicionales (Predictivos) y Ágiles (Adaptativos).
- [x] **[JS - Gael]**:
  - Integrar navegación fluida mediante enlaces ancla (`#manifiesto`) con scroll suave compensado por el header sticky.
  - Sincronizar el estado activo en la barra secundaria (`subnav`).
- [x] **[QA - Iasser & sanma]**:
  - Verificar contraste de color WCAG 2.1 AA en las tarjetas de valores y texto explicativo.
  - Validar que en resoluciones móviles (375px a 768px) los 12 principios se apilen en una sola columna legible.

---

### US-07 & US-09: Ilustraciones de Modelos y Ágiles + Componente Lightbox (5 SP)
- [x] **[Diseño/CSS - Iasser]**:
  - Diseñar 4 diagramas técnicos vectoriales (SVG nativo optimizado, sin imágenes pesadas):
    1. *Ciclo del Sprint Scrum:* Flujo de Product Backlog a Incremento Potencialmente Entregable con bucle de Daily 24h.
    2. *Flujo de Trabajo Kanban & Pull System:* 4 columnas con visualización de límites WIP y tarjetas.
    3. *Bucles de Retroalimentación en XP:* Escalas concéntricas (Pair Programming, TDD, CI/CD, Acceptance Tests).
    4. *Modelo Tradicional en V:* Correspondencia simétrica entre fases de desarrollo y verificación de pruebas.
  - Diseñar la interfaz del componente **Lightbox Modal**:
    - Backdrop con desenfoque moderno (`backdrop-filter: blur(8px)`) y color oscuro accesible.
    - Contenedor flotante con animación suave `scale(0.92) → scale(1)`.
    - Botón de cierre semántico con área táctil accesible de 44x44px.
    - Caption contextual con tipografía `Plus Jakarta Sans`.
- [x] **[JS - Gael]**:
  - Programar `js/lightbox.js` reutilizable para cualquier tarjeta `.diagram-card`.
  - Inyección dinámica del SVG y leyenda según atributos `data-title` y `data-caption`.
  - Manejo de accesibilidad: tecla `Escape`, trampa de foco y restauración de foco al cerrar.
- [x] **[QA - Iasser]**:
  - Comprobar nitidez de vectores SVG en pantallas Retina / 4K.
  - Verificar que el modal no genere scroll horizontal ni desborde vertical en pantallas móviles compactas.

---

### US-10: Sección Profunda de Scrum (8 SP)
- [x] **[Diseño/CSS - Iasser]**:
  - Diseñar la navegación por botones de píldora (`.scrum-pill-btn`) para alternar entre:
    1. *Roles del Scrum Team:* Product Owner, Scrum Master, Developers.
    2. *Ceremonias / Eventos:* Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective.
    3. *Artefactos y Compromisos:* Product Backlog (Product Goal), Sprint Backlog (Sprint Goal), Incremento (Definition of Done).
  - Diseñar tarjetas de roles con código de colores por responsabilidad (PO: Indigo, SM: Esmeralda, Developers: Ámbar) y llamada de alerta para "Antipatrones a evitar".
  - Maquetar el **Diagrama Interactivo del Sprint**: diseño de barra de pasos secuenciales (`.sprint-stepper`) y panel de detalles con timebox oficial resaltado en badge.
- [x] **[JS - Gael]**:
  - En `js/scrum-diagram.js`, crear la lógica de alternancia de pestañas con `aria-selected` y persistencia de visibilidad.
  - Manejar la reactividad del stepper para actualizar en tiempo real el timebox, objetivo, participantes y entregables sin recarga.
- [x] **[QA - sanma & Iasser]**:
  - Validar fidelidad del contenido teórico con la *Guía Oficial de Scrum (Ken Schwaber & Jeff Sutherland)*.
  - Garantizar navegación táctil fluida en el stepper de ceremonias en smartphones.

---

### US-11: Sección Profunda de Kanban (8 SP)
- [x] **[Diseño/CSS - Iasser]**:
  - Maquetar la interfaz del **Tablero Kanban interactivo** que emula herramientas líderes de la industria (Jira, Trello):
    - 4 Columnas temáticas: *Backlog* (gris), *En Proceso* (azul índigo con límite WIP: 3), *Pruebas QA* (ámbar con límite WIP: 2) y *Finalizado* (verde esmeralda).
    - Tarjetas de tareas con insignias de prioridad (Alta en rojo, Media en ámbar, Baja en verde), código de ticket (`US-XX`), título descriptivo y avatar del integrante asignado.
    - Badges de contador de WIP interactivos (`X / Y WIP`).
    - Estado de alerta visual para **Límite WIP Excedido** (`.wip-exceeded`): borde rojo con animación de pulsación (`keyframes pulse`) para evidenciar el cuello de botella.
    - Botones sutiles de navegación de tarjetas (`←` y `→`).
- [x] **[JS - Gael]**:
  - Programar `js/kanban-board.js`: transferencia de tarjetas en el DOM entre columnas contiguas.
  - Cálculo dinámico de tareas por columna y verificación automática de superación de límites WIP.
  - Funcionalidades auxiliares: botón de "Reiniciar Tablero" y botón pedagógico para "Forzar Exceso WIP".
- [x] **[QA - Iasser]**:
  - Verificar que el tablero se adapte en layout responsivo: 4 columnas en Desktop (>1024px), 2 columnas en Tablet (768px-1024px) y 1 columna apilada en Mobile (<768px).

---

### US-17: Formulario de Contacto & Feedback Accesible (5 SP)
- [x] **[Diseño/CSS - Iasser]**:
  - Maquetar la sección `#contacto` en `nosotros.html` con tarjeta contenedora de alta fidelidad visual.
  - Formulario semántico con etiquetas explícitas vinculadas (`<label for="...">`).
  - Campos: Nombre completo, Correo electrónico, Selector estilizado de categoría (Duda teórica, Agilidad, Feedback UX, Bug QA) y Área de texto descriptiva.
  - Checkbox accesible de términos de privacidad y uso académico.
  - Estilos de feedback visual inmediato: `:focus-visible` con anillo de acento, estados de error en rojo legible con mensaje explicativo, y tarjeta de confirmación de éxito con icono animado.
- [x] **[JS - Gael]**:
  - Programar `js/contact-form.js` con validaciones del lado del cliente: formato de correo mediante expresión regular, longitud mínima de mensaje (10 caracteres) y obligatoriedad de campos.
  - Transición suave a la tarjeta de éxito tras el envío, con opción para "Enviar otro mensaje".
- [x] **[QA - sanma & Iasser]**:
  - Probar casos de prueba de frontera: envío de formulario vacío, correos mal formateados (`test@`, `test@domain`), espacios en blanco y caracteres especiales.

---

### US-13: Sección "Preguntas Frecuentes (FAQ)" (3 SP)
- [x] **[Diseño/CSS - Iasser]**:
  - Maquetar acordeón interactivo en `metodologias.html` con microinteracción de rotación de icono (`transform: rotate(180deg)`).
  - Alto contraste y diseño de borde activo al desplegar respuesta.
- [x] **[JS - Gael]**:
  - En `js/faq-accordion.js`, controlar la animación de apertura/cierre calculando `scrollHeight` para transición CSS fluida.
- [x] **[QA - Iasser]**:
  - Validar soporte completo de teclado (`Enter` / `Espacio` para abrir/cerrar) y atributos `aria-expanded`.

---

## 4. Arquitectura de Archivos Actualizada (Sprint 2)

> **Nota:** los scripts `lightbox.js`, `scrum-diagram.js`, `kanban-board.js` y `faq-accordion.js` mencionados en las tareas de la sección 3 se consolidaron en `js/agile.js` (el FAQ usa `<details>` nativo, sin JavaScript). Ver `DOCUMENTACION_CAMBIOS.md`, sección 12.

```text
Sistemas-de-gestion-de-calidad-del-software-proyecto/
├── index.html                      # Home / US-01 (Actualizado con links a Sprint 2)
├── calidad.html                    # Módulo Calidad / US-02, US-03, US-04
├── metodologias.html               # NUEVO: Módulo Ágil / US-08, US-07/09, US-10, US-11, US-13, US-18, US-19
├── recursos.html                   # NUEVO: Centro de Recursos / US-12
├── nosotros.html                   # Módulo Nosotros & Contacto / US-16, US-17
│
├── css/
│   ├── styles.css                  # Orquestador (@import)
│   ├── variables.css               # Design tokens (colores, espaciado, sombras)
│   ├── reset.css                   # Normalización y utilidades base
│   ├── layout.css                  # Header, navbar, dropdowns, mobile-nav, subnav, footer
│   ├── hero.css                    # Hero section y gradientes
│   ├── components.css              # Cards, tabs, flip-cards, filtros
│   ├── agile.css                   # NUEVO: Estilos de Sprint 2 (Lightbox, Scrum, Kanban, FAQ, Form)
│   ├── interactive.css             # NUEVO: Comparador (US-18) y Wizard de Encuesta (US-19)
│   ├── resources.css               # NUEVO: Centro de Recursos — Glosario (US-12)
│   └── responsive.css              # Breakpoints globales (1024px, 768px, 480px, 375px)
│
├── js/
│   ├── main.js                     # Inicializador global VELORA
│   ├── navbar.js                   # Control de navegación, dropdowns y menú móvil
│   ├── quality-tabs.js             # Tabs de normas ISO
│   ├── quality-cards.js            # Flip-cards de pruebas
│   ├── tools-filter.js             # Filtro dinámico de herramientas
│   ├── agile.js                    # CONSOLIDADO: Lightbox (US-07/09), Scrum (US-10) y Kanban (US-11)
│   ├── contact-form.js             # Validación de formulario y feedback (US-17)
│   ├── comparator.js               # Comparador dinámico de metodologías (US-18)
│   ├── survey-wizard.js            # Wizard y algoritmo de recomendación (US-19)
│   └── glossary.js                 # Búsqueda en tiempo real y filtro A-Z (US-12)
│
├── img/
│   ├── VELORA.png                  # Logotipo modo oscuro
│   └── VELORA-N.png                # Logotipo modo claro
│
└── documentacion/
    ├── DOCUMENTACION_CAMBIOS.md     # Bitácora detallada de refactorización y entregas
    ├── sprint.md                   # Planificación ágil reestructurada oficial
    ├── sprint_1_planificacion_programadores.md # Plan técnico Sprint 1
    ├── sprint_2.md                 # Guía de historias restantes del Sprint 2
    ├── sprint_2_planificacion_diseno_desarrollo.md # Plan técnico Sprint 2 (Este documento)
    ├── roles_proyecto_SCRUM.md     # Definición de roles VELORA
    └── Proyecto_SGCS.md            # Backlog maestro de requerimientos
```

---

## 5. Principios de Diseño y Leyes de UX Aplicadas por Iasser Chahaud

| Ley de UX | Aplicación Concreta en Sprint 2 |
|---|---|
| **Ley de Miller** | Las ceremonias Scrum se dividen en 4 pasos digeribles; el tablero Kanban agrupa como máximo 3 tareas por columna activa para no abrumar al estudiante. |
| **Ley de Fitts** | Botones de desplazamiento del tablero Kanban con áreas de clic generosas; botón de cerrar Lightbox de 40x40px posicionado en la esquina superior accesible. |
| **Ley de Jakob** | Patrones familiares de diseño: el Tablero Kanban sigue la convención mental de Jira/Trello y el Lightbox responde a la tecla estándar `Escape`. |
| **Ley de Hick** | Subnavegación secundaria ("En esta página:") que reduce el tiempo de decisión para saltar directamente a la sección de interés. |
| **Efecto Von Restorff** | El estado de **Límite WIP Excedido** se destaca en color rojo con animación de latido frente a los tonos neutros del tablero. |
| **Umbral de Doherty** | Microinteracciones y transiciones de 0.25s en la apertura del Lightbox, giro de flechas de acordeón y movimientos de tarjetas Kanban. |
