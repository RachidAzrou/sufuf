const socket = new WebSocket(`wss://${window.location.hostname}`);

socket.addEventListener('open', function() {
    console.log('WebSocket-verbinding geopend');
});

document.getElementById("okButton").addEventListener("click", function() {
    console.log("OK button clicked");
    updateLights("OK");
    socket.send(JSON.stringify({ role: "volunteer", status: "OK" }));
});

document.getElementById("nokButton").addEventListener("click", function() {
    console.log("NOK button clicked");
    updateLights("NOK");
    socket.send(JSON.stringify({ role: "volunteer", status: "NOK" }));
});

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
