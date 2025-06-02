var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserirRespostas", function (req, res) {
    quizController.inserirRespostas(req, res);
})

router.get("/buscarAlternativas", function (req, res) {
    quizController.buscarAlternativas(req, res);
})

router.get("/buscarAlternativasCorretas", function (req, res) {
    quizController.buscarAlternativasCorretas(req, res);
})

router.get("/buscarEnunciado", function (req, res) {
    quizController.buscarEnunciado(req, res);
})

router.get("/buscarEnunciados", function (req, res) {
    quizController.buscarEnunciados(req, res);
})

module.exports = router;