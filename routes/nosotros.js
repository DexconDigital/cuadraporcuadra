const express = require("express");
const router = express.Router();
const title = "Nosotros";

// **************************imagen del banner*****************************

// *************************fin de imagen del banner************************


// ***********************Ruta del video***************************
// ***********************Fin de ruta video


router.get("/", function(req, res) {
    res.render("nosotros", {title});
  });
  
  module.exports = router;
  