const express = require("express");
const router = express.Router();
const title = "Clientes";



router.get("/", function (req, res) {
  var link_pse = "https://www.psepagos.co/PSEHostingUI/DatabaseTicketOffice.aspx?ID=7780";
  var link_arredatarios = "https://www.simiinmobiliarias.com/base/simired/simidocs/index.php?inmo=950&tipo=2";
  var link_propietarios = "https://www.simiinmobiliarias.com/base/simired/simidocs/index.php?inmo=950&tipo=1";
  res.render("clientes", { title, link_pse, link_arredatarios, link_propietarios });
});

module.exports = router;