import { Contador } from "./ex01";
import { Bola } from "./ex02";
import { ContaCorrente } from "./ex03";
import { Calculadora } from "./ex04";
import { BombaCombustivel } from "./ex05";
import { Carro } from "./ex06";


//ex01
console.log("EXERCÍCIO 1 - CONTADOR :")
let contador1 = new Contador(40);

console.log(contador1.valor)
contador1.incrementar()
console.log(contador1.valor)
contador1.incrementar()
console.log(contador1.valor)
contador1.retornar()
console.log(contador1.valor)
contador1.zerar()
console.log(contador1.valor)

//ex02
console.log("EXERCÍCIO 2 - BOLA :")
let bola1 = new Bola("azul", 50, "tecido");

bola1.mostrarCor();
bola1.trocarCor("vermelha");
bola1.mostrarCor();

//ex03
console.log("EXERCÍCIO 3 - CONTACORRENTE :")
let contaPessoal = new ContaCorrente (445, "Mayra",50);
console.log(contaPessoal)
contaPessoal.alterarNome("Maria");
console.log(contaPessoal)
contaPessoal.deposito(200)
console.log(contaPessoal)
contaPessoal.deposito(200)
console.log(contaPessoal)
contaPessoal.saque(800)
console.log(contaPessoal)

//ex04
console.log("EXERCÍCIO 4 - CALCULADORA :")
let calculo1 = new Calculadora()

calculo1.somar(200);
calculo1.diminuir(5);
calculo1.dividir(2);
calculo1.multiplicar(20);
calculo1.historico()

//ex05
console.log("EXERCÍCIO 5 - BombaCombustível :")

let abastecimento1 = new BombaCombustivel("Comum",20,40);

abastecimento1.abastecerPorLitro(50)
abastecimento1.abastecerPorValor(1000)
abastecimento1.alterarQuantidadeCombustivel(60)
abastecimento1.alterarCombustivel("aditivada")
abastecimento1.alterarValor(25)
console.log(abastecimento1.quantidadeCombustivel)

//ex06
console.log("EXERCÍCIO 6 - CARRO:")

let carro1 = new Carro (15);

carro1.obterGasolina()
carro1.adicionarGasolina(40)
carro1.adicionarGasolina(5)
carro1.andar(500)
carro1.obterGasolina()
carro1.andar(500)