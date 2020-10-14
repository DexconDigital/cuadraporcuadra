const express = require("express");
const router = express.Router();
const title = "Inmuebles";
var request = require("request");
var btoa = require('btoa');


const headers = {
  'Authorization': 'Basic ' + btoa('Authorization:SWkagxVTqEfdmhboFl0qbq6GUFLTUBfjaP3qSxBt-950') // <- aqui puedes pasar el resultado de tu función que calcula el token
}


router.get("/", function (req, res) {
  var pagina = 1;
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var url_host = req.protocol + '://' + req.get('host');
  var direccion = "https://www.simi-api.com/ApiSimiweb/response/v2.1.1/filtroInmueble/limite/1/total/12/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0"
  var options = {
    method: 'GET',
    uri: direccion,
    headers: headers
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      // response.body.setEncoding('utf-8');
      var r = JSON.parse(body);
      res.render("inmuebles", { title, r, fullUrl, pagina, url_host});
    }
  });

});


router.get("/pagina?/:pagina?", function (req, res) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var url_host = req.protocol + '://' + req.get('host');
  var pagina = req.params.pagina;
  if (pagina == "") {
    pagina = 1;
  }
  var direccion1 = 'https://www.simi-api.com/ApiSimiweb/response/v2.1.1/filtroInmueble/limite/'+pagina+'/total/12/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0'
  var options = {
    method: 'GET',
    uri: direccion1,
    headers: headers
  };
  request(options, function (error, response, body ) {
    if (error) {
      console.log(error);
    } else {
      // response.body.setEncoding('utf-8');
      var r = JSON.parse(body);
      res.render("inmuebles", { title, r, pagina, fullUrl, url_host});
    }
  });
});

  router.get("/ciudad?/:ciudad?/barrio?/:barrio?/inmueble?/:inmueble?/gestion/:gestion?/banos?/:banos?/alcobas?/:alcobas?/premin?/:premin?/premax/:premax?/armin?/:armin?/armax?/:armax?/pagina?/:pagina?", function(req, res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var url_host = req.protocol + '://' + req.get('host');
    var ciudad = req.params.ciudad;
    var barrio = req.params.barrio;
    var inmueble = req.params.inmueble;
    var gestion = req.params.gestion;
    var banos = req.params.banos;
    var alcobas = req.params.alcobas;
    var premin = req.params.premin;
    var premax = req.params.premax;
    var armin = req.params.armin;
    var armax = req.params.armax;
    var pagina = req.params.pagina;

    // pasar los parametros a la URL
    var direccion = 'https://www.simi-api.com/ApiSimiweb/response/v2.1.1/filtroInmueble/'+
              'limite/'+ pagina + '/total/9/departamento/0/ciudad/' + ciudad + '/zona/0/barrio/' + barrio + '/'+
              'tipoInm/'+ inmueble + '/tipOper/' + gestion + '/areamin/' + armin + '/areamax/' + armax + '/valmin/' + premin + '/valmax/' + premax + '/'+
              'campo/0/order/desc/banios/'+ banos + '/alcobas/' + alcobas + '/garajes/0/sede/0/usuario/0';

    var options = {
        method: 'GET',
        uri: direccion,
        headers: headers
    };
    request(options, function (error, response, body) {
      
        if (error) {
            console.log(error);
        } else {
            // response.body.setEncoding('utf-8');
            var r = JSON.parse(body);
            res.render("inmuebles", { title, r, pagina, fullUrl, url_host});
        }
    });
});

module.exports = router;