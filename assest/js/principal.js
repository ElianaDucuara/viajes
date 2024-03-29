$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) { // Si el desplazamiento es más de 50px
      $('.navbar').addClass('navbar-scrolled'); // Añadir clase para sombra
    } else {
      $('.navbar').removeClass('navbar-scrolled'); // Remover clase para sombra
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function() {
        alert('Esta seguro de enviar los datos?');
    });
});

function highlightCard(cardElement) {
  cardElement.classList.add('card-highlight');
}

function unhighlightCard(cardElement) {
  cardElement.classList.remove('card-highlight');
}


// resetear formulario principal.js

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos el formulario por su ID
  var form = document.getElementById('tuFormularioId'); // Asegúrate de asignar un ID a tu <form>

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Detiene el envío del formulario

    // Limpia los campos del formulario
    form.reset();
  });
});
