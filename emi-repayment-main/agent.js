document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a random marker to simulate data
    const marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
});