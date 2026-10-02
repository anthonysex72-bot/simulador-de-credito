//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let  ingresos=parseFloat(document.getElementById("txtIngresos").value);
    let egresos=parseFloat(document.getElementById("txtEgresos").value);

    let disponible=calcularDisponible(ingresos,egresos);

    document.getElementById("spnDisponible").innerText=disponible.toFixed(2);
    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText=capacidadPago.toFixed(2);

    let plazoAnios =parseInt(document.getElementById("txtPlazo").value);
    let monto =parseInt(document.getElementById("txtMonto").value);
    let tasa =parseInt(document.getElementById("txtTasaInteres").value);
    let interes=calcularInteresSimple(monto,tasa,plazoAnios);
    document.getElementById("spnInteresPagar").innerText=interes.toFixed(2);
    let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText=total.toFixed(2);
    let cuotaTotal=calcularCuotaMensual(total,plazoAnios);
    document.getElementById("spnCuotaMensual").innerText=cuotaTotal.toFixed(2);
    let creditoAprobado = aprobarCredito(capacidadPago,cuotaTotal);
    if (creditoAprobado) {
    document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO";
    } 
    else {
    document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO";
}

}

document.getElementById("btnCalcularCredito").addEventListener("click",calcular);