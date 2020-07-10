$(document).ready(function () {
    $.get('/api/chequeo/', function (result) {
        lista = result.results;
        console.log(lista);
        var html = "";

        for (let index = 0; index < lista.length; index++) {
            html += "<li>";
            html += '<span class="handle">'
            html += '<i class="fas fa-ellipsis-v"></i>'
            html += '<i class="fas fa-ellipsis-v"></i>'
            html += '</span>'
            html += '<div class="icheck-primary d-inline ml-2">'
            html += '<input type="checkbox" value="" name="todo' + lista[index]["id"] + '" id="todoCheck' + lista[index]["id"] + '">'
            html += '<label for="todoCheck' + lista[index]["id"] + '"></label>'
            html += '</div>'
            html += '<span class="text">' + lista[index]["elemento"] + '</span>'
            html += '<small class="badge badge-danger"><i class="far fa-clock"></i> ' + lista[index]["tiempo"] + ' min</small>'
            html += '</li>'

        }



        $("#lista_chequeo").html(html);
    });
});