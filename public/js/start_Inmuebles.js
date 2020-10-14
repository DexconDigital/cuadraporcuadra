"use strict";

// Crear el objeto del icono 

var LeafIcon = L.Icon.extend({
	options: {
		iconSize:     [30, 50],
	}
});

// asignar la imagen al objeto


var icono_cuadra = new LeafIcon({iconUrl: '/static/images/icono_mapa.png'})



var map = L.map('map').setView([r.Inmuebles[0].latitud, r.Inmuebles[0].longitud], 12);

L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=1rAGHv3KcO1nrS6S9cgI', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'
}).addTo(map);

    for (var i = 0; i < r.Inmuebles.length; i++) {
        r.Inmuebles[i].Codigo_Inmueble = r.Inmuebles[i].Codigo_Inmueble.replace("950-", "");
    L.marker([r.Inmuebles[i].latitud, r.Inmuebles[i].longitud], {icon: icono_cuadra}).addTo(map)
        .bindPopup('<div class="text-center popup_inmuebles"><img src="' + r.Inmuebles[i].foto1 + '" alt="" width="100px" height="auto"><br>'+
        '<span>Código:'+r.Inmuebles[i].Codigo_Inmueble+'</span><br>'+
        '<span>'+r.Inmuebles[i].Tipo_Inmueble+' en '+r.Inmuebles[i].Gestion+'<span><br>'+
        '<span><a href="./detalleInmueble/codigo/'+r.Inmuebles[i].Codigo_Inmueble+'">Ver más</a></span></div>'
        )
}


// Reemplazar la palabra pagina de la url para que no se repita 
var valor_reemplazar = "/pagina/"+pagina;
fullUrl = fullUrl.replace(valor_reemplazar, "");
// iniciar paginador
console.log(r);

r.totalInmuebles = parseInt(r.datosGrales.totalInmuebles);
r.totalPagina = parseInt(r.datosGrales.totalPagina);

var total_pagina = r.datosGrales.totalInmuebles/r.datosGrales.totalPagina;
total_pagina = Math.ceil(total_pagina);

$('#pagination-here').bootpag({
    total: total_pagina,          
    page: pagina,           
    maxVisible: total_pagina,   
    leaps: true,
    href: fullUrl+"/pagina/{{number}}",
})

    //page click action
$('#pagination-here').on("page", function(event, num){
    //show / hide content or pull via ajax etc
    $("#content").html("Page " + num);
});