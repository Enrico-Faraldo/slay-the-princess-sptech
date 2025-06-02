var quizModel = require("../models/quizModel");

function inserirRespostas(req, res) {
  var fkquestoes = req.body.fkquestoes;
  var fkalternativas = req.body.fkalternativas;
  var idUsuario = req.body.idUsuario;

  quizModel.inserirRespostas(fkquestoes, fkalternativas, idUsuario).then((resultado) => {
    res.status(201).json(resultado);
  });
};

function buscarAlternativas(req, res) {
  var questao = Number(req.query.numeroDaQuestao) + 1;

  quizModel.buscarAlternativas(questao).then((resultado) => {
    res.status(201).json(resultado);
  });
};

function buscarAlternativasCorretas(req, res) {
  var questao = Number(req.query.numeroDaQuestao) + 1;

  quizModel.buscarAlternativasCorretas(questao).then((resultado) => {
    res.status(201).json(resultado);
  });
};

function buscarEnunciado(req, res) {
  var questao = Number(req.query.numeroDaQuestao) + 1;

  quizModel.buscarEnunciado(questao).then((resultado) => {
    res.status(201).json(resultado);
  });
};

function buscarEnunciados(req, res) {

  quizModel.buscarEnunciados().then((resultado) => {
    res.status(201).json(resultado);
  });
};


module.exports = {
  inserirRespostas,
  buscarAlternativas,
  buscarEnunciado,
  buscarAlternativasCorretas,
  buscarEnunciados
};
