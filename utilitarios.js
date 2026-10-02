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

        if (this.value.length > 5) {
            this.value = this.value.slice(0, 5);
        }

    });

}