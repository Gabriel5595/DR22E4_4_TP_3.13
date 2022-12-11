const saida = document.querySelector("#pOut");
const num1 = prompt("Informe um numero");


var fatorial = num1;
var resultado = 1;
for (var i = fatorial; i > 1; i--) {
    resultado *= i;
}


console.log(resultado);

saida.innerHTML += `${resultado}`