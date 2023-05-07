// Obtener los elementos de nombre y cantidad
const nombreInput = document.getElementById("nomprod");
const cantidadInput = document.getElementById("cantipro");

// Obtener los elementos de mensaje de error
const nombreError = document.getElementById("nomprod-error");
const cantidadError = document.getElementById("cantipro-error");

// Agregar un evento de submit al formulario
document.querySelector("form").addEventListener("submit", function(event) {
  // Validar el campo de nombre
  if (nombreInput.value.trim() === "") {
    // Mostrar el mensaje de error
    nombreError.innerHTML = "El campo de nombre es obligatorio";
    nombreError.classList.add("error");
    event.preventDefault();
  } else {
    // Ocultar el mensaje de error
    nombreError.innerHTML = "";
    nombreError.classList.remove("error");
  }

  // Validar el campo de cantidad
  if (cantidadInput.value.trim() === "") {
    // Mostrar el mensaje de error
    cantidadError.innerHTML = "El campo de cantidad es obligatorio";
    cantidadError.classList.add("error");
    event.preventDefault();
  } else {
    // Ocultar el mensaje de error
    cantidadError.innerHTML = "";
    cantidadError.classList.remove("error");
  }
});