function decodificar(){

    var textoEntrada = document.getElementById("texto-entrada").value;
       
    var textoSaida = textoEntrada.replace(/ai/ig,"a");
    var textoSaida2 = textoSaida.replace(/enter/ig,"e");
    var textoSaida3 = textoSaida2.replace(/imes/ig,"i");
    var textoSaida4 = textoSaida3.replace(/ober/ig,"o");
    var textoSaida5 = textoSaida4.replace(/ufat/ig,"u");
    
    document.querySelector("#texto-saida-resultado").innerHTML = textoSaida5;
    
    console.log(textoEntrada);
    console.log(textoSaida5);
}


function copiarTexto(){
    var textoCopiado = document.getElementById("texto-saida-resultado").textContent;
    console.log(textoCopiado);
    navigator.clipboard.writeText(textoCopiado);
}