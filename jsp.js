





document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formularioadopcion").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('inputnombre').value;
  if (nombre.length == 0) {
    alert('ingrese el nombre');
    return;
  }

  var apellido = document.getElementById('inputapellido').value;
  if (apellido.length == 0) {
    alert('ingrese el apellido');
    return;
  }

  var telefono = document.getElementById('inputtelefono').value;
  if (telefono.length == 0) {
    alert('ingrese el telefono');
    return;
  }

  var direccion = document.getElementById('inputdireccion').value;
  if (direccion.length == 0) {
    alert('ingrese la direccion');
    return;
  }

  var localidad = document.getElementById('inputciudad').value;
  if (localidad.length == 0) {
    alert('ingrese la localidad');
    return;
  }




  var dni = document.getElementById('inputdni').value;
  if (dni.length == 0) {
    alert('ingrese el dni');
    return;
  }

  var email = document.getElementById('inputemail').value;
  if (email.length == 0) {
    alert('ingrese el email');
    return;
  }









  this.submit();

}


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contacto").addEventListener('submit', validarForm);
});

function validarForm(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('Nombre').value;
  if (nombre.length == 0) {
    alert('ingrese el nombre');
    return;
  }
  var apellido = document.getElementById('Apellido').value;
  if (apellido.length == 0) {
    alert('ingrese el apellido');
    return;
  }

  var mail = document.getElementById('mail').value;
  if (mail.length == 0) {
    alert('ingrese el mail');
    return;
  }

  var mail = document.getElementById('mail').value;
  if (mail.length == 0) {
    alert('ingrese el mail');
    return;
  }

  this.submit();
}