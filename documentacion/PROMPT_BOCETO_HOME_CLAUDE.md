# 🤖 GUÍA Y PROMPT ESTRUCTURADO PARA CLAUDE: BOCETO DE LA PÁGINA PRINCIPAL (HOME)

> **Instrucción de uso:** Copia y pega el contenido completo del bloque delimitado a continuación directamente en **Claude** para que genere el código completo (HTML5, CSS3 y JavaScript) del boceto de la página de inicio.

---

```markdown
Actúa como un Diseñador UI/UX Senior y Desarrollador Front-End de clase mundial. Necesito que diseñes y programes un boceto interactivo y maquetado completo de alta fidelidad para la PÁGINA PRINCIPAL (Home / Landing Page) de un portal web educativo.

A continuación te brindo todas las especificaciones, requerimientos del cliente, arquitectura de marca y directivas técnicas:

---

### 1. INFORMACIÓN GENERAL Y DOMINIO DEL SITIO
- **Nombre del Proyecto:** Portal Web de Sistemas de Gestión de Calidad del Software (SGCS 2026).
- **Nombre del Equipo de Desarrollo:** VELORA
- **Lema / Slogan del Equipo:** "IDEAS • SPRINTS • RESULTADOS"
- **Público Objetivo:** Estudiantes universitarios, desarrolladores en formación y profesionales de TI que desean aprender sobre calidad de software, pruebas, ciclo de vida (SDLC) y metodologías ágiles vs. tradicionales.
- **Logotipo Obligatorio:** El logotipo oficial del equipo ya se encuentra en la ruta local:
  ```html
  <img src="img/VELORA.png" alt="Logotipo Oficial VELORA - Ideas, Sprints, Resultados" class="logo-img">
  ```
  *(Nota: El logotipo es un emblema 3D moderno que contiene una letra "V" estilizada con una flecha orbital ascendente en gradiente azul eléctrico/cyan a magenta/violeta, sobre fondo oscuro).*

---

### 2. IDENTIDAD VISUAL Y GUÍA DE ESTILOS (SISTEMA DE DISEÑO)
El diseño debe verse ultra profesional, limpio, moderno (estilo SaaS o plataforma educativa tech de nivel Stripe, Vercel o Linear), evitando esquemas de colores aburridos o genéricos.

- **Paleta de Colores (Basada en la identidad de VELORA):**
  - **Fondo Principal (Dark Tech Theme):** `#0A0F1D` (Azul medianoche profundo) con fondos secundarios en `#111827` y `#0F172A`.
  - **Color Primario de Acento (Cyan / Azul Eléctrico):** `#00C2FF` y `#0284C7`.
  - **Color Secundario de Acento (Magenta / Púrpura Neón):** `#D946EF` y `#8B5CF6`.
  - **Gradiente Insignia VELORA:** `linear-gradient(135deg, #00C2FF 0%, #8B5CF6 50%, #D946EF 100%)`.
  - **Tipografía y Contrastes:** Blanco puro `#FFFFFF` y blanco humo `#F8FAFC` para encabezados; gris claro `#94A3B8` para párrafos; bordes sutiles en `rgba(255, 255, 255, 0.08)`.
  - **Tarjetas y Glassmorphism:** Fondos `rgba(17, 24, 39, 0.75)`, borde fino con gradiente o resplandor sutil, `backdrop-filter: blur(16px)` y sombras `0 20px 25px -5px rgba(0, 0, 0, 0.5)`.
- **Tipografía:** Importar desde Google Fonts la familia `'Plus Jakarta Sans'` o `'Outfit'` con pesos 400, 500, 600, 700 y 800.

---

### 3. REQUERIMIENTOS ESPECÍFICOS DE LA PÁGINA PRINCIPAL (HISTORIA US-01)
La página debe incluir de forma estructurada y semántica las siguientes secciones:

#### A. Header / Barra de Navegación Sticky:
- Logotipo de VELORA cargado desde `img/VELORA.png` con enlace a `#`.
- Menú de navegación principal con enlaces de anclaje fluidos:
  - *Inicio* (`#hero`)
  - *Fundamentos* (`#fundamentos`)
  - *Técnicas de Calidad* (`#tecnicas`)
  - *Herramientas* (`#herramientas`)
  - *SDLC & Metodologías* (`#procesos`)
  - *Sobre VELORA* (`#equipo`)
- Botón de Acción Rápida (CTA) en el navbar: *"Comenzar a Aprender"*.
- **Menú hamburguesa responsive** totalmente funcional con JavaScript para dispositivos móviles y tablets.

#### B. Hero Section (Portada de Alto Impacto):
- Badge superior tecnológico: *"🚀 PORTAL EDUCATIVO SGCS 2026 • EQUIPO VELORA"*.
- Título Principal (`<h1>`) contundente con palabras clave destacadas en gradiente: *"Construye Software Excepcional: Domina la Calidad, Procesos y Metodologías Ágiles"*.
- Párrafo introductorio claro que explique el propósito de la plataforma.
- Dos botones de llamado a la acción:
  - Botón primario con gradiente y efecto hover: *"Explorar Módulos de Calidad"* (apunta a `#modulos`).
  - Botón secundario outline con desenfoque: *"Conocer al Equipo VELORA"* (apunta a `#equipo`).
- Bloque visual / Showcase interactivo: Tarjeta flotante que muestre una vista previa conceptual del "Sprint 1: Fundaciones & Calidad" o métricas rápidas de calidad (ej. *ISO/IEC 25000 SQuaRE*, *+10 Herramientas QA*, *Scrum & Kanban Ready*).

#### C. Sección de Acceso Rápido a Módulos Educativos (Quick Access Cards):
Grilla moderna (Grid responsive) con tarjetas interactivas que den acceso a las secciones del portal:
1. **Fundamentos de Calidad:** Conceptos clave, control vs. aseguramiento, y estándares internacionales ISO 9126 / ISO 25000.
2. **Técnicas y Niveles de Pruebas:** Pruebas unitarias, de integración, de sistema, de aceptación, caja blanca y caja negra.
3. **Herramientas de Aseguramiento:** Linters, bug trackers (Jira, Bugzilla) y suites de testing automatizado.
4. **Ciclo de Vida (SDLC) & Tradicionales:** Etapas del software, Cascada, Modelo en V e Iterativo.
5. **Metodologías Ágiles:** Principios del Manifiesto Ágil, roles, ceremonias y artefactos de Scrum, Kanban y XP.
6. **Centro Interactivo (Próximamente):** Comparador dinámico de metodologías y test vocacional de selección de procesos.

*Cada tarjeta debe tener un ícono ilustrativo en SVG, un tag de estado (ej: "Disponible en Sprint 1" o "Sprint 2"), título, resumen y botón interactivo.*

#### D. Sección "Por Qué la Calidad del Software es Crítica":
3 o 4 pilares fundamentales con diseño en columnas:
- *Reducción de Deuda Técnica y Costes.*
- *Satisfacción del Usuario y Experiencia (UX).*
- *Seguridad, Escalabilidad y Confiabilidad.*
- *Entregas Continuas y Predictibles.*

#### E. Sección "Sobre el Equipo VELORA" (US-16 Preview):
Presentación de los miembros del equipo con avatares estilizados, insignias de rol y sus aportes al proyecto:
- **sanma:** *Scrum Master & Facilitador Ágil* — Coordinación, métricas de sprint y aseguramiento del marco de trabajo.
- **Gael:** *Desarrollador Lead & QA Tester* — Lógica JavaScript, dinamismo y validación de código.
- **Iasser:** *Diseñador UX/UI & QA Tester* — Maquetación CSS, accesibilidad WCAG y experiencia visual.
- Frase de cierre institucional con el lema: *"Ideas convertidas en Sprints, Sprints convertidos en Resultados"*.

#### F. Footer Completo e Institucional:
- Logotipo `img/VELORA.png` con breve síntesis del proyecto escolar/académico.
- Mapa de enlaces organizado en columnas (Contenidos, Metodologías, Recursos, Legal).
- Aviso de cumplimiento de accesibilidad web (WCAG 2.1 AA).
- Copyright: `© 2026 Equipo VELORA. Todos los derechos reservados. Proyecto SGCS.`

---

### 4. REQUISITOS TÉCNICOS DE LA ENTREGA
Por favor, genera el código completo, listo para ejecutarse sin dependencias pesadas (Node, React o Tailwind):
1. **Estructura:** Código **HTML5 semántico** con etiquetas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
2. **Estilos:** **CSS3 puro y moderno** embebido o estructurado limpiamente con Custom Properties (`:root`), Flexbox, CSS Grid, media queries responsivas (Mobile 375px, Tablet 768px, Desktop 1200px+), y micro-interacciones suaves (`transition: all 0.3s ease`).
3. **Interactividad:** **Vanilla JavaScript (ES6+)** para:
   - Apertura y cierre del menú hamburguesa móvil con bloqueo de scroll en el body.
   - Resaltado dinámico del enlace activo en el menú de navegación según el scroll (`active-link`).
   - Efecto de elevación o inclinación sutil al pasar el cursor (hover) por las tarjetas de módulos.
4. **Validación de Imagen:** Asegúrate de referenciar el logo exactamente como `<img src="img/VELORA.png" alt="VELORA Logo">` tanto en el header como en el footer, cuidando que mantenga su proporción (`object-fit: contain`) y no se deforme.

Entrega el código de forma limpia, comentada y lista para ser guardada en `index.html` (o separada en HTML, CSS y JS según consideres más didáctico).
```
