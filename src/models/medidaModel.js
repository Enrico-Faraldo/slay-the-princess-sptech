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

module.exports = {
    buscarMedidasPersonagens
}
