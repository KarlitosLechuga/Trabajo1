$("#formulario1").validate({
  rules: {
      "txtrut": {
        required: true,
        
      },
      "txtnombre": {
        required: true,
      },
      "txtapellido": {
        required: true,
      },
      "txtcorreo": {
          required: true,
          email: true,
      },
      "txtdireccion": {
        required: true,
      },
      
      "txtcontrasena": {
          required: true,
          minlength: 5
      },
      "txtrepetircontrasena": {
          required: true,
          equalTo: '#txtcontrasena'
      },

  }, // --> Fin de reglas
  messages: {
  
    "txtrut": {
        required: 'El campo Rut es obligatorio',
    },
    "txtnombre": {
        required: 'Ingrese su Nombre',
    },
    "txtapellido": {
        required: 'Ingrese su Apellido',
    },
    "txtcorreo": {
        required: 'Ingrese email',
        email: 'El formato del correo no está correcto',
    },
    "txtdireccion": {
        required: 'Ingrese Dirección',
    },
    "txtcontrasena": {
        required: 'Ingrese Contraseña',
        minlength: 'Min. 5 caract'
    },
    "txtrepetircontrasena": {
        required: 'Repita la Contraseña',
        equalTo: ' deben ser iguales'
    }
    
  } //-->Fin de mensajes
  

});

$("#Guardar").on("click", function () {
  alert("Los datos se han guardado correctamente");
});

$("#limpiar").on("click", function () {
  $("#formulario1")[0].reset();
});