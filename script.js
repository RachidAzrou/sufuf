const socket = new WebSocket(window.location.origin.replace(/^http/, 'ws') + '/api');

socket.addEventListener('message', function (event) {
    const status = event.data;
    updateLights(status);
});

function updateStatus(status) {
    socket.send(status);
}

function updateLights(status) {
    const redLight = document.getElementById('light-red');
    const greenLight = document.getElementById('light-green');

    if (status === 'OK') {
        redLight.classList.remove('on');
        greenLight.classList.add('on');
    } else if (status === 'NOK') {
        greenLight.classList.remove('on');
        redLight.classList.add('on');
    }
}
