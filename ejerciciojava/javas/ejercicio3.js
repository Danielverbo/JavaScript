let frase = "";
let segundo = "";
let total = "";

while (frase !== "cancelar") {
    frase = prompt("Escribe una frase");
    if (frase !== "cancelar") {
        segundo += frase + "-";
        total += frase + "-";
    }
}

alert(total.slice(0, -1));
