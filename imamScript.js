// Initiële WebSocket-verbinding
let socket = null;

// Controleer of de WebSocket-verbinding al bestaat voordat je deze initialiseert
if (!socket || socket.readyState === WebSocket.CLOSED) {
    socket = new WebSocket(`wss://${window.location.hostname}`);

    // Voeg de event listeners toe aan de WebSocket-verbinding
    socket.addEventListener('open', function() {
        console.log('WebSocket-verbinding geopend');
    });

    // Voeg event listener toe om berichten van de server te ontvangen
    socket.addEventListener('message', function (event) {
        const data = JSON.parse(event.data);
        updateLights(data.status);
    });

    socket.addEventListener('close', function() {
        console.log('WebSocket-verbinding gesloten');
    });
}

function updateLights(status) {
    const greenLight = document.getElementById("greenLight");
    const redLight = document.getElementById("redLight");

    if (status === "OK") {
        greenLight.classList.add("on", "green");
        redLight.classList.remove("on", "red");
    } else if (status === "NOK") {
        redLight.classList.add("on", "red");
        greenLight.classList.remove("on", "green");
    }
}
