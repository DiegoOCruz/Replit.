function saque (){
 
    let valorSaque = Number(document.getElementById("valorSaque").value);

        if ( valorSaque % 10 != 0 || valorSaque > 1000){
            document.getElementById("mensagem").innerHTML = "<b>ERRO... DIGITE VALORES VÁLIDOS PARA SAQUE</b>";
        } else{
            while (valorSaque >= 100){
                document.getElementById("mensagem").innerHTML += '<img src="./img/100.png"><br>';
                valorSaque = valorSaque - 100; 
                }
        
                while (valorSaque >= 50){
                    document.getElementById("mensagem").innerHTML += '<img src="./img/50.png"><br>';
                valorSaque = valorSaque - 50; 
                }
        
                while (valorSaque >= 20){
                    document.getElementById("mensagem").innerHTML += '<img src="./img/20.png"><br>';
                valorSaque = valorSaque - 20; 
                }
        
                while (valorSaque >= 10){
                    document.getElementById("mensagem").innerHTML += '<img src="./img/10.png"><br>';
                valorSaque = valorSaque - 10; 
                }
        }

       
}

function reload(){
    location.reload();
}