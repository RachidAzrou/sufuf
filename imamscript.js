// Functie om statusupdate van Vrijwilliger te ontvangen en de lichten bij te werken
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

// Simuleer een update vanuit de vrijwilliger
// Dit zou normaal gesproken via een server-update gaan
setInterval(() => {
    // Voor demonstratie, wissel de status elke 5 seconden
    const status = Math.random() > 0.5 ? "OK" : "NOK";
    updateLights(status);
}, 5000);
