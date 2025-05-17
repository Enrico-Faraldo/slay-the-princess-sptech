var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarMedidaNarrador", function (res) {
    medidaController.buscarMedidaNarrador(res);
});

router.get("/buscarMedidaPrincesa", function (res) {
    medidaController.buscarMedidaPrincesa(res);
});

router.get("/buscarMedidaProtagonista", function (res) {
    medidaController.buscarMedidaProtagonista(res);
});

router.get("/buscarMedidaHeroi", function (res) {
    medidaController.buscarMedidaHeroi(res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;