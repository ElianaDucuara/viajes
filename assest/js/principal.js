$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) { // Si el desplazamiento es más de 50px
      $('.navbar').addClass('navbar-scrolled'); // Añadir clase para sombra
    } else {
      $('.navbar').removeClass('navbar-scrolled'); // Remover clase para sombra
    }
  });