// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

export class ContaCorrente {
    numberConta: number;
    titular: string;
    saldoConta: number;

    constructor (numberConta: number, titular: string, saldoConta?: number){
        this.numberConta = numberConta;
        this.titular = titular;
        this.saldoConta = saldoConta || 0;
    }
    
    alterarNome(titular:string){
        this.titular = titular;
    }
    deposito(valorDeposito:number){
        if (valorDeposito <=0) {
        console.log("Valor incorreto! Digite um valor válido!")
        } else {
            return this.saldoConta = valorDeposito + this.saldoConta;
        }
    }
    saque(valorSaque: number){
        if (valorSaque>this.saldoConta){
            console.log(`Saldo insuficiente! Seu saldo atual é de: R$${this.saldoConta}`);
        } else {
            return this.saldoConta = this.saldoConta-valorSaque;
        }
    }
}
