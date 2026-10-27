# Resumen 05: Historias de Usuario (Guía Práctica e INVEST)

- **Documento Original:** [`../../../archives zebolla/Historias de Usuario.pdf`](../../../archives%20zebolla/Historias%20de%20Usuario.pdf)
- **Autor / Fuente:** Alexander Gaytan (Consultor Ágil) — Presentación de 8 páginas.
- **Tipo de Documento:** Guía metodológica para redactar, acotar y validar Historias de Usuario (HU) y Criterios de Aceptación.

---

## 1. Propósito de las Historias de Usuario *(Págs. 1–2 y Pág. 8)*
- Las Historias de Usuario bien definidas, con criterios de aceptación alcanzables y claros, permiten al equipo cumplir con la entrega de valor durante el Sprint *(pág. 2)*.
- **Principio rector:** *"Una buena historia de usuario no es solo una tarea... es una promesa de valor para tu usuario"* *(pág. 8)*.

---

## 2. Estructura Obligatoria de Redacción *(Pág. 3: "Usa la estructura correcta")*
Toda Historia de Usuario debe redactarse utilizando la plantilla de tres cláusulas para dejar claro el objetivo y el valor del trabajo a realizar:
- **Como** `[Rol que está solicitando]`
- **Quiero** `[Acción que se espera realizar]`
- **Para** `[Beneficio que se espera]`

### Ejemplo Original *(Pág. 3)*
> **Como** gerente de ventas, **Quiero** que se genere un reporte por llamada **Para** tener un mejor control de calidad del servicio al cliente.

---

## 3. Reglas sobre Criterios de Aceptación *(Pág. 4: "Criterios de Aceptación")*
- **Regla obligatoria:** Definir criterios de aceptación claros es fundamental para que el equipo comprenda el verdadero objetivo de la historia de usuario y el alcance exacto del trabajo a entregar.

### Ejemplo Original de Criterios de Aceptación *(Pág. 4 — Caso Recuperación de Contraseña)*
1. 1️⃣ El usuario debe ver un enlace *"¿Olvidaste tu contraseña?"* en la pantalla de inicio de sesión.
2. 2️⃣ Al hacer clic en el enlace, debe ser dirigido a una página para ingresar su correo electrónico.
3. 3️⃣ Si el correo ingresado está registrado, el sistema debe enviar un email con un enlace para restablecer la contraseña.

---

## 4. Restricción de Tamaño y Alcance *(Pág. 5: "Hazlas cortas")*
- **Regla de acotación al Sprint:** Las historias de usuario deben ser **cortas**, de modo que puedan **cumplirse íntegramente dentro de un único Sprint**.
- **Advertencia crítica:** Prestar especial atención a **no estar trabajando épicas disfrazadas de historias**.

---

## 5. Señales de Alerta — Red Flags de HU *(Pág. 6: "Red Flags de HU")*
Se consideran errores o antipatrones en la definición de Historias de Usuario las siguientes 4 señales de alerta:
1. 🚩 **Historias sin valor para el usuario.**
2. 🚩 **Historias muy técnicas** (centradas solo en implementación interna sin expresar beneficio para un rol de usuario).
3. 🚩 **Historias sin criterios de aceptación.**
4. 🚩 **Historias que en realidad son épicas** (demasiado grandes para completarse en un Sprint).

---

## 6. Regla de Oro de Validación: Técnica INVEST *(Pág. 7: "INVEST")*
Antes de que una Historia de Usuario sea trabajada por el equipo (criterio de preparación / *Ready*), debe validarse con el acrónimo **INVEST**:
- **I — Independiente (*Independent*):** Que pueda desarrollarse sin depender rígidamente de otras historias.
- **N — Negociable (*Negotiable*):** Abierta al diálogo y refinamiento entre el Product Owner y el equipo.
- **V — Valiosa (*Valuable*):** Que aporte valor real y perceptible al usuario o cliente.
- **E — Estimable (*Estimable*):** Con suficiente claridad para que el equipo pueda estimar su esfuerzo.
- **S — Small (*Pequeña*):** Dimensionada para completarse dentro de un Sprint.
- **T — Testable (*Comprobable*):** Con criterios de aceptación verificables mediante pruebas de QA.

