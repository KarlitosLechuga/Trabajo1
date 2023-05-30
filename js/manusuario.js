$("#miformulario").validate({
  rules: {
      "txtid": {
        required: true,
        number: true,
        
      },
      "txtrut": {
        required: true,
        
      },
      "txtnombres": {
        required: true,
      },
      "txtapellidos": {
        required: true,
      },
      "txtcorreo": {
          required: true,
          email: true,
      },
      "txtdireccion": {
        required: true,
      },
      
      "txtcontraseña": {
          required: true,
          minlength: 5
      },
      

  }, // --> Fin de reglas
  messages: {

    "txtid": {
        required: 'El campo ID es obligatorio',
        number: 'El ID debe ser numérico'
    },
    "txtrut": {
        required: 'El campo Rut es obligatorio',
    },
    "txtnombres": {
        required: 'Ingrese Nombre',
    },
    "txtapellidos": {
        required: 'Ingrese Apellido',
    },
    "txtcorreo": {
        required: 'Ingrese email',
        email: 'El formato del correo no está correcto',
    },
    "txtdireccion": {
        required: 'Ingrese Dirección',
    },
    "txtcontraseña": {
        required: 'Ingrese Contraseña',
        minlength: 'Min. 5 caract'
    },
    
    
  } //-->Fin de mensajes
  

});

$("#Guardar").on("click", function () {
  alert("Los datos se han guardado correctamente");
});

$("#limpiar").on("click", function () {
  $("#miFormulario")[0].reset();
});