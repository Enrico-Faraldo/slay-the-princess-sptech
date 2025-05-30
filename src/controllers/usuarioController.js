var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].id,
                            nome_usuario: resultadoAutenticar[0].nome_usuario,
                            email: resultadoAutenticar[0].email
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome_usuario = req.body.nome_usuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var personagem_favorito = req.body.personagem_favoritoServer;

    // Faça as validações dos valores
    if (nome_usuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.verificarSeUsuarioExiste(email, nome_usuario)
            .then(resultado => {
                if (resultado.length > 0) {
                    res.status(409).send("E-mail ou nome de usuário já existe!");
                } else {

                    usuarioModel.cadastrar(nome_usuario, email, senha, personagem_favorito)
                        .then(
                            function (resultado) {
                                res.json(resultado);
                            }
                        ).catch(
                            function (erro) {
                                console.log(erro);
                                console.log(
                                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                                    erro.sqlMessage
                                );
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                }
            });
    }
}

function buscarNumeroUsuarios(req, res) {

    usuarioModel.buscarNumeroUsuarios()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar o número de usuários! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function buscarDiscussoes(req, res) {
    var idPostagem = req.query.idPostagem;

    usuarioModel.buscarDiscussoes(idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar o discussões! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function adicionarDiscussao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var conteudo = req.body.conteudoServer;
    var fkusuario = req.body.fkusuarioServer;

    // Faça as validações dos valores
    if (conteudo == undefined) {
        res.status(400).send("Seu comentário está undefined!");
    } else {

        usuarioModel.adicionarDiscussao(conteudo, fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao adicionar o comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

function buscarComentarios(req, res) {
    var idPostagem = req.query.idPostagem;

    if (idPostagem == undefined) {
        res.status(400).send("O ID da postagem está undefined!");
    } else {
        usuarioModel.buscarComentarios(idPostagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar comentários! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

};

function adicionarComentario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var conteudo = req.body.conteudoServer;
    var fkusuario = req.body.fkusuarioServer;
    var fkpostagem = req.body.fkpostagemServer;

    // Faça as validações dos valores
    if (conteudo == undefined) {
        res.status(400).send("Seu comentário está undefined!");
    } else {

        usuarioModel.adicionarComentario(conteudo, fkusuario, fkpostagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao adicionar o comentário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

function buscarComentarioPrincipal(req, res) {
    var idPostagem = req.query.idPostagem;

    if (idPostagem == undefined) {
        res.status(400).send("O ID da postagem está undefined!");
    }

    else {
        usuarioModel.buscarComentarioPrincipal(idPostagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar comentários! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
};

function buscarIdMax(req, res) {

    usuarioModel.buscarIdMax()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar o discussões! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function pesquisarForum(req, res) {
    var pesquisa = req.query.pesquisa;

    if (pesquisa == undefined) {
        res.status(400).send("A pesquisa está undefined!");
    } else {
        usuarioModel.pesquisarForum(pesquisa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar comentários! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

};


module.exports = {
    autenticar,
    cadastrar,
    buscarNumeroUsuarios,
    buscarDiscussoes,
    adicionarDiscussao,
    buscarComentarios,
    adicionarComentario,
    buscarComentarioPrincipal,
    buscarIdMax,
    pesquisarForum
}