const IMG_DEFAULT = 'images/no_image.png';

var validarImagenInmueble = function(inmueble){
    if(inmueble.foto1 == ""){
        inmueble.foto1 = IMG_DEFAULT;
    }
    return inmueble.foto1;
} 

var validarImagenDetalleInmueble = function(inmueble){
    if(inmueble.foto == "" || inmueble.foto == undefined){
        inmueble.foto = IMG_DEFAULT;
    }
    return inmueble.foto;
}
var validarUbicacionPrecio = function(inmuebles){
    if(inmuebles.Canon == 0 || inmuebles.Canon == null || inmuebles.Canon == undefined){
        inmuebles.Canon = inmuebles.Venta;
    }else if(inmuebles.Canon == 0  && 
        inmuebles.Venta == 0 || inmuebles.Venta == ""){
        inmuebles.Canon = inmuebles.valorFiltro;
    }
    return inmuebles.Canon;
}
var existeElemento= function(propiedad, elemento){
    if(propiedad == "" || propiedad == 0 || propiedad == undefined){
        $(elemento).css("display", "none");
    }
}
// funcion que valida la posicion de la pagina
var validarpagina = function(pagina, totalPagina){
    if(pagina == undefined){
        $('.previus').css('display','none');
        $('.next').css('display', 'none');
    }else if(pagina == 1){
        if(pagina == totalPagina){
            $('.previus').css('display','none');
            $('.next').css('display', 'none');
        }else{
            $('.previus').css('display','none');
            console.log("estoyaqui3");
        }
        
    }else if(pagina == totalPagina){
        $('.next').css('display', 'none');
        console.log("estoyaqui1");
    }
}

// Funcion que me da la cantidad de paginas para el paginador
var cantidadPaginas = function(totalPagina, totalInmuebles){
    totalPagina = Math.ceil(totalInmuebles/totalPagina);
    return totalPagina;
}

var existeCampo = function(campo){
    if(campo == null || campo == "Ciudad" || campo == "null" || campo == 0){
        campo = 0;
    }
    return campo;
}