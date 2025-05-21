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

    var instrucaoSql = `SELECT (((SELECT COUNT(questao01) FROM quiz WHERE questao01 = 1) / (SELECT COUNT(questao01) FROM quiz)) * 100) as questao01,
    (((SELECT COUNT(questao02) FROM quiz WHERE questao02 = 1) / (SELECT COUNT(questao02) FROM quiz)) * 100) as questao02,
    (((SELECT COUNT(questao03) FROM quiz WHERE questao03 = 1) / (SELECT COUNT(questao03) FROM quiz)) * 100) as questao03;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasPersonagens,
    buscarMedidasQuiz
}
