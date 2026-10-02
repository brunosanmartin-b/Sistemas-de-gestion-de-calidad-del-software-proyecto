ROYECTO SGCS 2026 — PLANIFICACIÓN ÁGIL
Planificación de Sprints & Sprint Backlog
Rol: Scrum Master  |  Documento Base: Proyecto Sistemas de Gestión de Calidad (SGCS 2026)
Estrategia de Criterio de Priorización e Incrementos del Producto
• Sprint 1 (Fundaciones, Navegación y Conceptos Base): Prioriza la infraestructura principal del sitio (Home/Layout) y la base conceptual teórica.
• Sprint 2 (Procesos de Desarrollo, Metodologías e Interactividad): Introduce los contenidos sobre SDLC, modelos tradicionales, metodologías ágiles y sus primeras herramientas interactivas complejas.
• Sprint 3 (Profundización, Recursos Avanzados y JS Avanzado): Enfocado en los detalles profundos de metodologías, el centro de recursos/aprendizaje y las herramientas interactivas de valor agregado (Comparador y Encuesta).

Sprint 1: Fundaciones del Sitio, Estructura y Gestión de la Calidad
Objetivo del Sprint: Desplegar el MVP del sitio web con la arquitectura base de navegación responsive y la sección completa de Gestión de la Calidad del Software.
Prioridad	ID	Historia de Usuario	Justificación del Scrum Master
Alta (1)	US-01	Página de Inicio e Introducción General	Crítica / Bloqueante: Proporciona el layout general, el menú de navegación responsive y la estructura visual base para todo el proyecto.
Alta (2)	US-02	Sección 'Fundamentos de Calidad'	Base de Contenido: Inicia la entrega del valor educativo principal sobre estándares ISO y métricas.
Media (3)	US-03	Sección 'Técnicas de Aseguramiento de la Calidad'	Extiende la sección de calidad e introduce los primeros componentes interactivos UI (flip-cards/modales).
Media (4)	US-04	Sección 'Herramientas de Calidad'	Finaliza el bloque de calidad introduciendo la primera funcionalidad de filtrado en tiempo real con JS.
Baja (5)	US-16	Sección 'Sobre Nosotros'	Sección informativa simple y estática que aporta transparencia institucional al sitio.

Sprint 2: Procesos de Desarrollo y Metodologías Ágiles/Tradicionales
Objetivo del Sprint: Incorporar las secciones sobre el Ciclo de Vida del Software (SDLC), Modelos Tradicionales y Metodologías Ágiles junto con su soporte multimedia e interacción con el usuario.
Prioridad	ID	Historia de Usuario	Justificación del Scrum Master
Alta (1)	US-05	Sección 'Ciclo de Vida del Desarrollo de Software (SDLC)'	Introduce la línea de tiempo del SDLC, fundamental para entender el resto de las metodologías.
Alta (2)	US-06	Sección 'Modelos Tradicionales'	Despliega los conceptos de Cascada, Modelo en V e Iterativo.
Media (3)	US-07	Ilustraciones de Modelos Tradicionales	Dependencia de US-06: Implementa el script reutilizable de Lightbox para visualización de diagramas en pantalla completa.
Alta (4)	US-08	Sección 'Metodologías Ágiles'	Presenta el Manifiesto Ágil y las metodologías Scrum, Kanban y XP.
Media (5)	US-09	Ilustraciones de Metodologías Ágiles	Dependencia de US-08 y US-07: Reutiliza el componente Lightbox para esquemas visuales ágiles.
Media (6)	US-17	Formulario de Contacto	Habilita el canal de comunicación con los usuarios mediante validaciones de formularios en JS.

Sprint 3: Profundización, Recursos y Funcionalidades JS Avanzadas
Objetivo del Sprint: Finalizar el contenido detallado de las metodologías, implementar el centro de recursos/aprendizaje y entregar las funcionalidades interactivas avanzadas en JavaScript.
Prioridad	ID	Historia de Usuario	Justificación del Scrum Master
Alta (1)	US-10	Sección Profunda de Scrum	Detalle profundo de roles, ceremonias y artefactos con un diagrama interactivo de Sprint.
Alta (2)	US-11	Sección Profunda de Kanban	Simulación interactiva tipo drag-and-drop para la gestión de límites WIP.
Media (3)	US-12	Sección 'Glosario'	Herramienta de búsqueda alfabética y filtrado dinámico en tiempo real.
Media (4)	US-13	Sección 'Preguntas Frecuentes (FAQ)'	Implementación de interfaz interactiva tipo acordeón.
Baja (5)	US-14	Sección 'Enlaces de Interés'	Tarjetas de recursos externos con buenas prácticas de seguridad web.
Baja (6)	US-15	Sección 'Ejercicios y Casos Prácticos'	Módulo interactivo para desplegar soluciones de ejercitación.
Alta (7)	US-18	Comparador Interactivo de Metodologías	Funcionalidad JS Estrella: Generación dinámica de tablas comparativas en tiempo real según selección del usuario.
Alta (8)	US-19	Encuesta de Preferencias Metodológicas	Funcionalidad JS Estrella: Asistente paso a paso (Wizard) con algoritmo de recomendación de metodologías.

Notas de Gestión del Scrum Master
• Definición de Listo (Definition of Ready - DoR): Cada historia de usuario cuenta con sus criterios de aceptación divididos por especialidad ([Diseño/CSS], [JS] y [QA/Tester]), lo cual facilitará la estimación en puntos de historia durante el Sprint Planning.
• Definición de Hecho (Definition of Done - DoD): Ninguna historia se dará por completada sin la aprobación de pruebas de QA (usabilidad, responsividad, accesibilidad WCAG y ausencia de errores en consola).