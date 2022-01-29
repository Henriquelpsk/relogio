function mostraHora () {
let relogio = new Date;

let hora = relogio.getHours();
let minuto = relogio.getMinutes();
let segundo = relogio.getSeconds();
let texto = 'AM'

if (hora === 0) {
	hora = 12;
}

if (hora > 12) {
	texto = 'PM'
	hora = hora
}

if (hora < 10) {
	hora = `0${hora}`;
}

if (minuto < 10) {
	minuto = `0${minuto}`;
}
if (segundo < 10) {
	segundo = `0${segundo}`;
}

const horario = `${hora}:${minuto}:${segundo} ${texto}`
const titulo = document.querySelector('.hora')
titulo.innerHTML = horario;
let timer = setInterval( function () { 
	mostraHora() }, 1000);
}

mostraHora();