---
name: referencias-proyecto
description: >-
  Guía el sistema de consulta progresiva y de bajo consumo de contexto para los 8 documentos
  de referencia del proyecto SGCS 2026 (Equipo VELORA). Activar cuando la tarea requiera
  verificar Historias de Usuario (US-01 a US-19), criterios de aceptación, roles Scrum,
  ceremonias (Daily, Planning, Review, Retrospective), entregables de Sprint (Trello,
  Burndown, GitHub, QA), planes de prueba o fundamentos teóricos de Scrum y calidad de software.
---

# Skill: Consulta de Referencias del Proyecto (SGCS 2026 — VELORA)

Esta Skill establece el protocolo obligatorio para consultar la documentación de referencia del proyecto (`../archives zebolla/` y `documentacion/`) **minimizando el consumo de tokens en la ventana de contexto**.

---

## 1. Cuándo Utilizar esta Skill

Activá este flujo siempre que la tarea involucre cualquiera de los siguientes escenarios:
- **Desarrollo o modificación de funcionalidades (US-01 a US-19):** Verificar requerimientos de `[Diseño/CSS]`, `[JS]` o `[QA/Tester]` del Product Backlog.
- **Redacción o revisión de contenido educativo del portal:** Asegurar fidelidad bibliográfica sobre Ciclo Scrum, Manifiesto Ágil (4 valores y 12 principios), Roles, Artefactos, Eventos, Estimación Ágil, Kanban, TDD, Poka-yoke, Andon o Diagramas de Retrospectiva (Ishikawa / Árbol).
- **Gestión Ágil y Ceremonias:** Preparar o auditar el Scrum Diario (Daily Scrum), Sprint Planning, Sprint Review o Sprint Retrospective.
- **Preparación de Entregas por Sprint:** Verificar requisitos formales de entrega (carátula, formato PDF/repositorio, las 5 columnas obligatorias de Trello, Burndown Chart con análisis de desviación, Git Log y evidencias por rol).
- **Aseguramiento de Calidad (QA / Testing):** Diseñar o ejecutar matrices de casos de prueba, reportes de bugs o verificar la Definición de Listo (DoR) y Definición de Hecho (DoD).

---

## 2. Protocolo de Consulta en 3 Niveles (Divulgación Progresiva)

> [!IMPORTANT]
> **Regla de Oro de Contexto:** NUNCA leas todos los resúmenes ni todos los documentos originales a la vez. Seguí estrictamente el orden Nivel 1 → Nivel 2 → Nivel 3 deteniéndote en cuanto tengas la información necesaria para resolver la tarea.

### Nivel 1: Consulta del Índice Maestro (Siempre Primero)
1. Leé [`documentacion/indice.md`](../../../documentacion/indice.md).
2. Identificá en su tabla de enrutamiento cuál de los 8 resúmenes temáticos responde a la tarea actual.

### Nivel 2: Consulta Selectiva del Resumen Pertinente
Leé **únicamente** el archivo o los archivos de [`documentacion/referencias/`](../../../documentacion/referencias/) que correspondan a tu subtarea:

| Código | Archivo de Resumen | Consultar SOLO cuando la tarea trate sobre... |
| :--- | :--- | :--- |
| **DOC-01** | [`01-proyecto-sgcs-2026.md`](../../../documentacion/referencias/01-proyecto-sgcs-2026.md) | Secciones del sitio web, alcance funcional de `US-01` a `US-19`, o criterios técnicos de `[Diseño/CSS]`, `[JS]` y `[QA/Tester]`. |
| **DOC-02** | [`02-roles-proyecto-scrum.md`](../../../documentacion/referencias/02-roles-proyecto-scrum.md) | Responsabilidades de Scrum Master, Diseñador, Programador o Tester, asignación de roles en VELORA (`sanma`, `Gael`, `Iasser`) o reglas del DoD. |
| **DOC-03** | [`03-guia-scrum-diario.md`](../../../documentacion/referencias/03-guia-scrum-diario.md) | Ejecución, reglas de *time-box* (15 min), estructura paso a paso, las 3 preguntas o antipatrones del *Daily Scrum*. |
| **DOC-04** | [`04-guia-entrega-documentacion-sprint.md`](../../../documentacion/referencias/04-guia-entrega-documentacion-sprint.md) | Requisitos formales de entrega de Sprint, estructura de 5 columnas en Trello, gráfico Burndown, bitácoras de ceremonias o evidencias obligatorias por rol. |
| **DOC-05** | [`05-historias-de-usuario.md`](../../../documentacion/referencias/05-historias-de-usuario.md) | Redacción y validación de Historias de Usuario (plantilla *Como/Quiero/Para*, criterios de aceptación, *Red Flags* y regla **INVEST**). |
| **DOC-06** | [`06-el-ciclo-scrum.md`](../../../documentacion/referencias/06-el-ciclo-scrum.md) | Síntesis visual rápida de componentes del ciclo Scrum (roles, 3 artefactos, 4 eventos) y cambios históricos del marco. |
| **DOC-07** | [`07-scrum-estandar.md`](../../../documentacion/referencias/07-scrum-estandar.md) | Teoría profunda de Scrum Manager (Manifiesto Ágil, ingeniería secuencial vs. concurrente vs. agilidad, reglas detalladas de roles/artefactos/eventos, estimación con puntos/Fibonacci/T-Shirt/#NoEstimates, Kanban WIP, TDD, Poka-yoke, Andon, Ishikawa). |
| **DOC-08** | [`08-plan-pruebas-y-sprints.md`](../../../documentacion/referencias/08-plan-pruebas-y-sprints.md) | Casos de prueba oficiales del Sprint 1 (`Plan_de_pruebas_Sprint1.docx`, 25 pruebas), estado de avance de Sprints 1, 2 y 3, arquitectura de archivos actual y especificaciones técnicas de módulos interactivos. |

### Nivel 3: Verificación Puntual en el Documento Original (Solo si es Indispensable)
Acudí al documento original **únicamente** cuando:
- Necesites verificar una **cita literal exacta** o bibliográfica para incluirla en el contenido del portal.
- Necesites inspeccionar **ilustraciones, gráficos o capturas visuales** contenidas en los PDFs (`El ciclo Scrum (1).pdf`, `Historias de Usuario.pdf`, `SCRUM ESTANDAR (1).pdf`).
- Exista una duda puntual sobre una página o sección específica referenciada en el resumen.

#### Cómo leer los originales sin desperdiciar contexto:
- **Para PDFs (`../archives zebolla/*.pdf`):** Usá `read_file` indicando las páginas o rangos exactos citados en el resumen (por ejemplo, en `SCRUM ESTANDAR (1).pdf`, consultá la página exacta indicada entre `[pág. X]` en el resumen).
- **Para archivos Word (`../archives zebolla/*.docx` y `documentacion/Plan_de_pruebas_Sprint1.docx`):** Si ya existe su versión en texto o resumen, evitá reextraer todo el XML; si necesitás verificar el XML original de un `.docx` puntual, extraé solo ese archivo mediante un script acotado de Python (`zipfile` + `xml.etree.ElementTree` sobre `word/document.xml`).

---

## 3. Verificación Final tras Usar las Referencias

Antes de dar por finalizada cualquier tarea que dependa de esta documentación, comprobá:
1. Que se hayan respetado todas las **restricciones obligatorias** del resumen consultado (ej. `rel="noopener noreferrer"` en US-14, soluciones ocultas por defecto en US-15, consola sin errores, criterios DoD de los 4 roles).
2. Que no se hayan inventado reglas ni eliminado excepciones contempladas en los documentos originales (ej. excepción del *Sprint Cero*, límite del 10% de capacidad para refinamiento, excepción del rol de Scrum Master en equipos maduros).

