// $(document).ready(function () {

//     // Las acciones de Jquery van dentro de la función ready

//     $('#btn-obtener-ropa').click(function () { // Crear evento de click del boton usando su id #btn-obtener

//         $.get('https://fakestoreapi.com/products', // API donde se obtienen los datos

//         function(data){

//             $('#tabla-ropa tbody').empty();

//             $.each(data , function(i, item) {  // Recorrer las filas devueltas por la API

//                 // Crear el codigo HTML para agegar filas a la tabla usando los campos de cada fila

//                 var fila = '';
//                 fila += '<tr>';
//                 fila += '    <td>' + item.id + '</td>';
//                 fila += '    <td>' + item.price + '</td>';
//                 fila += '    <td><img src="' + item.image + '"></td>';
//                 fila += '    <td>' + item.description + '</td>';
//                 fila += '</tr>';
//                 $('#tabla-ropa').append(fila);   
            
//             });
//         });

//     }); // Cierre del click 

// });  // Cierre del ready

// // Puedes probar otras APIs en http://jsonplaceholder.typicode.com


$(document).ready(function() {
    // Las acciones de Jquery van dentro de la función ready
    $('#btn-obtener-ropa').click(function() {
      // Crear evento de click del boton usando su id #btn-obtener
      $.get('https://fakestoreapi.com/products', function(data) {
        $('#tabla-ropa tbody').empty();
        var galeria = $("<div class='fi-gallery'></div>");
        var row = $("<div class='fi-row'></div>");
        galeria.append(row);
  
        $.each(data, function(i, item) {
          var column = $("<div class='fi-column'></div>");
          var image = $("<div class='fi-image'></div>");
          var img = $("<img></img>");
          img.attr("src", item.image);
          var description = $("<div class='fi-description'></div>");
          var price = $("<p>" + "$" + item.price + "</p>");
          var name = $("<p>" + item.title + "</p>");
          var color = $("<p>" + item.color + "</p>");
  
          description.append(price);
          description.append(name);
          description.append(color);
  
          image.append(img);
          image.append(description);
          column.append(image);
          row.append(column);
        });
  
        $("#tabla-ropa").replaceWith(galeria);
      });
    });
  });