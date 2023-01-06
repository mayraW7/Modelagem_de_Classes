// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;

import { Console } from "console";

// c) Retornar o valor do contador.
        export class Contador {
            valor_anterior: number;
            valor: number;
            
             constructor(valor:number){
                 this.valor = valor;
                 this.valor_anterior = 0
             }
    
        zerar() { return  this.valor = 0;}
        
        incrementar() { 
            this.valor_anterior = this.valor;
            return this.valor++;}
        
        retornar() {
            this.valor = this.valor_anterior;
            return } }