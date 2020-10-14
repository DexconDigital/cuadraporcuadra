const express = require("express");
const router = express.Router();
const title = "Inicio";

//var https = require('https');


router.get("/", function(req, res) {
  res.render("index", {title});
});


module.exports = router;
