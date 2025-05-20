var database = require("../database/config");

function cadastrar(questao01, questao02, questao03, idUsuario) {
  var instrucaoSql = `INSERT INTO quiz (questao01, questao02, questao03, fkusuario) VALUES (${questao01}, ${questao02}, ${questao03}, ${idUsuario});`;

  return database.executar(instrucaoSql);
}

module.exports = {cadastrar};
