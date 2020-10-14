"use stric";


var ciudad = r.IdCiudad;
var tipo_inmueble = r.IdTpInm;

// Buscar por ciudad y tipo inmueble
$.ajax({
    url: 'https://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/1/total/6/departamento/0/ciudad/' + ciudad + '/zona/0/barrio/0/tipoInm/' + tipo_inmueble + '/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0',
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader(
            'Authorization',
            'Basic ' + btoa('Authorization:' + TOKEN));
    },
    'dataType': "json",
    success: function (data) {
        // Si no se tienen resultados solo por ciudad
        if (data == "Sin Resultados") {
            $.ajax({
                url: 'https://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/1/total/6/departamento/0/ciudad/' + ciudad + '/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(
                        'Authorization',
                        'Basic ' + btoa('Authorization:' + TOKEN));
                },
                'dataType': "json",
                success: function (data) {
                    // Si no se tienen resultados buscar por tipo inmueble
                    if (data == "Sin Resultados") {
                        $.ajax({
                            url: 'https://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/1/total/6/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/' + tipo_inmueble + '/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0',
                            type: 'GET',
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader(
                                    'Authorization',
                                    'Basic ' + btoa('Authorization:' + TOKEN));
                            },
                            'dataType': "json",
                            success: function (data) {
                                // si no se tienen resultados, buscar sin filtros
                                if (data == "Sin Resultados") {
                                    $.ajax({
                                        url: 'https://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/1/total/6/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0',
                                        type: 'GET',
                                        beforeSend: function (xhr) {
                                            xhr.setRequestHeader(
                                                'Authorization',
                                                'Basic ' + btoa('Authorization:' + TOKEN));
                                        },
                                        'dataType': "json",
                                        success: function (data) {
                                            if (data == "Sin Resultados") {
                                                $('similares').hide();
                                            } else {
                                                var inmuebles = data.Inmuebles;
                                                modelo_inmueble(inmuebles);
                                                $("#propiedaes_similares").append(contenedor_inmueble);
                                            }
                                        }
                                    });
                                } else {
                                    var inmuebles = data.Inmuebles;
                                    modelo_inmueble(inmuebles);
                                    $("#propiedaes_similares").append(contenedor_inmueble);
                                }
                            }
                        });
                    } else {
                        var inmuebles = data.Inmuebles;
                        modelo_inmueble(inmuebles);
                        $("#propiedaes_similares").append(contenedor_inmueble);
                    }
                }
            });
        } else {
            var inmuebles = data.Inmuebles;
            modelo_inmueble(inmuebles);
            $("#propiedaes_similares").append(contenedor_inmueble);
        }
    }
});