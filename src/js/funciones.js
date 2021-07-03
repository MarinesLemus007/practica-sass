$(document).ready(function () {

    $(".banner-inicio").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

    $.ajax({
        url: '../src/data/servicios.json',
        success: function(respuesta) {
    
          var listaUsuarios = $(".contenedor");
          $.each(respuesta, function(index, elemento) {
            listaUsuarios.append(
                '<div class="box">'
              +      '<h3>'+elemento.titulo+'</h3>'
              +      '<p>'+elemento.descripcion+'</p>'
              +          '<div>'
              +          '<a class="button" href="'+elemento.ancla+'"> Ancla </a>'
              +      '</div>'
              +  '</div>'
            );    
          });
        },
        error: function() {
          console.log("No se ha podido obtener la información");
        }
      });
  });