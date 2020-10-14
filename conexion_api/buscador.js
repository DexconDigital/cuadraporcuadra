

$(document).ready(function () {
    // si el campo codigo tiene un valor los demas  campos se desabilitan
    $('#codigo_buscar').keyup(function () {
        var value = $(this).val();
        if(value.length>0){
            $('#ciudad_buscar').attr("disabled", true);
            $('#barrio_buscar').attr("disabled", true);
            $('#tipo_inmueble_buscar').attr("disabled", true);
            $('#tipo_gestion_buscar').attr("disabled", true);
            $('#precio_minimo_buscar').attr("disabled", true);
            $('#precio_maximo_buscar').attr("disabled", true);
            $('#banos_buscar').attr("disabled", true);
            $('#alcobas_buscar').attr("disabled", true);
        }else{
            $('#ciudad_buscar').removeAttr("disabled");
            $('#barrio_buscar').removeAttr("disabled");
            $('#tipo_inmueble_buscar').removeAttr("disabled");
            $('#tipo_operacion_buscar').removeAttr("disabled");
            $('#precio_minimo_buscar').removeAttr("disabled");
            $('#precio_maximo_buscar').removeAttr("disabled");
            $('#banos_buscar').removeAttr("disabled");
            $('#alcobas_buscar').removeAttr("disabled");
        }
    });

    // Funcion para cargar departamentos, ciudades y barrios
    $.ajax({
        url: 'https://www.simi-api.com/ApiSimiweb/response/v2/departamento',
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:' + TOKEN));
        },
        'dataType': "json",
         success: function (depto) {
            for (var i = 0; i < depto.length; i++) {
                // Funcion para traer ciudades
                $.ajax({
                    url: 'https://www.simi-api.com/ApiSimiweb/response/v2/ciudad/idDepartamento/' + depto[i].id,
                    type: 'GET',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader(
                            'Authorization',
                            'Basic ' + btoa('Authorization:' + TOKEN));
                    },
                    'dataType': "json",
                    success: function (ciudad) {
                        var ciudades_resultados = " ";
                        for (var i = 0; i < ciudad.length; i++) {
                            ciudades_resultados +=
                                '<option value="' + ciudad[i].id + '">' +
                                    ciudad[i].nombre +
                                '</option>';
                        }
                        $('#ciudad_buscar').append(ciudades_resultados);
                        // Funcion para traer barrios
                        $("#ciudad_buscar").change(function () {
                            var ciudad_id = $("#ciudad_buscar option:selected").val();
                            // Limpia el selected de los barrios cada vez que se cambia de ciudad
                            $('#barrio_buscar').empty();
                                $.ajax({
                                    url: 'https://www.simi-api.com/ApiSimiweb/response/v2/barrios/idCiudad/' + ciudad_id,
                                    type: 'GET',
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader(
                                            'Authorization',
                                            'Basic ' + btoa('Authorization:' + TOKEN));
                                    },
                                    'dataType': "json",
                                    success: function (barrios) {
                                        var barrios_resultados = " ";
                                        barrios_resultados +=
                                                '<option value="0">barrio</option>';
                                        for (var i = 0; i < barrios.length; i++) {
                                            barrios_resultados +=
                                                '<option value="' + barrios[i].id + '">' +
                                                barrios[i].nombre +
                                                '</option>';
                                        }
                                        $('#barrio_buscar').append(barrios_resultados);
                                    }
                                });
                        });

                    }
                });
            }
        }
    });

    // Funcion para traer tipo de gestion ejm: "arriendo, venta etc."
    $.ajax({
        url: 'https://www.simi-api.com/ApiSimiweb/response/gestion',
           type: 'GET',
           beforeSend: function (xhr) {
           xhr.setRequestHeader(
              'Authorization',
              'Basic ' + btoa('Authorization:'+TOKEN));
           },
           'dataType': "json",
           success:function(gestion)
           {
            var gestion_resultados = " ";
            for (var i = 0; i < gestion.length; i++) {
                gestion_resultados +=
                '<option value="' + gestion[i].idGestion + '">' +
                    gestion[i].Nombre +
                    '</option>';
            }
            $('#tipo_gestion_buscar').append(gestion_resultados);
           }             
       });

    // Funcion que trae el tipo de inmueble ejm: apartamento casa etc
    $.ajax({
        url: 'https://www.simi-api.com/ApiSimiweb/response/v2/tipoInmuebles/unique/1',
           type: 'GET',
           beforeSend: function (xhr) {
           xhr.setRequestHeader(
              'Authorization',
              'Basic ' + btoa('Authorization:'+TOKEN));
           },
           'dataType': "json",
           success:function(operacion)
           {
              var operacion_resultados = " ";
              for (var i = 0; i < operacion.length; i++) {
                  operacion_resultados +=
                    '<option value="' + operacion[i].idTipoInm + '">' +
                      operacion[i].Nombre +
                      '</option>';
              }
              $('#tipo_inmueble_buscar').append(operacion_resultados);
             }
                       
       });

    // Buscar por medio del boton creado en el buscador
    $('#buscar').click(function () {
        busqueda();
    });

    // buscar por medio de la tecla enter
    $('body').keyup(function(e) {
        if(e.keyCode == 13) {
            busqueda();
        }
    });
});

// Definir las variables que se van a usar para almacenar los datos que se traen del buscador
var code, 
ciudad_buscar, 
barrio_buscar, 
gestion_buscar, 
tipo_inmueble_buscar, 
alcobas_buscar, 
banos_buscar, 
precio_maximo_buscar, 
precio_minimo_buscar,
area_maxima_buscar,
area_minima_buscar;
// Esta funcion trae los campos digitados en el buscador
var busqueda = function(){
    code = $("#codigo_buscar").val();
    ciudad_buscar = $('#ciudad_buscar option:selected').val();
    barrio_buscar = $('#barrio_buscar option:selected').val();
    gestion_buscar = $('#tipo_gestion_buscar option:selected').val();
    tipo_inmueble_buscar = $('#tipo_inmueble_buscar option:selected').val();
    alcobas_buscar= $('#alcobas_buscar').val();
    banos_buscar= $('#banos_buscar').val();
    precio_minimo_buscar = $('#precio_minimo_buscar').val();
    precio_maximo_buscar = $('#precio_maximo_buscar').val();
    area_minima_buscar = $('#area_minima_buscar').val();
    area_maxima_buscar = $('#area_maxima_buscar').val();

    // Si no trae nada del buscador definirla en cero
    ciudad_buscar = existeCampo(ciudad_buscar);
    barrio_buscar = existeCampo(barrio_buscar);
    gestion_buscar = existeCampo(gestion_buscar);
    tipo_inmueble_buscar = existeCampo(tipo_inmueble_buscar);
    alcobas_buscar = existeCampo(alcobas_buscar);
    banos_buscar = existeCampo(banos_buscar);
    precio_minimo_buscar = existeCampo(precio_minimo_buscar);
    precio_maximo_buscar = existeCampo(precio_maximo_buscar);
    area_minima_buscar = existeCampo(area_minima_buscar);
    area_maxima_buscar = existeCampo(area_maxima_buscar);

    var url_cuadra = "https://cuadraporcuadrainmobiliaria.com/";
    // var url_cuadra ="http://localhost:3000/"

    if (code !== "") {
        window.location.href = 'detalleInmueble/codigo/' + code + '';
    }else{
        
        window.location.href = url_cuadra+'inmuebles/'+
        'ciudad/'+ciudad_buscar+'/'+
        'barrio/'+barrio_buscar+'/'+
        'inmueble/'+tipo_inmueble_buscar+'/'+
        'gestion/'+gestion_buscar+'/'+
        'banos/'+banos_buscar+'/'+
        'alcobas/'+alcobas_buscar+'/'+
        'premin/'+precio_minimo_buscar+'/'+
        'premax/'+precio_maximo_buscar+'/'+
        'armin/'+area_minima_buscar+'/'+
        'armax/'+area_maxima_buscar+'/'+
        'pagina/1';
        "";
    }
}

