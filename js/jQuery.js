document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const email = document.querySelector("#correo");
    const password = document.querySelector("#contraseña");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      if (email.value.trim() === "") {
        email.classList.add("is-invalid");
        email.nextElementSibling.innerText = "Ingresa tu correo electrónico";
      } else {
        email.classList.remove("is-invalid");
      }
  
      if (password.value.trim() === "") {
        password.classList.add("is-invalid");
        password.nextElementSibling.innerText = "Ingresa tu contraseña";
      } else {
        password.classList.remove("is-invalid");
      }
  
      // Aquí iría el código para enviar el formulario si los campos son válidos
    });
  });