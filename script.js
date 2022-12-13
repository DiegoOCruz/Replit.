const hoje = new Date();
const diaAtual = hoje.getUTCDate();
const mesAtual = hoje.getMonth(); 

// Continue daqui

//entrada de dados
let diaAniversario = Number(prompt('Digite o numero correspondente ao dia do seu aniversário'));
let mesAniversario = Number(prompt('Digite o numero correspondente ao mês do seu aniversário'));
let anoAniversario = Number(prompt('Digite o numero correspondente ao ano do seu próximo aniversário'));
//validação
if( diaAniversario > 31 && diaAniversario < 1 && mesAniversario > 12 && mesAniversario < 1 && anoAniversario < 1900 && anoAniversario > 2100){

    console.log("ERRO...DIGITE VALORES VÁLIDOS");

} else{

    let dataProximoAniversario = new Date (anoAniversario, (mesAniversario - 1), diaAniversario);
    //console.log(dataProximoAniversario);
    
    let dataEmMilissegundos = Math.floor(dataProximoAniversario.getTime()) - Math.floor(hoje.getTime());
    //console.log(dataEmMilissegundos);
    let diasDeDiferenca = Math.floor(dataEmMilissegundos / (1000 * 60 * 60 * 24)) //1000 milisegundos / 60 segundos / 60 minutos / 24 horas
    //console.log(diasDeDiferenca + 1);
    diasDeDiferenca++;
    
    if(diasDeDiferenca > 0){
        console.log(`Faltam ${diasDeDiferenca} dias para o seu aniversário`);
    } else{
        console.log(`Já se passaram ${-(diasDeDiferenca)} dias desde o seu ultimo aniversário`);
    }
}