var languages = ['ro', 'ru'];

async function loadTranslations(language) {
    try {
        const response = await fetch(`/translations/${language}.json`);
        if (!response.ok) throw new Error(`Error loading ${language}.json`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

function getNestedValue(obj, key) {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-key]').forEach((element) => {
        const key = element.getAttribute('data-key');
        const value = getNestedValue(translations, key);
        if (value) {
            element.textContent = value;
        }
    });
}

async function setLanguage(language) {
    const pathLanguage = getLanguageFromPath();

    const languageElements = document.querySelectorAll('.language');

    languageElements?.forEach((el) => {
        el.classList.remove('active');
    });

    if (languages.includes(language) && language === pathLanguage) {
        const activeLanguage = document.getElementById(`language-${language}`);
        activeLanguage?.classList.add('active');
    } else {
        history.pushState(null, '', window.location.pathname.replace(`/${pathLanguage}`, `/${language}`));
        await initTranslation();
        return;
    }

    localStorage.setItem('language', language);
    const translations = await loadTranslations(language);
    if (translations) {
        applyTranslations(translations);
    }
}

function getLanguagePath() {
    const pathSegments = window.location.pathname.split('/').filter(el => el);
    return pathSegments[pathSegments.length - 1];
}

function getLanguageFromPath() {
    const pathLanguage = getLanguagePath();

    if (languages.includes(pathLanguage)) {
        return pathLanguage;
    }

    return languages[0];
}

async function initTranslation() {
    let language = getLanguageFromPath();

    if (!language) {
        language = localStorage.getItem('language') || languages[0];
    }

    await setLanguage(language);
}