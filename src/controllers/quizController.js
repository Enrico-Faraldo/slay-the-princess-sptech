var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
  var questao01 = req.body.questao01;
  var questao02 = req.body.questao02;
  var questao03 = req.body.questao03;
  var idUsuario = req.body.idUsuario;

  quizModel.cadastrar(questao01, questao02, questao03, idUsuario).then((resultado) => {
    res.status(201).json(resultado);
  });
};


module.exports = {
  cadastrar
};
