function codificar(){

    var textoEntrada = document.getElementById("texto-entrada").value;
    var tamanho = textoEntrada.length;
    
    if(tamanho > 0){
        
        var saidaTexto = [];
        
        //codificação
        var i = 0;
        while(i<tamanho){

            if(textoEntrada[i] == "a" || textoEntrada[i] == "A"){
                saidaTexto.push("ai");
            }else if(textoEntrada[i] == "e" || textoEntrada[i] == "E"){
                saidaTexto.push("enter");
            }else if(textoEntrada[i] == "i" || textoEntrada[i] == "I"){
                saidaTexto.push("imes");
            }else if(textoEntrada[i] == "o" || textoEntrada[i] == "O"){
                saidaTexto.push("ober");
            }else if(textoEntrada[i] == "u" || textoEntrada[i] == "U"){
                saidaTexto.push("ufat");
            }else{
                saidaTexto.push(textoEntrada[i]);
            }
            i++;
        }

        //enviar texto codificado para o html
        var textoSaida = saidaTexto.toString();
        document.querySelector("#texto-saida-resultado").innerHTML = textoSaida.replace(/[,]/g,"");


        //ocutar elementos da tela
        var mensagem = document.querySelector("#mensagem-alerta-div")
        mensagem.classList.add("invisivel");

        //adicionar elementos a tela
        var saida_texto = document.querySelector("#texto-saida-div");
        saida_texto.classList.remove("invisivel");
        saida_texto.classList.add('secao-saida-texto');
        
        console.log(textoSaida);
    }else{
        
        //mostrar elementos inicias
        /*var imagem = document.querySelector(".img-principal");
        imagem.classList.remove("invisivel");

        var mensagem = document.getElementById("#texto-saida-div");
        mensagem.classList.remove("secao-saida-texto")
        mensagem.classList.add("invisivel");

        var saida_texto = document.querySelector("#texto-saida-resultado");
        saida_texto.classList.remove('texto-saida');
        saida_texto.classList.add("texto-invisivel");*/
                
        document.getElementById("texto-saida-resultado").textContent = "";
    }
}