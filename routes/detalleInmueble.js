const express = require("express");
const router = express.Router();
const title = "Detalle Inmueble";
var request = require("request");
var btoa = require('btoa');
const nodemailer= require('nodemailer');

// Api *************************************************

const direccion="https://simi-api.com/ApiSimiweb/response/v2/inmueble/codInmueble/"
const headers = {
    'Authorization': 'Basic ' + btoa('Authorization:SWkagxVTqEfdmhboFl0qbq6GUFLTUBfjaP3qSxBt-950') // <- aqui puedes pasar el resultado de tu función que calcula el token
}

router.get("/codigo/:valor", function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var codigo_valor = req.params.valor;

    var options = {
        method: 'GET',
        uri: direccion+codigo_valor,
        headers: headers
    };
    request(options, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            // response.body.setEncoding('utf-8');
            var r = JSON.parse(body);

            res.render("detalleInmueble", { title, codigo_valor, r, fullUrl});
        }
    });
});


// Envio de Correo 
router.post('/enviarDetalle', function(req, res, next){
    var transporter  = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'masivoinmobiliarias@gmail.com',
        pass: 'dexcon2019@'
      }
    });
    var mailOptions = {
      from: 'no-reply@cuadraporcuadra.com <info@cuadraporcuadra.com>',
      to: [req.body.correoAsesor,'juan.aristizabal@cuadraporcuadra.com'],
      subject :'Mensaje desde la Pagina web de Cuadra por Cuadra',
      text: 'Se ha enviado un mensaje desde el formulario de contacto Nombre: '+req.body.nombre+' Email: '+req.body.email+ ' Mensaje: '+req.body.mensaje+' Telefono: '+req.body.telefono+'',
      html: '<p> Se ha enviado un mensaje desde el formulario de contacto de la pagina de la pagina de Cuadra Por Cuadra'+
            '<ul>'+
                '<li>Inmueble: Codigo del Inmueble '+req.body.id+' </li>'+
                '<li>Nombre: '+req.body.nombre+' </li>'+
                '<li>Telefono: '+req.body.telefono+'</li>'+
                '<li>email: '+req.body.email+'</li>'+
                '<li>Mensaje: '+req.body.mensaje+'</li>'+
            '</ul>'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        res.send('mensaje no enviado'+error);
      }else{
        res.send('Mensaje Enviado con exito');
      }
    });
  });

module.exports = router;