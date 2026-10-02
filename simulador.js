// AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function validarInput(idInput, idError) {

    let input = document.getElementById(idInput);
    let mensaje = document.getElementById(idError);

    if (input.value === "") {
        mensaje.innerText = "Este campo no puede estar vacío.";
        return false;
    }

    if (!/^\d+$/.test(input.value)) {
        mensaje.innerText = "Solo se permiten números.";
        return false;
    }

    if (input.value.length > 5) {
        mensaje.innerText = "Máximo 5 dígitos.";
        return false;
    }

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