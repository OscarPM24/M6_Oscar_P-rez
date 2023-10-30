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


function codiBarras() {
    let codigo = prompt("Introducir código de barras");
    let longitud = codigo.length;
    let control = 0;
    let EAN8 = false;
    let EAN13 = false;

    if (codigo.length <= 8) { EAN8 = true; }
    else if (codigo.length <= 13 && codigo.length > 8) { EAN13 = true; }
    else if (codigo.length > 13) {
        document.write("Error: Codigo invàlido");
        return;
    }

    if (EAN8) {
        if (codigo.length < 8) {
            for (let i = 0; i < 8-longitud; i++) { codigo = "0" + codigo; }
        }
        for (let i = 6; i >= 0; i--) {
            if ((i+1) % 2 == 0) {
                control += parseInt(codigo[i]);
            } else if ((i+1) % 2 == 1) {
                control += parseInt(codigo[i] * 3);
            }
        }
    }

    else if (EAN13) {
        if (codigo.length < 13) {
            for (let i = 0; i < 13-longitud; i++) { codigo = "0" + codigo; }
        }
        for (let i = 11; i >= 0; i--) {
            if ((i+1) % 2 == 0) {
                control += parseInt(codigo[i]);
            } else if ((i+1) % 2 == 1) {
                control += parseInt(codigo[i] * 3);
            }
        }
    }

    console.log(codigo);
    console.log(control);
    console.log(EAN8);
    console.log(EAN13);
    console.log((parseInt(control) + parseInt(codigo[codigo.length - 1])) % 10);

    if ((parseInt(control) + parseInt(codigo[codigo.length - 1])) % 10 == 0) { document.write("Correcto"); } 
    else { document.write("Incorrecto"); }



}