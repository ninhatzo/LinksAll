//CALENDÁRIO
function mostrarData() {
    const dataAtual = new Date();

    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const diaSemana = diasSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    document.getElementById('data').textContent = dataFormatada;
}

mostrarData();

// RELÓGIO
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let secs = dateToday.getSeconds();
    
    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (secs < 10) secs = '0' + secs;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = secs;
})