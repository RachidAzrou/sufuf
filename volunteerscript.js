document.getElementById("okButton").addEventListener("click", function() {
    document.getElementById("greenStatus").textContent = "Groen licht: Aan";
    document.getElementById("redStatus").textContent = "Rood licht: Uit";
});

document.getElementById("nokButton").addEventListener("click", function() {
    document.getElementById("greenStatus").textContent = "Groen licht: Uit";
    document.getElementById("redStatus").textContent = "Rood licht: Aan";
});
