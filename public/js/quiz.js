function retornarAlternativas(numeroDaQuestao) {

        return fetch(`/quiz/buscarAlternativas?numeroDaQuestao=${numeroDaQuestao}`, {
            method: "GET",
            cache: 'no-store'
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        return resposta;
                        

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function retornarAlternativasCorretas(numeroDaQuestao) {

        return fetch(`/quiz/buscarAlternativasCorretas?numeroDaQuestao=${numeroDaQuestao}`, {
            method: "GET",
            cache: 'no-store'
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        return resposta;
                        

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function retornarEnunciado(numeroDaQuestao) {

        return fetch(`/quiz/buscarEnunciado?numeroDaQuestao=${numeroDaQuestao}`, {
            method: "GET",
            cache: 'no-store'
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        return resposta;
                        

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }

    function retornarEnunciados() {

        return fetch(`/quiz/buscarEnunciados`, {
            method: "GET",
            cache: 'no-store'
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        return resposta;
                        

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }