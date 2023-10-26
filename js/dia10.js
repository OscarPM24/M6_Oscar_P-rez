/* Función que genera un número entre 0 y 100 y 
   lo tienes que adivinar.
   Escribe 0 para acabar el juego. */
function endevinaNumero() {
    let num = Math.floor(Math.random() * 100);
    let intentos = 0;
    let intento = -1; 
    while (intento != num) {
        intento = parseInt(prompt("Introducir número entre 0 y 100"));
        if (intento == 0) {
            document.write(`<h1>Game Over.
                            <br>
                            El número era ${num}.
                            <br>
                            <a href="dia10.html">Tornar a intentar</a></h1>`);
            return;
        }
        intentos++;
        if (!Number.isInteger(intento) || intento < 0 || intento > 100) {
            console.log("invàlid");
        } else if (intento < num) {
            console.log(`major que ${intento}`);
        } else if (intento > num) {
            console.log(`menor que ${intento}`);
        }
    }
    document.write(`<h1>L'has endevinat en ${intentos} intents.
                    <br>
                    El número era ${num}.
                    <br>
                    <a href="dia10.html">Tornar a intentar</a>`);
}

/* Función que pide 2 años entre 2000 y 2050 
   y devuelve el primer año del rango que comience en miércoles */
function primerDimecres() {
    let any1 = parseInt(prompt("Introducir año entre 2000 y 2050"));
    let any2 = parseInt(prompt(`Introducir año entre ${any1 + 1} y 2050`));

    if (any1 < 2000 || any1 > 2050 || any2 < 2000 || any2 > 2050 || any1 > any2) {
        document.write(`<h1>Anys invàlids</h1>`);
        return;
    }
    for (any1; any1 <= any2; any1++) {
        let data = new Date(`${any1}-01-01`);
        if (data.getDay() == 3) {
            document.write(`<h1>El ${any1} comença en dimecres</h1>`);
            return;
        }
    }
    document.write(`<h1>Cap any comença en dimecres</h1>`);
}

/* Función que pide una palabra por prompt
   y dice si la palabra es pentavocálica (contiene todas las vocales) */
function pentavocalica() {
    let text = prompt("Introducir palabra");
    if (text.match(/[aàáä]/gi) &&
        text.match(/[eèéë]/gi) &&
        text.match(/[iìíï]/gi) &&
        text.match(/[oòóö]/gi) &&
        text.match(/[uùúü]/gi)) {
        document.write(`<h1>${text} → si</h1>`);
    } else { document.write(`<h1>${text} → no</h1>`); }
}

/* Función que pide una palabra por prompt
   y dice si la palabra es pentavocálica (contiene todas las vocales)
   Versión 2 */
function pentavocalica_v2() {
    let text = prompt("Introducir palabra");
    let vocals = [/[aàáä]/gi, /[eèéë]/gi, /[iìíï]/gi, /[oòóö]/gi,/[uùúü]/gi];
    for (let i = 0; i < vocals.length; i++) {
        if (!text.match(vocals[i])) {
            document.write(`<h1>${text} → no</h1>`);
            return; 
        }
    }
    document.write(`<h1>${text} → si</h1>`);
}