var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ************************* Busqueda de archvos router***************************************
var indexRouter = require('./routes/index');
var nosotrosRouter = require('./routes/nosotros');
var inmueblesRouter = require('./routes/inmuebles');
var proyectosRouter = require('./routes/proyectos');
var clientesRouter = require('./routes/clientes');
var contactenosRouter = require ('./routes/contactenos');
var detalleInmuebleRouter = require('./routes/detalleInmueble');

// *****************************Fin busqueda de archivos Router****************************************


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// ***************S

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ****************************** Declarar archivos estaticos********************************
app.use('/static', express.static(path.join(__dirname, 'public')));
// declarar ruta de archivos de la conexion con el API
app.use('/api', express.static(path.join(__dirname, 'conexion_api')));

// incluir Boostrap
app.use('/css', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/popper.js/dist')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/js')));

// wow . js 

app.use('/wowjs', express.static(path.join(__dirname + '/node_modules/wow.js/dist')));
app.use('/wowcss', express.static(path.join(__dirname + '/node_modules/wow.js/css/libs')));

//include Font-aweome
app.use('/fontcss', express.static(path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free')));
app.use('/fontjs', express.static(path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free')));

app.use('/slick', express.static(path.join(__dirname + '/node_modules/slick-carousel/slick')));
app.use('/leaflet', express.static(path.join(__dirname + '/node_modules/leaflet/dist')));

app.use('/toastr', express.static(path.join(__dirname + '/node_modules/toastr/build')));

// ****************************** Fin Declarar archivos estaticos********************************



app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/inmuebles', inmueblesRouter);
app.use('/proyectos', proyectosRouter);
app.use('/clientes/', clientesRouter);
app.use('/contactenos', contactenosRouter);
app.use('/detalleInmueble', detalleInmuebleRouter);

// *****************************************************Modo debugger 
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// ******************************************************* Paginas de error 
// app.use(function(request, response){
//   if(!request.secure){
//     response.redirect("https://" + request.headers.host + request.url);
//   }
// });


app.use(function(req, res) {
  res.status(400);
 res.render('404.pug', {title: '404 Error! Pagina No Encontrada'});
 });
 
 // Handle 500
 app.use(function(error, req, res, next) {
    res.status(500);
    res.render('500.pug', {title:'505 Error! Pagina No Encontrada'});
 });

module.exports = app;
