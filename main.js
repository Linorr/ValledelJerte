// Agregar un evento de clic a todas las imágenes
var imagenes = document.querySelectorAll('.imagen');
imagenes.forEach(function(imagen) {
  imagen.addEventListener('click', function() {
    // Crear un elemento de imagen para la imagen ampliada
    var imagenAmpliada = document.createElement('img');
    imagenAmpliada.src = this.src;

    // Agregar la imagen ampliada al elemento #imagenAmpliada
    var contenedor = document.querySelector('#imagenAmpliada');
    contenedor.innerHTML = '';
    contenedor.appendChild(imagenAmpliada);

    // Mostrar el elemento #imagenAmpliada
    contenedor.style.display = 'block';
  });
});

// Agregar un evento de clic al elemento #imagenAmpliada para ocultarlo
var imagenAmpliada = document.querySelector('#imagenAmpliada');
imagenAmpliada.addEventListener('click', function() {
  this.style.display = 'none';
});
// Seleccionar el formulario y los campos de entrada
const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// Agregar un evento de envío de formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente

  // Validar los campos de entrada
  if (nombre.value.trim() === '') {
    alert('Por favor, ingrese su nombre');
    nombre.focus();
    return false;
  }

  if (email.value.trim() === '') {
    alert('Por favor, ingrese su correo electrónico');
    email.focus();
    return false;
  }

  if (mensaje.value.trim() === '') {
    alert('Por favor, ingrese un mensaje');
    mensaje.focus();
    return false;
  }

  // Crear una instancia del objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open('POST', 'enviar.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Enviar la solicitud utilizando AJAX
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Mensaje enviado correctamente');
      form.reset();
    }
  };

  const data = `nombre=${nombre.value}&email=${email.value}&mensaje=${mensaje.value}`;
  xhr.send(data);
});
// Agregar un evento de clic a todas las imágenes
var imagenes = document.querySelectorAll('.imagen');
imagenes.forEach(function(imagen) {
  imagen.addEventListener('click', function() {
    // Crear un elemento de imagen para la imagen ampliada
    var imagenAmpliada = document.createElement('img');
    imagenAmpliada.src = this.src;
    imagenAmpliada.style.maxWidth = '90%'; // Ancho máximo de la imagen
    imagenAmpliada.style.border = '5px solid black'; // Borde de la imagen
    // Ajustar el tamaño de la imagen ampliada según sea necesario
    imagenAmpliada.style.width = '800px';
    imagenAmpliada.style.height = 'auto';

    // Agregar la imagen ampliada al elemento #imagenAmpliada
    var contenedor = document.querySelector('#imagenAmpliada');
    contenedor.innerHTML = '';
    contenedor.appendChild(imagenAmpliada);

    // Mostrar el elemento #imagenAmpliada
    contenedor.style.display = 'block';
  });
});

// Agregar un evento de clic al elemento #imagenAmpliada para ocultarlo
var imagenAmpliada = document.querySelector('#imagenAmpliada');
imagenAmpliada.addEventListener('click', function() {
  this.style.display = 'none';
});