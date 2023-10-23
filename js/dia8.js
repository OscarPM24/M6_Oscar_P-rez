/* Función que crea un rombo, a partir de la piràmide creada anteriormente */

function rombo() {
    let cols = parseInt(prompt("Número de columnas?"));
    let rows = (cols % 2 == 0) ? cols+1 : cols; 
    let t = document.createElement("table"); // crea table
    let vermell = 1;

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr"); // crea tr
        let blanc = (cols-vermell)/2;

        for (let j = 0; j < blanc; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }

        for (let j = 0; j < vermell; j++) {
            let td = document.createElement("td");
            td.style.backgroundColor = "red";
            tr.appendChild(td); 
        }

        for (let j = 0; j < blanc; j++) {
            let td = document.createElement("td");
            tr.appendChild(td); 
        }
        t.appendChild(tr); // añade el tr al t

        if (i < Math.floor(rows/2)) {
            vermell += 2;
        } else {
            vermell -= 2;
        }
        
    }
    document.body.appendChild(t); // añade la table al documento html
}

/* Función que pide un nombre de archivo por prompt
   y muestra por consola la extensión del archivo */

function extension() {
    let file = prompt("nombre de archivo?");
    let fileSplit = file.split(".");
    console.log(fileSplit.pop()); // pop() printea el ultimo elemento del array
}

function comptaLletres() {
    let frase = prompt("Introducir frase");
    let a = 0;
    let b = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() == 'a') { a++ } 
        else if (frase[i].toLowerCase() == 'b') { b++; }
    }
    
    if (a > b) { console.log(`Hay mas 'a'(${a}) que 'b'(${b})`); } 
    else if (a < b) { console.log(`Hay mas 'b'(${b}) que 'a'(${a})`); } 
    else if (a == b) { console.log(`Hay la misma cantidad de 'a'(${a}) que 'b'(${b})`); }
}