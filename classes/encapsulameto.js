export class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
        return data.getFullYear- this.ano;
    }
};

const meuCarro = new Carro("Opala", 1972);

console.log(meuCarro.nome);
console.log("A idade do meu carro é " + meuCarro.idade());