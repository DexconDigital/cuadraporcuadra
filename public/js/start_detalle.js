"use strict";

// Inicar carousel
$('#slide-detalle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '#miniaturas'
});
$('#miniaturas').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '#slide-detalle',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }
    ]
});

// Funcion para cambiar iconos + y - 
var icon_mas = "fa-plus-circle",
    icon_menos = "fa-minus-circle",
    id_internas = '#headingOne',
    id_externas = "#headingTwo",
    id_alrededores = "#headingTwo",
    id_externas = '#headingThree';

// escuchar los eventos click de cada acordeon 
$(id_internas).click(function () {
    change_icon(this, icon_mas, icon_menos);
})
$(id_externas).click(function () {
    change_icon(this, icon_mas, icon_menos);
})
$(id_alrededores).click(function () {
    change_icon(this, icon_mas, icon_menos);
})

//Funcion que se puede reutilizar
function change_icon(id, icon1, icon2) {
    if ($(id).children('i').hasClass(icon1)) {
        $(id).children('i').removeClass(icon1);
        $(id).children('i').addClass(icon2);
    } else if ($(id).children('i').hasClass(icon2)) {
        $(id).children('i').removeClass(icon2);
        $(id).children('i').addClass(icon1);
    }
}

//iniciar Mapa
var map = L.map('map').setView([r.latitud, r.longitud], 14);

L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=1rAGHv3KcO1nrS6S9cgI', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
}).addTo(map);

L.marker([r.latitud, r.longitud]).addTo(map)
    .bindPopup('<img src="' + r.fotos[0].foto + '" alt="" width="55px" height="auto"><br>Ubicación')
    .openPopup();