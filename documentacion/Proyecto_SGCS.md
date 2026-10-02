Proyecto “Sistemas de gestión de calidad”
Descripción del Dominio del Sitio: El sitio web estará dedicado a la educación y difusión de conocimientos fundamentales sobre la gestión de la calidad del software, los procesos de desarrollo (tanto tradicionales como ágiles) y las metodologías más relevantes en la industria. El objetivo principal es proporcionar un recurso accesible y comprensible para estudiantes, profesionales en formación y cualquier persona interesada en comprender cómo se construye software de calidad y cuáles son los enfoques metodológicos más utilizados. Busco ofrecer contenido teórico claro, ejemplos prácticos y herramientas interactivas para facilitar el aprendizaje. 

Lista de las Secciones del Sitio:  
Inicio: Presentación del sitio, breve introducción a los temas principales y acceso rápido a las secciones destacadas.  
Gestión de la Calidad del Software:  Fundamentos: Conceptos clave de calidad, métricas, estándares (ISO 9126/25000).  Técnicas de Aseguramiento de la Calidad: Pruebas de software (tipos, niveles, técnicas).  Herramientas de Calidad: Introducción a herramientas de gestión de pruebas, seguimiento de defectos y análisis de calidad. 
Procesos de Desarrollo de Software: 
Ciclo de Vida del Desarrollo de Software (SDLC): Explicación de las diferentes etapas y su importancia en la construcción de software.  Modelos Tradicionales: Modelo en cascada, modelo en V, modelo iterativo e incremental. Descripción, ventajas, desventajas y cuándo utilizarlos. Imágenes o gráficos ilustrativos. 
Metodologías Ágiles: Scrum, Kanban, XP (Extreme Programming). Principios, roles, ceremonias y artefactos. Comparativa con los modelos tradicionales. Imágenes o gráficos ilustrativos. Scrum: Descripción profunda de roles, sprints, backlog, daily meetings, sprint review y sprint retrospective.  Kanban: Como herramienta de gestión de procesos.
Recursos y Aprendizaje:  Glosario: Definiciones de términos clave relacionados con la calidad y el desarrollo de software. Preguntas Frecuentes: Respuestas a las dudas más comunes.  Enlaces de Interés: Recursos externos, artículos, libros y organizaciones relevantes.  Ejercicios y Casos Prácticos: Actividades para reforzar el aprendizaje.
Sobre Nosotros:  Información sobre el equipo detrás del sitio y su motivación.  Contacto: Formulario para consultas y feedback. 


Funcionalidad Adicional JavaScript: 
Comparador de Metodologías: Una sección interactiva donde los usuarios puedan seleccionar dos o más metodologías (tradicionales o ágiles) y ver una tabla comparativa con sus características clave (enfoque, roles, flexibilidad, etc.). Esto ayudaría a visualizar las diferencias y similitudes. 
Encuesta de Preferencias Metodológicas: Una encuesta interactiva con preguntas sobre las características de un proyecto de software (tamaño, complejidad, requisitos cambiantes, etc.) que, al finalizar, sugiera qué tipo de metodología (tradicional o ágil) podría ser más adecuada


📜 PILA DE PRODUCTO DETALLADA (PRODUCT BACKLOG)
1. Sección "Inicio"
    • US-01: Página de Inicio e Introducción General
        ◦ Requerimiento del Usuario: Como usuario, quiero ver la página de inicio para obtener una presentación general del sitio, una breve introducción a sus temas principales y un acceso rápido a las secciones más importantes. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación de la portada (Hero section) con estructura responsive (Flexbox/Grid), paleta de colores coherente y tarjetas de navegación (cards) con accesos directos a las secciones principales. 
            ▪ [JS]: Control del menú de navegación interactivo (menú hamburguesa dinámico en dispositivos móviles) y resaltado de la sección activa. 
            ▪ [QA/Tester]: Validación de enlaces internos (sin URLs rotas) y verificación del renderizado correcto en distintas resoluciones (Desktop, Tablet, Mobile). 
2. Sección "Gestión de la Calidad del Software"
    • US-02: Sección "Fundamentos de Calidad"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a la sección "Fundamentos" para comprender los conceptos clave de calidad, métricas y estándares como ISO 9126/25000. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación de contenido textual estructurado con tipografía legible, listas informativas y resaltado visual para conceptos clave y estándares ISO. 
            ▪ [JS]: Implementación de pestañas (tabs) o acordeón dinámico para organizar los estándares (ISO 9126 vs. ISO 25000) sin sobrecargar la pantalla.
            ▪ [QA/Tester]: Verificación de ortografía, jerarquía de encabezados HTML (<h1>, <h2>, <h3>) y legibilidad en diferentes pantallas. 
    • US-03: Sección "Técnicas de Aseguramiento de la Calidad"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a la sección "Técnicas de Aseguramiento de la Calidad" para conocer los tipos, niveles y técnicas de pruebas de software. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación de esquemas gráficos o cuadros comparativos estilizados para diferenciar niveles (Unitarias, Integración, Sistema) y tipos de pruebas (Caja Negra, Caja Blanca). 
            ▪ [JS]: Tarjetas interactivas desplegables (flip-cards o modales) que muestren detalles adicionales al hacer clic en cada tipo de prueba.
            ▪ [QA/Tester]: Pruebas de usabilidad para asegurar que los elementos desplegables funcionen correctamente tanto con clic del ratón como con eventos táctiles. 
    • US-04: Sección "Herramientas de Calidad"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a la sección "Herramientas de Calidad" para obtener una introducción a herramientas de gestión de pruebas, seguimiento de defectos y análisis de calidad. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Grilla (grid) de tarjetas informativas visualmente atractivas con íconos representativos de cada tipo de herramienta (Bug Trackers, Linters, Test Management). 
            ▪ [JS]: Sistema de filtrado por categoría de herramienta mediante botones interactivos en tiempo real sin recargar la página.
            ▪ [QA/Tester]: Validación de que los filtros oculten y muestren correctamente las tarjetas correspondientes según la categoría seleccionada. 
3. Sección "Procesos de Desarrollo de Software"
    • US-05: Sección "Ciclo de Vida del Desarrollo de Software (SDLC)"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a la sección "Ciclo de Vida del Desarrollo de Software (SDLC)" para entender sus diferentes etapas y su importancia en la construcción de software. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación de una línea de tiempo (timeline) vertical o horizontal que ilustre secuencialmente las etapas del SDLC (Requisitos, Diseño, Desarrollo, Pruebas, Despliegue, Mantenimiento). 
            ▪ [JS]: Animación de desplazamiento (scroll smooth) o iluminación paso a paso de las etapas a medida que el usuario interactúa.
            ▪ [QA/Tester]: Verificación del comportamiento responsivo del timeline para evitar desbordamiento horizontal en pantallas pequeñas. 
    • US-06: Sección "Modelos Tradicionales"
        ◦ Requerimiento del Usuario: Como usuario, quiero ver la sección de "Modelos Tradicionales" para aprender sobre el modelo en cascada, en V y los modelos iterativos e incrementales, incluyendo sus ventajas, desventajas y cuándo utilizarlos. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Estructuración de la información mediante bloques comparativos (Ventajas vs. Desventajas) utilizando íconos y cajas con códigos de color (ej. verde/rojo). 
            ▪ [JS]: Navegación interna por sub-secciones dentro de la página para alternar rápidamente entre Cascada, Modelo en V e Iterativo.
            ▪ [QA/Tester]: Comprobación del correcto funcionamiento de los anclajes y la navegación interna. 
    • US-07: Ilustraciones de Modelos Tradicionales
        ◦ Requerimiento del Usuario: Como usuario, quiero ver imágenes o gráficos ilustrativos en la sección de Modelos Tradicionales para facilitar mi comprensión. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Optimización de formatos (SVG/WebP) y maquetación de contenedores de imagen adaptables con pie de foto explicativo. 
            ▪ [JS]: Módulo de vista previa de imágenes en pantalla completa (Lightbox) al hacer clic sobre cualquier diagrama. 
            ▪ [QA/Tester]: Verificación del atributo alt obligatorio en las imágenes para asegurar la accesibilidad web (WCAG) y validar tiempos de carga rápidos. 
    • US-08: Sección "Metodologías Ágiles"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a la sección de "Metodologías Ágiles" para aprender sobre Scrum, Kanban y XP, sus principios, roles, ceremonias y artefactos. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación modular por metodología (Scrum, Kanban, XP) destacando los 4 valores y 12 principios del Manifiesto Ágil. 
            ▪ [JS]: Menú flotante o tabla de contenidos dinámica para saltar de forma fluida a los apartados de Principios, Roles o Artefactos. 
            ▪ [QA/Tester]: Revisión de la fidelidad del contenido respecto a la bibliografía del programa. 
    • US-09: Ilustraciones de Metodologías Ágiles
        ◦ Requerimiento del Usuario: Como usuario, quiero ver imágenes o gráficos ilustrativos en la sección de Metodologías Ágiles para facilitar mi comprensión. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Incorporación de esquemas visuales explicativos (ej. ciclo del Sprint, flujo Kanban, bucle de XP). 
            ▪ [JS]: Reutilización del script de Lightbox/Galeria modal para ampliación de gráficos.
            ▪ [QA/Tester]: Prueba de escalabilidad visual en pantallas de alta densidad de píxeles (Retina/Full HD). 
4. Sección "Metodologías en Detalle"
    • US-10: Sección Profunda de Scrum
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a una descripción profunda de Scrum para entender en detalle sus roles, sprints, backlog, daily meetings, sprint review y sprint retrospective. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación estructurada por pestañas o bloques temáticos: 1) Roles, 2) Eventos/Ceremonias, 3) Artefactos. 
            ▪ [JS]: Cronograma o diagrama interactivo del Sprint de 1 a 4 semanas donde el usuario pueda hacer clic en cada evento (Daily, Review, Retro) y ver su duración sugerida y objetivo.
            ▪ [QA/Tester]: Validación de la lógica interactiva del diagrama y comportamiento de interacción. 
    • US-11: Sección Profunda de Kanban
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a una sección que describa Kanban como una herramienta de gestión de procesos. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación que simule visualmente un tablero Kanban (Por Hacer, En Proceso, Hecho) explicativo con tarjetas informativas. 
            ▪ [JS]: Demostración interactiva simple (drag-and-drop o botones) que permita al usuario mover una tarjeta didáctica a través de las columnas para entender el límite de WIP (Work in Progress). 
            ▪ [QA/Tester]: Casos de prueba sobre el arrastre de elementos y persistencia visual del tablero en JS. 
5. Sección "Recursos y Aprendizaje"
    • US-12: Sección "Glosario"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a un "Glosario" para encontrar definiciones de términos clave relacionados con la calidad y el desarrollo de software. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación de listado alfabético (A-Z) accesible con separadores visuales claros. 
            ▪ [JS]: Buscador en tiempo real (campo de entrada con filtro dinámico) que filtre las definiciones visibles según lo ingresado por el usuario, más índice interactivo por letras.
            ▪ [QA/Tester]: Pruebas del buscador con caracteres especiales, mayúsculas/minúsculas y términos inexistentes (pantalla "Sin resultados"). 
    • US-13: Sección "Preguntas Frecuentes (FAQ)"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a una sección de "Preguntas Frecuentes" para encontrar respuestas a las dudas más comunes. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Maquetación de interfaz tipo acordeón interactivo. 
            ▪ [JS]: Lógica de apertura/cierre de respuestas mediante eventos de clic con animación fluida de altura CSS.
            ▪ [QA/Tester]: Verificar que la apertura de una pregunta no rompa el diseño ni oculte otros elementos de la página. 
    • US-14: Sección "Enlaces de Interés"
        ◦ Requerimiento del Usuario: Como usuario, quiero ver "Enlaces de Interés" para encontrar recursos externos, artículos, libros y organizaciones relevantes. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Listado de enlaces maquetados como tarjetas o listas estilizadas con íconos distintivos por tipo de recurso (Web, PDF, Libro, Organización). 
            ▪ [JS]: Manejo de apertura segura de enlaces.
            ▪ [QA/Tester]: Validación de atributos target="_blank" y rel="noopener noreferrer" en los hipervínculos para seguridad y prevención de vulnerabilidades. 
    • US-15: Sección "Ejercicios y Casos Prácticos"
        ◦ Requerimiento del Usuario: Como usuario, quiero encontrar "Ejercicios y Casos Prácticos" para reforzar mi aprendizaje. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Tarjetas de ejercitación con bloques de enunciado y áreas desplegables para la solución/pauta de evaluación. 
            ▪ [JS]: Botón interactivo "Mostrar/Ocultar Solución" con estado dinámico.
            ▪ [QA/Tester]: Comprobar que las soluciones permanezcan ocultas por defecto al cargar la página. 
6. Secciones Adicionales
    • US-16: Sección "Sobre Nosotros"
        ◦ Requerimiento del Usuario: Como usuario, quiero acceder a la sección "Sobre Nosotros" para encontrar información sobre el equipo y su motivación. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Layout de tarjetas de perfil para cada integrante del equipo (roles Scrum Master, Diseñador, Programador, Tester) con sus motivaciones e institución. 
            ▪ [JS]: Efectos interactivos al pasar el cursor (hover) sobre los perfiles.
            ▪ [QA/Tester]: Control de calidad visual y alineación de elementos en pantalla. 
    • US-17: Formulario de Contacto
        ◦ Requerimiento del Usuario: Como usuario, quiero usar un "Formulario de Contacto" para enviar consultas o feedback. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Formulario accesible con etiquetas <label> vinculadas a cada campo (input, textarea). 
            ▪ [JS]: Validación del lado del cliente antes del envío (validación de campos obligatorios, formato correcto de correo electrónico). Mensaje de confirmación en pantalla al presionar "Enviar".
            ▪ [QA/Tester]: Pruebas de frontera: enviar campos vacíos, correos con sintaxis inválida o textos con caracteres especiales para verificar las alertas de error. 
7. Funcionalidad Adicional JavaScript
    • US-18: Comparador Interactivo de Metodologías
        ◦ Requerimiento del Usuario: Como usuario, quiero usar un "Comparador de Metodologías" interactivo para seleccionar dos o más metodologías y ver una tabla comparativa con sus características clave. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Formulario de selección por checkboxes y contenedor de tabla adaptativa con bordes e indicadores claros. 
            ▪ [JS]: Renderizado dinámico de columnas/filas en la tabla comparativa mediante lectura de un objeto/arreglo en JS con las características de cada metodología según la selección activa del usuario.
            ▪ [QA/Tester]: Matriz de pruebas para validar que al seleccionar/deseleccionar elementos la tabla se cree y limpie sin arrojar errores por consola. 
    • US-19: Encuesta de Preferencias Metodológicas
        ◦ Requerimiento del Usuario: Como usuario, quiero usar una "Encuesta de Preferencias Metodológicas" para responder preguntas sobre un proyecto y obtener una sugerencia sobre qué metodología es la más adecuada. 
        ◦ Requerimiento del Sistema (Técnico / Funcional):
            ▪ [Diseño/CSS]: Componente tipo asistente/paso a paso (Wizard) con barra de progreso visual. 
            ▪ [JS]: Algoritmo de cómputo de puntaje que evalúa las alternativas seleccionadas en el formulario y calcula el porcentaje de coincidencia hacia Scrum, Kanban o Cascada, presentando un resumen final dinámico.
            ▪ [QA/Tester]: Ejecución de casos de prueba con diferentes rutas de respuesta para asegurar la precisión del resultado arrojado por el algoritmo. 
