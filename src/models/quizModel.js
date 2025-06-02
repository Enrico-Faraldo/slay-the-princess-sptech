var database = require("../database/config");

function inserirRespostas(fkquestoes, fkalternativas, idUsuario) {
  console.log(`Fazendo uma query com os seguintes parametros: fkquestoes ${fkquestoes}, fkalternativas ${fkalternativas}, idUsuario ${idUsuario}`);

  var instrucaoSql = `INSERT INTO quiz (fkquestoes, fkalternativas, fkusuario)
VALUES (${fkquestoes}, ${fkalternativas}, ${idUsuario});`;

  return database.executar(instrucaoSql);
}

function buscarAlternativas(questao) {
  console.log(`Fazendo uma query com os seguintes parametros: questao ${questao}`);
  
  var instrucaoSql = `SELECT id, alternativa, certa FROM alternativas WHERE fkquestoes = ${questao};`;

  return database.executar(instrucaoSql);
}

function buscarAlternativasCorretas(questao) {
  console.log(`Fazendo uma query com os seguintes parametros: questao ${questao}`);

  var instrucaoSql = `SELECT id, alternativa, certa FROM alternativas WHERE fkquestoes = ${questao} AND certa = 1;`;

  return database.executar(instrucaoSql);
}

function buscarEnunciado(questao) {
  console.log(`Fazendo uma query com os seguintes parametros: questao ${questao}`);

  var instrucaoSql = `SELECT enunciado FROM questoes WHERE id = ${questao};`;

  return database.executar(instrucaoSql);
}

function buscarEnunciados() {
  console.log(`Fazendo uma query com os seguintes parametros: funcao sem parametros`);

  var instrucaoSql = `SELECT enunciado FROM questoes;`;

  return database.executar(instrucaoSql);
}

module.exports = {
  inserirRespostas,
  buscarAlternativas,
  buscarEnunciado,
  buscarAlternativasCorretas,
  buscarEnunciados
};
