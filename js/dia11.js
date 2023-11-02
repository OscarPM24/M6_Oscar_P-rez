/* Función que escribe por pantalla la fecha actual en distintos formatos */

function dataActual() {
    let data = new Date();
    let firstDay = new Date(data.getFullYear(), 0, 1);
    let secondsToday = data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds();
    let diesAny = (data.getTime() - firstDay.getTime()) / 86400000;

    document.write(`<h1>Avui és ${data.getDate()} del mes ${data.getMonth() + 1} de l'any ${data.getFullYear()}<br>`);
    document.write(`Estem en la setmana ${Math.ceil(diesAny/7)}<br>`);
    document.write(`% de dies transcorreguts de l'any és ${((diesAny / 365) * 100).toFixed(2)}%<br>`);
    document.write(`% de dies que queden en el any ${(100 - ((diesAny / 365) * 100)).toFixed(2)}%<br>`);
    document.write(`Ara són les ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}<br>`);
    document.write(`% del dia transcorregut ${((secondsToday / 86400) * 100).toFixed(2)}%<br>`);
    document.write(`% del dia que queda ${(100 - (secondsToday / 86400) * 100).toFixed(2)}%</h1>`);
}

/* Función que pide un número por prompt
   y calcula si es un código de barras válido (EAN8 y EAN13) */

function codiBarras() {
    let codigo = prompt("Introducir código de barras");
    let control = 0;
    let EAN8 = false;
    let EAN13 = false;

    if (codigo.length <= 8) { EAN8 = true; }
    else if (codigo.length <= 13 && codigo.length > 8) { EAN13 = true; }
    else {
        document.write("Error: Codigo invàlido");
        return;
    }

    if (EAN8) {
        if (codigo.length < 8) { codigo = codigo.padStart(8, '0'); }
        control = calculaControl(codigo, 6);
    }

    else if (EAN13) {
        if (codigo.length < 13) { codigo = codigo.padStart(13, '0'); }
        control = calculaControl(codigo, 11);
    }

    if ((parseInt(control) + parseInt(codigo[codigo.length - 1])) % 10 == 0) { document.write(`<h1>${codigo} → Correcto</h1>`); } 
    else { document.write(`<h1>${codigo} → Incorrecto</h1>`); }
}

function calculaControl(codigo, index) {
    let pos = 1;
    let control = 0;
    for (index; index >= 0; index--, pos++) {
        if (pos % 2 == 0) {
            control += parseInt(codigo[index]);
        } else if (pos % 2 == 1) {
            control += parseInt(codigo[index] * 3);
        }
    }
    return control;
}


// 65839522 correcto
// 65839521 incorrecto 

// 5029365779425 correcto
// 5129365779425 incorrecto