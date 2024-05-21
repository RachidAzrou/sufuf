const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function() {
    console.log('WebSocket-verbinding geopend');
});

document.getElementById("okButton").addEventListener("click", function() {
    console.log("OK button clicked"); // Log statement
    updateLights("OK");
    socket.send(JSON.stringify({ status: "OK" }));
});

document.getElementById("nokButton").addEventListener("click", function() {
    console.log("NOK button clicked"); // Log statement
    updateLights("NOK");
    socket.send(JSON.stringify({ status: "NOK" }));
});

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    updateLights(data.status);
});

socket.addEventListener('close', function() {
    console.log('WebSocket-verbinding gesloten');
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
