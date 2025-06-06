var database = require("../database/config")



function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    SELECT id, nome_usuario, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarSeUsuarioExiste(email, nome_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome_usuario, email);

    var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}' OR nome_usuario = '${nome_usuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome_usuario, email, senha, personagem_favorito) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome_usuario, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome_usuario, email, senha, personagem_favorito) VALUES ('${nome_usuario}', '${email}', '${senha}', '${personagem_favorito}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarNumeroUsuarios() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT count(id) as numero_usuarios FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDiscussoes(idPostagem) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT p.conteudo, date_format(p.data_postagem, '%d/%m/%Y') data_postagem, time(p.data_postagem) hora_postagem, u.nome_usuario, p.id id_postagem
        FROM postagem p
        LEFT JOIN usuario u ON p.fkusuario = u.id
        WHERE p.id <= ${idPostagem}
        ORDER BY id_postagem DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarDiscussao(conteudo, fkusuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function adicionarDiscussao():", conteudo, fkusuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO postagem (conteudo, data_postagem, fkusuario)
        VALUES ('${conteudo}', current_timestamp(), ${fkusuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarComentarios(idPostagem) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT c.conteudo, c.data_comentario data_completa, date_format(c.data_comentario, '%d/%m/%Y') data_comentario, time(c.data_comentario) hora_comentario,
        u.nome_usuario, c.fkpostagem, c.id id_comentario
        FROM comentario c
        LEFT JOIN usuario u ON c.fkusuario = u.id
        WHERE c.fkpostagem = ${idPostagem}
        ORDER BY data_completa DESC
        LIMIT 50;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarComentario(conteudo, fkusuario, fkpostagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function adicionarDiscussao():", conteudo, fkusuario, fkpostagem);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO comentario (conteudo, data_comentario, fkpostagem, fkusuario)
        VALUES ('${conteudo}', current_timestamp(), ${fkpostagem}, ${fkusuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarComentarioPrincipal(idPostagem) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT p.conteudo, date_format(p.data_postagem, '%d/%m/%Y') data_postagem, time(p.data_postagem) hora_postagem, u.nome_usuario, p.id
        FROM postagem p
        LEFT JOIN usuario u ON p.fkusuario = u.id
        WHERE p.id = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdMax() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT max(p.id) idMax
       FROM postagem p;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarForum(pesquisa) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT p.conteudo, date_format(p.data_postagem, '%d/%m/%Y') data_postagem, time(p.data_postagem) hora_postagem, u.nome_usuario, p.id id_postagem
        FROM postagem p
        LEFT JOIN usuario u ON p.fkusuario = u.id
        WHERE p.conteudo LIKE '%${pesquisa}%' OR nome_usuario LIKE '%${pesquisa}%'
        ORDER BY id_postagem DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarComentario(pesquisa) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT c.conteudo, c.data_comentario data_completa, date_format(c.data_comentario, '%d/%m/%Y') data_comentario, time(c.data_comentario) hora_comentario,
        u.nome_usuario, c.fkpostagem, c.id id_comentario
        FROM comentario c
        LEFT JOIN usuario u ON c.fkusuario = u.id
        WHERE c.conteudo LIKE '%${pesquisa}%' OR nome_usuario LIKE '%${pesquisa}%'
        ORDER BY data_completa DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    verificarSeUsuarioExiste,
    buscarNumeroUsuarios,
    buscarDiscussoes,
    adicionarDiscussao,
    buscarComentarios,
    adicionarComentario,
    buscarComentarioPrincipal,
    buscarIdMax,
    pesquisarForum,
    pesquisarComentario
};