var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/buscarNumeroUsuarios", function (req, res) {
    usuarioController.buscarNumeroUsuarios(req, res);
});

router.get("/buscarDiscussoes", function (req, res) {
    usuarioController.buscarDiscussoes(req, res);
});

router.post("/adicionarDiscussao", function (req, res) {
    usuarioController.adicionarDiscussao(req, res);
})

router.get("/buscarComentarios", function (req, res) {
    usuarioController.buscarComentarios(req, res);
});

router.post("/adicionarComentario", function (req, res) {
    usuarioController.adicionarComentario(req, res);
})

router.get("/buscarComentarioPrincipal", function (req, res) {
    usuarioController.buscarComentarioPrincipal(req, res);
});

router.get("/buscarIdMax", function (req, res) {
    usuarioController.buscarIdMax(req, res);
});

router.get("/pesquisarForum", function (req, res) {
    usuarioController.pesquisarForum(req, res);
});

router.get("/pesquisarComentario", function (req, res) {
    usuarioController.pesquisarComentario(req, res);
});

module.exports = router;