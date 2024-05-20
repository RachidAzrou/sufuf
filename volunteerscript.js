document.getElementById("okButton").addEventListener("click", function() {
    // Schakel groen licht in
    document.getElementById("greenLight").classList.add("on");
    document.getElementById("redLight").classList.remove("on");
    // Stuur statusupdate naar de Imam
    updateImamStatus("Groen licht: Aan");
});

document.getElementById("nokButton").addEventListener("click", function() {
    // Schakel rood licht in
    document.getElementById("redLight").classList.add("on");
    document.getElementById("greenLight").classList.remove("on");
    // Stuur statusupdate naar de Imam
    updateImamStatus("Rood licht: Aan");
});

// Functie om statusupdate naar de Imam te sturen
function updateImamStatus(status) {
    // Stuur statusupdate naar de Imam
    // Hier kun je logica toevoegen om de status naar de backend te sturen of naar een andere pagina te navigeren
    // Voor nu zullen we de status eenvoudigweg afdrukken in de console
    console.log("Statusupdate naar de Imam:", status);
}
