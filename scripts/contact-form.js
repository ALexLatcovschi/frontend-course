function initForm() {
    const fields = {
        name: {
            element: document.getElementById('name'),
            error: document.getElementById('nameError'),
            validate: (value) => value.trim().length >= 3,
        },
        email: {
            element: document.getElementById('email'),
            error: document.getElementById('emailError'),
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        },
        message: {
            element: document.getElementById('message')
        },
    };

    validateChangeOrBlur(fields);


    setSubmitAction(fields);
}

function validateChangeOrBlur(fields) {
    Object.values(fields).forEach((field) => {
        const {element} = field;

        element.addEventListener('input', () => validateField(field));
        element.addEventListener('blur', () => validateField(field));
    });
}

function setSubmitAction(fields) {
    const form = document.getElementById('contacts-data-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isFormValid = true;

        Object.values(fields).forEach((field) => {
            const isValid = validateField(field);
            if (!isValid) isFormValid = false;
        });

        if (isFormValid) {
            const payload = {
                name: form.elements['name'].value,
                email: form.elements['email'].value,
                message: form.elements['message'].value
            }

            // save data in firebase
            console.log('form value', payload)
            form.reset();
        }
    });
}

function validateField(field) {
    const {element, error, validate} = field;
    let isValid = true;

    if (validate) {
        isValid = validate(element.value)
    }

    if (isValid) {
        element.classList.remove('error');

        if (error) {
            error.style.display = 'none';
        }
    } else {
        element.classList.add('error');

        if (error) {
            error.style.display = 'block';
        }
    }

    return isValid;
}