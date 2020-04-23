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
                data: [
                    [
                        1167609600000,
                        23
                    ],
                    [
                        1167696000000,
                        24
                    ],
                    [
                        1167782400000,
                        25
                    ],
                    [
                        1167868800000,
                        26
                    ],
                    [
                        1167955200000,
                        26
                    ],
                    [
                        1168214400000,
                        23
                    ],
                    [
                        1168300800000,
                        22
                    ],
                    [
                        1168387200000,
                        23
                    ],
                    [
                        1168473600000,
                        23
                    ],
                    [
                        1168560000000,
                        24
                    ],
                    [
                        1168819200000,
                        25
                    ],
                    [
                        1168905600000,
                        26
                    ],
                    [
                        1168992000000,
                        25
                    ],
                    [
                        1169078400000,
                        24
                    ],
                    [
                        1169164800000,
                        23
                    ],
                    [
                        1169424000000,
                        22
                    ],
                    [
                        1169510400000,
                        25
                    ],
                    [
                        1169596800000,
                        25
                    ],
                    [
                        1169683200000,
                        23
                    ],
                ]

            }]
        });
    }
);