let minutos = 7;
let segundos = 0;
cargarsegundos();

function cargarsegundos() {
    let txtsegundos;

    if (segundos < 0) {
        segundos = 59;
    }

    if (segundos < 10) {
        txtsegundos = `0${segundos}`;
    } else {
        txtsegundos = segundos;
    }

    document.getElementById("segundos").innerHTML = txtsegundos;
    segundos --;
}


function cargarminutos(Segundos) {
    let txtminutos;
   
    if (segundos == -1 && minutos !== 0) { 
        setTimeout(() => {
            minutos--;
        }, 500);
    }else if (segundos == -1 && minutos == 0) {
         setTimeout(() => {
            minutos = 1;
        }, 500);
    }

    if (minutos < 10) {
        txtminutos = `1${minutos}`;
    }else {
        txtminutos = minutos;
    }
   
}


 setinterval(cargarSegundo, 1000);