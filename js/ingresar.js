// // Obtener los campos de correo y contraseña
// var correoInput = document.getElementById('correo');
// var contrasenaInput = document.getElementById('contraseña');

// // Función para validar el correo electrónico
// function validarCorreo() {
//   // Obtener el valor del campo de correo
//   var correo = correoInput.value;

//   // Validar que se haya ingresado un correo electrónico
//   if (!correo) {
//     correoInput.classList.add('is-invalid');
//     correoInput.classList.remove('is-valid');
//     correoInput.nextElementSibling.innerHTML = 'Ingresar correo';
//     return false;
//   }

//   // Validar que el correo tenga el formato correcto
//   var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!correoRegex.test(correo)) {
//     correoInput.classList.add('is-invalid');
//     correoInput.classList.remove('is-valid');
//     correoInput.nextElementSibling.innerHTML = 'Correo inválido';
//     return false;
//   }

//   // Si llegamos hasta aquí, el correo es válido
//   correoInput.classList.remove('is-invalid');
//   correoInput.classList.add('is-valid');
//   correoInput.nextElementSibling.innerHTML = '';
//   return true;
// }

// // Función para validar la contraseña
// function validarContrasena() {
//   // Obtener el valor del campo de contraseña
//   var contrasena = contrasenaInput.value;

//   // Validar que se haya ingresado una contraseña
//   if (!contrasena) {
//     contrasenaInput.classList.add('is-invalid');
//     contrasenaInput.classList.remove('is-valid');
//     contrasenaInput.nextElementSibling.innerHTML = 'Ingresar contraseña';
//     return false;
//   }

//   // Validar que la contraseña tenga al menos 8 caracteres
//   if (contrasena.length < 8) {
//     contrasenaInput.classList.add('is-invalid');
//     contrasenaInput.classList.remove('is-valid');
//     contrasenaInput.nextElementSibling.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
//     return false;
//   }

//   // Si llegamos hasta aquí, la contraseña es válida
//   contrasenaInput.classList.remove('is-invalid');
//   contrasenaInput.classList.add('is-valid');
//   contrasenaInput.nextElementSibling.innerHTML = '';
//   return true;
// }

// // Función para validar el formulario completo
// function validarFormulario(event) {
//   // Evitar que se envíe el formulario si no está completo o válido
//   event.preventDefault();

//   // Validar el correo y la contraseña
//   var correoValido = validarCorreo();
//   var contrasenaValida = validarContrasena();

//   // Si ambos campos son válidos, enviar el formulario
//   if (correoValido && contrasenaValida) {
//     event.target.submit();
//   }
// }

// // Agregar los eventos de validación a los campos correspondientes
// correoInput.addEventListener('input', validarCorreo);
// contrasenaInput.addEventListener('input', validarContrasena);

// // Agregar el evento de validación al formulario completo
// var formulario = document.querySelector('form');
// formulario.addEventListener('submit', validarFormulario);

$("#formularioin").validate({
  rules: {

      "txtcorreo": {
          required: true,
          email: true,
      },

      "txtcontraseña": {
          required: true,
          minlength: 5
      },


  }, // --> Fin de reglas
  messages: {

    "txtcorreo": {
        required: 'Ingrese email',
        email: 'El formato del correo no está correcto',
    },
    "txtcontraseña": {
        required: 'Ingrese Contraseña',
        minlength: 'El largo de la contraseña debe ser al menos 5 caracteres'
    },

  } //-->Fin de mensajes
  

});

$("#Ingresar").on("click", function () {
  alert("Inicio de Sesión correcto");
});

