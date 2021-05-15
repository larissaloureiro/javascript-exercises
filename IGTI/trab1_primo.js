/*Bootcamp IGTI: Programador de Software Iniciante¶
Trabalho do Módulo 4 - Parte 1
------------------------------------------------------------------------------------
Atividade:
Criar um programa para informar se determinado número é primo ou não.
*/

var num = parseInt(process.argv[2]);

var metadeNum = num / 2;
var primo = true;

if ((num === 0) || (num === 1)) {
    console.log('O número', num, 'não é primo.');
} else {
    for (var i = 2; i <= metadeNum && primo; i++) {
        primo = (num % i) !== 0;
    }

    if (primo) {
        console.log('O número', num, 'é primo.');
    } else {
        console.log('O número', num, 'não é primo.');
    }
}
