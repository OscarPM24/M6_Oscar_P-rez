/* Función que pide por prompt horas, minutos y segundos, 
 * devuelve por consola el coste de la llamada. (10c por descolgar + 5c/min) */
function costTrucada() {
    let hour = parseInt(prompt("Hores de la trucada"));
    let minute = parseInt(prompt("Minuts de la trucada"));
    let second = parseInt(prompt("Segons de la trucada"));

    // Cálculo de los segundos totales de la llamada
    let secondTotal = second + (minute*60) + (hour*3600);

    // Cálculo del coste de la llamada
    let cost = 0;
    if (secondTotal > 0) {
        cost = 0.10 + ((0.05 / 60) * secondTotal);
    }
    
    console.log(`Cost total: ${cost}€`);
}

/* Función que pide 3 números por prompt y calcula su valor RGB en Hexadecimal */
function calculaRGB() {
    let red = parseInt(prompt("Cantidad de rojo"));
    let green = parseInt(prompt("Cantidad de verde"));
    let blue = parseInt(prompt("Cantidad de azul"));

    // Comprobación por si los números están fuera de rango
    if (red<0 || red>255 || green<0 || green>255 || blue<0 || blue>255) {
        console.error("Error: Los números deben tener un valor entre 0 y 255");
    } else {
        let rgb = "";
        rgb += rgbtohex(red);
        rgb += rgbtohex(green);
        rgb += rgbtohex(blue);

        console.log(`(${red}, ${green}, ${blue}) = #${rgb.toUpperCase()}`);
    }
}

/* Función que recibe un número en párametro y lo convierte a hexadecimal */
function rgbtohex(color) {
    let rgb = color.toString(16);
    if (rgb.length < 2) return 0 + rgb;
    else return rgb;
}

function canviMinim() {
    let preu = parseFloat(prompt("Precio del producto"));
    let calers = parseFloat(prompt("Dinero pagado"));

    let cambio = calers - preu;
    let dinero = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let unidadCambio = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    console.log(`preu = ${preu} | calers = ${calers}`);

    for (let i = 0; i < unidadCambio.length; i++) {
        while (cambio >= unidadCambio[i]) {
            dinero[i]++;
            cambio = (cambio - unidadCambio[i]).toFixed(2);
        }        
    }
    let totalCanvi = 0;
    for (let j = 0; j < dinero.length; j++) {
        if (dinero[j] != 0) console.log(`${dinero[j]} de ${unidadCambio[j]}`);
        totalCanvi += (dinero[j] * unidadCambio[j]);
    }
    console.log(`Total canvi = ${totalCanvi}`);
}