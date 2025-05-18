var medidaModel = require("../models/medidaModel");

function buscarMedidasPersonagens(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasPersonagens().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarMedidasPersonagens

}