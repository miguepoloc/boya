Highcharts.getJSON(
    '/api/temperatura/',
    function (data) {
        console.log(data);
        data = data.results;
        var lista = [];
        for (let index = 0; index < data.length; index++) {
            let fecha_UNIX = new Date(data[index].fecha).getTime() - 18000000
            lista.push([fecha_UNIX, data[index].temperatura]);
        }
        console.log(lista);

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
    }
);