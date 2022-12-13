// - Professor, não fiz a valaidação dos dados nesse programa uma vez que não existe entrada de dados por parte do usuário.

function bissexto (ano){
  let bissexto = false;
  if (ano % 400 == 0){
    bissexto = true
  } else if ( ano % 4 == 0 && ano % 100 != 0){
    bissexto = true;
  } else{
    bissexto = false;
  }
  return bissexto
}

//ano aleatório com intervalo entre números
function anoAleatorio (a, b){
  return Math.floor(Math.random() * ( b - a + 1) + a);
}
/*
console.log(anoAleatorio(1900, 2100));
console.log(anoAleatorio(1900, 2100));
console.log(anoAleatorio(1900, 2100));
console.log(anoAleatorio(1900, 2100));
*/

let anoA = anoAleatorio(1900, 2100);
//console.log(anoA);
let anoB = anoAleatorio(1900, 2100);
//console.log(anoB);
let anoC = anoAleatorio(1900, 2100);
//console.log(anoC);
let anoD = anoAleatorio(1900, 2100);
//console.log(anoD);
let anoE = anoAleatorio(1900, 2100);
//console.log(anoE);


let teste1 = bissexto (anoA) ;
teste1 ? console.log(`O Ano ${anoA} é bissexto`) : console.log(`O Ano ${anoA} é não bissexto`);

let teste2 = bissexto (anoB) ;
teste2 ? console.log(`O Ano ${anoB} é bissexto`) : console.log(`O Ano ${anoB} é não bissexto`);

let teste3 = bissexto (anoC) ;
teste3 ? console.log(`O Ano ${anoC} é bissexto`) : console.log(`O Ano ${anoC} é não bissexto`);

let teste4 = bissexto (anoD) ;
teste4 ? console.log(`O Ano ${anoD} é bissexto`) : console.log(`O Ano ${anoD} é não bissexto`);

let teste5 = bissexto (anoE) ;
teste5 ? console.log(`O Ano ${anoE} é bissexto`) : console.log(`O Ano ${anoE} é não bissexto`);

