const socket = new WebSocket('ws://localhost:3000');

document.getElementById("okButton").addEventListener("click", function() {
    console.log("OK button clicked"); // Voeg dit console.log-statement toe
    updateLights("OK");
    socket.send(JSON.stringify({ status: "OK" }));
});

document.getElementById("nokButton").addEventListener("click", function() {
    console.log("NOK button clicked"); // Voeg dit console.log-statement toe
    updateLights("NOK");
    socket.send(JSON.stringify({ status: "NOK" }));
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
