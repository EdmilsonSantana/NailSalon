window.onload = function () {
    var cabecalhoImportado = document.querySelector('link[rel=import]');
    var conteudo = cabecalhoImportado.import.querySelector('header');
    document.body.insertBefore(conteudo, document.body.firstElementChild);
};
