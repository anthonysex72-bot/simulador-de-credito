//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let  ingresos=parseFloat(document.getElementById("txtIngresos").value);
    let egresos=parseFloat(document.getElementById("txtEgresos").value);

    let disponible=calcularDisponible(ingresos,egresos);

    document.getElementById("spnDisponible").innerText=disponible.toFixed(2);
    let capacidadPago = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText=capacidadPago.toFixed(2);

}

document.getElementById("btnCalcularCredito").addEventListener("click",calcular);