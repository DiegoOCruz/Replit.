// Agilidade dos pilotos (%)
const slider = 75;
const jester = 89;
const stinger = 76;
const goose = 75;
const iceman = 98;
const maverick = 90;

let input = prompt('Escolha um nome de um piloto, dentre as opções: slider, jester, stinger, goose, iceman, maverick');

const opcoes = ['slider', 'jester', 'stinger', 'goose', 'iceman', 'maverick'];

if(input !== 'slider' && input !=='jester' && input !== 'stinger' && input !== 'goose' && input !== 'iceman' && input !== 'maverick') {
  console.log('Erro. Por favor, escolha um dos seguintes nomes: slider, jester, stinger, goose, iceman, maverick')
} else {
  const numeroAleatorio = Math.floor(Math.random () * opcoes.length)
  let escolhaComputador = opcoes[numeroAleatorio];
  let agilidadeUsuario = 0
  let agilidadePiloto = 0

  if (input == 'slider' || input == 'goose') {
    agilidadeUsuario = 75
  } else if (input == 'jester') {
    agilidadeUsuario = 89
  } else if (input == 'stinger') {
    input = 76
  } else if (input == 'iceman') {
    agilidadeUsuario = 98
  } else {
    agilidadeUsuario = 90
  }

    if (escolhaComputador == 'slider' || escolhaComputador == 'goose') {
    agilidadePiloto = 75
  } else if (escolhaComputador == 'jester') {
    agilidadePiloto = 89
  } else if (escolhaComputador == 'stinger') {
    agilidadePiloto = 76
  } else if (escolhaComputador == 'iceman') {
    agilidadePiloto = 98
  } else {
    agilidadePiloto = 90
  }

  console.log(`Você escolheu ${input} com agilidade ${agilidadeUsuario}. O computador escolheu ${escolhaComputador} com agilidade ${agilidadePiloto}.`)

  if(agilidadeUsuario == agilidadePiloto || agilidadeUsuario == 'slider' && agilidadePiloto == 'goose' || agilidadeUsuario == 'goose' && agilidadePiloto == 'slider') {
    
    console.log('Deu empate!')
  } else if (agilidadeUsuario > agilidadePiloto) {
    console.log('Você venceu!')
  } else if (agilidadeUsuario < agilidadePiloto) {
    console.log('Você perdeu!')
  }


