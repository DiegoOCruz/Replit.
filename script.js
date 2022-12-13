function calcular() {

  let altura = Number(document.getElementById("altura").value);
  let peso = Number(document.getElementById("peso").value);
  //console.log(altura, Peso);
  let imc = peso / (Math.pow(altura, 2)).toFixed(1);
  //console.log(imc);

  if (altura != null && altura != undefined || peso != null && peso != undefined) {

    if (imc <= 18.5) {
      document.getElementById("tabelaImc").src = "./img/tab_imc_1.png";
    } else if (imc > 18.5 && imc <= 24.9) {
      document.getElementById("tabelaImc").src = "./img/tab_imc_2.png";
    } else if (imc >= 25 && imc <= 29.9) {
      document.getElementById("tabelaImc").src = "./img/tab_imc_3.png";
    } else if (imc >= 30 && imc <= 39.9) {
      document.getElementById("tabelaImc").src = "./img/tab_imc_4.png";
    } else {
      document.getElementById("tabelaImc").src = "./img/tab_imc_5.png";
    }

    document.getElementById("resultado").innerHTML = imc.toFixed(1);
  } else {
    alert("ERRO... Digite valores validos.")
  }



}