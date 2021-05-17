/*Bootcamp IGTI: Programador de Software Iniciante¶
Trabalho do Módulo 4 - Parte 3
------------------------------------------------------------------------------------
Atividade:
Criar um programa para informar os números primos em um determinado intervalo informado pelo usuário, 
e a soma destes números primos.
*/

var menorNum = parseInt(process.argv[2]);
var maiorNum = parseInt(process.argv[3]);
var numPrimos = [];

for (var num = menorNum; num <= maiorNum; num++) {
    var metadeNum = num / 2;
    var primo = true;
    if ((num !== 0) && (num !== 1)) {
        for (var i = 2; i <= metadeNum && primo; i++) {
            primo = (num % i) !== 0;
        }

        if (primo) {
            numPrimos.push(num);
        }
    }
}
console.log('Números primos entre ' + menorNum + ' e ' + maiorNum + ': ' + numPrimos);

var somaPrimos = 0;
for (var i = 0; i < numPrimos.length; i++) {
    somaPrimos += numPrimos[i];
}

console.log('Soma: ' + somaPrimos);