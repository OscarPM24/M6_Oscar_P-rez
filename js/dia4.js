/* Función que pide 2 números por prompt y devuelve por consola
 * el número más cercano a 100 */
function numMesProper() {
    let primer = parseInt(prompt("Primer número"));
    let segon = parseInt(prompt("Segundo número"));
    console.clear();

    if (Math.abs(100 - primer) < Math.abs(100 - segon)) {
        console.log(`El més proper és: ${primer}`);
    } else if (Math.abs(100 - primer) > Math.abs(100 - segon)) {
        console.log(`El més proper és: ${segon}`);
    } else {
        console.log("Els dos números estàn a la mateixa distància");
    }
}

/* Función que pide 3 números por prompt (horas, minutos, segundos),
 * crea un objeto Date con los números introducidos + 1 segundo
 * y lo devuelve por consola */
function demanaData() {
    let hour = prompt("Introducir hora");
    let minute = prompt("Introducir minutos");
    let second = prompt("Introducir segundos");
    console.clear();
    let data = new Date("", "", "", hour, minute, parseInt(second)+1);
    console.log(`Hora: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
}

/* Funcion que pide 3 números por prompt (año, mes, dia),
 * crea un objeto Date con los números introducidos 
 * y comprueba que la fecha sea válida */
function checkData() {
    let year = parseInt(prompt("Introducir año"));
    let month = parseInt(prompt("Introducir mes"))-1;
    let day = parseInt(prompt("Introducir dia"));
    let data = new Date(year, month, day);
    console.clear();

    if (data.getFullYear() == year && data.getMonth() == month && data.getDate() == day) {
        console.log(`La data: ${year}/${month+1}/${day} és vàlida`);
    } else {
        console.log(`La data: ${year}/${month+1}/${day} no és vàlida`);
    }
}

/* Funcion que pide 1 numero por prompt (dias)
 * y muestra por consola la cantidad de dias, meses y años
 * que contiene el número introducido */
function convertirDias() {
    let day = parseInt(prompt("Introducir días"));
    let month = Math.floor(day / 30);
    let year = Math.floor(day / 365);
    console.clear();

    console.log(`Dias: ${day}`);
    console.log(`Meses: ${month}`);
    console.log(`Años: ${year}`);

    //console.log(`${day} dias a fecha --> ${year}/${month}/${day}`);
}
