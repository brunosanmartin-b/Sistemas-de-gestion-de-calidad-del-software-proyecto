# Documentación de Cambios y Refactorización — Proyecto SGCS 2026

> **Equipo:** VELORA · **Metodología:** SCRUM Ágil · **Sprint Actual:** Sprint 1 Completado

---

## Sprint 1 — Resumen de Entregas (US-01 · US-02 · US-03 · US-04 · US-16)

### US-01: Página de Inicio e Introducción General (8 SP)
- Layout base responsive con Hero section, grilla de módulos y sección de equipo.
- Navbar sticky con glassmorphism (`backdrop-filter`), logo dinámico y botón de tema.
- Menú hamburguesa animado (3 líneas → ✕) con cierre por tecla `Escape`.
- `IntersectionObserver` para resaltar el link activo según la sección visible.
- Scroll fluido nativo vía `scroll-behavior: smooth`.

### US-02: Fundamentos de Calidad (5 SP)
- Página: `calidad.html` con sección `#fundamentos`.
- Componente de pestañas (Tabs) con 4 paneles: Conceptos Clave, ISO 9126, ISO 25000, Métricas.
- Navegación de tabs por teclado: flechas ← → (implementado en `quality-tabs.js`).
- Atributos ARIA correctos: `role="tab"`, `aria-selected`, `aria-controls`.

### US-03: Técnicas de Aseguramiento de la Calidad (5 SP)
- 8 flip-cards 3D con `perspective` y `transform: rotateY(180deg)`.
- Soporte: click, touch (sin scroll accidental) y teclado (Space/Enter/Escape).
- Atributos `aria-pressed` para estado de accesibilidad.
- Contenido: Caja Negra, Caja Blanca, Unitaria, Integración, Sistema, Aceptación, Estática, Dinámica.

### US-04: Herramientas de Calidad (8 SP)
- Barra de filtros con 5 categorías: Todas, Bug Trackers, Linters, Gestión, Automatización.
- 12 tarjetas de herramientas: Jira, Bugzilla, GitHub Issues, ESLint, SonarQube, Pylint, TestRail, Zephyr, Cypress, Playwright, Selenium, Jest.
- Filtrado en tiempo real con animación `fade-in` (sin recarga).
- Mensaje "sin resultados" si una categoría está vacía.
- Estado activo visual en el botón seleccionado.

### US-16: Sección Sobre Nosotros (3 SP)
- Página: `nosotros.html` con team cards para Bruno, Gael e Iasser.
- Sección de Misión, Visión y Valores con content-cards.
- Microanimación de hover: `translateY(-4px)` + sombra + scale del avatar.
- Quote de equipo con `gradient-text`.

---

## 1. Refactorización de Código (Sesión Anterior)

- **Extracción de CSS:** Estilos movidos de `index.html` → `css/styles.css`.
- **Extracción de JavaScript:** Lógica movida a `js/main.js`.
- **Estructura de carpetas:** Se organizó el proyecto en `/css`, `/js`, `/img`, `/documentacion`.

---

## 2. Arquitectura CSS Modular (Esta Sesión)

Se fragmentó `css/styles.css` en un sistema de **archivos modulares** importados con `@import`:

| Archivo | Responsabilidad |
|---|---|
| `css/styles.css` | Orquestador — solo `@import` de módulos |
| `css/variables.css` | Tokens: colores, sombras, spacing, radii, transiciones |
| `css/reset.css` | Normalización, `body`, `a`, utilidades globales, botones |
| `css/layout.css` | Header, navbar, hamburger, theme-toggle, mobile-nav, footer |
| `css/hero.css` | Hero section: gradientes, badge, tipografía |
| `css/components.css` | Module cards, team cards, tabs, flip-cards, tools filter |
| `css/responsive.css` | Media queries: 1024px · 768px · 480px · 375px |

> **Sin cambios de diseño.** La refactorización es puramente estructural.

---

## 3. Arquitectura JS Modular (Esta Sesión)

Los scripts se organizaron como **ES Modules** (`type="module"`):

| Archivo | Historia | Responsabilidad |
|---|---|---|
| `js/main.js` | Global | Inicializador: importa y llama a todos los módulos + theme toggle |
| `js/navbar.js` | US-01 | Hamburger, scroll header, IntersectionObserver, smooth scroll |
| `js/quality-tabs.js` | US-02 | Tabs con accesibilidad de teclado (flechas) y ARIA |
| `js/quality-cards.js` | US-03 | Flip-cards: click, touch y keyboard (Space/Enter/Escape) |
| `js/tools-filter.js` | US-04 | Filtro en tiempo real con fade-in animation |

---

## 4. Mejoras de Responsividad (Esta Sesión)

**Breakpoints implementados en `css/responsive.css`:**

| Breakpoint | Cambios |
|---|---|
| `≤ 1024px` | Footer de 4 columnas → 2 columnas |
| `≤ 768px` | Nav oculto → hamburger; hero 2 col → 1 col; flip-grid 2 col |
| `≤ 480px` | Padding reducido; tools-grid 1 col; hero h1 fluido |
| `≤ 375px` | Hero h1 mínimo 1.7rem; tech-badge más compacto |

**Adiciones:**
- `.hamburger.active` con animación de ✕ en CSS puro.
- `html { scroll-behavior: smooth }` nativo.
- `overflow-x: hidden` en body para prevenir scroll horizontal en mobile.
- `-webkit-overflow-scrolling: touch` en tabs nav para scroll fluido en iOS.

---

## 5. Nuevas Páginas (Sprint 1 Completado)

- `calidad.html` — Cubre US-02, US-03, US-04.
- `nosotros.html` — Cubre US-16.

---

## 6. Estructura de Archivos Final (Sprint 1)

```text
Zeballitos/
├── index.html                  US-01 (home, nav, módulos)
├── calidad.html                US-02 · US-03 · US-04
├── nosotros.html               US-16
│
├── css/
│   ├── styles.css              → Orquestador (@import)
│   ├── variables.css           → Design tokens
│   ├── reset.css               → Base & utilities
│   ├── layout.css              → Header, nav, footer
│   ├── hero.css                → Hero section
│   ├── components.css          → Tabs, flip-cards, tools, team
│   └── responsive.css          → Media queries
│
├── js/
│   ├── main.js                 → Inicializador (ES Module)
│   ├── navbar.js               → US-01: hamburger + scroll
│   ├── quality-tabs.js         → US-02: tabs accesibles
│   ├── quality-cards.js        → US-03: flip-cards
│   └── tools-filter.js         → US-04: filtro en tiempo real
│
├── img/
│   ├── VELORA.png              → Logo modo oscuro
│   └── VELORA-N.png            → Logo modo claro
│
└── documentacion/
    ├── DOCUMENTACION_CAMBIOS.md
    ├── sprint.md
    ├── sprint_1_planificacion_programadores.md
    └── ...
```

---

## 7. Leyes de UX Aplicadas (lawsofux.com)

| Ley | Aplicación |
|---|---|
| **Ley de Hick** | Paleta de un solo acento; menú de 6 ítems máximo |
| **Ley de Fitts** | Botones con `padding: 0.8rem 1.75rem`; tap targets ≥ 44px |
| **Ley de Jakob** | Navbar fija en la parte superior; patrón de footer estándar |
| **Ley de Miller** | Máximo 6 module cards en la grilla; 4 tabs en fundamentos |
| **Ley de Proximidad** | Cards agrupadas por tipo; gap consistente en grids |
| **Peak-End Rule** | Hero con gradiente sutil y badge llamativo como primera impresión |
| **Umbral de Doherty** | Transiciones `0.25s` en todas las interacciones |

---

## 8. Optimización Responsive y Funcionalidad del Menú Hamburguesa

### Diagnóstico de Fallas Detectadas y Corregidas:

1. **Restricción CORS en entorno local (`file://`):**
   - *Problema:* El uso de `type="module"` en navegadores bloqueaba la ejecución de `main.js` al abrir los archivos directamente por doble clic (`file:///...`), impidiendo que cualquier script se ejecutara.
   - *Solución:* Se desacopló la dependencia estricta de ES Modules en el HTML, exponiendo las funciones modulares a `window` y cargando los scripts secuencialmente (`navbar.js` → `quality-tabs.js` → `quality-cards.js` → `tools-filter.js` → `main.js`). Compatible al 100% con `file://` y servidores HTTP.

2. **Conflicto de Apilamiento y Stacking Context (Menú Hamburguesa):**
   - *Problema:* `header` tenía `z-index: 1000` y `.mobile-nav` tenía `z-index: 1050`. Al abrirse el menú con fondo opaco a pantalla completa, tapaba por completo la barra superior, ocultando el botón hamburguesa e impidiendo volver a hacer clic para cerrarlo.
   - *Solución:* Se ajustó `header` a `z-index: 1100` y `.mobile-nav` a `z-index: 1050`. El botón hamburguesa y el selector de tema permanecen siempre visibles, accesibles y sobre el menú desplegado.

3. **Accesibilidad y Tamaño de Toque (Fitts's Law / WCAG 2.1 AA):**
   - *Problema:* El elemento hamburguesa era un `<div>` no interactivo de 34x28px, sin semántica ni soporte de teclado.
   - *Solución:* Se convirtió en un elemento semántico `<button>` con `aria-label`, `aria-expanded`, `aria-controls="mobileNav"` y un área táctil de `44x44px`.

4. **Animación y Desplazamiento Móvil Fluido:**
   - *Mejora:* Se migró el desplazamiento de `right: -100%` a aceleración por hardware con `transform: translateX(100%)` a `translateX(0)`, con `visibility`, `opacity` y soporte moderno para `100dvh` (Dynamic Viewport Height).
   - *Comportamiento:* Se añadió bloqueo de scroll en el cuerpo (`body { overflow: hidden }`), cierre automático al tocar cualquier enlace, cierre con tecla `Escape` y cierre preventivo al redimensionar la ventana a resoluciones de escritorio (>768px).

5. **Alineación de la Barra de Navegación en Pantallas Móviles:**
   - *Problema:* Al ocultarse los enlaces principales, el selector de tema quedaba flotando en medio del header por efecto de `space-between`.
   - *Solución:* Se agregó `margin-right: auto` a `.logo-container` en resoluciones móviles, logrando que el logotipo quede en el extremo izquierdo y el selector de tema y hamburguesa se agrupen armoniosamente en el extremo derecho.

6. **Ajustes de Breakpoints en Componentes (1024px, 768px, 580px, 480px, 375px):**
   - `index.html`: Vinculación directa de las cards de módulos a sus secciones activas en `calidad.html`.
   - `calidad.html`: Pestañas horizontales con scroll táctil sin deformación (`flex-shrink: 0`) y altura de flip-cards a 230-250px para evitar desbordes de texto.
   - `nosotros.html`: Adaptación de la grilla de Misión/Visión/Valores mediante la clase compartida `.content-grid`.

---

## 9. Reestructuración de la Barra de Navegación: Claridad de Rutas y Páginas (.html vs #secciones)

### Causa del Problema de UX Anterior:
- Cada archivo `.html` presentaba enlaces de navegación totalmente dispares en el header (en `index.html` había 6 enlaces que mezclaban secciones locales con páginas externas; en `calidad.html` había 5 y faltaba el enlace al módulo; en `nosotros.html` solo había 3).
- El usuario no podía distinguir si un clic provocaría un scroll suave dentro del mismo documento o una recarga completa navegando a otro archivo `.html`.
- El indicador activo (`.active`) se sobreescribía con `IntersectionObserver` mezclando anchors con URLs de páginas.

### Soluciones Implementadas:

1. **Estructura Global Consistente (Ley de Jakob):**
   - Las 3 páginas (`index.html`, `calidad.html`, `nosotros.html`) comparten ahora la **misma navegación principal**:
     - **Inicio** (`index.html`)
     - **Módulo Calidad** (`calidad.html`) — con menú desplegable (Dropdown)
     - **Sobre Nosotros** (`nosotros.html`)
     - Botón de llamada a la acción contextualmente relevante.

2. **Diferenciación Visual Inconfundible de Página Activa:**
   - Atributos `data-page="archivo.html"` en cada enlace de página.
   - `js/navbar.js` detecta automáticamente la página en ejecución y aplica la clase `.active-page` y el atributo estándar `aria-current="page"`.
   - Estilizado visual claro: fondo sutil en color de acento, tipografía bold y línea inferior distintiva.

3. **Menú Desplegable (Dropdown) para el Módulo de Calidad:**
   - Permite al usuario en cualquier página ver que "Calidad" es una página completa con tres subsecciones:
     - Ver Módulo Completo (`calidad.html`)
     - Fundamentos ISO (`calidad.html#fundamentos`)
     - Técnicas QA (`calidad.html#tecnicas`)
     - Herramientas QA (`calidad.html#herramientas`)

4. **Barra Secundaria de Secciones (Subnav) en `calidad.html`:**
   - Barra fija/sticky debajo del header exclusiva para navegar dentro de `calidad.html`.
   - Etiquetada explícitamente como **"En esta página:"**, eliminando cualquier duda sobre si los clics cambian de `.html`.
   - El `IntersectionObserver` sincroniza únicamente esta barra secundaria al hacer scroll, sin alterar el indicador de página activa del header principal.

5. **Menú Móvil Jerárquico:**
   - Agrupación por categorías claras:
     - Encabezado: **"Páginas del Portal"** con badges explicativos (`Página` / `Página actual`).
     - Subenlaces indentados con flecha `↳` para las secciones internas.


