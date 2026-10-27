# Resumen 04: 📋 Guía de Entrega de Documentación y Registros por Sprint

- **Documento Original:** [`../../../archives zebolla/📋 Guía de Entrega de Documentación y Registros por Sprint.docx`](../../../archives%20zebolla/%F0%9F%93%8B%20Gu%C3%ADa%20de%20Entrega%20de%20Documentaci%C3%B3n%20y%20Registros%20por%20Sprint.docx)
- **Tipo de Documento:** Normativa de evaluación continua con la estructura y entregables obligatorios al cierre de cada Sprint.

---

## 1. Requisitos Formales de Presentación *(Sección 1, pág. 1)*
- **Carátula Institucional y del Grupo (obligatoria):**
  1. Nombre de la institución, asignatura y docente (*Product Owner*).
  2. Nombre del grupo y logo (`VELORA`).
  3. Integrantes del equipo con sus respectivos roles asignados (*Scrum Master, Programador, Diseñador, Tester*).
- **Formato de Entrega:**
  1. Encabezado y pie de página con el **nombre del grupo** y **número de página** en formato `Página X de Y`.
  2. Documentación unificada en **formato PDF** o en **carpetas ordenadas en el repositorio**.

---

## 2. Planificación y Artefactos Iniciales — Anexo Sprint 1 *(Sección 2, pág. 1)*
Para el primer Sprint se debe incluir como anexo inicial:
1. **Pila del Producto (*Product Backlog*):** Lista priorizada de Historias de Usuario provista o acordada con el Product Owner (docente).
2. **Pila del Sprint (*Sprint Backlog*):** Historias de usuario presentadas en **formato tabla**.
3. **Definición de Hecho (*Definition of Done - DoD*):** Criterios mínimos de calidad requeridos para considerar que una tarea o funcionalidad está completamente terminada (ej.: *código probado, sin errores en consola, interfaz adaptativa, etc.*).

---

## 3. Cronograma del Sprint Actual *(Sección 3, pág. 1)*
- **Periodo de Trabajo (referencia Sprint 1):** Del `07/09/2026` al `23/09/2026`.
- **Objetivo del Sprint (*Sprint Goal*):** Declaración breve del alcance de funcionalidades a entregar en la iteración.

---

## 4. Registros Obligatorios de Ceremonias de Scrum *(Sección 4, pág. 1)*
Cada equipo debe registrar las tres reuniones obligatorias durante el desarrollo del Sprint:
1. **Scrum Diario (*Daily Scrum*):**
   - **Frecuencia obligatoria:** Debe realizarse **uno por clase**.
   - **Registro requerido:** Completar la planilla/bitácora diaria indicando **para cada rol**:
     - ¿Qué hizo desde el último Daily?
     - ¿Qué va a hacer hoy?
     - ¿Existen impedimentos o bloqueos?
2. **Revisión del Sprint (*Sprint Review*):**
   - Minuta de la demostración realizada al Product Owner (docente).
   - Registro del estado de las Historias de Usuario (**Aceptadas / Rechazadas**) y devoluciones recibidas.
3. **Retrospectiva del Sprint (*Sprint Retrospective*):**
   - Registro de los **3 ejes del equipo**:
     1. ¿Qué funcionó bien?
     2. ¿Qué se puede mejorar?
     3. Compromisos concretos de acción para el siguiente Sprint.

---

## 5. Registros y Evidencias Obligatorias por Rol *(Sección 5, págs. 1–2)*

### 🛡️ A. Entregables del SCRUM MASTER *(Se entregan como anexos a la documentación del Sprint)*
1. **Configuración e Historial de Trello (Tablero Scrum / Kanban):**
   - **Estructura mínima obligatoria de 5 columnas:**
     1. `Backlog del Producto (Product Backlog)`
     2. `Backlog del Sprint (Sprint Backlog)`
     3. `En Proceso (In Progress)`
     4. `En Pruebas (In Testing / QA)`
     5. `Hecho (Done)`
   - **Evidencias solicitadas:**
     - Enlace público o invitación de lectura al tablero de Trello.
     - Captura de pantalla del estado final del tablero al cierre del Sprint.
     - **Regla de Etiquetas y Tarjetas:** Cada tarjeta/tarea debe tener asignado: **1) un integrante**, **2) la estimación (Puntos de Historia)** y **3) la etiqueta del rol correspondiente**.
2. **Gráfico Burndown (Trabajo Pendiente vs. Tiempo):**
   - **Eje X:** Días hábiles del Sprint (ej. del `07/09/2026` al `23/09/2026`).
   - **Eje Y:** Puntos de Historia (o tareas) pendientes.
   - **Líneas obligatorias del gráfico:**
     - *Línea Ideal:* Proyección teórica de descenso constante de trabajo pendiente hasta llegar a cero.
     - *Línea Real:* Evolución día a día según las tareas finalizadas que cumplen con la Definición de Hecho (DoD).
   - **Análisis de Desviación:** Breve reporte redactado por el Scrum Master explicando las variaciones clave entre la línea real y la ideal (por qué hubo estancamientos o caídas bruscas de esfuerzo).
3. **Control de Versiones e Historial de Commits (GitHub):**
   - **Enlace al Repositorio de GitHub:** Publicar el link del repositorio oficial del grupo.
   - **Historial de Commits:** Presentar el `Git Log` / Grafo de Commits para evidenciar integración continua y trabajo colaborativo real.

### 🎨 B. Entregables del DISEÑADOR (UI/UX & Estilos)
1. **Diseño y Maquetación:** Archivos de prototipos/wireframes o capturas de pantallas diseñadas.
2. **Devolución e Iteración:** Registro de cambios visuales o ajustes de maquetación (CSS) generados tras las observaciones del PO o del equipo.

### 💻 C. Entregables del PROGRAMADOR (Desarrollo Frontend / Lógica)
1. **Código Fuente e Integración:** Enlace al repositorio de código (o entrega de archivos JS/HTML).
2. **Buenas Prácticas de Programación (Evidencias obligatorias):**
   - Declaración de variables claras y código comentado cuando corresponda.
   - **Captura de pantalla de la Consola de Desarrollador sin errores o warnings en JavaScript.**
   - Registro de persistencia de datos (ej. uso de `localStorage`).

### 🧪 D. Entregables del TESTER / QA (Control de Calidad)
1. **Plan de Pruebas (Matriz de Casos de Prueba):** Matriz indicando los casos de prueba manuales creados con los campos: `ID`, `Pasos`, `Datos de entrada`, `Resultado esperado`.
2. **Ejecución y Reporte de Bugs:** Registro de la ejecución de las pruebas indicando los resultados obtenidos (`Pass` / `Fail`) y la lista de errores/defectos reportados al programador para su corrección.

