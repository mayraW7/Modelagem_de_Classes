
// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio.
// c. Esta classe deve conter uma ação para visualizar o histórico.

export class Calculadora {
    operacao: Array<string> = [];
    resultado: number

    constructor (){
        this.resultado = 0;
        this.operacao= [];
    }
    historico(){
       console.log(`Histórico de Operações: ${this.operacao}`)
    }

    somar(valorSoma: number){
        let soma_value = this.resultado + valorSoma;
        this.operacao.push( ` SOMA: ${this.resultado} + ${valorSoma} = ${soma_value} `);
        this.resultado = soma_value;
    }
    multiplicar(valorMultiplica:number ){
        let mult_value= this.resultado * valorMultiplica;
        this.operacao.push(` MULTIPLICAÇÃO: ${this.resultado} * ${valorMultiplica}= ${mult_value}`)
        this.resultado = mult_value;
    }
    dividir(valorDivisao: number){
        let div_value = this.resultado / valorDivisao;
        this.operacao.push(` DIVISÃO: ${this.resultado} / ${valorDivisao} = ${div_value}`);
        this.resultado=div_value;
    } 
    diminuir(valorSubtrai:number){
        let sub_value = this.resultado - valorSubtrai;
        this.operacao.push(` SUBTRAÇÃO: ${this.resultado} - ${valorSubtrai} = ${sub_value}`);
        this.resultado=sub_value;
    }
}
