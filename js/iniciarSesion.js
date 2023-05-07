$("#ingresar_sesion").validate({
    rules: {
        "txtcorreo": {
            required: true,
            email: true
        },
        
        "txtcontrasena": {
            required: true,
            minlength: 5
        },

    }, // --> Fin de reglas
    messages: {
      "txtcorreo": {
          required: 'Ingrese email',
          email: 'No cumple formato'
      },
      
      "txtcontrasena": {
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

