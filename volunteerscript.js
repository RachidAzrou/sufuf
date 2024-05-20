const socket = new WebSocket('ws://localhost:8080');

document.getElementById("okButton").addEventListener("click", function() {
    updateLights("OK");
    socket.send(JSON.stringify({ status: "OK" }));
});

document.getElementById("nokButton").addEventListener("click", function() {
    updateLights("NOK");
    socket.send(JSON.stringify({ status: "NOK" }));
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
