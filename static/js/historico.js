Highcharts.getJSON(
    '/api/temperatura/',
    function (data) {
        // console.log(data);
        data = data.results;
        var lista = [];
        var lista_csv = [];
        for (let index = 0; index < data.length; index++) {
            let fecha_UNIX = new Date(data[index].fecha).getTime() - 18000000
            lista.push([fecha_UNIX, data[index].temperatura]);
            lista_csv.push([data[index].fecha, data[index].temperatura]);

        }
        // console.log(lista_csv);

        Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Histórico de datos'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Temperatura'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Temperatura',
                data: lista
            }]
        });


        // Aquí viene el dato

        objeto_temp["csv"] = "";
        objeto_temp["csv"] += "Nombre del proyecto:;" + "Boya de monitoreo de invemar" + "\r\n";
        objeto_temp["csv"] += "Lugar:;" + "Santa Marta" + "\r\n";
        objeto_temp["csv"] += "Id:;" + "1" + "\r\n";
        // objeto_temp["csv"] += "Fecha:;" + fecha_ctd + "\r\n";
        // objeto_temp["csv"] += "Latitud:;" + latitud_ctd + "\r\n";
        // objeto_temp["csv"] += "Longitud:;" + longitud_ctd + "\r\n";
        objeto_temp["csv"] += "" + "\r\n";
        objeto_temp["csv"] += "" + "\r\n";

        objeto_temp["csv"] += "" + "\r\n";
        for (let ix = 0; ix < lista_csv.length; ix++) {
            // console.log(lista_csv[ix][0]);
            objeto_temp["csv"] += String(lista_csv[ix][0]) + ";";
            objeto_temp["csv"] += String(lista_csv[ix][1]);
            objeto_temp["csv"] += "" + "\r\n";
        }
        objeto_temp["csv"] += "" + "\r\n";
    }
);

Highcharts.getJSON(
    '/api/humedad/',
    function (data) {
        // console.log(data);
        data = data.results;
        var lista = [];
        var lista_csv = [];
        for (let index = 0; index < data.length; index++) {
            let fecha_UNIX = new Date(data[index].fecha).getTime() - 18000000
            lista.push([fecha_UNIX, data[index].humedad]);
            lista_csv.push([data[index].fecha, data[index].humedad]);

        }
        // console.log(lista_csv);

        Highcharts.chart('container-h2', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Histórico de datos'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Humedad'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'Humedad',
                data: lista
            }]
        });


        // Aquí viene el dato

        objeto_hum["csv"] = "";
        objeto_hum["csv"] += "Nombre del proyecto:;" + "Boya de monitoreo de invemar" + "\r\n";
        objeto_hum["csv"] += "Lugar:;" + "Santa Marta" + "\r\n";
        objeto_hum["csv"] += "Id:;" + "1" + "\r\n";
        // objeto_hum["csv"] += "Fecha:;" + fecha_ctd + "\r\n";
        // objeto_hum["csv"] += "Latitud:;" + latitud_ctd + "\r\n";
        // objeto_hum["csv"] += "Longitud:;" + longitud_ctd + "\r\n";
        objeto_hum["csv"] += "" + "\r\n";
        objeto_hum["csv"] += "" + "\r\n";

        objeto_hum["csv"] += "" + "\r\n";
        for (let ix = 0; ix < lista_csv.length; ix++) {
            // console.log(lista_csv[ix][0]);
            objeto_hum["csv"] += String(lista_csv[ix][0]) + ";";
            objeto_hum["csv"] += String(lista_csv[ix][1]);
            objeto_hum["csv"] += "" + "\r\n";
        }
        objeto_hum["csv"] += "" + "\r\n";
    }
);

/******************************PROCESO PARA DESCARGAR CSV DE DATOS DE CTD   *******************************/

// Objeto que almacena las variables
var objeto_temp = new Object();

function descargarTemp(evt) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(objeto_temp["csv"]));
    element.setAttribute('download', "export.csv");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

var objeto_hum = new Object();

function descargarHum(evt) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(objeto_hum["csv"]));
    element.setAttribute('download', "export.csv");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}