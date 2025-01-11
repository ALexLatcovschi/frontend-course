async function loadComponent(targetId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(targetId).innerHTML = content;
        } else {
            console.error(`Failed to load ${filePath}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error loading component: ${error.message}`);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('main', '/components/main.html');
    /////////////////////////////////////////////////////////

    await loadComponent('header', '/components/header.html');
    await loadComponent('footer', '/components/footer.html');

    document.getElementById('year').textContent = new Date().getFullYear();

    await initTranslation();
});
