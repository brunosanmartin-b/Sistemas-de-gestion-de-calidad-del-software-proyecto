# PLANIFICACIÓN ÁGIL REESTRUCTURADA
**Proyecto:** Sistemas de Gestión de Calidad (SGCS 2026)  
**Rol:** Scrum Master (`sanma`)  
**Metodología:** SCRUM Ágil  

---

## Estrategia de Sprints y Objetivos Reestructurados

La planificación ha sido adaptada para optimizar los ciclos de entrega continua, integrando el marco ágil completo, los módulos interactivos avanzados en el Sprint 2, y reservando el Sprint 3 exclusivamente para aseguramiento de calidad (QA) y bug fixing.

---

## Sprint 1: Fundaciones, Calidad y Estructura Base del SDLC
- **Duración:** 4 Semanas
- **Objetivo Estratégico:** Desplegar la arquitectura visual del sitio web, la sección completa de Gestión de Calidad del Software y la base del Ciclo de Vida de Desarrollo (SDLC) con sus modelos tradicionales.

| Prioridad | ID | Historia de Usuario | Justificación del Scrum Master | Estado |
| :---: | :---: | :--- | :--- | :---: |
| **ALTA (1)** | **US-01** | Página de Inicio e Introducción General | Proporciona el layout general, menú de navegación responsive y la estructura visual base para todo el proyecto. | ✅ Completado |
| **ALTA (2)** | **US-02** | Sección 'Fundamentos de Calidad' | Inicia la entrega de valor educativo principal sobre estándares ISO 9126/25000 y métricas. | ✅ Completado |
| **MEDIA (3)**| **US-03** | Sección 'Técnicas de Aseguramiento' | Extiende la sección de calidad e introduce los primeros componentes interactivos UI (flip-cards/modales). | ✅ Completado |
| **MEDIA (4)**| **US-04** | Sección 'Herramientas de Calidad' | Finaliza el bloque de calidad introduciendo la primera funcionalidad de filtrado en tiempo real con JS. | ✅ Completado |
| **ALTA (5)** | **US-05** | Sección 'SDLC' | Define la línea de tiempo fundamental del SDLC, clave para estructurar el resto de las secciones. | 🔄 En curso |
| **ALTA (6)** | **US-06** | Sección 'Modelos Tradicionales' | Despliega los conceptos de Cascada, Modelo en V e Iterativo. | 🔄 En curso |
| **BAJA (7)** | **US-16** | Sección 'Sobre Nosotros' | Sección informativa simple y estática que aporta transparencia institucional al sitio. | ✅ Completado |

---

## Sprint 2: Metodologías Ágiles, Interacción y JS
- **Duración:** 4 Semanas
- **Objetivo Estratégico:** Implementar el marco ágil completo, los módulos interactivos complejos (Lightbox, Wizards, Comparadores) y el centro de recursos de aprendizaje.

| Prioridad | ID | Historia de Usuario | Justificación Estratégica | Responsable Principal | Estado |
| :---: | :---: | :--- | :--- | :---: | :---: |
| **ALTA** | **US-08** | Sección 'Metodologías Ágiles' | Presenta el Manifiesto Ágil (4 valores, 12 principios) y Scrum, Kanban y XP. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **MEDIA**| **US-07** | Ilustraciones de Modelos | Implementa el script reutilizable de Lightbox para visualización a pantalla completa. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **MEDIA**| **US-09** | Ilustraciones Ágiles | Reutiliza el componente Lightbox para esquemas visuales ágiles en alta resolución. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **MEDIA**| **US-13** | Sección 'FAQ' | Interfaz interactiva tipo acordeón para enriquecer la experiencia de usuario. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **MEDIA**| **US-17** | Formulario de Contacto | Habilita el canal de comunicación con validaciones de datos en tiempo real en JS. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **ALTA** | **US-10** | Sección Profunda Scrum | Detalle de roles, ceremonias y artefactos con diagrama interactivo de Sprint. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **ALTA** | **US-11** | Sección Profunda Kanban | Simulación interactiva con gestión de límites WIP y alertas de cuellos de botella. | Iasser (UI) / Gael (Dev) | ✅ Tarea Diseño Lista |
| **ALTA** | **US-18** | Comparador de Metodologías | Generación dinámica de tablas comparativas en tiempo real (Funcionalidad Estrella). | Gael (Dev) / Iasser (UI) | ⏳ Backlog Sprint 2 |
| **ALTA** | **US-19** | Encuesta de Preferencias | Asistente paso a paso (Wizard) con algoritmo de recomendación de metodología. | Gael (Dev) / Iasser (UI) | ⏳ Backlog Sprint 2 |
| **MEDIA**| **US-12** | Sección 'Glosario' | Herramienta de búsqueda alfabética y filtrado dinámico en tiempo real. | Gael (Dev) / Iasser (UI) | ⏳ Backlog Sprint 2 |
| **BAJA** | **US-14** | Enlaces de Interés | Tarjetas de recursos externos con buenas prácticas de seguridad web. | Iasser (UI) / Gael (Dev) | ⏳ Backlog Sprint 2 |
| **BAJA** | **US-15** | Ejercicios Prácticos | Módulo interactivo para desplegar soluciones de ejercitación de los temas vistos. | Gael (Dev) / Iasser (UI) | ⏳ Backlog Sprint 2 |

---

## Sprint 3: Correcciones y Aseguramiento de Calidad (QA)
- **Objetivo Estratégico:** Este ciclo final está dedicado exclusivamente a la revisión exhaustiva, reparación de errores técnicos (bug fixing) y perfeccionamiento de los entregables desarrollados previamente.
- **Alcance Clave:**
  - **Revisión UI/UX:** Resolución de defectos detectados en el layout base y las secciones teóricas del Sprint 1 y 2.
  - **Auditoría de Accesibilidad:** Certificación de contraste de color, navegación 100% por teclado y etiquetas ARIA (WCAG 2.1 AA).
  - **Pruebas Cross-browser y Responsive:** Verificación en navegadores Chromium, Firefox y Safari móvil/escritorio.
  - **Optimización de Rendimiento:** Reducción de latencias de carga, auditoría Lighthouse y ausencia de advertencias en consola.

---

## Notas de Gestión y Calidad (DoR / DoD)
- **Definición de Listo (Definition of Ready - DoR):** Cada historia de usuario cuenta con sus criterios de aceptación divididos por especialidad (`[Diseño/CSS]`, `[JS]` y `[QA/Tester]`), facilitando la estimación en puntos de historia durante el Sprint Planning.
- **Definición de Hecho (Definition of Done - DoD):** Ninguna historia se dará por completada sin la aprobación de pruebas de QA (usabilidad, responsividad, accesibilidad WCAG y ausencia de errores en consola).