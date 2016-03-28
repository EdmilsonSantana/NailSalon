window.onload = function () {
    var cabecalhoImportado = document.querySelector('link[rel=import]');
    var conteudo = cabecalhoImportado.import.querySelector('header');
    document.body.insertBefore(conteudo, document.body.firstElementChild);

    var formLogin = document.getElementById("formLogin");
    var inputEmail = formLogin.querySelector("input[type=email]");
    var emailEsmalteria = 'esmalteria@hotmail.com';
    var emailCliente = 'cliente@hotmail.com';
    formLogin.onsubmit = function (evt) {
        var email = inputEmail.value;
        if (email === emailEsmalteria) {
            formLogin.action = 'htmlPerfilEsmalteria.html';
        } else if (email === emailCliente) {
            formLogin.action = 'htmlPerfilCliente.html';
        } else {
            evt.preventDefault();
        }
    };

};
