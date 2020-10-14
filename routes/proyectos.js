const express = require("express");
const router = express.Router();
const title = "Proyectos";



router.get("/", function(req, res) {
    res.render("proyectos", {title});
  });  

module.exports = router;
