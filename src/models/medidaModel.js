var database = require("../database/config");

function buscarMedidaNarrador() {

    var instrucaoSql = `SELECT (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'narrador') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidaPrincesa() {

    var instrucaoSql = `SELECT (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'princesa') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidaProtagonista() {

    var instrucaoSql = `SELECT (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'protagonista') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidaHeroi() {

    var instrucaoSql = `SELECT (((SELECT COUNT(personagem_favorito) FROM usuario WHERE personagem_favorito = 'heroi') / (SELECT COUNT(personagem_favorito) FROM usuario)) * 100);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidaNarrador,
    buscarMedidaPrincesa,
    buscarMedidaProtagonista,
    buscarMedidaHeroi,
    buscarMedidasEmTempoReal
}
