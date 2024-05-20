document.getElementById("okButton").addEventListener("click", function() {
    updateLights("OK");
});

document.getElementById("nokButton").addEventListener("click", function() {
    updateLights("NOK");
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

    // Stuur statusupdate naar de Imam
    // Hier zou je normaal gesproken een server-aanroep doen
    console.log("Statusupdate naar de Imam:", status);
}
