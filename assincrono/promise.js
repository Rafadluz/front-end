const visualizado = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) =>{
    let ok = true;

    if (ok){
        resolve("Ok");
    }else{
        reject("Erro");
    }
})

