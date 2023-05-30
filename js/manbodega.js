$("#formulariobodega").validate({
  rules: {
      "cantipro": {
        required: true,
        number: true,
        
      },
      

  }, // --> Fin de reglas
  messages: {
  
    "cantipro": {
        required: 'El campo Cantidad es obligatorio',
        number: 'Debe ser número'
    },
    
    
  } //-->Fin de mensajes
  

});

$("#Agregar").on("click", function () {
  alert("Los datos se han guardado correctamente");
});

$("#Nuevo").on("click", function () {
  $("#formulariobodega")[0].reset();
});