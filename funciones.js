//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        return 0;
    }

    return disponible;

    
}

function calcularCapacidadPago(montoDisponible) {
    let monto=montoDisponible/2;
    return monto;
}

function calcularInteresSimple(monto,tasa,plazoAnios ) {
    let interes = plazoAnios * monto * (tasa / 100);

    return interes;
}

