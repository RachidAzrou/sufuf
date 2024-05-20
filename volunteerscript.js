document.getElementById("okButton").addEventListener("click", function() {
    document.getElementById("greenLight").classList.add("on");
    document.getElementById("redLight").classList.remove("on");
    receiveVolunteerStatus("Groen licht: Aan");
});

document.getElementById("nokButton").addEventListener("click", function() {
    document.getElementById("redLight").classList.add("on");
    document.getElementById("greenLight").classList.remove("on");
    receiveVolunteerStatus("Rood licht: Aan");
});

function receiveVolunteerStatus(status) {
    console.log("Statusupdate naar de Imam:", status);
}
