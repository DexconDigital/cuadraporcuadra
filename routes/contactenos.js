const express = require("express");
const router = express.Router();
const title = "Contactenos";
const nodemailer= require('nodemailer');


router.get("/", function(req, res, next) {
    res.render("contactenos", {title});
  }); 

// Formulario de contacto
router.post('/enviar', function(req, res, next){
  var transporter  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'masivoinmobiliarias@gmail.com',
      pass: 'dexcon2019@'
    }
  });
  var mailOptions = {
    from: 'no-reply@cuadraporcuadra.com <info@cuadraporcuadra.com>',
    to: ['comercial@cuadraporcuadra.com','juan.aristizabal@cuadraporcuadra.com'],
    subject :'Mensaje desde la Pagina web de Cuadra por Cuadra',
    text: 'Se ha enviado un mensaje desde el formulario de contacto Nombre: '+req.body.nombre+' Email: '+req.body.email+ ' Mensaje: '+req.body.mensaje+' Telefono: '+req.body.telefono+'',
    html: '<p> Se ha enviado un mensaje desde el formulario de contacto de la pagina de la pagina de Cuadra Por Cuadra'+
          '<ul>'+
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