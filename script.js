document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = Number(document.getElementById("edad").value);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre.length < 5){
        alert("El nombre debe tener al menos 5 caracteres");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Ingresa un email válido.");
        return;
    }

    if (edad < 18 || edad > 60 || isNaN(edad)) {
        alert("La edad debe estar entre 18 y 60 años.");
        return;
    }

    if (pais === "") {
        alert("Selecciona un país.");
        return;
    }

    if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
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