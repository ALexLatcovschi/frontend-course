function loadMap() {
    const map = L.map('map-container').setView([47.0105, 28.8638], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.icon({
        iconUrl: '/assets/images/marker.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    const marker = L.marker([47.0105, 28.8638], {icon: customIcon}).addTo(map);
    // const marker2 = L.marker([47.0105, 29.8638], {icon: customIcon}).addTo(map);

    marker.bindPopup('<b>Chișinău</b>').openPopup();
    // marker2.bindPopup('<b>Nu Chișinău</b>').openPopup();
}