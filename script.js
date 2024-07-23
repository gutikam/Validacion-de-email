const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const formulario = document.getElementById('formulario');
const mensajeDiv = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (validarEmail(email)) {
        mensajeDiv.textContent = 'El correo electrónico es válido.';
        mensajeDiv.className = 'mensaje success';
    } else {
        mensajeDiv.textContent = 'El correo electrónico no es válido.';
        mensajeDiv.className = 'mensaje error';
    }
});