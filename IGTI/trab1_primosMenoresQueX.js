/*Bootcamp IGTI: Programador de Software Iniciante¶
Trabalho do Módulo 4 - Parte 2
------------------------------------------------------------------------------------
Atividade:
Criar um programa para informar os números primos menores que um determinado número informado pelo usuário, 
e a soma destes números primos.
*/

var maiorNum = parseInt(process.argv[2]);
var numPrimos = [];

for (var num = 2; num < maiorNum; num++) {
    var metadeNum = num / 2;
    var primo = true;
    for (var i = 2; i <= metadeNum && primo; i++) {
        primo = (num % i) !== 0;
    }

    if (primo) {
        numPrimos.push(num);
    }
}
console.log('Números primos menores que ' + maiorNum + ': ' + numPrimos);

var somaPrimos = 0;
for (var i = 0; i < numPrimos.length; i++) {
    somaPrimos += numPrimos[i];
}

console.log('Soma: ' + somaPrimos);
