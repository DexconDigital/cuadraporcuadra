
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    
    
$('#send_detalle').click(() => {
    var fullUrl = location.protocol+'//'+location.hostname+(location.port ? ':' +location.port: '');
    var datos = $('#form_detalle').serialize();
    $.ajax({
        url: fullUrl+'/detalleInmueble/enviarDetalle',
        type: 'POST',
        dataType: "json",
        data: datos,
        success: function(data){
        },
        error: function(e){
            toastr.success('Enviado', 'Mensaje Enviado, pronto nos comunicaremos contigo');
            $("#form_detalle")[0].reset();
            console.log(e);
        }
    });
    return false;
    
})