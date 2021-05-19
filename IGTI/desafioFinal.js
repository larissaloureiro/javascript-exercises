/*Bootcamp IGTI: Programador de Software Iniciante¶
Desafio Final
Atividades
O aluno deverá desenvolver um sistema para controle de folha de pagamento de funcionários de uma empresa. O programa deverá 
fornecer um menu de interação pelo terminal ao usuário, com as seguintes opções:
1- Cadastrar funcionário.
2- Imprimir contracheque.

Na opção 1, o programa deverá pedir ao usuário que digite o nome e o salário bruto do funcionário. Esse funcionário deve ser 
armazenado em uma lista. O local de armazenamento fica a critério do aluno, podendo ser em memória ou em arquivo por exemplo.

Na opção 2 o programa deverá perguntar ao usuário qual o índice do funcionário que ele deseja imprimir o contracheque. 
Lembrando que nas listas o primeiro registro corresponde ao índice 0.

Após o usuário digitar o índice, o programa deverá realizar os cálculos abaixo para informar ao funcionário os descontos que 
ele terá no seu salário. Para simplificar, o programa deverá calcular somente o desconto do INSS e do IRRF, sem considerar 
variáveis adicionais, como por exemplo número de dependentes. Primeiro é feito o cálculo do desconto INSS. Ele é feito de 
forma progressiva de acordo a faixa salarial, considerando a tabela abaixo.
--------------------------------------------
    Salário de Contribuição    |  Alíquota  |
-------------------------------|------------|
Saláio mínimo: R$ 1.045,00     |    7,5%    |
De R$ 1.045,01 a R$ 2.089,60   |     9%     |
De R$ 2.089,61 a R$ 3.134,40   |    12%     |
De R$ 3.134,41 a R$ 6.101,06   |    14%     |
--------------------------------------------
Fonte: https://www.todacarreira.com/calculo-salario-liquido/

Para salários acima de R$6.101,06, o desconto é fixado em R$713,10.

O cálculo do desconto do IRRF segue a tabela da imagem abaixo. O valor utilizado para cálculo deve ser o valor do salário 
bruto menos o valor do desconto de INSS. Para o IRRF, o cálculo é mais simples que no INSS, pois ele não é feito de forma 
progressiva. Basta verificar em qual faixa o valor se encaixa, descontar a percentual alíquota e depois a parcela dedutível.
-----------------------------------------------------------------------
     Base de Cálculo (R$)      | Alíquota (%) | Parcela Dedutível (R$) |
-------------------------------|--------------|------------------------|
Até R$ 1.903,98                |      0%      |          0,00          |   
De R$ 1.903,99 até R$ 2.826,65 |     7,5%     |         142,80         |
De R$ 2.826,66 até R$ 3.751,05 |     15%      |         354,80         |
De R$ 3.751,06 até R$ 4.664,68 |    22,5%     |         636,13         |
Acima de R$ 4.664,69           |    27,5%     |         869,36         |
-----------------------------------------------------------------------
Fonte: https://www.todacarreira.com/calculo-salario-liquido/
*/


// Programa Principal
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var listaFuncionarios = [];

mostraMenu();

// Funções Auxiliares
function mostraMenu() {
    console.log('=========== Menu Principal ==========');
    console.log('1- Cadastrar funcionário');
    console.log('2- Imprimir contracheque');
    console.log('3- Sair');
    console.log('=====================================');
    rl.question('Digite a opção desejada: ', function (opcao) {
        switch (opcao) {
            case '1':
                cadastraFuncionario();
                break;
            case '2':
                imprimeContracheque();
                break;
            case '3':
                console.log('======== Programa encerrado. ========')
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                mostraMenu();
        }
    })
}

function cadastraFuncionario() {
    rl.question('Digite o nome do funcionario: ', function (informacao) {
        var nome = informacao;
        rl.question('Digite o salário bruto do funcionario: ', function (informacao) {
            var salario = parseFloat(informacao);
            listaFuncionarios.push({ nome: nome, salarioBruto: salario });
            mostraMenu();
        })
    })
}

function imprimeContracheque() {
    console.log('==== Lista de Funcionários ====');
    for (var i = 0; i < listaFuncionarios.length; i++) {
        console.log(i + "- " + listaFuncionarios[i].nome);
    }
    console.log('===============================');
    rl.question('Digite o índice do funcionario: ', function (informacao) {
        var indiceFuncionario = parseInt(informacao);
        var funcionario = listaFuncionarios[indiceFuncionario]
        var inss = calculaInss(funcionario.salarioBruto);
        var irrf = calculaIrrf(funcionario.salarioBruto - inss);
        var salarioLiquido = funcionario.salarioBruto - inss - irrf;
        console.log('===============================');
        console.log('======== CONTRA CHEQUE ========');
        console.log('===============================');
        console.log('-Funcionário: ' + funcionario.nome);
        console.log('-Salário Bruto: ' + funcionario.salarioBruto.toFixed(2));
        console.log('-Desconto INSS: ' + inss.toFixed(2));
        console.log('-Desconto IRRF: ' + irrf.toFixed(2));
        console.log('-Salário Líquido: ' + salarioLiquido.toFixed(2));
        mostraMenu();
    })
}

function calculaInss(salario) {
    var inss = 0;
    if (salario > 6101.06) {
        return 713.10;
    }
    if (salario > 3134.40) {
        inss += (salario - 3134.40) * 0.14;
        salario = 3134.40;
    }
    if (salario > 2089.60) {
        inss += (salario - 2089.60) * 0.12;
        salario = 2089.60;
    }
    if (salario > 1045.00) {
        inss += (salario - 1045.00) * 0.09;
        salario = 1045.00;
    }
    inss += salario * 0.075;
    return inss;
}

function calculaIrrf(salarioComDesconto) {
    if (salarioComDesconto < 1903.99) {
        return 0;
    }
    if (salarioComDesconto < 2826.66) {
        return (salarioComDesconto * 0.075) - 142.80;
    }
    if (salarioComDesconto < 3751.06) {
        return (salarioComDesconto * 0.15) - 354.80;
    }
    if (salarioComDesconto < 4664.69) {
        return (salarioComDesconto * 0.225) - 636.13;
    }
    return (salarioComDesconto * 0.275) - 869.36;
}





