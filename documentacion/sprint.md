# Planificación Ágil Reestructurada
**Proyecto:** Sistemas de Gestión de Calidad (SGCS 2026) | **Rol:** Scrum Master  
**Metodología:** SCRUM Ágil  

---

## Sprint 1: Fundaciones, Calidad y Estructura Base del SDLC

- **Duración:** 4 Semanas
- **Objetivo Estratégico:** Desplegar la arquitectura visual del sitio web, la sección completa de Gestión de Calidad del Software y la base del Ciclo de Vida de Desarrollo (SDLC) con sus modelos tradicionales.

| Prioridad | ID | Historia de Usuario | Justificación del Scrum Master | Estado |
| :---: | :---: | :--- | :--- | :---: |
| **ALTA (1)** | **US-01** | Página de Inicio e Introducción General | Proporciona el layout general, menú de navegación responsive y la estructura visual base para todo el proyecto. | ✅ Completado |
| **ALTA (2)** | **US-02** | Sección 'Fundamentos de Calidad' | Inicia la entrega de valor educativo principal sobre estándares ISO y métricas. | ✅ Completado |
| **MEDIA (3)** | **US-03** | Sección 'Técnicas de Aseguramiento' | Extiende la sección de calidad e introduce los primeros componentes interactivos UI (flip-cards/modales). | ✅ Completado |
| **MEDIA (4)** | **US-04** | Sección 'Herramientas de Calidad' | Finaliza el bloque de calidad introduciendo la primera funcionalidad de filtrado en tiempo real con JS. | ✅ Completado |
| **ALTA (5)** | **US-05** | Sección 'SDLC' | Define la línea de tiempo fundamental del SDLC, clave para estructurar el resto de las secciones. | 🔄 En curso |
| **ALTA (6)** | **US-06** | Sección 'Modelos Tradicionales' | Despliega los conceptos de Cascada, Modelo en V e Iterativo. | 🔄 En curso |
| **BAJA (7)** | **US-16** | Sección 'Sobre Nosotros' | Sección informativa simple y estática que aporta transparencia institucional al sitio. | ✅ Completado |

### Notas de Gestión y Calidad (DoR / DoD)

- **Definición de Listo (DoR):** Cada historia de usuario cuenta con sus criterios de aceptación divididos por especialidad (Diseño/CSS, JS y QA/Tester), facilitando la estimación en puntos de historia durante el Sprint Planning.
- **Definición de Hecho (DoD):** Ninguna historia se dará por completada sin la aprobación de pruebas de QA (usabilidad, responsividad, accesibilidad WCAG y ausencia de errores en consola).

---

## Sprint 2: Metodologías Ágiles, Interacción y JS

- **Duración:** 4 Semanas
- **Objetivo Estratégico:** Implementar el marco ágil completo, los módulos interactivos complejos (Lightbox, Wizards, Comparadores) y el centro de recursos de aprendizaje.

| Prioridad | ID | Historia de Usuario | Justificación Estratégica | Estado de Avance |
| :---: | :---: | :--- | :--- | :---: |
| **ALTA** | **US-08** | Sección 'Metodologías Ágiles' | Presenta el Manifiesto Ágil y las metodologías Scrum, Kanban y XP. | ✅ Entregado |
| **MEDIA** | **US-07** | Ilustraciones de Modelos | Implementa el script reutilizable de Lightbox para visualización a pantalla completa. | ✅ Entregado |
| **MEDIA** | **US-09** | Ilustraciones Ágiles | Reutiliza el componente Lightbox para esquemas visuales ágiles. | ✅ Entregado |
| **MEDIA** | **US-13** | Sección 'FAQ' | Interfaz interactiva tipo acordeón para enriquecer la experiencia de usuario. | ✅ Entregado |
| **MEDIA** | **US-17** | Formulario de Contacto | Habilita el canal de comunicación con validaciones de datos en JS. | ✅ Entregado |
| **ALTA** | **US-10** | Sección Profunda Scrum | Detalle de roles, ceremonias y artefactos con diagrama interactivo. | ✅ Entregado |
| **ALTA** | **US-11** | Sección Profunda Kanban | Simulación interactiva tipo drag-and-drop para la gestión de límites WIP. | ✅ Entregado (Tablero con límites WIP) |
| **ALTA** | **US-18** | Comparador de Metodologías | Generación dinámica de tablas comparativas en tiempo real (Funcionalidad Estrella). | ✅ Entregado |
| **ALTA** | **US-19** | Encuesta de Preferencias | Asistente paso a paso (Wizard) con algoritmo de recomendación. | ✅ Entregado |
| **MEDIA** | **US-12** | Sección 'Glosario' | Herramienta de búsqueda alfabética y filtrado dinámico en tiempo real. | ✅ Entregado (`recursos.html`) |
| **BAJA** | **US-14** | Enlaces de Interés | Tarjetas de recursos externos con buenas prácticas de seguridad web. | ⏳ **Pendiente (Restante)** |
| **BAJA** | **US-15** | Ejercicios Prácticos | Módulo interactivo para desplegar soluciones de ejercitación de los temas vistos. | ⏳ **Pendiente (Restante)** |

> 📌 *Para el detalle de implementación técnica y criterios de desarrollo de las historias pendientes, consultar la [Guía de Historias Restantes del Sprint 2](file:///c:/Users/sanma/Desktop/escuela/Zeballitos/documentacion/sprint_2.md).*

---

## Sprint 3: Correcciones y Aseguramiento de Calidad (QA)

- **Objetivo Estratégico:** Este ciclo final está dedicado exclusivamente a la revisión exhaustiva, reparación de errores técnicos (bug fixing) y perfeccionamiento de los entregables desarrollados previamente.
- **Alcance Clave:**
  - **Revisión UI/UX:** Resolución de defectos detectados en el layout base y las secciones teóricas del Sprint 1 y Sprint 2.
  - **Auditoría de Accesibilidad:** Certificación de contraste de color, navegación 100% por teclado y etiquetas ARIA (cumplimiento WCAG 2.1 AA).
  - **Pruebas Cross-browser y Responsive:** Verificación en navegadores Chromium, Firefox y Safari móvil/escritorio.
  - **Optimización de Rendimiento:** Reducción de latencias de carga, auditoría Lighthouse y ausencia total de advertencias o errores en consola.