// Debe ir antes de listarInmueble.js || inmuebles_destacados.js || detalle_inmueble.js

var contenedor_inmueble = " ", propiedad_similar =" " , pag =" ";

var modelo_inmueble = function(inmuebles){
    for(var pos=0; pos <inmuebles.length; pos++){
        //Validar si trae imagenes
        validarImagenInmueble(inmuebles[pos]);
        validarUbicacionPrecio(inmuebles[pos]);
         contenedor_inmueble += 
         '<div class="col-12 col-md-6 col-xl-4">'+
                '<div class="card">'+
                '<div class="contenedor-imagen">'+
                '<img class="card-img-top" src="'+inmuebles[pos].foto1+'" alt="Card image cap"/>'+
                '<div class="price"><span>$ '+inmuebles[pos].Canon+'</span></div></div>'+
                '<div class="card-body">'+
                '<h5 class="card-title">'+inmuebles[pos].Tipo_Inmueble+'</h5>'+
                '<ul class="lista-caracteristicas">'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-barcode"></i></div>'+inmuebles[pos].Codigo_Inmueble+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-city"></i></div>'+inmuebles[pos].Gestion+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-bath"></i></div>'+inmuebles[pos].banios+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-bed"></i></div>'+inmuebles[pos].Alcobas+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-compress-arrows-alt"></i></div>'+inmuebles[pos].AreaConstruida+'m<sup>2</sup></li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-warehouse"></i></div>'+inmuebles[pos].garaje+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-thumbtack"></i></div>'+inmuebles[pos].Barrio+', '+inmuebles[pos].Ciudad +'</li>'+
                '</ul>'+
                '</div></div></div>';
                // Codigo html de la propiedad
    }
            return contenedor_inmueble;
}

var propiedades_similares= function(inmuebles){
        for(var pos=0; pos < inmuebles.length; pos++){
                //Validar si trae imagenes
                validarImagenInmueble(inmuebles[pos]);
                propiedad_similar+=
                        // Codigo html de la propiedad
                        'hola';
        }
        return propiedad_similar;
}
                
var modelo_inmueble_destacados = function(inmuebles){
        for(var pos=0; pos <3; pos++){

                var codigo= inmuebles[pos].Codigo_Inmueble
                codigo = codigo.replace("950-", "");
            //Validar si trae imagenes
            validarImagenInmueble(inmuebles[pos]);
            validarUbicacionPrecio(inmuebles[pos]);
             contenedor_inmueble += 
                '<div class="col-12 col-md-6 col-xl-4 wow fadeIn" data-wow-delay="0.8s">'+
                '<div class="card">'+
                '<div class="contenedor-imagen">'+
                        '<a href="./detalleInmueble/codigo/'+codigo+'">'+
                                '<img class="card-img-top" src="'+inmuebles[pos].foto1+'" alt="Card image cap"/>'+
                        '</a>'+
                        '<div class="price"><span>$ '+inmuebles[pos].Canon+'</span></div></div>'+
                '<div class="card-body">'+
                '<a href="./detalleInmueble/codigo/'+codigo+'">'+
                '<h5 class="card-title">'+inmuebles[pos].Tipo_Inmueble+'</h5>'+
                '</a>'+
                '<ul class="lista-caracteristicas">'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-barcode"></i></div>Cód: '+codigo+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-city"></i></div>'+inmuebles[pos].Gestion+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-bath"></i></div>'+inmuebles[pos].banios+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-bed"></i></div>'+inmuebles[pos].Alcobas+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-compress-arrows-alt"></i></div>'+inmuebles[pos].AreaConstruida+'m<sup>2</sup></li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-warehouse"></i></div>'+inmuebles[pos].garaje+'</li>'+
                '<li><div style="width:30px; padding-right:1px;"><i class="fas fa-thumbtack"></i></div>'+inmuebles[pos].Barrio+', '+inmuebles[pos].Ciudad +'</li>'+
                '</ul>'+
                '</div></div></div>';
        }
                return contenedor_inmueble;
    }
