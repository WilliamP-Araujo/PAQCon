const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


var dataAlvo = new Date("Apr 3, 2024 15:37:25").getTime();

function formatarTempo(tempo) {

    var dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tempo % (1000 * 60)) / 1000);;

    return {
        dias: (dias < 10 ? "0" : "") + dias,
        horas: (horas < 10 ? "0" : "") + horas,
        minutos: (minutos < 10 ? "0" : "") + minutos,
        segundos: (segundos < 10 ? "0" : "") + segundos,
    }

}

function atualizarContagemRegressiva() {
    var agora = new Date().getTime();
    var tempoRestante = dataAlvo - agora;

    if (tempoRestante > 0) {
        var tempoFormatado = formatarTempo(tempoRestante);

        dias.textContent = tempoFormatado.dias;
        horas.textContent = tempoFormatado.horas;
        minutos.textContent = tempoFormatado.minutos;
        segundos.textContent = tempoFormatado.segundos;
    } else {
        clearInterval(intervalo);
        alert("O evento começou!");
    }
}

var intervalo = setInterval(atualizarContagemRegressiva, 1000); // Atualiza a cada segundo (1000 milissegundos)

