/* Función que pide por prompt un número de filas y un número de columnas,
   y crea una tabla de esas dimensiones */

function taulaDinamica() {
    let rows = parseInt(prompt("Número de filas?"));
    let cols = parseInt(prompt("Número de columnas?"));
    let t = document.createElement("table"); // crea table

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement("tr"); // crea tr
        for (let j = 1; j <= cols; j++) {
            let td = document.createElement("td"); // crea td
            let txt = document.createTextNode(`${i}.${j}`); // crea txt de la posición de la tabla
            td.appendChild(txt); // añade el txt al td
            tr.appendChild(td); // añade el td al tr
        }
        t.appendChild(tr); // añade el tr al t
    }
    document.body.appendChild(t); // añade la table al documento html
}


/* Función que pide por prompt un número de filas y un número de columnas,
   y crea una tabla de multiplicar de esas dimensiones */
function taulaMultiplicarDinamica() {
    let rows = parseInt(prompt("Número de filas?"));
    let cols = parseInt(prompt("Número de columnas?"));
    let t = document.createElement("table"); // crea table

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement("tr"); // crea tr
        for (let j = 1; j <= cols; j++) {
            let td = document.createElement("td"); // crea td
            let txt = document.createTextNode(`${i * j}`); // crea txt del producto de la posición de la tabla
            td.appendChild(txt); // añade el txt al td
            tr.appendChild(td); // añade el td al tr
        }
        t.appendChild(tr); // añade el tr al t
    }
    document.body.appendChild(t); // añade la table al documento html
}

function piramide() {
    let cols = parseInt(prompt("Número de columnas?"));
    let rows = Math.floor((cols / 2) + 1);
    let t = document.createElement("table"); // crea table
    let vermell = 1;

    for (let i = 1; i <= rows; i++) {
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
        vermell += 2;
    }
    document.body.appendChild(t); // añade la table al documento html
}