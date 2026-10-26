# GUÍA DE HISTORIAS DE USUARIO RESTANTES — SPRINT 2
**Proyecto:** Portal Web de Sistemas de Gestión de Calidad del Software (SGCS 2026)  
**Rol:** Scrum Master (`sanma`)  
**Metodología:** SCRUM Ágil  
**Documento Oficial:** Guía Técnica de Implementación para Desarrolladores y Diseñadores (Sprint 2 - Parte 2)

---

## 1. Contexto y Estado del Sprint 2

El **Sprint 2: Metodologías Ágiles, Interacción y JS** tiene como objetivo estratégico:
> *"Implementar el marco ágil completo, los módulos interactivos complejos (Lightbox, Wizards, Comparadores) y el centro de recursos de aprendizaje."*

### Balance de Avance del Sprint 2:
- ✅ **Entregadas / Completadas:**
  - **US-08:** Sección 'Metodologías Ágiles' (Manifiesto Ágil, 4 valores, 12 principios, Scrum, Kanban, XP).
  - **US-07 & US-09:** Ilustraciones de Modelos y Ágiles con componente modal reutilizable **Lightbox** (`js/agile.js`, `css/agile.css`).
  - **US-10:** Sección Profunda Scrum (Roles, ceremonias, artefactos y stepper interactivo de Sprint).
  - **US-11:** Sección Profunda Kanban (Simulación interactiva de tablero con límites WIP, alertas de cuellos de botella y balanceo de flujo).
  - **US-13:** Sección 'FAQ' (Acordeón interactivo con microinteracciones y control ARIA).
  - **US-17:** Formulario de Contacto y Feedback accesible con validaciones en tiempo real (`nosotros.html`, `js/contact-form.js`).
  - **US-18:** Comparador de Metodologías (`metodologias.html#comparador`, `js/comparator.js`, `css/interactive.css`).
  - **US-19:** Encuesta de Preferencias Metodológicas (`metodologias.html#asistente`, `js/survey-wizard.js`, `css/interactive.css`).
  - **US-12:** Sección 'Glosario' (`recursos.html#glosario`, `js/glossary.js`, `css/resources.css`).

- ⏳ **Historias de Usuario Restantes por Implementar (2):**
  1. **US-14:** Enlaces de Interés *(Prioridad BAJA — Repositorio curado y seguro)*
  2. **US-15:** Ejercicios y Casos Prácticos *(Prioridad BAJA — Despliegue interactivo de soluciones)*

---

## 2. Definiciones de Calidad para el Sprint (DoR / DoD)

### Definición de Listo (Definition of Ready - DoR):
Antes de iniciar el desarrollo de cada historia, se debe asegurar que:
1. Los criterios de aceptación están claramente delimitados y segmentados por especialidad: `[Diseño/CSS]`, `[JS]` y `[QA/Tester]`.
2. Las estructuras de datos (objetos JSON con metodologías, preguntas de encuesta o términos de glosario) están previamente definidas.
3. Se han asignado los Story Points (SP) consensuados en la planificación.

### Definición de Hecho (Definition of Done - DoD):
Una historia de usuario se considerará completada únicamente cuando:
1. **Calidad Visual y Responsive:** La UI responda fluidamente a dispositivos móviles (375px), tablets (768px-1024px) y pantallas de escritorio sin desbordamientos horizontales.
2. **Accesibilidad WCAG 2.1 AA:** Contraste mínimo de 4.5:1 en textos, navegación por teclado (`Tab`, `Enter`, `Escape`), y atributos ARIA pertinentes (`aria-expanded`, `aria-live`, etc.).
3. **Consola Limpia:** Ausencia total de errores (`Uncaught TypeError`, fallos de referencia) y advertencias en la consola del navegador.
4. **Validación Cruzada:** Aprobación formal por parte del rol de QA / Tester.

---

## 3. Especificación Detallada de las 5 Historias Restantes

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           BACKLOG RESTANTE SPRINT 2                             │
├───────────────┬───────────────────────────────────────────┬───────────┬─────────┤
│ ID            │ Historia de Usuario                       │ Prioridad │ Puntos  │
├───────────────┼───────────────────────────────────────────┼───────────┼─────────┤
│ US-18  ✅     │ Comparador Dinámico de Metodologías       │ ALTA (1)  │ 8 SP    │
│ US-19  ✅     │ Asistente / Encuesta de Preferencias      │ ALTA (2)  │ 8 SP    │
│ US-12  ✅     │ Glosario Interactivo con Búsqueda A-Z     │ MEDIA (3) │ 5 SP    │
│ US-15         │ Ejercicios Prácticos y Soluciones         │ BAJA (4)  │ 5 SP    │
│ US-14         │ Enlaces y Recursos Externos Seguros       │ BAJA (5)  │ 3 SP    │
├───────────────┴───────────────────────────────────────────┴───────────┼─────────┤
│ TOTAL PUNTOS ESTIMADOS (entregados: 21 SP · restantes: 8 SP)          │ 29 SP   │
└───────────────────────────────────────────────────────────────────────┴─────────┘
```

---

### US-18: Comparador Interactivo de Metodologías
- **Prioridad:** ALTA (Funcionalidad Estrella del portal)
- **Estimación:** 8 SP
- **Justificación Estratégica:** Generación dinámica de tablas comparativas en tiempo real, permitiendo contrastar modelos tradicionales con metodologías ágiles.
- **Ubicación Recomendada:** Nueva sección `#comparador` en `metodologias.html` o página dedicada `comparador.html`.

#### Requerimiento del Usuario:
> *"Como usuario/estudiante, quiero seleccionar dos o más metodologías de desarrollo (Cascada, Modelo en V, Iterativo, Scrum, Kanban, XP) y generar una tabla comparativa interactiva en tiempo real para analizar objetivamente sus diferencias en enfoque, roles, entregables y gestión de cambios."*

#### Criterios de Aceptación Técnicos:
- [x] **[Diseño/CSS - Iasser]**:
  - Diseñar una barra de selección con chips o tarjetas de control (`checkboxes` estilizados) para cada metodología, identificadas con iconos o colores distintivos:
    - *Tradicionales:* Cascada (azul clásico), Modelo en V (cian), Iterativo (púrpura).
    - *Ágiles:* Scrum (índigo), Kanban (esmeralda), XP (naranja).
  - Contenedor de tabla con diseño responsivo que incluya `overflow-x: auto` estilizado y cabecera pegajosa (`position: sticky; top: 0`) para visualización cómoda de múltiples columnas.
  - En resoluciones móviles (<768px), permitir visualización en tarjetas de comparación lado a lado o con scroll horizontal suave.
  - Estado visual vacío explicativo (*"Selecciona al menos dos metodologías para comparar"*).
- [x] **[JS - Gael]**:
  - Estructurar un catálogo en JavaScript (`const METODOLOGIAS_DATA = { ... }`) que contenga atributos homogéneos:
    - *Enfoque principal* (Predictivo vs. Adaptativo / Empírico).
    - *Gestión del cambio* (Rígida, controlada por comité vs. Bienvenida en cualquier etapa).
    - *Estructura de roles* (Especializados y jerárquicos vs. Autoorganizados y multifuncionales).
    - *Ciclo y entrega* (Entrega única al final vs. Incrementos cortos frecuentes).
    - *Involucramiento del cliente* (Solo en fases inicial y final vs. Constante y colaborativo).
    - *Nivel de documentación* (Exhaustiva y contractual vs. Software funcionando sobre documentación extensa).
    - *Ideal para* (Proyectos con requisitos fijos y normativos vs. Proyectos dinámicos e innovadores).
  - Motor de renderizado dinámico: al marcar/desmarcar un checkbox, la tabla debe reconstruirse en el DOM mediante manipulación limpia (sin recarga de página).
  - Validaciones: Alerta accesible cuando el usuario intente desmarcar todas las opciones (mínimo 1 seleccionada, recomendado 2 a 4).
  - Botones de acción rápida: *"Comparar Tradicional vs. Ágil"*, *"Comparar Scrum vs. Kanban"*, y *"Limpiar Selección"*.
- [x] **[QA/Tester - Bruno & Iasser]**:
  - Validar matriz de combinaciones: 1 metodología seleccionada, 2 metodologías, todas seleccionadas.
  - Comprobar que no ocurran saltos bruscos de scroll al recalcular el DOM.
  - Asegurar navegación por teclado entre los checkboxes con foco visible (`:focus-visible`).

---

### US-19: Encuesta de Preferencias Metodológicas (Wizard)
- **Prioridad:** ALTA
- **Estimación:** 8 SP
- **Justificación Estratégica:** Asistente guiado paso a paso con algoritmo pedagógico que diagnostica las características de un proyecto y recomienda la metodología ideal.
- **Ubicación Recomendada:** Sección `#asistente` en `metodologias.html` o en `recursos.html`.

#### Requerimiento del Usuario:
> *"Como usuario, quiero responder una breve encuesta guiada (tipo Wizard) sobre las variables de un proyecto de software ficticio o real (estabilidad de requisitos, equipo, riesgo, cliente) y obtener una recomendación fundamentada sobre qué metodología implementar."*

#### Criterios de Aceptación Técnicos:
- [x] **[Diseño/CSS - Iasser]**:
  - Maquetación de la tarjeta del Wizard con indicador de progreso:
    - Barra de progreso porcentual fluida (`progress-bar`).
    - Pasos numerados (`Paso 1 de 5`).
  - Tarjetas de opción seleccionables con microinteracción al hover/click (borde iluminado con `var(--accent)`, sombra sutil y check de selección).
  - Botones de navegación claros: *"Anterior"* (secundario), *"Siguiente"* (primario de acento) y *"Ver Resultados"* en el último paso.
  - Tarjeta final de recomendación:
    - Gráfico visual de compatibilidad (barras porcentuales de coincidencia con Scrum, Kanban, XP y Cascada).
    - Metodología ganadora destacada con badge de *"Recomendada para tu proyecto"*.
    - Bloque de justificación estratégica y advertencias de riesgos a considerar.
- [x] **[JS - Gael]**:
  - Lógica de pasos del Wizard: navegación secuencial sin recargar la página, ocultando y mostrando el paso actual (`step`).
  - Validación en cada paso: impedir avanzar al siguiente paso si no se ha seleccionado una respuesta.
  - **Algoritmo de recomendación ponderado**:
    - Cada opción suma puntos específicos a los acumuladores: `scrum`, `kanban`, `xp`, `cascada`.
    - Variables a evaluar (5 preguntas clave):
      1. *Estabilidad de los requerimientos* (Fijos vs. Cambiantes vs. Flujo continuo de tickets).
      2. *Disponibilidad del cliente / Product Owner* (Dedicación continua vs. Disponibilidad esporádica).
      3. *Tamaño y madurez del equipo* (Equipo pequeño polifacético vs. Equipo grande estructurado).
      4. *Criticidad y regulación del sistema* (Vida/muerte/auditoría estricta vs. Plataforma SaaS comercial).
      5. *Frecuencia deseada de entregas* (Días/semanas continuas vs. Lanzamiento anual).
    - Cálculo de porcentajes normalizados y renderizado dinámico del reporte final.
    - Botón *"Reiniciar Encuesta"* que restablece las variables a su estado inicial.
- [x] **[QA/Tester - Bruno & Iasser]**:
  - Casos de prueba extremos:
    - Ruta A: Requisitos ultra fijos, sin cliente activo, regulación alta → Debe sugerir **Modelo Tradicional / Cascada**.
    - Ruta B: Requisitos cambiantes, entregas en timeboxes de 2 semanas, PO dedicado → Debe sugerir **Scrum**.
    - Ruta C: Flujo continuo de soporte, mantenimiento, prioridad en cuellos de botella → Debe sugerir **Kanban**.
    - Ruta D: Necesidad extrema de calidad de código, TDD, pair programming → Debe sugerir **XP**.

---

### US-12: Sección "Glosario de Términos"
- **Prioridad:** MEDIA
- **Estimación:** 5 SP
- **Justificación Estratégica:** Centro de consulta terminológica con búsqueda alfabética y filtrado instantáneo para consolidar el vocabulario técnico.
- **Ubicación Recomendada:** Página `recursos.html#glosario` o módulo en `calidad.html` / `metodologias.html`.

#### Requerimiento del Usuario:
> *"Como usuario, quiero acceder a un glosario con definiciones claras de calidad y metodologías, pudiendo filtrar alfabéticamente o buscar por palabra clave en tiempo real."*

#### Criterios de Aceptación Técnicos:
- [x] **[Diseño/CSS - Iasser]**:
  - Barra superior con campo de búsqueda estilizado (ícono de lupa, botón de borrado rápido).
  - Navegación alfabética horizontal accesible (`A | B | C | ... | Z | Todos`) con botón activo destacado.
  - Grilla de tarjetas terminológicas con diseño limpio:
    - Título del término con tipografía destacada (`font-weight: 700`).
    - Insignia (badge) por categoría: `Calidad / ISO`, `SDLC`, `Scrum`, `Kanban`, `Testing`.
    - Definición clara en párrafo de lectura accesible.
  - Estado vacío visual (*"No se encontraron términos para tu búsqueda"*) con sugerencia de limpiar filtros.
- [x] **[JS - Gael]**:
  - Arreglo de términos en JS con al menos 20 conceptos fundamentales (ej.: *Backlog, Caja Blanca, Caja Negra, Daily Scrum, DoD, DoR, Integración Continua, ISO 25000, Kanban, Lead Time, Límite WIP, Métrica, Pair Programming, QA, QC, Refactorización, Retrospectiva, Sprint, TDD, User Story*).
  - Filtrado en vivo (`input` event): actualización instantánea de la lista a medida que se escribe.
  - Filtrado por letra inicial: activación al hacer clic en una letra del abecedario.
  - Normalización de búsqueda: insensible a mayúsculas/minúsculas y eliminación de acentos/tildes (`normalize("NFD")`).
- [x] **[QA/Tester - Bruno & Iasser]**:
  - Probar búsquedas con tildes (ej.: "métrica" vs. "metrica").
  - Probar términos inexistentes para asegurar el renderizado del mensaje informativo sin rotura del layout.
  - Verificar anuncio accesible de resultados para lectores de pantalla mediante `aria-live="polite"`.

---

### US-14: Sección "Enlaces de Interés"
- **Prioridad:** BAJA
- **Estimación:** 3 SP
- **Justificación Estratégica:** Curaduría de recursos externos de referencia con buenas prácticas obligatorias de seguridad web.
- **Ubicación Recomendada:** Sección en `recursos.html` o pie informativo en `metodologias.html`.

#### Requerimiento del Usuario:
> *"Como usuario, quiero disponer de una colección de fuentes oficiales, normativas internacionales y herramientas líderes para profundizar mi estudio con enlaces confiables y seguros."*

#### Criterios de Aceptación Técnicos:
- [ ] **[Diseño/CSS - Iasser]**:
  - Grilla de tarjetas de recursos externos con iconografía SVG distintiva por tipo:
    - 🌐 *Estándar Oficial:* ISO/IEC 25000 portal, IEEE Computer Society.
    - 📜 *Manifiestos y Guías:* The Agile Manifesto, Guía Oficial de Scrum (Ken Schwaber & Jeff Sutherland).
    - 🛠️ *Herramientas del Ecosistema:* SonarQube, Jira Software, Cypress Test Runner.
    - 👥 *Comunidades y Certificaciones:* ISTQB (International Software Testing Qualifications Board), Scrum.org.
  - Microinteracción de elevación en hover con icono indicador de "enlace externo".
- [ ] **[JS - Gael]**:
  - Verificación opcional de eventos para tracking o accesibilidad de enlaces externos (anuncio auditivo para usuarios de lectores de pantalla sobre apertura en nueva pestaña).
- [ ] **[QA/Tester - Bruno & Iasser]**:
  - **Requisito Crítico de Seguridad:** Verificar en el 100% de los links los atributos:
    ```html
    <a href="..." target="_blank" rel="noopener noreferrer">...</a>
    ```
  - Probar que no exista ningún hipervínculo roto (código HTTP 404).

---

### US-15: Ejercicios y Casos Prácticos
- **Prioridad:** BAJA
- **Estimación:** 5 SP
- **Justificación Estratégica:** Módulo interactivo de autoevaluación que permite a los estudiantes aplicar los conceptos teóricos y revelar la solución explicada cuando lo deseen.
- **Ubicación Recomendada:** Sección `#ejercicios` en `recursos.html` o en `metodologias.html`.

#### Requerimiento del Usuario:
> *"Como estudiante, quiero resolver ejercicios prácticos de escenarios reales (evaluación de metodologías, cálculo de métricas o detección de cuellos de botella) y poder alternar la visibilidad de la solución explicativa para autoevaluarme."*

#### Criterios de Aceptación Técnicos:
- [ ] **[Diseño/CSS - Iasser]**:
  - Maquetación de tarjetas de caso práctico con:
    - Encabezado con número de ejercicio y nivel de dificultad (Básico, Intermedio, Avanzado).
    - Bloque de contexto/enunciado con tipografía clara y destacada.
    - Botón interactivo de despliegue (`.btn-reveal-solution`) con icono chevron rotativo.
    - Panel de solución pautada con fondo diferenciado, bordes suaves y caja de *"Lección Aprendida"*.
- [ ] **[JS - Gael]**:
  - Programar la lógica interactiva de despliegue (`toggle` de clase `.is-revealed`):
    - La solución debe permanecer **oculta por defecto** al cargar la página.
    - El texto del botón debe alternar dinámicamente entre *"Mostrar Solución Explicada"* y *"Ocultar Solución"*.
    - Atributo de accesibilidad `aria-expanded="false|true"` actualizado en tiempo real.
    - Animación suave de apertura mediante cálculo de altura (`max-height` o transición de opacidad).
  - Casos prácticos a incluir (4 casos reales):
    1. *Caso 1: Elección Metodológica para Software Médico Crítico vs. App de Delivery.*
    2. *Caso 2: Cuello de Botella en Tablero Kanban (Límites WIP excedidos y cálculo de Lead Time).*
    3. *Caso 3: Identificación de Pruebas de Calidad (Caja Negra vs. Caja Blanca ante un fallo de autenticación).*
    4. *Caso 4: Estimación de Sprint y Burndown Chart en Scrum.*
- [ ] **[QA/Tester - Bruno & Iasser]**:
  - Verificar que ninguna solución se filtre o sea visible antes del clic del usuario.
  - Asegurar soporte completo para activación mediante teclado (`Enter` y `Espacio`).

---

## 4. Estructura de Datos Propuesta para Acelerar el Desarrollo

Para facilitar la tarea al desarrollador (`Gael`) y mantener un código ordenado y modular, se define el siguiente esquema de datos para desacoplar el contenido de la lógica de renderizado:

### A. Catálogo del Comparador de Metodologías (`js/comparator-data.js` o embebido)
```javascript
export const METODOLOGIAS_DATA = {
    cascada: {
        id: "cascada",
        nombre: "Modelo en Cascada",
        familia: "tradicional",
        colorBadge: "badge-blue",
        enfoque: "Predictivo y secuencial. Cada fase requiere aprobación formal antes de iniciar la siguiente.",
        flexibilidadCambio: "Baja. Los cambios de alcance son costosos y requieren comités de control de cambios (CCB).",
        roles: "Roles jerárquicos y especializados: Gerente de Proyecto, Analista de Sistemas, Diseñador, Desarrollador, QA Tester.",
        entregable: "Producto final completo en la etapa de entrega; documentación técnica exhaustiva en cada fase.",
        cliente: "Involucrado al inicio (definición de requisitos) y al final (pruebas de aceptación / entrega).",
        idealPara: "Proyectos críticos, altamente regulados (aeroespacial, médico), con requisitos fijos e inmutables."
    },
    scrum: {
        id: "scrum",
        nombre: "Scrum Framework",
        familia: "agil",
        colorBadge: "badge-indigo",
        enfoque: "Adaptativo e iterativo en ciclos fijos (Sprints de 1 a 4 semanas) orientados al valor.",
        flexibilidadCambio: "Alta entre Sprints. Se aceptan cambios en el Product Backlog; el Sprint Backlog se mantiene protegido.",
        roles: "Scrum Team sin jerarquías internas: Product Owner, Scrum Master y Developers.",
        entregable: "Incremento potencialmente desplegable y utilizable al cierre de cada Sprint.",
        cliente: "Involucramiento continuo a través del Product Owner y participación activa en la Sprint Review.",
        idealPara: "Proyectos innovadores, desarrollo de software comercial, productos que requieren rápida validación de mercado."
    },
    kanban: {
        id: "kanban",
        nombre: "Método Kanban",
        familia: "agil",
        colorBadge: "badge-emerald",
        enfoque: "Flujo continuo guiado por demanda (Pull System), visualización del trabajo y limitación del WIP.",
        flexibilidadCambio: "Muy alta. Las tareas pueden repriorizarse continuamente siempre que no hayan entrado a 'En Progreso'.",
        roles: "No prescribe roles fijos; se adapta a la estructura organizacional existente y fomenta la mejora continua.",
        entregable: "Entrega continua según disponibilidad de las tareas (flujo continuo sin timeboxes estrictos).",
        cliente: "Interacción fluida y constante según las prioridades del backlog en tiempo real.",
        idealPara: "Equipos de soporte, mantenimiento de software, operaciones DevOps o servicios con flujo impredecible."
    },
    xp: {
        id: "xp",
        nombre: "Extreme Programming (XP)",
        familia: "agil",
        colorBadge: "badge-amber",
        enfoque: "Ingeniería de software adaptativa centrada en la excelencia técnica y ciclos de retroalimentación inmediatos.",
        flexibilidadCambio: "Extrema. Los cambios de diseño son bienvenidos gracias al refactoring continuo y pruebas automatizadas.",
        roles: "Desarrolladores (programadores en parejas), Tracker, Coach y Cliente en el sitio (On-site Customer).",
        entregable: "Versiones funcionales pequeñas con integración continua diaria y pruebas unitarias completas.",
        cliente: "Cliente integrado presencialmente en el equipo para aclarar dudas y redactar pruebas de aceptación.",
        idealPara: "Equipos que construyen software crítico con requisitos volátiles y necesidad de tolerancia cero a errores."
    }
};
```

### B. Preguntas y Ponderaciones del Wizard de Encuesta (`js/survey-data.js`)
```javascript
export const SURVEY_QUESTIONS = [
    {
        id: 1,
        pregunta: "¿Qué nivel de estabilidad tienen los requisitos de tu proyecto?",
        opciones: [
            { texto: "Completamente estables, definidos contractualmente y no cambiarán.", pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 0 } },
            { texto: "Se conoce la visión general, pero evolucionarán según la respuesta de los usuarios.", pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 2 } },
            { texto: "Son tareas dinámicas, tickets de soporte y cambios imprevistos diarios.", pesos: { cascada: 0, scrum: 1, kanban: 3, xp: 1 } },
            { texto: "Requisitos complejos con alta incertidumbre técnica donde la calidad es lo más crítico.", pesos: { cascada: 0, scrum: 1, kanban: 1, xp: 3 } }
        ]
    },
    {
        id: 2,
        pregunta: "¿Cuál es la disponibilidad y nivel de involucramiento del cliente final?",
        opciones: [
            { texto: "Baja disponibilidad: solo puede participar en la firma inicial y la entrega final.", pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 0 } },
            { texto: "Disponible para reuniones periódicas de revisión cada 1 a 2 semanas.", pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 1 } },
            { texto: "Interacción continua para priorizar solicitudes según van ingresando.", pesos: { cascada: 0, scrum: 1, kanban: 3, xp: 1 } },
            { texto: "Totalmente integrado con el equipo de desarrollo para pruebas y validaciones diarias.", pesos: { cascada: 0, scrum: 1, kanban: 0, xp: 3 } }
        ]
    },
    {
        id: 3,
        pregunta: "¿Cuál es el ritmo o frecuencia esperada de entrega de valor?",
        opciones: [
            { texto: "Un único lanzamiento final formal cuando el producto esté 100% completo.", pesos: { cascada: 3, scrum: 0, kanban: 0, xp: 0 } },
            { texto: "Versiones incrementales cada 2 a 4 semanas para recibir feedback temprano.", pesos: { cascada: 0, scrum: 3, kanban: 1, xp: 2 } },
            { texto: "Flujo constante: cada tarea finalizada y probada pasa a producción de inmediato.", pesos: { cascada: 0, scrum: 1, kanban: 3, xp: 1 } },
            { texto: "Entregas muy frecuentes guiadas por integración continua y pruebas automatizadas (TDD).", pesos: { cascada: 0, scrum: 1, kanban: 1, xp: 3 } }
        ]
    }
];
```

---

## 5. Arquitectura de Archivos Sugerida para el Cierre del Sprint 2

Para completar estas 5 historias, se recomienda organizar los archivos de la siguiente manera:

```text
Sistemas-de-gestion-de-calidad-del-software-proyecto/
├── metodologias.html                   # Módulo Ágil (Actualizar con anclas a Comparador y Wizard)
├── recursos.html                       # NUEVA PÁGINA: Centro de Recursos (Glosario, Enlaces y Ejercicios)
│
├── css/
│   ├── agile.css                       # Ya existente (Scrum, Kanban, Lightbox)
│   ├── interactive.css                 # NUEVO: Estilos para Comparador (US-18) y Wizard Encuesta (US-19)
│   └── resources.css                   # NUEVO: Estilos para Glosario (US-12), Enlaces (US-14) y Ejercicios (US-15)
│
├── js/
│   ├── agile.js                        # Ya existente
│   ├── comparator.js                   # NUEVO: Lógica interactiva de US-18 (Comparador dinámico)
│   ├── survey-wizard.js                # NUEVO: Lógica de pasos y scoring de US-19 (Encuesta)
│   ├── glossary.js                     # NUEVO: Búsqueda en tiempo real y filtro alfabético US-12
│   └── practice-exercises.js           # NUEVO: Lógica interactiva de despliegue de soluciones US-15
│
└── documentacion/
    ├── sprint.md                       # Planificación Ágil Reestructurada (Oficial)
    ├── sprint_2.md                     # Guía de Historias de Usuario Restantes (Este documento)
    ├── sprint_2_planificacion_diseno_desarrollo.md # Detalle de diseño previo
    └── Proyecto_SGCS.md                # Backlog general de requerimientos
```

---

## 6. Checklist de QA para la Aprobación del Sprint 2

Antes de declarar cerrado el Sprint 2 y dar paso al **Sprint 3 (Bug Fixing y Auditoría QA)**, el equipo debe verificar:

- [x] **Comparador (US-18):** Al seleccionar 2 o más metodologías, la tabla se renderiza instantáneamente; las filas de atributos se alinean correctamente; el diseño no desborda en pantallas de 375px a 1440px.
- [x] **Wizard Encuesta (US-19):** No permite avanzar sin seleccionar una respuesta; el botón de retroceso conserva la selección previa; el cálculo ponderado es determinista y muestra porcentajes correctos; el botón "Reiniciar" limpia la sesión.
- [x] **Glosario (US-12):** La búsqueda filtra tanto por coincidencia en el título como en el contenido; el abecedario muestra en gris las letras sin términos asociados; la búsqueda es insensible a acentos y mayúsculas.
- [ ] **Enlaces (US-14):** Todos los hipervínculos externos cuentan estrictamente con `target="_blank"` y `rel="noopener noreferrer"`; no existen URLs caídas.
- [ ] **Ejercicios (US-15):** Todas las soluciones inician ocultas; el botón conmuta su etiqueta entre "Mostrar" y "Ocultar"; el panel cuenta con animación fluida sin parpadeos.
- [ ] **Validación Global:** Consola limpia al 100% en todas las páginas (`index.html`, `calidad.html`, `metodologias.html`, `nosotros.html`, `recursos.html`).
