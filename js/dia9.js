/* Función que pide 2 frases y compara su longitud */
function comparaLongitud() {
    let frase1 = prompt("Primera frase?");
    let frase2 = prompt("Segona frase?");

    if (frase1.length < frase2.length) {
        console.log(`'${frase1}' es mas corta que '${frase2}'`);
    } else if (frase1.length > frase2.length) {
        console.log(`'${frase1}' es mas larga que '${frase2}'`);
    } else {
        console.log(`'${frase1}' es igual de larga que '${frase2}'`);
    }
}

/* Función que pide una frase y una letra y calcula 
   si tiene entre 2 y 4 de la letra especificada */
function lletraContinguda() {
    let text = prompt("Text?");
    let lletra = prompt("Lletra");
    let contador = 0;

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == lletra) { contador++; }
    }
    console.log((contador>=2 && contador<=4) ? `'${text}' contiene entre 2 y 4 '${lletra}'` : `'${text}' no contiene entre 2 y 4 '${lletra}'`); 
}

/* Función que pide un texto y una posición y elimina
   el carácter de esa posición */
function eliminaCaracter() {
    let text = prompt("Text?");
    let pos = parseInt(prompt("Posicion?"));
    let nouText = "";

    for (let i = 0; i < text.length; i++) {
        nouText += (i != pos) ? text.charAt(i) : "_";
    }
    document.write(nouText);
}

/* Función que pide un texto y lo devuelve en distintos formatos:
    Mayusculas
    Minusculas
    Longitud
    nº palabras
    Vocales
    nº vocales
    Reduciendo */
function formatText() {
    let text = prompt("Text?");
    let textVocals = "";
    let numVocals = 0;
    vocals = /[AEIOUÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛaeiouàáäâèéëêìíïîòóöôùúüû]/gi
    vocals = ['A','E','I','O','U','À','Á','Ä','Â','È','É','Ë','Ê','Ì','Í','Ï','Î','Ò','Ó','Ö','Ô','Ù','Ú','Ü','Û','a','e','i','o','u','à','á','ä','â','è','é','ë','ê','ì','í','ï','î','ò','ó','ö','ô','ù','ú','ü','û'];

    document.write(`Mayusculas:    ${text.toUpperCase()}<br/>`);
    document.write(`Minusculas:    ${text.toLowerCase()}<br/>`);
    document.write(`Longitud:      ${text.length}<br/>`);
    document.write(`nº paraules:   ${text.split(" ").length}<br/>`);
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (text[i] == vocals[j]) {
                textVocals += text[i];
                numVocals++;
                break;
            }
        }
    }
    document.write(`Vocals:        ${textVocals}<br>`);
    document.write(`nº vocals:     ${numVocals}<br>`);
    document.write(`reduïnt:       ${text}<br>`);
    for (let i = 0; i < text.length; i++) {
        document.write(`           ${text.substring(i)}<br/>`);
    }
}

function formatText2() {
    let text = prompt("Text?");
    vocals = /[AEIOUÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛaeiouàáäâèéëêìíïîòóöôùúüû]/gi // Expresión regular, g --> global, i --> case insensitive
    

    document.write(`Mayusculas:    ${text.toUpperCase()}<br/>`);
    document.write(`Minusculas:    ${text.toLowerCase()}<br/>`);
    document.write(`Longitud:      ${text.length}<br/>`);
    document.write(`nº paraules:   ${text.split(" ").length}<br/>`);
    document.write(`Vocals:        ${text.match(vocals)}<br>`); // Devuelve un array con todos los matches de text con la variable vocals
    document.write(`nº vocals:     ${text.match(vocals).length}<br>`);
    document.write(`reduïnt:       ${text}<br>`);
    for (let i = 0; i < text.length; i++) {
        document.write(`           ${text.substring(i)}<br/>`);
    }
}

/* Función que pide una hora por prompt en formato hh:mm
   y devuelve los minutos restantes para año nuevo */
function capDAny() {
    let tiempo = prompt("Hora?");
    if (tiempo == "00:00") { document.write("Any nou"); }
    else {
        let hora = tiempo.split(":");
        let minutos = 0;
        
        for (let i = hora[1]; i <= 60; i++) {
            if (i == 60) { 
                hora[0]++; 
                break;
            }
            minutos += 1;
        }
        for (let i = hora[0]; i < 24; i++) {
            minutos += 60;
        }

        document.write(minutos);
    }
}