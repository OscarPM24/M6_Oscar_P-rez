/* Función que convierte la temperatura.
 * Escribe por prompt 'C' para convertir Celsius a Fahrenheit
 * Escribe por prompt 'F' para convertir Fahrenheit a Celsius */
function conversorTemperatura() {
    let unidad = prompt("'C' -> Celsius | 'F' -> Fahrenheit");
    if (!(unidad == "C" || unidad == "F")) {
        console.error("Error: La unidad introducida no es válida");
    } else {
        let temperatura = parseInt(prompt("Temperatura?"));

        if (unidad == "F") { 
            let resultado = (temperatura - 32) / (9.0/5.0);
            console.log(`${temperatura}º Fahrenheit --> ${resultado}º Celsius`);
        } else if (unidad == "C") {
            let resultado = (9.0 / 5.0) * temperatura + 32;
            console.log(`${temperatura}º Celsius -> ${resultado}º Fahrenheit`);
        }
    }
}

/* Función que pide un número por prompt y llama a las funciones
 * que convierten el número al sistema binario, octal y hexadecimal */
function conversorNumero() {
    let num = parseInt(prompt("Introducir número"));
    let n2 = binario(num);
    let n8 = octal(num);
    let n16 = hexadecimal(num);
    console.log(`n2 = ${n2}, n8 = ${n8}, n10 = ${num}, n16 = ${n16}`);
}

/* Función que pide un número por prompt y llama a la función canviaBase
 * que convierte el número al sistema binario, octal y hexadecimal */
function conversorNumero2() {
    let num = parseInt(prompt("Introducir número"));
    let n2 = canviaBase(num, 2);
    let n8 = canviaBase(num, 8);
    let n16 = canviaBase(num, 16);
    console.log(`n2 = ${n2}, n8 = ${n8}, n10 = ${num}, n16 = ${n16}`);
}

/* Función que convierte un número al sistema binario */
function binario(num) {
    let binario = "";
   
    while (num > 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
    }
    return binario;
} 

/* Función que convierte un número al sistema octal */
function octal(num) {
    let octal = "";
   
    while (num > 0) {
        octal = (num % 8) + octal;
        num = Math.floor(num / 8);
    }
    return octal;
} 

/* Función que convierte un número al sistema hexadecimal */
function hexadecimal(num) {
    let hexadecimal = "";
    let hex_values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // Valores posibles del sistema hexadecimal

    while (num > 0) {
        hexadecimal = hex_values[num%16] + hexadecimal; // Hace el módulo de 16 y escoge la posición del array hex_values
        num = Math.floor(num / 16);
    }
    return hexadecimal;
}

/* Función que contiene un número y una base cono parámetros
 * y los convierte al sistema correspondiente según la base */
function canviaBase(num, base) {
    let resultado = "";
    let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // Valores posibles hasta base 16

    while (num > 0) {
        resultado = values[num%base] + resultado; // Hace el módulo y escoge la posición del array values
        num = Math.floor(num / base);
    }
    return resultado;
}