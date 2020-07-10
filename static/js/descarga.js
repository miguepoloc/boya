Highcharts.getJSON(
    '/api/sensores/',
    function (data) {
        // console.log(data);
        data = data.results;
        var lista_csv = [];
        for (let index = 0; index < data.length; index++) {
            lista_csv.push([data[index].variable_nombre, data[index].variable_valor, data[index].unidad, data[index].fecha, data[index].flag, data[index].latitud, data[index].longitud]);
        }
        // console.log(lista_csv);

        // Aquí viene el dato
        objeto_sensores["csv"] = "";
        objeto_sensores["csv"] += "Nombre del proyecto:;" + "Boya de monitoreo de invemar" + "\r\n";
        objeto_sensores["csv"] += "Lugar:;" + "Santa Marta" + "\r\n";
        objeto_sensores["csv"] += "Id:;" + "1" + "\r\n";
        // objeto_hum["csv"] += "Fecha:;" + fecha_ctd + "\r\n";
        // objeto_hum["csv"] += "Latitud:;" + latitud_ctd + "\r\n";
        // objeto_hum["csv"] += "Longitud:;" + longitud_ctd + "\r\n";
        objeto_sensores["csv"] += "" + "\r\n";
        objeto_sensores["csv"] += "" + "\r\n";

        objeto_sensores["csv"] += "Variable;valor;unidad;fecha;Bandera de calidad;latitud;longitud" + "\r\n";
        objeto_sensores["csv"] += "" + "\r\n";
        objeto_sensores["csv"] += "" + "\r\n";
        for (let ix = 0; ix < lista_csv.length; ix++) {
            // console.log(lista_csv[ix][0]);
            objeto_sensores["csv"] += String(lista_csv[ix][0]) + ";";
            objeto_sensores["csv"] += String(lista_csv[ix][1]) + ";";
            objeto_sensores["csv"] += String(lista_csv[ix][2]) + ";";
            objeto_sensores["csv"] += String(lista_csv[ix][3]) + ";";
            objeto_sensores["csv"] += String(lista_csv[ix][4]) + ";";
            objeto_sensores["csv"] += String(lista_csv[ix][5]) + ";";
            objeto_sensores["csv"] += String(lista_csv[ix][6]);
            objeto_sensores["csv"] += "" + "\r\n";
        }
        objeto_sensores["csv"] += "" + "\r\n";
    }
);

var objeto_sensores = new Object();

function descargar(evt) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(objeto_sensores["csv"]));
    element.setAttribute('download', "export.csv");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}