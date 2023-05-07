document.getElementById("miFormulario").addEventListener("submit", function(event) {
    // Detiene el envío del formulario
    event.preventDefault();
  
    // Validación de los campos
    var id = document.getElementById("id").value;
    var rut = document.getElementById("rut").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
  
    if (id.trim() === "") {
      document.getElementById("id").classList.add("is-invalid");
      document.getElementById("idError").innerHTML = "Debe llenar este campo";
    } else {
      document.getElementById("id").classList.remove("is-invalid");
      document.getElementById("idError").innerHTML = "";
    }
  
    if (rut.trim() === "") {
      document.getElementById("rut").classList.add("is-invalid");
      document.getElementById("rutError").innerHTML = "Debe llenar este campo";
    } else {
      document.getElementById("rut").classList.remove("is-invalid");
      document.getElementById("rutError").innerHTML = "";
    }
  
    if (nombres.trim() === "") {
      document.getElementById("nombres").classList.add("is-invalid");
      document.getElementById("nombresError").innerHTML = "Debe llenar este campo";
    } else {
      document.getElementById("nombres").classList.remove("is-invalid");
      document.getElementById("nombresError").innerHTML = "";
    }
  
    if (apellidos.trim() === "") {
      document.getElementById("apellidos").classList.add("is-invalid");
      document.getElementById("apellidosError").innerHTML = "Debe llenar este campo";
    } else {
      document.getElementById("apellidos").classList.remove("is-invalid");
      document.getElementById("apellidosError").innerHTML = "";
    }
  
    if (correo.trim() === "") {
      document.getElementById("correo").classList.add("is-invalid");
      document.getElementById("correoError").innerHTML = "Debe llenar este campo";
    } else {
      document.getElementById("correo").classList.remove("is-invalid");
      document.getElementById("correoError").innerHTML = "";
    }
  
    if (direccion.trim() === "") {
      document.getElementById("direccion").classList.add("is-invalid");
      document.getElementById("direccionError").innerHTML = "Debe llenar este campo";
    } else {
      document.getElementById("direccion").classList.remove("is-invalid");
      document.getElementById("direccionError").innerHTML = "";
    }
  
    // Si todos los campos están llenos, se puede enviar el formulario
    if (id.trim() !== "" && rut.trim() !== "" && nombres.trim() !== "" && apellidos.trim() !== "" && correo.trim() !== "" && direccion.trim() !== "") {
      this.submit();
    }
  });
  