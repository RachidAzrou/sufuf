const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    updateLights(data.status);
});

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
