var database = require("../database/config");

function buscarMedidasPersonagens() {

    var instrucaoSql = `SELECT (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'narrador') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100) as narrador,
    (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'princesa') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100) as princesa,
    (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'protagonista') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100) as protagonista,
    (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'heroi') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100) as heroi;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasQuiz() {

    var instrucaoSql = `SELECT ((SELECT COUNT(*) FROM quiz q INNER JOIN alternativas a ON a.id = q.fkalternativas WHERE q.fkquestoes = 1 AND a.certa = 1) / (SELECT COUNT(*) FROM quiz q WHERE q.fkquestoes = 1) * 100) questao01,
((SELECT COUNT(*) FROM quiz q INNER JOIN alternativas a ON a.id = q.fkalternativas WHERE q.fkquestoes = 2 AND a.certa = 1) / (SELECT COUNT(*) FROM quiz q WHERE q.fkquestoes = 2) * 100) questao02, 
((SELECT COUNT(*) FROM quiz q INNER JOIN alternativas a ON a.id = q.fkalternativas WHERE q.fkquestoes = 3 AND a.certa = 1) / (SELECT COUNT(*) FROM quiz q WHERE q.fkquestoes = 3) * 100) questao03; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasPersonagens,
    buscarMedidasQuiz
}
