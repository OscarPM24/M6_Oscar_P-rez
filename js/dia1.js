function holaMundo() {
    alert("Hola Mundo!");
}

function adios() {
    alert("Adioooooooos");
}

function mondongo() {
    alert("mondongo!");
}

function changeAlert() {
    let text = document.getElementById("i1").value;
    alert("Se ha cambiado: " + text);
}

function taulaMultiplicar() {
    let x = document.getElementById("i2").value;
    for (let i=1; i<=10; i++) {
        let y = x * i;
        let text = (x + "*" + i + "= " + y);
        console.log(text)
    }
}