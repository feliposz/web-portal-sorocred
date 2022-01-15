$(function () {

    var seta_cima = "▲";
    var seta_baixo = "▼";

    $(".quadro .collapse")
        .each(function () {
            var seta = $(this).hasClass("in") ? seta_cima : seta_baixo;
            $(this).parent().find("h2 > a").append(' <span class="seta">' + seta + '</span>');
        })
        .on('hide.bs.collapse', function () {
            $(this).parent().find('.seta').text(seta_baixo);
        })
        .on('show.bs.collapse', function () {
            $(this).parent().find('.seta').text(seta_cima);
        });

    $(".navbar-nav li.menu").click(function () {
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");
    });

    $('#modalGenerico').on('show.bs.modal', function (event) {
        var botao = $(event.relatedTarget);
        var titulo = botao.data('title');
        var modal = $(this);
        var conteudo = botao.closest(".quadro").find(".collapse").clone();
        if (conteudo.length != 0) {
            conteudo.removeClass("collapse");
        } else {
            conteudo = botao.closest(".quadro").find(".row").clone();
        }
        modal.find('.modal-title').text(titulo);
        modal.find('.modal-body').empty().append(conteudo);
    })

});