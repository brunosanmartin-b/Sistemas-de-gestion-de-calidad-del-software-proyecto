# AGENTS.md — Reglas Imprescindibles del Proyecto SGCS 2026 (Equipo VELORA)

Este archivo define las restricciones globales obligatorias para todas las tareas en `Sistemas-de-gestion-de-calidad-del-software-proyecto`. Mantené el consumo de contexto al mínimo: **no cargues todos los documentos de referencia a la vez**.

---

## 1. Contexto e Identidad del Proyecto
- **Proyecto:** Portal Web Educativo de *Sistemas de Gestión de Calidad del Software (SGCS 2026)*.
- **Equipo:** **VELORA** (Lema: *"IDEAS • SPRINTS • RESULTADOS"*).
- **Roles Asignados:**
  - **Product Owner (Cliente):** Docente de la asignatura.
  - **Scrum Master (`sanma` — Bruno San Martín):** Gestión del tablero, métricas (velocidad, Burndown), facilitación de ceremonias y eliminación de bloqueos.
  - **Programador Lead / Tester QA (`Gael` — Gael Rodriguez):** Lógica JavaScript (ES6+), maquetación HTML semántica, persistencia (`localStorage`) y pruebas funcionales.
  - **Diseñador UX/UI / Tester QA (`Iasser` — Iasser Chahaud):** Sistema de diseño, maquetación CSS modular, accesibilidad WCAG 2.1 AA y pruebas visuales.

---

## 2. Reglas Técnicas y de Calidad Innegociables
1. **Stack Puro (Sin Frameworks):** Usar exclusivamente **HTML5 semántico** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), **CSS3 modular** orquestado desde `css/styles.css` con Custom Properties (`css/variables.css`) y **Vanilla JavaScript (ES6+)**.
2. **Compatibilidad con `file://` (Sin Servidor):** No depender de `type="module"` si bloquea la ejecución local por CORS al abrir los archivos `.html` directamente. Cargar los scripts de forma secuencial exponiendo inicializadores en `window` (con `main.js` al final).
3. **Consola 100% Limpia:** Está prohibido entregar código que genere errores (`Uncaught TypeError`, `ReferenceError`) o advertencias en la consola del navegador (`F12`).
4. **Seguridad en Enlaces Externos (US-14):** Todo hipervínculo externo con `target="_blank"` debe incluir obligatoriamente `rel="noopener noreferrer"`. No deben existir enlaces internos ni externos rotos (`404` o `href="#"` sin acción).
5. **Diseño Responsivo Sin Desbordes:** Soporte fluido sin scroll horizontal (`overflow-x: hidden`) en mobile (`375px`, `414px`, `480px`), tablet (`768px`, `1024px`) y desktop (`1440px+`).
6. **Accesibilidad Web (WCAG 2.1 AA):**
   - Contraste mínimo `4.5:1` en textos (modo oscuro y modo claro).
   - Atributo `alt` descriptivo obligatorio en todas las imágenes; mantener proporción de los logos oficiales (`img/VELORA.png` y `img/VELORA-N.png` con `object-fit: contain`).
   - Etiquetas `<label for="...">` explícitas en todos los controles de formulario y mensajes de error con `aria-describedby`.
   - Áreas táctiles mínimas de `44x44px` (Ley de Fitts) y soporte completo de teclado (`Tab`, `Enter`, `Space`, `Escape`, flechas `←`/`→`) con `:focus-visible` y atributos ARIA (`aria-expanded`, `aria-selected`, `aria-pressed`, `aria-live="polite"`, `aria-current="page"`).

---

## 3. Reglas Metodológicas Scrum (DoR y DoD)
- **Historias de Usuario (US-01 a US-19):** Deben redactarse con la estructura *Como [rol] / Quiero [acción] / Para [beneficio]*, cumplir la regla **INVEST**, poder completarse en un único Sprint (tareas desglosadas en **≤ 1 día de trabajo**) y dividir sus criterios técnicos en `[Diseño/CSS]`, `[JS]` y `[QA/Tester]`.
- **Definición de Hecho (DoD):** **Una Historia de Usuario NO está lista si solo tiene el HTML.** Solo pasa a `Done` cuando:
  1. El **Diseñador** aprobó el maquetado y la responsividad.
  2. El **Programador** integró la lógica JS sin errores en consola.
  3. El **Tester / QA** ejecutó el plan de pruebas (Desktop y Mobile) sin errores pendientes.
  4. El **Scrum Master** verificó el cumplimiento y movió la tarjeta a `Done`.

---

## 4. Consulta de Referencias con Mínimo Consumo de Contexto
Para consultar requerimientos de Historias de Usuario, reglas de Scrum, entregables por Sprint o planes de prueba:
1. Activá la Skill [`.agents/skills/referencias-proyecto/SKILL.md`](./.agents/skills/referencias-proyecto/SKILL.md).
2. Leé primero el índice maestro en [`documentacion/indice.md`](./documentacion/indice.md).
3. Consultá **únicamente** el resumen Markdown de [`documentacion/referencias/`](./documentacion/referencias/) pertinente a tu tarea actual.
4. Acudí a los documentos originales en `../archives zebolla/` o `documentacion/` **solo** cuando necesites verificar citas textuales exactas, tablas de casos de prueba o diagramas visuales originales.

