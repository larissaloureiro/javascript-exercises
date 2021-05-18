/*Bootcamp IGTI: Programador de Software Iniciante¶
Trabalho do Módulo 1
------------------------------------------------------------------------------------
Atividades:
O desafio consiste em desenvolver funções em JavaScript para realizar alguns processamentos em cima de uma lista de funcionários de uma empresa.
Cada funcionário é representado pelas seguintes informações:
* Nome: nome do funcionário.
* Salário: salário do funcionário.
* Setor: setor da empresa em que o funcionário trabalha.

A lista de funcionários será fornecida em um arquivo chamado funcionarios.json.

O aluno poderá ler o arquivo pelo programa a ser desenvolvido ou criar uma variável dentro do programa já com os dados fornecidos, não sendo obrigatório, então, o processo de leitura do arquivo.
Segue abaixo a descrição das funções a serem desenvolvidas:
1. Função que retorna o nome do funcionário que tem o maior salário da empresa.
2. Função que retorna o nome do funcionário que tem o menor salário da empresa.
3. Função que retorna a média salarial da empresa.
4. Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do setor informado.
5. Função que recebe um setor como parâmetro e retorna o funcionário de menor salário do setor informado.
6. Função que recebe um setor como parâmetro e retorna a média salarial do setor informado.
*/

var fs = require('fs');

fs.readFile("funcionarios.json", "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var arquivoFuncionarios = JSON.parse(data);
        console.log(arquivoFuncionarios.funcionarios);
        console.log('================================ EMPRESA ================================');
        console.log('Funcionário com Maior Salário da Empresa:', funcionarioMaiorSalario(arquivoFuncionarios.funcionarios));
        console.log('Funcionário com Menor Salário da Empresa:', funcionarioMenorSalario(arquivoFuncionarios.funcionarios));
        console.log('Média Salarial da Empresa:', mediaSalarial(arquivoFuncionarios.funcionarios));
        console.log('============================ ADMINISTRATIVO ============================');
        console.log('Funcionário com Maior Salário do Administrativo:', funcionarioMaiorSalarioSetor(arquivoFuncionarios.funcionarios, 'Administrativo'));
        console.log('Funcionário com Menor Salário do Administrativo:', funcionarioMenorSalarioSetor(arquivoFuncionarios.funcionarios, 'Administrativo'));
        console.log('Média Salarial do Administrativo:', mediaSalarialSetor(arquivoFuncionarios.funcionarios, 'Administrativo'));
        console.log('=============================== PRODUÇÃO ===============================');
        console.log('Funcionário com Maior Salário do Produção:', funcionarioMaiorSalarioSetor(arquivoFuncionarios.funcionarios, 'Produção'));
        console.log('Funcionário com Menor Salário do Produção:', funcionarioMenorSalarioSetor(arquivoFuncionarios.funcionarios, 'Produção'));
        console.log('Média Salarial do Produção:', mediaSalarialSetor(arquivoFuncionarios.funcionarios, 'Produção'));
        console.log('=============================== COMERCIAL ===============================');
        console.log('Funcionário com Maior Salário do Comercial:', funcionarioMaiorSalarioSetor(arquivoFuncionarios.funcionarios, 'Comercial'));
        console.log('Funcionário com Menor Salário do Comercial:', funcionarioMenorSalarioSetor(arquivoFuncionarios.funcionarios, 'Comercial'));
        console.log('Média Salarial do Comercial:', mediaSalarialSetor(arquivoFuncionarios.funcionarios, 'Comercial'));
    }
})

function funcionarioMaiorSalario(funcionarios) {
    var indiceFuncionarioSelecionado = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > funcionarios[indiceFuncionarioSelecionado].salario) {
            indiceFuncionarioSelecionado = i;
        }
    }
    return funcionarios[indiceFuncionarioSelecionado].nome;
}

function funcionarioMenorSalario(funcionarios) {
    var indiceFuncionarioSelecionado = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario < funcionarios[indiceFuncionarioSelecionado].salario) {
            indiceFuncionarioSelecionado = i;
        }
    }
    return funcionarios[indiceFuncionarioSelecionado].nome;
}

function mediaSalarial(funcionarios) {
    var somaSalarios = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        somaSalarios += funcionarios[i].salario
    }
    return somaSalarios / funcionarios.length;
}

function funcionarioMaiorSalarioSetor(funcionarios, setor) {
    var indiceFuncionarioSelecionado = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if ((setor === funcionarios[i].setor) && (funcionarios[i].salario > funcionarios[indiceFuncionarioSelecionado].salario)) {
            indiceFuncionarioSelecionado = i;
        }
    }
    return funcionarios[indiceFuncionarioSelecionado].nome;
}

function funcionarioMenorSalarioSetor(funcionarios, setor) {
    var indiceFuncionarioSelecionado = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if ((setor === funcionarios[i].setor) && (funcionarios[i].salario < funcionarios[indiceFuncionarioSelecionado].salario)) {
            indiceFuncionarioSelecionado = i;
        }
    }
    return funcionarios[indiceFuncionarioSelecionado].nome;
}

function mediaSalarialSetor(funcionarios, setor) {
    var somaSalarios = 0;
    var numeroFuncionariosSetor = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].setor === setor) {
            somaSalarios += funcionarios[i].salario;
            numeroFuncionariosSetor++;
        }
    }
    return somaSalarios / numeroFuncionariosSetor;
}


