// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function acessarForum() {
    if (sessionStorage.length != 0) {
        window.location.href = "forum.html";
    } else {
        window.location.href = "login.html";
    }
}

function acessarQuiz() {
    if (sessionStorage.length != 0) {
        window.location.href = "quiz.html";
    } else {
        window.location.href = "login.html";
    }
}

function sair() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

function verificarLogin(){

        if (sessionStorage.length != 0) {
            document.getElementById("li_login").style.display = "none";
            document.getElementById("li_cadastro").style.display = "none";
            document.getElementById("li_sair").style.display = "inline";
        }
}

// carregamento (loading)
/*function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}*/

