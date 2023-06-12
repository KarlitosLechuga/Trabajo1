$("#formulario").validate({
  rules: {
      "txtid": {
        required: true,
        number: true
      },
      "nomproducto": {
        required: true,
        
      },
      "txtdescripcion": {
        required: true,
        
      },
      "txtpreciopro": {
        required: true,
        number: true
      },
      "txtdescsus": {
          required: true,
          number: true
      },
      "txtdescofer": {
        required: true,
        number: true
      },
      

  }, // --> Fin de reglas
  messages: {
  
    "txtid": {
        required: 'El campo ID es obligatorio', 
        
    },
    "nomproducto": {
      required: 'Ingrese nombre del producto',
      
  },
    "txtdescripcion": {
        required: 'Ingrese descripción',
        
    },
    "txtpreciopro": {
        required: 'Ingrese precio',
        
    },
    "txtdescsus": {
        required: 'Ingrese descuento suscripción',
        
    },
    "txtdescofer": {
        required: 'Ingrese descuento oferta', 
        
    },
    
  } //-->Fin de mensajes
  

});

$("#Guardar").on("click", function () {
  alert("Los datos se han guardado correctamente");
});

$("#eliminar").on("click", function () {
  $("#formulario")[0].reset();
});
