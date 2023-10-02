//Funcion que muestra la tabla del 10 de un numero por consola, se usa recursividad
function taulaMultiplicar1() {
    let x = prompt("Introdueix un numero entre 0 i 10");
    let y = 1;
    if (x>10 || x<0) {
        console.error("El número introduït té que ser entre 0 i 10");
        taulaMultiplicar();
    } else {
        console.log(`Taula del ${x}`);
        while (y<=10) {
            console.log(`${x} x ${y} = ${x*y}`);
            y++;
        }
    }
}

//Funcion que muestra la tabla del 10 de un numero por consola, con while true
function taulaMultiplicar2() {
    while (true) {
        let x = prompt("Introdueix un numero entre 0 i 10");
        let y = 1;
        if (x>10 || x<0) {
            console.error("El número introduït té que ser entre 0 i 10");
        } else {
            console.log(`Taula del ${x}`);
            while (y<=10) {
                console.log(`${x} x ${y} = ${x*y}`);
                y++;
            }
            break;
        }
    }
}

//Funcion que escribe la serie de Fibonacci en la consola
function serieFibonacci() {
    console.clear();
    let x = document.getElementById("fibo1").value;
    let a = 1;
    let b = 1;
    let suma = 1;
    if (x<1) {
        console.error("La serie de Fibonnaci empieza a partir de 1");
    } else {
        for(let i = 1; i <= x; i++) {
            if (i>2) {
                suma = a + b;
                a = b;
                b = suma;
            }
            console.log(`fibo[${i}] = ${suma}`);
        }
    }
}