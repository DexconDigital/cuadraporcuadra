// Cambio de imagen
const RUTA_BANNER_PROYECTO = "/static/cliente/imagenes/fondo-banner.jpg";



const frase_proyectos = "Conoce todos los proyectos que tenemos para ti";

// array de proyectos 
var proyectos = [
    {
        rutaImagen: "./static/cliente/imagenes/slide3.png",
        alt:"Imagen del proyecto de vivienda BosstonLives",
        titulo: "Proyecto Bosston Lives",
        link: "http://bosstonlives.com",
        descripcion: "Conoce Nuestro ultimo proyecto con todas las comodidades que te mereces"
    }
]





// ********************************* NO TOCAR
$('.banner_proyecto').attr('src',RUTA_BANNER_PROYECTO);
$('.proyectos_frase').append(frase_proyectos);

var contenido_proyectos = "";

for (var i = 0; i < proyectos.length; i++) {
    contenido_proyectos+='<div class="col-12 col-md-5">\
        <div class="card mt-4 mb-4">\
            <div class="contenedor-imagen h330px">\
                <a href="'+proyectos[i].link+'" target="blank">\
                <img class="card-img-top object-contain" src="'+proyectos[i].rutaImagen+'" alt="'+proyectos[i].alt+'"/></a>\
            </div>\
            <div class="card-body">\
                <a href="'+proyectos[i].link+'" target="blank">\
                    <h5 class="card-title">'+proyectos[i].titulo+'</h5>\
                </a>\
                <p class="card-text mt-4">'+proyectos[i].descripcion+'</p>\
                <a class="btn btn-success w-50 mx-auto" href="'+proyectos[i].link+'" target="blank">Ver m&aacute;s</a>\
            </div>\
        </div>\
    </div>';
}

$('#proyectos_lista').append(contenido_proyectos);


