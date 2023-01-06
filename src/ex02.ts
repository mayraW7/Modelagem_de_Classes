   // 2. Crie uma classe que modele uma bola:
    // a. Atributos
    // i. Cor
    // ii. Circunferência
    // iii. Material
    // b. Métodos
    // i. Trocar Cor
    // ii. Mostrar cor
    
    export class Bola {
        Cor: string;
        Circunferência: number;
        Material: string;
        
         constructor(Cor: string,Circunferência: number, Material: string){
             this.Cor= Cor;
             this.Circunferência=Circunferência;
             this.Material=Material;
         }

    mostrarCor() { 
        console.log(`A cor da bola é: ${this.Cor}`)
    }
    trocarCor(Cor:string){
        this.Cor = Cor
        return
    }
};
