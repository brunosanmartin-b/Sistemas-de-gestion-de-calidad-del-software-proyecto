# Resumen 02: Guía de Roles de Equipo (Metodología SCRUM)

- **Documento Original:** [`../../../archives zebolla/Roles proyecto SCRUM.docx`](../../../archives%20zebolla/Roles%20proyecto%20SCRUM.docx)
- **Espejo con Asignación de Equipo en el Repositorio:** [`../roles_proyecto_SCRUM.md`](../roles_proyecto_SCRUM.md)
- **Tipo de Documento:** Definición de responsabilidades por rol, criterios de elección, reglas de colaboración y Definición de Hecho (*Definition of Done - DoD*).

---

## 1. Regla Inicial de Conformación del Equipo *(Introducción, pág. 1)*
- Cada integrante del equipo ágil debe asumir **una función principal** tras analizar los perfiles y sus habilidades.
- **Restricción temporal:** La definición de qué rol asumirá cada integrante debe cerrarse como grupo **antes de comenzar el Sprint 1**.

---

## 2. Perfiles y Responsabilidades Obligatorias por Rol *(Secciones 1 a 4, págs. 1–2)*

### 1. 📋 SCRUM MASTER (Gestión, Métricas y Facilitación)
- **Naturaleza del rol:** Líder que garantiza el cumplimiento del marco Scrum y la organización del equipo.
- **Regla / Restricción explícita:** **No es un "jefe que da órdenes"**, sino un facilitador que elimina trabas para que todos puedan trabajar.
- **Tareas principales obligatorias:**
  1. **Administración del Tablero:** Crear y mantener actualizado el tablero (*Trello, Jira o GitHub Projects*) organizando la Pila del Sprint con las columnas: `To Do`, `In Progress`, `QA`, `Done`.
  2. **Moderación de Ceremonias:** Dirigir las reuniones diarias (*Daily - 5 min*), las planificaciones (*Sprint Planning*) y las retrospectivas (*Sprint Retrospective*).
  3. **Control de Métricas y Tiempos:** Monitorear fechas de entrega y medir el rendimiento del equipo (cálculo de velocidad e historial de entregas).
  4. **Desbloqueo:** Detectar si un compañero está trabado (ejemplo original: *el programador esperando un diseño o el tester esperando código*) y coordinar la solución.

### 2. 🎨 DISEÑADOR / UX-UI (Interfaz, Estilos y Accesibilidad)
- **Naturaleza del rol:** Responsable del aspecto visual, la maquetación y la experiencia del usuario (UX) en el portal. Meta: que la web sea estética, fácil de usar, adaptable y accesible.
- **Tareas principales obligatorias:**
  1. **Prototipado:** Crear los bocetos o diagramas de las pantallas en Canva o papel **antes de que se programen**.
  2. **Guía de Estilos y Estándares:** Definir la paleta de colores, las tipografías y el menú de navegación.
  3. **Accesibilidad (Módulo 5):** Diseñar cumpliendo las normas de accesibilidad (alto contraste de colores, legibilidad, botones claros para lectores de pantalla).

### 3. 💻 PROGRAMADOR / DEV (Lógica, Dinamismo y JavaScript)
- **Naturaleza del rol:** Encargado de darle funcionalidad al sitio web, transformando las maquetas del Diseñador y los requerimientos del usuario en código ejecutable con JavaScript.
- **Tareas principales obligatorias:**
  1. **Lógica JS:** Programar la interactividad del sitio (filtros, buscadores, acordeones, navegaciones dinámicas).
  2. **Maquetación (HTML/CSS):** Escribir la estructura HTML semántica y las hojas de estilo CSS (diseño responsive con Flexbox/Grid).
  3. **Desarrollo de Herramientas Interactivas:** Construir el algoritmo del **Comparador de Metodologías (`US-18`)** y de la **Encuesta de Selección (`US-19`)**.
  4. **Persistencia de Datos:** Guardar o leer información utilizando el `localStorage` del navegador cuando sea necesario.

### 4. 🔍 TESTER / QA (Aseguramiento de la Calidad y Pruebas)
- **Naturaleza del rol:** Guardián de la calidad del producto. Su objetivo es encontrar fallos antes de que la entrega llegue al profesor (*Product Owner*).
- **Regla de bloqueo obligatorio:** **Nada se da por "Finalizado" (`Done`) sin la aprobación del Tester / QA.**
- **Tareas principales obligatorias:**
  1. **Diseño del Plan de Pruebas:** Redactar los casos de prueba para cada Historia de Usuario **antes de que sea evaluada**.
  2. **Ejecución de Pruebas:** Probar la web buscando errores de funcionalidad en JS, fallos de responsive en CSS y enlaces rotos.
  3. **Matriz y Reporte de Bugs:** Documentar los errores encontrados especificando tres datos obligatorios:
     - **Gravedad**
     - **Pasos para reproducirlo**
     - **Comportamiento esperado** (para que el Dev o Diseñador lo corrija).
  4. **Validación del Definition of Done (DoD):** Verificar que cada funcionalidad cumpla con todos los Criterios de Aceptación antes de autorizar su paso a *"Completado"*.

---

## 3. Reglas Generales para Todo el Equipo y DoD *(Sección: Reglas Generales, pág. 2)*

1. **Un rol principal, pero trabajo colaborativo:** Cada integrante lidera sus tareas específicas, pero todos se ayudan mutuamente cuando un compañero finaliza su parte o necesita apoyo.
2. **Definición de "Hecho" (*Definition of Done - DoD*):**
   - **Restricción estricta:** **Una Historia de Usuario NO está lista si solo tiene el HTML.**
   - Se considera finalizada únicamente cuando se cumplen **las 4 condiciones secuenciales**:
     1. El **Diseñador** aprobó el maquetado.
     2. El **Programador** integró la lógica en JS.
     3. El **Tester** la probó y no encontró errores.
     4. El **Scrum Master** la movió a la columna `Done` del tablero.

---

## 4. Asignación Oficial de Roles en el Equipo VELORA *(Registrada en [`../roles_proyecto_SCRUM.md`](../roles_proyecto_SCRUM.md), líneas 57–61)*
- **`sanma` (Bruno San Martín):** Scrum Master.
- **`Gael` (Gael Rodriguez):** Programador / Tester.
- **`Iasser` (Iasser Chahaud):** Diseñador / Tester.

