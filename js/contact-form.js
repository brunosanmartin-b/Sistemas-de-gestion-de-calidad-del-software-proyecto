// ============================================
// contact-form.js — US-17
// Validación en tiempo real y feedback del formulario de contacto
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const successBanner = document.getElementById('contactSuccessBanner');
    if (!form) return;

    const nameInput    = document.getElementById('contactName');
    const emailInput   = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const termsCheck   = document.getElementById('contactTerms');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setFieldStatus(input, isValid, errorMsg) {
        const group = input.closest('.form-group');
        if (!group) return;

        const errorEl = group.querySelector('.form-error-msg');
        if (errorEl) {
            // Vincular el mensaje de error al campo para lectores de pantalla
            if (!errorEl.id) errorEl.id = `${input.id}-error`;
            input.setAttribute('aria-describedby', errorEl.id);
        }

        if (isValid) {
            group.classList.remove('has-error');
            input.classList.remove('error');
            input.removeAttribute('aria-invalid');
            if (errorEl) errorEl.textContent = '';
        } else {
            group.classList.add('has-error');
            input.classList.add('error');
            input.setAttribute('aria-invalid', 'true');
            if (errorEl) errorEl.textContent = errorMsg;
        }
    }

    // Validación inline al escribir o desenfocar
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            const valid = nameInput.value.trim().length >= 2;
            setFieldStatus(nameInput, valid, 'Por favor, ingresa tu nombre completo (mínimo 2 caracteres).');
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const valid = validateEmail(emailInput.value.trim());
            setFieldStatus(emailInput, valid, 'Ingresa un correo electrónico con formato válido (ejemplo@dominio.com).');
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            const valid = messageInput.value.trim().length >= 10;
            setFieldStatus(messageInput, valid, 'El mensaje debe contener al menos 10 caracteres explicativos.');
        });
    }

    if (termsCheck) {
        termsCheck.addEventListener('change', () => {
            if (termsCheck.checked) setFieldStatus(termsCheck, true);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isFormValid = true;

        // Validar Nombre
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            setFieldStatus(nameInput, false, 'El nombre es obligatorio.');
            isFormValid = false;
        } else {
            setFieldStatus(nameInput, true);
        }

        // Validar Correo
        if (!validateEmail(emailInput.value.trim())) {
            setFieldStatus(emailInput, false, 'Debes ingresar un correo electrónico válido.');
            isFormValid = false;
        } else {
            setFieldStatus(emailInput, true);
        }

        // Validar Asunto
        if (subjectInput && !subjectInput.value) {
            setFieldStatus(subjectInput, false, 'Selecciona una categoría de consulta.');
            isFormValid = false;
        } else if (subjectInput) {
            setFieldStatus(subjectInput, true);
        }

        // Validar Mensaje
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            setFieldStatus(messageInput, false, 'Por favor escribe un mensaje de al menos 10 caracteres.');
            isFormValid = false;
        } else {
            setFieldStatus(messageInput, true);
        }

        // Validar Aceptación de términos
        if (termsCheck && !termsCheck.checked) {
            setFieldStatus(termsCheck, false, 'Debes aceptar las políticas de privacidad y uso académico.');
            isFormValid = false;
        } else if (termsCheck) {
            setFieldStatus(termsCheck, true);
        }

        if (!isFormValid) {
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
        }

        if (isFormValid) {
            // Simulación de envío exitoso
            form.style.display = 'none';
            if (successBanner) {
                successBanner.classList.add('active');
            }
        }
    });

    // Botón para enviar otro mensaje
    const sendAnotherBtn = document.getElementById('btnSendAnother');
    if (sendAnotherBtn && successBanner) {
        sendAnotherBtn.addEventListener('click', () => {
            form.reset();
            form.style.display = 'block';
            successBanner.classList.remove('active');
            [nameInput, emailInput, subjectInput, messageInput, termsCheck].forEach(field => {
                if (field) setFieldStatus(field, true);
            });
            if (nameInput) nameInput.focus();
        });
    }
}
