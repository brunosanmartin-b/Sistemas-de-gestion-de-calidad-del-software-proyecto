# PLANIFICACIÓN TÉCNICA DEL SPRINT 1 — EQUIPO VELORA
**Proyecto:** Portal Web de Sistemas de Gestión de Calidad del Software (SGCS 2026)  
**Metodología:** SCRUM Ágil  
**Duración Estimada:** 2 Semanas (Sprint 1)  
**Equipo de Trabajo:**
- **Scrum Master:** `sanma` (Gestión, Métricas, Desbloqueos, Tablero y Facilitación)
- **Programador / Tester (Dev Lead):** `Gael` (Lógica JavaScript, Maquetación Base, Testing Funcional)
- **Diseñador / Tester (UX/UI Lead):** `Iasser` (Guía de Estilos, Maquetación CSS, Accesibilidad, Testing Visual)

---

## 1. Objetivo del Sprint (Sprint Goal)
> **"Desplegar el Producto Mínimo Viable (MVP) del portal web con la arquitectura base de navegación responsive, la identidad de marca VELORA y la sección completa de Gestión de la Calidad del Software con interactividad dinámica en JavaScript."**

Al finalizar este Sprint, el portal debe estar completamente navegable, visualmente estructurado con el branding de VELORA, adaptado a dispositivos móviles y de escritorio, y con el módulo pedagógico de Calidad del Software totalmente interactivo y validado por QA.

---

## 2. Alcance del Sprint Backlog (Historias de Usuario)

| Prioridad | ID | Historia de Usuario | Story Points (SP) | Responsable Principal | QA / Validador |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **Alta (1)** | **US-01** | Página de Inicio e Introducción General (Layout Base & Nav) | 8 SP | Gael (JS/Base) + Iasser (CSS) | Iasser / sanma |
| **Alta (2)** | **US-02** | Sección 'Fundamentos de Calidad' (ISO 9126 / 25000 + Tabs) | 5 SP | Gael | Iasser |
| **Media (3)**| **US-03** | Sección 'Técnicas de Aseguramiento de la Calidad' (Flip-Cards / Modales) | 5 SP | Gael | Iasser |
| **Media (4)**| **US-04** | Sección 'Herramientas de Calidad' (Filtro interactivo en tiempo real) | 8 SP | Gael | Iasser / sanma |
| **Baja (5)** | **US-16** | Sección 'Sobre Nosotros' (Perfiles de VELORA + Microinteracciones) | 3 SP | Iasser + Gael | sanma |
| **Total** | | **Velocidad Comprometida del Sprint** | **29 SP** | | |

---

## 3. Arquitectura Técnica y Estructura de Archivos Recomendada

Para garantizar un desarrollo limpio, modular y sin conflictos de integración en Git, el equipo adoptará la siguiente estructura estándar para el proyecto:

```text
Zeballitos/
│
├── index.html                      # Página principal (Home / US-01)
├── calidad.html                    # Módulo Gestión de Calidad (US-02, US-03, US-04)
├── nosotros.html                   # Módulo Sobre Nosotros (US-16)
│
├── img/                            # Activos visuales y multimedia
│   ├── VELORA.png                  # Logotipo oficial del equipo VELORA
│   ├── icons/                      # Íconos SVG (calidad, herramientas, nav)
│   └── team/                       # Fotografías/Avatares de los integrantes
│
├── css/                            # Hojas de estilo modulares
│   ├── variables.css               # Paleta de colores, tipografías, sombras y tokens
│   ├── reset.css                   # Normalización CSS y estilos globales
│   ├── layout.css                  # Navbar, footer, contenedores y grid del sistema
│   ├── components.css              # Cards, botones, badges, modales, flip-cards
│   └── responsive.css              # Media queries (Mobile first / Breakpoints)
│
├── js/                             # Módulos de lógica JavaScript (Vanilla ES6+)
│   ├── main.js                     # Inicialización común y active link highlighter
│   ├── navbar.js                   # Lógica del menú hamburguesa y navegación móvil
│   ├── quality-tabs.js             # Lógica de pestañas para normas ISO (US-02)
│   ├── quality-cards.js            # Lógica de flip-cards / modales de pruebas (US-03)
│   └── tools-filter.js             # Lógica de filtrado en tiempo real (US-04)
│
└── docs/                           # Documentación de Sprint y casos de prueba
    ├── sprint_1_planificacion_programadores.md
    └── PROMPT_BOCETO_HOME_CLAUDE.md
```

---

## 4. Desglose Detallado de Tareas Técnicas por Historia de Usuario

### US-01: Página de Inicio e Introducción General (8 SP)
- [ ] **[Diseño/CSS - Iasser]**:
  - Diseñar la **Hero Section** con headline persuasivo, subtítulo explicativo de SGCS y botones de llamado a la acción (CTA).
  - Implementar el Navbar sticky con logotipo (`img/VELORA.png`), enlaces a módulos y botón de acceso rápido.
  - Maquetar la grilla de tarjetas de acceso directo (Quick Access Cards) a los módulos temáticos del sitio.
  - Estructurar el Footer institucional con copyright, mapa de enlaces y firma de VELORA.
- [ ] **[JS - Gael]**:
  - Programar la apertura, cierre y transición suave del menú hamburguesa en `navbar.js` al hacer clic y al pulsar la tecla `Escape`.
  - Crear observador de intersección (`IntersectionObserver`) o listener de scroll para marcar la sección activa (`active-link`).
  - Prevenir el scroll en el body cuando el menú móvil esté desplegado.
- [ ] **[QA - Iasser & sanma]**:
  - Comprobar navegación fluida en resoluciones: Mobile (375px, 414px), Tablet (768px), Desktop (1024px, 1440px).
  - Verificar que no existan enlaces rotos (`href="#"` sin destino o 404).

---

### US-02: Sección "Fundamentos de Calidad" (5 SP)
- [ ] **[Diseño/CSS - Iasser]**:
  - Estructurar las cajas de contenido textual para conceptos clave: Definición de Calidad, Control vs. Aseguramiento, Métricas de Software.
  - Maquetar el componente visual de pestañas (Tabs) o acordeón para contraponer **ISO/IEC 9126** vs. **ISO/IEC 25000 (SQuaRE)**.
- [ ] **[JS - Gael]**:
  - Programar la lógica de alternancia de pestañas en `quality-tabs.js` utilizando atributos `data-tab` o `aria-controls`.
  - Garantizar accesibilidad mediante teclado (navegación por flechas o tabulador en los botones de pestañas).
- [ ] **[QA - Iasser]**:
  - Validar correcta jerarquía de encabezados (`<h1>`, `<h2>`, `<h3>`).
  - Asegurar que la tipografía mantenga contraste de color WCAG AA frente a los fondos.

---

### US-03: Sección "Técnicas de Aseguramiento de la Calidad" (5 SP)
- [ ] **[Diseño/CSS - Iasser]**:
  - Maquetar cuadrícula para niveles de pruebas (Unitarias, Integración, Sistema, Aceptación) y tipos (Caja Negra, Caja Blanca, Estáticas, Dinámicas).
  - Diseñar los estilos 3D para **flip-cards** (con `perspective` y `transform: rotateY(180deg)`) o contenedor modal emergente.
- [ ] **[JS - Gael]**:
  - En `quality-cards.js`, implementar listener de eventos `click` y soporte táctil (`touchend`) para girar las tarjetas o disparar el modal informativo.
  - Implementar cierre de modales con clic fuera del contenedor (backdrop click) o tecla `Escape`.
- [ ] **[QA - Iasser & sanma]**:
  - Probar usabilidad en pantalla táctil de celular: que el giro o modal responda al primer toque sin saltos bruscos.

---

### US-04: Sección "Herramientas de Calidad" (8 SP)
- [ ] **[Diseño/CSS - Iasser]**:
  - Diseñar la barra de botones de filtrado por categorías: *Todas*, *Bug Trackers*, *Linters / Análisis Estático*, *Gestión de Pruebas (Test Management)*, *Automatización*.
  - Maquetar las tarjetas de herramientas (ej. Jira, Bugzilla, ESLint, SonarQube, TestRail, Cypress) con logo, categoría, etiqueta y breve descripción.
- [ ] **[JS - Gael]**:
  - En `tools-filter.js`, crear la lógica de filtrado en tiempo real:
    - Escuchar el evento `click` de cada botón de filtro.
    - Leer el atributo `data-category` del botón seleccionado.
    - Ocultar/mostrar las tarjetas mediante clases CSS con animación fade (`opacity` y `transform: scale()`), sin recargar la página.
    - Manejar el estado visual activo en el botón seleccionado (`class="active"`).
- [ ] **[QA - sanma & Iasser]**:
  - Verificar que el botón "Todas" restablezca la vista completa.
  - Confirmar que no queden huecos en la grilla tras aplicar los filtros.

---

### US-16: Sección "Sobre Nosotros" (3 SP)
- [ ] **[Diseño/CSS - Iasser]**:
  - Maquetar las tarjetas de presentación del equipo **VELORA**:
    - **sanma**: Scrum Master (Liderazgo ágil, control de métricas y facilitación).
    - **Gael**: Programador / Tester (Lógica Front-End, algoritmos interactivos y testing de software).
    - **Iasser**: Diseñador / Tester (Identidad visual, UI/UX, accesibilidad y aseguramiento visual).
  - Incorporar la misión, visión y motivación del equipo respecto a la calidad del software.
- [ ] **[JS - Gael]**:
  - Efectos interactivos sutiles en hover (elevación con sombra brillante y microanimación de badge).
- [ ] **[QA - sanma]**:
  - Comprobación de alineación de tarjetas y visualización en pantallas compactas.

---

## 5. Políticas de Calidad del Equipo VELORA

### Criterios de Preparación (Definition of Ready - DoR)
Una Historia de Usuario puede iniciar desarrollo únicamente si:
1. Cuenta con sus criterios de aceptación divididos por especialidad: `[Diseño/CSS]`, `[JS]` y `[QA/Tester]`.
2. Los assets gráficos necesarios (logo de VELORA, diagramas, íconos) están disponibles en la carpeta `/img`.
3. El alcance técnico fue revisado y validado en la sesión de Sprint Planning con el Scrum Master.

### Criterios de Aceptación y Terminación (Definition of Done - DoD)
Una Historia de Usuario se considera **COMPLETADA ("Done")** y lista para presentar al Product Owner solo si:
1. **Diseño:** El maquetado HTML/CSS cumple con la guía de estilos de VELORA, es responsive y visualmente pulido.
2. **Código:** El código JavaScript es modular, no arroja errores ni advertencias en la consola del navegador (`F12`), y utiliza buenas prácticas (const/let, funciones descriptivas, eventos limpios).
3. **Accesibilidad:** Uso de HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), textos alternativos en imágenes (`alt`) y contraste de color admisible.
4. **Testing:** El rol de QA (Gael / Iasser) ejecutó las pruebas manuales en al menos 2 resoluciones (Desktop y Mobile) sin encontrar bugs bloqueantes.
5. **Aprobación:** El Scrum Master (`sanma`) verifica el cumplimiento en el tablero y mueve la tarjeta a la columna **Done**.

---

## 6. Cronograma y Ceremonias del Sprint 1

```mermaid
gantt
    title Cronograma Sprint 1 — Equipo VELORA (SGCS 2026)
    dateFormat  YYYY-MM-DD
    section Gestión & Setup
    Sprint Planning & Arquitectura Base     :done,    des1, 2026-09-10, 2026-09-11
    Daily Scrum (Monitoreo diario 5 min)    :active,  des2, 2026-09-10, 2026-09-23
    section Desarrollo (Gael & Iasser)
    US-01: Layout, Navbar & Home             :active,  dev1, 2026-09-11, 2026-09-14
    US-02: Fundamentos Calidad (ISO Tabs)   :         dev2, 2026-09-14, 2026-09-16
    US-03: Técnicas de Pruebas (Flip-cards) :         dev3, 2026-09-16, 2026-09-18
    US-04: Herramientas (Filtro JS)         :         dev4, 2026-09-18, 2026-09-21
    US-16: Sobre Nosotros (Team VELORA)     :         dev5, 2026-09-21, 2026-09-22
    section Cierre & Calidad
    QA Integral & Pruebas Cross-browser     :         qa1,  2026-09-22, 2026-09-23
    Sprint Review & Retrospectiva           :         rev1, 2026-09-23, 2026-09-24
```

- **Daily Scrum:** 5 minutos diarios coordinados por `sanma` para responder:
  1. *¿Qué hice ayer para contribuir al objetivo del Sprint?*
  2. *¿Qué haré hoy para avanzar hacia el objetivo del Sprint?*
  3. *¿Tengo algún bloqueo que me impida avanzar?*
- **Sprint Review:** Demostración del MVP navegable y validación frente a los requerimientos del profesor / Product Owner.
- **Sprint Retrospective:** Análisis de retrospectiva grupal (qué funcionó bien, qué problemas surgieron y qué mejoras aplicaremos en el Sprint 2).
