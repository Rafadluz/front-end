const carros = ["Fusca", "Corola", "Gol", "Palio", "Chevette", "Opala"];
console.log(carros);

const numeros = [45, 4, 9, 16, 25];
const acimaDe18 = numeros.filter(valor => valor > 18);
console.log(acimaDe18);

for(i = 0; i < 5; i++){
    if (numeros[i] > 18){
        console.log(numeros[i]);
    }
};

console.log(numeros.reduce(total, valor) => total + valor);