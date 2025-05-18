var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarMedidasPersonagens", function (req, res) {
    medidaController.buscarMedidasPersonagens(req, res);
})

module.exports = router;