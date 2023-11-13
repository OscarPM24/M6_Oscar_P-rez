/* Función que pide un número por prompt,
   y lo devuelve invertido por consola */
function numeroInvertit() {
    let num = prompt("Escribe un numero");

    let numInvertit = "";
    for (let i = num.length-1; i >= 0; i--) {
        numInvertit += num[i];
    }
    console.log(`${num} --> ${numInvertit}`);
}

/* Función que pide un texto por prompt y comprueba si es palíndromo
   (se lee igual normal que del reves) */
function palindrom() {
    let text = prompt("Escribe un texto");
    let frase = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] != " ") { frase += text[i]; }
    }
    let p1 = frase.substring(0, frase.length / 2);
    let p2 = frase.length % 2 == 1 ? frase.substring(frase.length / 2 + 1) : frase.substring(frase.length / 2);
    if (p1 == invertit(p2)) {
        console.log(`${text} --> true`);
    } else {
        console.log(`${text} --> false`);
    }
}

/* Función que recibe un texto por parámetro y lo devuelve invertido */
function invertit(text) {
    let invertit = "";
    for (let i = text.length-1; i >= 0; i--) {
        invertit += text[i];
    }
    return invertit;
}

/* Función que pide un texto por prompt y devuelve por consola todos los substrings posibles */
function substrings() {
    let text = prompt("Introducir un texto");
    console.clear();
    for (let i = 0; i <= text.length; i++) {
        for (let j = i + 1; j <= text.length; j++) {
            console.log(text.substring(i, j));
        }
    }
}

/* Función que pide un texto por prompt y devuelve
   las letras del texto ordenadas alfabéticamente */
function ordreAlfabetic() {
    let text = prompt("Introducir texto").toLowerCase();
    let lletres = [];
    let ordenades = "";

    for (let i = 0; i < text.length; i++) {
        lletres.push(text[i]);
    }
    ordenades = lletres.sort().join("");
    console.log(`'${text}' --> '${ordenades}'`);
}