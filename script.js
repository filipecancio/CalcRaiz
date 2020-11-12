function raiz(valor){
    var impar = 1;
    var raiz = 1;
    var temp = Math.sqrt(valor);
    while(valor - impar > 0){
        valor = valor - impar;
        impar =impar+2;
        raiz =raiz+1;
    }
    valor = (raiz == temp)?'exato':'aproximado';
    return [valor,raiz];
}
function getValues(){
    var valor = document.getElementById("valor").value;
    if(!valor){
        document.getElementById("calc-response").innerHTML = "O número não foi informado";
    }else{
        valor = raiz(valor);
        document.getElementById("calc-response").innerHTML = "O resultado ("+valor[0]+") é "+valor[1];
    }
}