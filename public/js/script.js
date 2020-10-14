(function () {
  "use strict";

  $('.subir').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.subir').fadeIn(500);
    } else {
      $('.subir').fadeOut(500);
    }

  });
  // Define your library strictly...
  var valor = true



  $(document).ready(function () {
    $("#hovercard1").hover(function () {
      $('.contenedor1').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor1').css("border-color", "#f3f3f3");
    });
  });
  $(document).ready(function () {
    $("#hovercard2").hover(function () {
      $('.contenedor2').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor2').css("border-color", "#f3f3f3");
    });
  });
  $(document).ready(function () {
    $("#hovercard3").hover(function () {
      $('.contenedor3').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor3').css("border-color", "#f3f3f3");
    });
  });
  $(document).ready(function () {
    $("#hovercard4").hover(function () {
      $('.contenedor4').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor4').css("border-color", "#f3f3f3");
    });
  });

  $(document).ready(function () {
    $("#hovercard5").hover(function () {
      $('.contenedor5').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor5').css("border-color", "#f3f3f3");
    });
  });
  $(document).ready(function () {
    $("#hovercard6").hover(function () {
      $('.contenedor6').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor6').css("border-color", "#f3f3f3");
    });
  });
  $(document).ready(function () {
    $("#hovercard6").hover(function () {
      $('.contenedor6').css("border-color", "rgb(239, 170, 22)");
    }, function () {
      $('.contenedor6').css("border-color", "#f3f3f3");
    });
  });
})();

$('.botonF1').click(function () {
  if ($('.btn1').hasClass('animacionVer')) {
      $('.btn1').removeClass('animacionVer');
  } else {
      $('.btn1').addClass('animacionVer');
  }
})

function botonver(clase) {
  var uno = document.getElementById(clase);
  validar(uno);
}

var validar = (valor) => {
  if (valor.innerText == "Ver más") {
    valor.innerText = "Ver menos";
  } else {
    valor.innerText = "ver más"
  }
}