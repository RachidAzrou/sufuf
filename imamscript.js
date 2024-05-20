const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    updateLights(data.status);
});

function updateLights(status) {
    const greenLight = document.getElementById("greenLight");
    const redLight = document.getElementById("redLight");

    if (status === "OK") {
        greenLight.classList.add("on");
        greenLight.classList.remove("off");
        redLight.classList.remove("on");
        redLight.classList.add("off");
    } else if (status === "NOK") {
        redLight.classList.add("on");
        redLight.classList.remove("off");
        greenLight.classList.remove("on");
        greenLight.classList.add("off");
    }
}
