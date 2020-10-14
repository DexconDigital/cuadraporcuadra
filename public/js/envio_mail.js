
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
    
    
$('#send_contact').click(() => {
    var fullUrl = location.protocol+'//'+location.hostname+(location.port ? ':' +location.port: '');
    var datos = $('#form_contacto').serialize();
    $.ajax({
        url: fullUrl+'/contactenos/enviar',
        type: 'POST',
        dataType: "json",
        data: datos,
        success: function(data){
        },
        error: function(e){
            toastr.success('Enviado', 'Mensaje Enviado, pronto nos comunicaremos contigo');
            $("#form_contacto")[0].reset();
        }
    });
    return false;
    
})