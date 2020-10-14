// Requiere archivo token.js
// Requiere archivo validadores.js
// Requiere archivo modelo_inmueble.js

// valor random
var ramdon = Math.floor((Math.random() * 10) + 1);

$.ajax({
      url: 'https://www.simi-api.com/ApiSimiweb/response/v21/inmueblesDestacados/total/3/limit/0',
       type: 'GET',
       beforeSend: function (xhr) {
       xhr.setRequestHeader(
          'Authorization',
          'Basic ' + btoa('Authorization:'+TOKEN));
       },
       'dataType': "json",
       success:function(destacados){
         var inmuebles = destacados;
         if(destacados == "Sin resultados"){
               contenedor_inmueble += '<h1 class="text-center pb-4 mb-4" >No hay Inmuebles destacados </h1>';
                $("#inmuebles_destacados").append(contenedor_inmueble);
         }else{
            // modelo_inmueble_destacados(inmuebles);
            modelo_inmueble_destacados(inmuebles);
            $("#inmuebles_destacados").append(contenedor_inmueble);
            
         }
       }              
   });