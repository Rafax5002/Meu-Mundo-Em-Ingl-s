var express = require("express");
var router = express.Router();

var indicesController  = require("../controllers/indicesController");

//Recebendo os dados do html e direcionando para a função cadastrar de indicesController.js
router.post("/registrar", function (req, res) {
    indicesController.registro(req, res);
});

router.get("/:usuario", function (req, res) {
    indicesController.buscarDadosDash(req, res);
  });

  router.get("/erros", function (req, res) {
    indicesController.buscarErrosDash(req, res);
  });


module.exports = router;