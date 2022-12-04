//Digite um ano para saber se ele é bissexto:
let year = Number(prompt("Digite um ano com 4 dígitos"));
if (year < 1000 || year > 9999) {
  console.log('O ano deve ter 4 dígitos. Por favor, tente novamente')
} else {
  if(year % 400 == 0){
    console.log(`${year} é bissexto`);
  } else if (year % 4 == 0 && year % 100 != 0){
      console.log(`${year} é bissexto`);
  }else {
      console.log(`${year} não é bissexto`);
  }
}

// Alterei somente para verificar se o usuário inseriu um ano comm 4 dígitos. Erro se o input for menor que 1000 ou maior que 9999