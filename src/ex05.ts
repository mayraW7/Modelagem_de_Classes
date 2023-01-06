// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() 
// método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor()
//altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.

export class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipoCombustivel: string,valorLitro: number,quantidadeCombustivel: number){
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valorAbastecido:number){
        let quantidadeAbastecida= valorAbastecido/this.valorLitro;
        if (this.quantidadeCombustivel < quantidadeAbastecida){
            return console.log(`A bomba não possui combustível suficiente, o total restante de combustível é de ${this.quantidadeCombustivel} litros.`)
        } else{
        this.quantidadeCombustivel = this.quantidadeCombustivel - quantidadeAbastecida; 
        console.log(`O valor de R$${valorAbastecido} totalizou ${quantidadeAbastecida.toFixed(2)} litros de combustível.`)}
    }

    abastecerPorLitro(quantidadeAbastecida: number){
      let  custoCombustivel:number = this.valorLitro * quantidadeAbastecida;
      if (this.quantidadeCombustivel < quantidadeAbastecida){
        return console.log(`A bomba não possui combustível suficiente, o total restante de combustível é de ${this.quantidadeCombustivel} litros.`)
    } else{
      this.quantidadeCombustivel = this.quantidadeCombustivel - quantidadeAbastecida;}
      console.log(`A quantidade de ${quantidadeAbastecida} litros de combustível custa R$${custoCombustivel.toFixed(2)}.`)
    }

    alterarValor(novoValorLitro:number){
        this.valorLitro = novoValorLitro;
        console.log(`O valor do litro foi alterado para: ${this.valorLitro}`)
    }

    alterarCombustivel(novoTipoCombustivel:string){
        this.tipoCombustivel = novoTipoCombustivel;
        console.log(`O tipo do combustível foi alterado para: ${this.tipoCombustivel}`)
    }

    alterarQuantidadeCombustivel(novaQuantidadeCombustível:number){
        let combustivelRestante = this.quantidadeCombustivel;
        this.quantidadeCombustivel = novaQuantidadeCombustível;
        console.log(`A bomba tinha ${combustivelRestante} litros e foi alterada para ${this.quantidadeCombustivel} litros.`)
    }

}