




const imagenes_slides = [
    {
        ruta: "https://firebasestorage.googleapis.com/v0/b/portalcuadraporcuadra.appspot.com/o/paginaWeb%2Fconfig%2Fbanner1?alt=media&token=06903d50-0707-418d-8acf-8f165a028171",
        alt: "Proyecto Bosston Lives",
        link: "http://bosstonlives.com"
    },
    {
        ruta: "./static/cliente/imagenes/slide2.png",
        alt: "Nuestra meta son tus sueños",
        link: "http://cuadraporcuadrainmobiliaria.com"
    },
    {
        ruta: "https://firebasestorage.googleapis.com/v0/b/portalcuadraporcuadra.appspot.com/o/paginaWeb%2Fconfig%2Fbanner3?alt=media&token=79131614-f3b1-4385-800f-9a67c2f4c898",
        alt: "Proyecto Bosston Lives",
        link: "http://bosstonlives.com"
    },
    {
        ruta: "./static/cliente/imagenes/slide2.png",
        alt: "Nuestra meta son tus sueños",
        link: "http://cuadraporcuadrainmobiliaria.com"
    }
];

//****************************************Fin de imagenes Slide**************************************** */

//******************************************Imagenes de proyectos****************************************+ */
var imagenes_proyectos = [
    {
        ruta: "./static/cliente/imagenes/slide3.png",
        alt: "Proyecto Bosston Lives",
        link: "http://bosstonlives.com"
    }
]
//****************************************Fin de imagenes proyectos************************************** */

// *************************************Infomracion asesores********************************
var asesores = [
    {
        rutaImagen: "./static/cliente/imagenes/SantiagoLedesmaB.png",
        nombreAsesor: "Santiago Ledesma",
        telefono: "3173003586"
    },
    {
        rutaImagen: "./static/cliente/imagenes/JuanDavidSanchez.png",
        nombreAsesor: "Juan David Sanchez",
        telefono: "3173003586"
    },
    {
        rutaImagen: "./static/cliente/imagenes/Juan Mantilla.png",
        nombreAsesor: "Juan Mantilla",
        telefono: "3173003586"
    },
    {
        rutaImagen: "./static/cliente/imagenes/Millerlay Panesso.png",
        nombreAsesor: "Millerlay Panesso",
        telefono: "3173003586"
    }
]




// **************************************** NO TOCAR IMPORTANTE  ******************************************

// iniciar variables
var imagenes_slides_content = "";
var imagenes_proyectos_content = "";
var asesor_content = "";

// recorrer imagenes

for (var i = 0; i < imagenes_slides.length; i++) {
    imagenes_slides_content += '<div class="carousel-item"> \
  <a href="'+ imagenes_slides[i].link + '"> \
  <img src="'+ imagenes_slides[i].ruta + '" class="d-block w-100" alt="' + imagenes_slides[i].alt + '"></a> \
    </div>';
}

for (var i = 0; i < imagenes_proyectos.length; i++) {
    imagenes_proyectos_content += '<div class="carousel-item"> \
    <a href="'+ imagenes_proyectos[i].link + '"> \
    <img src="'+ imagenes_proyectos[i].ruta + '" class="d-block w-100" alt="' + imagenes_slides[i].alt + '"></a> \
      </div>';
}

for (var i = 0; i < asesores.length; i++) {
    asesor_content +=
    '<div class="col-12 col-md-6 col-xl-4 d-flex justify-content-center">\
        <div class="card wow flipInX" data-wow-delay="0.9s"><img class="card-img-top" src="'+asesores[i].rutaImagen+'" alt="..." />\
        <div class="card-body">\
            <h5 class="card-title text-uppercase text-center">'+asesores[i].nombreAsesor+'</h5>\
            <div class="card-text">\
                <a class="d-flex justify-content-center w-100" href="https://wa.me/+57'+asesores[i].telefono+'">\
                    <div class="pr-2 d-flex align-items-center"><i class="fab fa-whatsapp">\
                    </i></div><span>'+asesores[i].telefono+'</span></a>\
                </div>\
            </div>\
        </div>\
    </div>';
}



$('.slide_principal').append(imagenes_slides_content);
$('.slide_proyectos').append(imagenes_proyectos_content);
$('.asesores').append(asesor_content);