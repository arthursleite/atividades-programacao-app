function calcularIMC() {
      
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);


    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    
    var imc = peso / (altura * altura);


    alert("Seu IMC é de " + imc.toFixed(2));
}

window.onload = function() {
    var botaoCalcular = document.getElementById("calcular");

    botaoCalcular.onclick = function() {
        calcularIMC();
    };
};