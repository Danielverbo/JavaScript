let numero = prompt("Escribe un número");

while (numero > 0) {
    switch (parseInt(numero)) {
        case 0:
        case 1:
        case 2:
            alert("Muy deficiente");
            break;
        case 3:
        case 4:
            alert("Insuficiente");
            break;
        case 5:
            alert("Suficiente");
            break;
        case 6:
            alert("Bien");
            break;
        case 7:
        case 8:
            alert("Notable");
            break;
        case 9:
        case 10:
            alert("Sobresaliente");
            break;
        default:
            break;
    }    

    numero = prompt("Escribe otro número");
}
