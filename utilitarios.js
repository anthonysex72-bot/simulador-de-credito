function obtenerNumero(idInput) {
    return parseFloat(document.getElementById(idInput).value);
}


function mostrarNumero(idSpan, valor) {
    document.getElementById(idSpan).innerText = valor.toFixed(2);
}


function mostrarTexto(idElemento, texto) {
    document.getElementById(idElemento).innerText = texto;
}


function agregarValidacionBlur(idInput, idError) {

    document.getElementById(idInput).addEventListener("blur", function () {
        validarInput(idInput, idError);
    });

}


function limitarCaracteres(idInput) {

    document.getElementById(idInput).addEventListener("input", function () {

        let valor = this.value;

        let digitos = valor.replace(".", "");

        if (digitos.length > 6) {

            let cantidadPermitida = 6;

            let resultado = "";
            let contador = 0;

            for (let i = 0; i < valor.length; i++) {

                if (valor[i] !== ".") {
                    contador++;
                }

                if (contador > cantidadPermitida) {
                    break;
                }

                resultado += valor[i];
            }

            this.value = resultado;
        }

    });
}


