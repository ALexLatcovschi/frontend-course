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
    await loadComponent('top-screen', '/components/top-screen.html');
    await loadComponent('footer', '/components/footer.html');
    await loadComponent('characteristics', '/components/characteristics.html');
    await loadComponent('expertise', '/components/expertise.html');
    await loadComponent('reviews', '/components/reviews.html');
    loadReviews();
    await loadComponent('contacts', '/components/contacts.html');
    await loadComponent('map', '/components/map.html');

    document.getElementById('year').textContent = new Date().getFullYear();

    await initTranslation();

    loadMap()
});
