var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarMedidasPersonagens", function (req, res) {
    medidaController.buscarMedidasPersonagens(req, res);
})

router.get("/buscarMedidasQuiz", function (req, res) {
    medidaController.buscarMedidasQuiz(req, res);
})

module.exports = router;