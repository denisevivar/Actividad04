document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorEdad").textContent = "";
    document.getElementById("errorPais").textContent = "";
    document.getElementById("errorTerminos").textContent = "";

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = Number(document.getElementById("edad").value);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    let formularioValido = true;

    if (nombre.length < 5) {
        document.getElementById("errorNombre").textContent =
            "El nombre debe tener al menos 5 caracteres.";
        formularioValido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent =
            "Ingresa un email válido.";
        formularioValido = false;
    }

    if (edad < 18 || edad > 60 || isNaN(edad)) {
        document.getElementById("errorEdad").textContent =
            "La edad debe estar entre 18 y 60 años.";
        formularioValido = false;
    }

    if (pais === "") {
        document.getElementById("errorPais").textContent =
            "Selecciona un país.";
        formularioValido = false;
    }

    if (!terminos) {
        document.getElementById("errorTerminos").textContent =
            "Debes aceptar los términos y condiciones.";
        formularioValido = false;
    }

    if (!formularioValido) {
        return;
    }

    const parametros = new URLSearchParams({
        nombre,
        email,
        edad,
        pais
    });

    window.location.href = `resultado.html?${parametros.toString()}`;
});