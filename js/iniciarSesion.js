$("#ingresar").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        
        "txtContrasena": {
            required: true,
            minlength: 5
        },

    }, // --> Fin de reglas
    messages: {
      "txtEmail": {
          required: 'Ingrese email',
          email: 'No cumple formato'
      },
      
      "txtContrasena": {
          required: 'Ingrese Contraseña',
          minlength: 'Min. 5 caract'
      },
      
    } //-->Fin de mensajes
    
  
});

$("#Guardar").on("click", function () {
    alert("Bienvenido");
});
  
$("#Olvide-mi-contrasena").on("click", function () {
    alert("Se te a enviado un correo con una clave provisoria, para que puedas cambiar tu contraseña.");
});

