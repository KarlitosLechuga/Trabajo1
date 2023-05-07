// Obtener referencias a los campos del formulario
const idInput = document.getElementById('id');
const categoriaSelect = document.getElementById('catproductos');
const nombreSelect = document.getElementById('nomproductos');
const descripcionTextarea = document.getElementById('descripcion');
const precioInput = document.getElementById('preciopro');
const descuentoSusInput = document.getElementById('descsus');
const descuentoOfertaInput = document.getElementById('descofer');

// Obtener referencia al formulario y al botón de guardar
const formulario = document.querySelector('form');
const botonGuardar = document.querySelector('form button[type="submit"]');

// Función para validar que un campo no esté vacío
function validarCampoNoVacio(campo, mensaje) {
  if (campo.value.trim() === '') {
    // Si el campo está vacío, agregar un mensaje de error debajo del campo
    const mensajeError = document.createElement('div');
    mensajeError.classList.add('text-danger');
    mensajeError.innerText = mensaje;
    campo.parentNode.appendChild(mensajeError);
    return false;
  } else {
    // Si el campo no está vacío, eliminar cualquier mensaje de error que hubiera
    const mensajeError = campo.parentNode.querySelector('.text-danger');
    if (mensajeError) {
      mensajeError.remove();
    }
    return true;
  }
}

// Función para validar todos los campos del formulario
function validarFormulario() {
  let esValido = true;

  // Validar cada campo del formulario
  esValido = validarCampoNoVacio(idInput, 'Este campo es obligatorio') && esValido;
  esValido = validarCampoNoVacio(categoriaSelect, 'Este campo es obligatorio') && esValido;
  esValido = validarCampoNoVacio(nombreSelect, 'Este campo es obligatorio') && esValido;
  esValido = validarCampoNoVacio(descripcionTextarea, 'Este campo es obligatorio') && esValido;
  esValido = validarCampoNoVacio(precioInput, 'Este campo es obligatorio') && esValido;
  esValido = validarCampoNoVacio(descuentoSusInput, 'Este campo es obligatorio') && esValido;
  esValido = validarCampoNoVacio(descuentoOfertaInput, 'Este campo es obligatorio') && esValido;

  return esValido;
}

// Agregar un evento de escucha al botón de guardar para validar el formulario antes de enviarlo
botonGuardar.addEventListener('click', function (event) {
  if (!validarFormulario()) {
    event.preventDefault(); // Prevenir el envío del formulario si no es válido
  }
});

// También se podría agregar un evento de escucha al formulario para validar los campos en tiempo real
// Por ejemplo, usando el evento 'input' para validar un campo cada vez que el usuario escriba algo en él