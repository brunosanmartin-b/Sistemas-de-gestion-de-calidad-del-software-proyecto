# Resumen 01: Proyecto “Sistemas de Gestión de Calidad” (SGCS 2026)

- **Documento Original:** [`../../../archives zebolla/Proyecto SGCS 2026.docx`](../../../archives%20zebolla/Proyecto%20SGCS%202026.docx)
- **Espejo en el Repositorio:** [`../Proyecto_SGCS.md`](../Proyecto_SGCS.md)
- **Tipo de Documento:** Especificación de dominio, arquitectura de secciones y Pila del Producto (*Product Backlog* oficial `US-01` a `US-19`).

---

## 1. Dominio y Objetivo del Sitio *(Sección: Descripción del Dominio del Sitio, pág. 1)*
- **Propósito principal:** Portal web educativo dedicado a la difusión de conocimientos fundamentales sobre:
  1. Gestión de la calidad del software.
  2. Procesos de desarrollo de software (tradicionales y ágiles).
  3. Metodologías más relevantes en la industria.
- **Público objetivo:** Estudiantes, profesionales en formación y cualquier persona interesada en cómo se construye software de calidad.
- **Enfoque pedagógico obligatorio:** Combinar contenido teórico claro, ejemplos prácticos y herramientas interactivas en JavaScript.

---

## 2. Estructura Obligatoria de Secciones y Funcionalidades *(Secciones: Lista de las Secciones del Sitio y Funcionalidad Adicional JS, pág. 1)*

1. **Inicio:** Presentación del sitio, breve introducción a los temas principales y acceso rápido a las secciones destacadas.
2. **Gestión de la Calidad del Software:**
   - *Fundamentos:* Conceptos clave de calidad, métricas y estándares (**ISO 9126 / ISO 25000**).
   - *Técnicas de Aseguramiento de la Calidad:* Pruebas de software (tipos, niveles, técnicas).
   - *Herramientas de Calidad:* Gestión de pruebas, seguimiento de defectos y análisis de calidad.
3. **Procesos de Desarrollo de Software:**
   - *Ciclo de Vida del Desarrollo de Software (SDLC):* Etapas e importancia en la construcción de software.
   - *Modelos Tradicionales:* Cascada, Modelo en V, Modelo Iterativo e Incremental (descripción, ventajas, desventajas, cuándo utilizarlos e imágenes/gráficos ilustrativos).
   - *Metodologías Ágiles:* **Scrum**, **Kanban**, **XP (Extreme Programming)** (principios, roles, ceremonias, artefactos, comparativa con modelos tradicionales e imágenes/gráficos ilustrativos).
   - *Scrum en profundidad:* Roles, sprints, backlog, daily meetings, sprint review y sprint retrospective.
   - *Kanban en profundidad:* Como herramienta de gestión de procesos.
4. **Recursos y Aprendizaje:**
   - *Glosario:* Definiciones de términos clave de calidad y desarrollo.
   - *Preguntas Frecuentes (FAQ):* Respuestas a las dudas más comunes.
   - *Enlaces de Interés:* Recursos externos, artículos, libros y organizaciones relevantes.
   - *Ejercicios y Casos Prácticos:* Actividades para reforzar el aprendizaje.
5. **Sobre Nosotros:**
   - Información sobre el equipo detrás del sitio y su motivación.
   - *Contacto:* Formulario para consultas y feedback.
6. **Funcionalidad Adicional JavaScript (Herramientas Estrella):**
   - *Comparador de Metodologías:* Selección interactiva de 2 o más metodologías (tradicionales o ágiles) para visualizar una tabla comparativa con sus características clave (enfoque, roles, flexibilidad, etc.).
   - *Encuesta de Preferencias Metodológicas:* Encuesta interactiva sobre características de un proyecto (tamaño, complejidad, requisitos cambiantes, etc.) que sugiere al finalizar qué tipo de metodología (tradicional o ágil) es más adecuada.

---

## 3. Reglas Estructurales de la Pila del Producto *(Sección: Pila de Producto Detallada, págs. 1–4)*
- **Regla de desglose técnico por rol:** Cada una de las 19 Historias de Usuario (`US-01` a `US-19`) se divide obligatoriamente en:
  - **Requerimiento del Usuario** (*"Como usuario, quiero... para..."*).
  - **Requerimiento del Sistema (Técnico / Funcional)** segmentado en tres especialidades obligatorias:
    1. `[Diseño/CSS]`
    2. `[JS]`
    3. `[QA/Tester]`

---

## 4. Requisitos Obligatorios por Historia de Usuario (`US-01` a `US-19`)

### Bloque 1: Sección "Inicio" *(Sección 1 del Backlog, pág. 1)*
- **US-01 — Página de Inicio e Introducción General:**
  - *Usuario:* Ver página de inicio con presentación general, breve introducción y acceso rápido a secciones principales.
  - *[Diseño/CSS]:* Portada (*Hero section*) con estructura responsive (Flexbox/Grid), paleta de colores coherente y tarjetas de navegación (*cards*) con accesos directos.
  - *[JS]:* Menú de navegación interactivo (menú hamburguesa dinámico en móviles) y resaltado de la sección activa.
  - *[QA/Tester]:* Validación de enlaces internos (sin URLs rotas) y renderizado correcto en Desktop, Tablet y Mobile.

### Bloque 2: Sección "Gestión de la Calidad del Software" *(Sección 2 del Backlog, págs. 1–2)*
- **US-02 — Sección "Fundamentos de Calidad":**
  - *Usuario:* Comprender conceptos clave de calidad, métricas y estándares como ISO 9126/25000.
  - *[Diseño/CSS]:* Contenido textual estructurado con tipografía legible, listas informativas y resaltado visual para conceptos clave y estándares ISO.
  - *[JS]:* Pestañas (*tabs*) o acordeón dinámico para organizar los estándares (**ISO 9126 vs. ISO 25000**) sin sobrecargar la pantalla.
  - *[QA/Tester]:* Verificación de ortografía, jerarquía de encabezados HTML (`<h1>`, `<h2>`, `<h3>`) y legibilidad en diferentes pantallas.
- **US-03 — Sección "Técnicas de Aseguramiento de la Calidad":**
  - *Usuario:* Conocer tipos, niveles y técnicas de pruebas de software.
  - *[Diseño/CSS]:* Esquemas gráficos o cuadros comparativos estilizados para diferenciar **niveles** (Unitarias, Integración, Sistema) y **tipos de pruebas** (Caja Negra, Caja Blanca).
  - *[JS]:* Tarjetas interactivas desplegables (*flip-cards* o modales) que muestren detalles adicionales al hacer clic en cada tipo de prueba.
  - *[QA/Tester]:* Pruebas de usabilidad asegurando que los desplegables funcionen tanto con clic del ratón como con eventos táctiles.
- **US-04 — Sección "Herramientas de Calidad":**
  - *Usuario:* Introducción a herramientas de gestión de pruebas, seguimiento de defectos y análisis de calidad.
  - *[Diseño/CSS]:* Grilla (*grid*) de tarjetas informativas con íconos representativos de cada tipo de herramienta (*Bug Trackers*, *Linters*, *Test Management*).
  - *[JS]:* Sistema de filtrado por categoría mediante botones interactivos en tiempo real sin recargar la página.
  - *[QA/Tester]:* Validar que los filtros oculten y muestren correctamente las tarjetas según la categoría seleccionada.

### Bloque 3: Sección "Procesos de Desarrollo de Software" *(Sección 3 del Backlog, págs. 2–3)*
- **US-05 — Sección "Ciclo de Vida del Desarrollo de Software (SDLC)":**
  - *Usuario:* Entender las diferentes etapas del SDLC y su importancia.
  - *[Diseño/CSS]:* Línea de tiempo (*timeline*) vertical u horizontal que ilustre secuencialmente las etapas: **Requisitos, Diseño, Desarrollo, Pruebas, Despliegue, Mantenimiento**.
  - *[JS]:* Animación de desplazamiento (*scroll smooth*) o iluminación paso a paso de las etapas al interactuar.
  - *[QA/Tester]:* Verificar comportamiento responsivo del timeline para evitar desbordamiento horizontal en pantallas pequeñas.
- **US-06 — Sección "Modelos Tradicionales":**
  - *Usuario:* Aprender sobre Cascada, Modelo en V e Iterativo/Incremental (ventajas, desventajas y cuándo utilizarlos).
  - *[Diseño/CSS]:* Bloques comparativos (Ventajas vs. Desventajas) utilizando íconos y cajas con códigos de color (ej. verde/rojo).
  - *[JS]:* Navegación interna por subsecciones dentro de la página para alternar rápidamente entre Cascada, Modelo en V e Iterativo.
  - *[QA/Tester]:* Comprobar el correcto funcionamiento de los anclajes y la navegación interna.
- **US-07 — Ilustraciones de Modelos Tradicionales:**
  - *Usuario:* Ver imágenes o gráficos ilustrativos en la sección de Modelos Tradicionales.
  - *[Diseño/CSS]:* Optimización de formatos (SVG/WebP) y contenedores de imagen adaptables con pie de foto explicativo.
  - *[JS]:* Vista previa de imágenes en pantalla completa (*Lightbox*) al hacer clic sobre cualquier diagrama.
  - *[QA/Tester]:* Verificación del atributo `alt` obligatorio en las imágenes para accesibilidad web (WCAG) y tiempos de carga rápidos.
- **US-08 — Sección "Metodologías Ágiles":**
  - *Usuario:* Aprender sobre Scrum, Kanban y XP (principios, roles, ceremonias y artefactos).
  - *[Diseño/CSS]:* Maquetación modular por metodología (Scrum, Kanban, XP) destacando los **4 valores** y **12 principios** del Manifiesto Ágil.
  - *[JS]:* Menú flotante o tabla de contenidos dinámica para saltar de forma fluida a Principios, Roles o Artefactos.
  - *[QA/Tester]:* Revisión de la fidelidad del contenido respecto a la bibliografía del programa.
- **US-09 — Ilustraciones de Metodologías Ágiles:**
  - *Usuario:* Ver imágenes o gráficos ilustrativos en la sección de Metodologías Ágiles.
  - *[Diseño/CSS]:* Esquemas visuales explicativos (ej. ciclo del Sprint, flujo Kanban, bucle de XP).
  - *[JS]:* Reutilización del script de *Lightbox* / galería modal para ampliación de gráficos.
  - *[QA/Tester]:* Prueba de escalabilidad visual en pantallas de alta densidad de píxeles (Retina / Full HD).

### Bloque 4: Sección "Metodologías en Detalle" *(Sección 4 del Backlog, pág. 3)*
- **US-10 — Sección Profunda de Scrum:**
  - *Usuario:* Entender en detalle roles, sprints, backlog, daily meetings, sprint review y sprint retrospective.
  - *[Diseño/CSS]:* Maquetación estructurada por pestañas o bloques temáticos: **1) Roles, 2) Eventos/Ceremonias, 3) Artefactos**.
  - *[JS]:* Cronograma o diagrama interactivo del Sprint de 1 a 4 semanas donde el usuario haga clic en cada evento (Daily, Review, Retro) y vea su duración sugerida y objetivo.
  - *[QA/Tester]:* Validación de la lógica interactiva del diagrama y comportamiento de interacción.
- **US-11 — Sección Profunda de Kanban:**
  - *Usuario:* Comprender Kanban como herramienta de gestión de procesos.
  - *[Diseño/CSS]:* Maquetación que simule visualmente un tablero Kanban (*Por Hacer*, *En Proceso*, *Hecho*) con tarjetas informativas.
  - *[JS]:* Demostración interactiva simple (*drag-and-drop* o botones) que permita mover una tarjeta didáctica a través de las columnas para entender el límite de **WIP (Work in Progress)**.
  - *[QA/Tester]:* Casos de prueba sobre el arrastre/movimiento de elementos y persistencia visual del tablero en JS.

### Bloque 5: Sección "Recursos y Aprendizaje" *(Sección 5 del Backlog, págs. 3–4)*
- **US-12 — Sección "Glosario":**
  - *Usuario:* Encontrar definiciones de términos clave de calidad y desarrollo de software.
  - *[Diseño/CSS]:* Listado alfabético (A–Z) accesible con separadores visuales claros.
  - *[JS]:* Buscador en tiempo real (filtro dinámico al escribir) más índice interactivo por letras.
  - *[QA/Tester]:* Pruebas del buscador con caracteres especiales, mayúsculas/minúsculas y términos inexistentes (pantalla *"Sin resultados"*).
- **US-13 — Sección "Preguntas Frecuentes (FAQ)":**
  - *Usuario:* Encontrar respuestas a las dudas más comunes.
  - *[Diseño/CSS]:* Interfaz tipo acordeón interactivo.
  - *[JS]:* Apertura/cierre de respuestas mediante clic con animación fluida de altura CSS *(Nota: en Sprint 2 se implementó con `<details>` y `<summary>` nativos + animación CSS)*.
  - *[QA/Tester]:* Verificar que la apertura de una pregunta no rompa el diseño ni oculte otros elementos.
- **US-14 — Sección "Enlaces de Interés":**
  - *Usuario:* Encontrar recursos externos, artículos, libros y organizaciones relevantes.
  - *[Diseño/CSS]:* Listado de enlaces como tarjetas o listas estilizadas con íconos distintivos por tipo de recurso (**Web, PDF, Libro, Organización**).
  - *[JS]:* Manejo de apertura segura de enlaces.
  - *[QA/Tester]:* **Restricción crítica de seguridad:** Validación obligatoria de atributos `target="_blank"` y `rel="noopener noreferrer"` en los hipervínculos para prevención de vulnerabilidades.
- **US-15 — Sección "Ejercicios y Casos Prácticos":**
  - *Usuario:* Reforzar el aprendizaje mediante actividades prácticas.
  - *[Diseño/CSS]:* Tarjetas de ejercitación con bloques de enunciado y áreas desplegables para la solución / pauta de evaluación.
  - *[JS]:* Botón interactivo *"Mostrar/Ocultar Solución"* con estado dinámico.
  - *[QA/Tester]:* **Restricción obligatoria:** Comprobar que las soluciones permanezcan **ocultas por defecto** al cargar la página.

### Bloque 6: Secciones Adicionales *(Sección 6 del Backlog, pág. 4)*
- **US-16 — Sección "Sobre Nosotros":**
  - *Usuario:* Encontrar información sobre el equipo y su motivación.
  - *[Diseño/CSS]:* Tarjetas de perfil para cada integrante (roles Scrum Master, Diseñador, Programador, Tester) con sus motivaciones e institución.
  - *[JS]:* Efectos interactivos al pasar el cursor (*hover*) sobre los perfiles.
  - *[QA/Tester]:* Control de calidad visual y alineación de elementos en pantalla.
- **US-17 — Formulario de Contacto:**
  - *Usuario:* Enviar consultas o feedback.
  - *[Diseño/CSS]:* Formulario accesible con etiquetas `<label>` vinculadas a cada campo (`input`, `textarea`).
  - *[JS]:* Validación del lado del cliente antes del envío (campos obligatorios, formato correcto de correo electrónico) y mensaje de confirmación en pantalla al presionar *"Enviar"*.
  - *[QA/Tester]:* Pruebas de frontera: enviar campos vacíos, correos con sintaxis inválida o textos con caracteres especiales para verificar las alertas de error.

### Bloque 7: Funcionalidad Adicional JavaScript *(Sección 7 del Backlog, pág. 4)*
- **US-18 — Comparador Interactivo de Metodologías:**
  - *Usuario:* Seleccionar dos o más metodologías y ver una tabla comparativa con sus características clave.
  - *[Diseño/CSS]:* Formulario de selección por *checkboxes* y contenedor de tabla adaptativa con bordes e indicadores claros.
  - *[JS]:* Renderizado dinámico de columnas/filas en la tabla comparativa leyendo un objeto/arreglo en JS con las características de cada metodología según la selección activa.
  - *[QA/Tester]:* Matriz de pruebas para validar que al seleccionar/deseleccionar elementos la tabla se cree y limpie **sin arrojar errores por consola**.
- **US-19 — Encuesta de Preferencias Metodológicas:**
  - *Usuario:* Responder preguntas sobre un proyecto y obtener una sugerencia de qué metodología es la más adecuada.
  - *[Diseño/CSS]:* Componente tipo asistente paso a paso (*Wizard*) con barra de progreso visual.
  - *[JS]:* Algoritmo de cómputo de puntaje que evalúa las alternativas seleccionadas y calcula el porcentaje de coincidencia hacia **Scrum, Kanban o Cascada** *(y XP en el modelo ampliado)*, presentando un resumen final dinámico.
  - *[QA/Tester]:* Ejecución de casos de prueba con diferentes rutas de respuesta para asegurar la precisión del resultado arrojado por el algoritmo.

