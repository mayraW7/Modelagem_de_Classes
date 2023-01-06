// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.
// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()

export class Carro {
    consumo: number; 
    combusTanque: number;

    constructor(consumo:number){
        this.consumo = consumo;
        this.combusTanque = 0;
    }
    andar(distância: number){
    let gasConsumida = distância / this.consumo;
    let kmRestantes = this.combusTanque / this.consumo;
    if (this.combusTanque < gasConsumida){
        console.log(`Putz! O carro possui gasolina para andar apenas mais ${kmRestantes.toFixed(0)}km. =(`)
    }else{
    this.combusTanque = this.combusTanque - gasConsumida;
    console.log(`O carro tem um consumo de ${this.consumo}km/litro, consumindo ${gasConsumida.toFixed(2)} litros de gasolina em ${distância}km.`)}

    }
    obterGasolina(){
        console.log(`O tanque possui ${this.combusTanque.toFixed(2)} litros restantes.`)
    }
    adicionarGasolina(gasAdd:number){
        this.combusTanque = this.combusTanque + gasAdd;
        console.log(`O tanque de combustível possui ${this.combusTanque} litros.`)
    }
}