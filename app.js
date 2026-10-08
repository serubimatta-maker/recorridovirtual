let minutos = 1;
let segundos = 0;

const elementoMinutos = document.getElementById("minutos");
const elementoSegundos = document.getElementById("segundos");

function actualizarTemporizador() {
    elementoMinutos.textContent = String(minutos).padStart(2, "0");
    elementoSegundos.textContent = String(segundos).padStart(2, "0");
}

actualizarTemporizador();

const temporizador = setInterval(() => {
    if (segundos === 0) {
        minutos--;
        segundos = 59;
    } else {
        segundos--;
    }

    actualizarTemporizador();

    if (minutos === 0 && segundos === 0) {
        clearInterval(temporizador);
    }

    if (tiempoRestante <= 0) {
        clearInterval(intervalo); 
        window.location.href = 'index.html'; 
    }

}, 1000);


