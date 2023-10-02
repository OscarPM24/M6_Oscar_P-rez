function calculaPotencia() {
    let x = prompt("Introducir base:");
    let y = prompt("Introducir exponente:");
    console.time("Tiempo con Math.pow");
    let resultado1 = Math.pow(x, y);
    console.timeEnd("Tiempo con Math.pow");
    console.log(x +"^"+ y +"="+resultado1);
    console.log("--------------------------------");
    console.time("Tiempo con bucle for");
    let resultado2 = 1;
    if (y < 0) {
        for (let j = 0; j > y; j--) {
            resultado2 /= x; 
        }
    } else {
        for (let i = 0; i < y; i++) {
            resultado2 *= x;
        }
    }
    console.timeEnd("Tiempo con bucle for");
    console.log(x +"^"+ y +"="+resultado2);
}


function media_mediana_max_min() {
    console.clear();
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros[i] = parseFloat(prompt("Numero "+(i+1))); 
    }
    numeros.sort();
    console.log("Mitja: " + (numeros[0] + numeros[1] + numeros[2]) / 3);
    console.log("Mediana: " + numeros[Math.floor(numeros.length/2)]);
    console.log("Max: " + numeros[numeros.length-1]);
    console.log("Min: " + numeros[0]);
}

function media_mediana_max_min_2() {
    console.clear();
    let numeros = [];
    let longitud = parseInt(prompt("Cuantos numeros?"));
    for (let i = 0; i < longitud; i++) {
        numeros[i] = parseInt(prompt("Numero "+(i+1))); 
    }
    numeros.sort();
    let mitja = 0;
    for (let j = 0; j < numeros.length; j++) {
        mitja += numeros[j];
    }
    console.log("Mitja: " + mitja / longitud);
    console.log("Mediana: " + numeros[Math.floor(numeros.length/2)]);
    console.log("Max: " + numeros[numeros.length-1]);
    console.log("Min: " + numeros[0]);
}