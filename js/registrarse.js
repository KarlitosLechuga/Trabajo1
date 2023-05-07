$("#formulario1").validate({
    rules: {
        "txtrut": {
          required: true,
          rut: true
        },
        "txtnombre": {
          required: true,
          nombre: true
        },
        "txtapellido": {
          required: true,
          apellido: true
        },
        "txtcorreo": {
            required: true,
            email: true
        },
        "txtdireccion": {
          required: true,
          direccion: true
        },
        
        "txtcontrasena": {
            required: true,
            minlength: 5
        },
        "txtrepetircontrasena": {
            required: true,
            equalTo: '#id_txtContrasena'
        },
  
    }, // --> Fin de reglas
    messages: {
    
      "txtrut": {
          required: 'Ingrese su Rut',
          rut: 'Campo Oligatorio'
      },
      "txtnombre": {
          required: 'Ingrese su Nombre',
          nombre: 'Campo Obligatorio'
      },
      "txtapellido": {
          required: 'Ingrese su Apellido',
          apellido: 'Campo Oligatorio'
      },
      "txtcorreo": {
          required: 'Ingrese email',
          email: 'No cumple formato'
      },
      "txtdireccion": {
          required: 'Ingrese Dirección',
          direccion: 'Campo Oligatorio'
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
  