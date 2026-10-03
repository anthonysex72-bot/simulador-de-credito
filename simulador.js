// AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function validarInput(idInput, idError) {

    let input = document.getElementById(idInput);
    let mensaje = document.getElementById(idError);
    let valor = input.value.trim();

    // CAMPO OBLIGATORIO
    if (valor === "") {
        mensaje.innerText = "Este campo es obligatorio.";
        return false;
    }

   // SOLO NÚMEROS Y DECIMALES
   

    if (!/^\d+(\.\d+)?$/.test(valor)) {

    mensaje.innerText = "Ingrese un número válido.";

    return false;

    }

    let numero = parseFloat(valor);

    // VALIDACIÓN DE INGRESOS
    if (idInput === "txtIngresos") {

        if (numero <= 0) {
            mensaje.innerText = "Los ingresos deben ser mayores que 0.";
            return false;
        }

    }

    // VALIDACIÓN DE EGRESOS
    if (idInput === "txtEgresos") {

        if (numero < 0) {
            mensaje.innerText = "Los egresos no pueden ser negativos.";
            return false;
        }

    }

    // VALIDACIÓN DEL MONTO
    if (idInput === "txtMonto") {

        if (numero <= 0) {
            mensaje.innerText = "El monto debe ser mayor que 0.";
            return false;
        }

    }

    // VALIDACIÓN DEL PLAZO
    if (idInput === "txtPlazo") {

        if (!Number.isInteger(numero)) {
            mensaje.innerText = "El plazo debe ser un número entero.";
            return false;
        }

        if (numero < 1 || numero > 10) {
            mensaje.innerText = "El plazo debe estar entre 1 y 10 años.";
            return false;
        }

    }

    // VALIDACIÓN DE LA TASA
    if (idInput === "txtTasaInteres") {

        if (numero < 1 || numero > 100) {
            mensaje.innerText = "La tasa debe estar entre 1% y 100%.";
            return false;
        }

    }

    // SI TODO ESTÁ CORRECTO
    mensaje.innerText = "";

    return true;
}


function calcular() {

    let ingresosValido = validarInput("txtIngresos", "errorIngresos");
    let egresosValido = validarInput("txtEgresos", "errorEgresos");
    let montoValido = validarInput("txtMonto", "errorMonto");
    let plazoValido = validarInput("txtPlazo", "errorPlazo");
    let tasaValida = validarInput("txtTasaInteres", "errorTasaInteres");

    if (!ingresosValido || !egresosValido || !montoValido || !plazoValido || !tasaValida) {
        return;
    }

    let ingresos = obtenerNumero("txtIngresos");
    let egresos = obtenerNumero("txtEgresos");

    let disponible = calcularDisponible(ingresos, egresos);

    mostrarNumero("spnDisponible", disponible);

    let capacidadPago = calcularCapacidadPago(disponible);

    mostrarNumero("spnCapacidadPago", capacidadPago);

    let plazoAnios = obtenerNumero("txtPlazo");
    let monto = obtenerNumero("txtMonto");
    let tasa = obtenerNumero("txtTasaInteres");

    let interes = calcularInteresSimple(monto, tasa, plazoAnios);

    mostrarNumero("spnInteresPagar", interes);

    let total = calcularTotalPagar(monto, interes);

    mostrarNumero("spnTotalPrestamo", total);

    let cuotaTotal = calcularCuotaMensual(total, plazoAnios);

    mostrarNumero("spnCuotaMensual", cuotaTotal);

    let creditoAprobado = aprobarCredito(capacidadPago, cuotaTotal);

    if (creditoAprobado) {
        mostrarTexto("spnEstadoCredito", "CREDITO APROBADO");
    } else {
        mostrarTexto("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}


// VALIDACIONES AL SALIR DEL INPUT

agregarValidacionBlur("txtIngresos", "errorIngresos");
agregarValidacionBlur("txtEgresos", "errorEgresos");
agregarValidacionBlur("txtMonto", "errorMonto");
agregarValidacionBlur("txtPlazo", "errorPlazo");
agregarValidacionBlur("txtTasaInteres", "errorTasaInteres");


// LIMITAR A 5 CARACTERES

limitarCaracteres("txtIngresos");
limitarCaracteres("txtEgresos");
limitarCaracteres("txtMonto");
limitarCaracteres("txtPlazo");
limitarCaracteres("txtTasaInteres");


// BOTON

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);