$(document).ready(function () {
    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: {
            enabled: true
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#3b83bd'], // green
                [0.5, '#55BF3B'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    // Gauge temperatura 
    var chartTemp = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 10,
            max: 40,
            title: {
                text: 'Temperatura'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Temperatura',
            data: [23],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">°C</span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: ' °C'
            }
        }]

    }));

    // setInterval(function () {
    //     var point
    //     $.get('/api/temperatura/', function (result) {
    //         temperatura = result.results;
    //         valor = temperatura[temperatura.length - 1].temperatura;
    //         if (chartTemp) {
    //             point = chartTemp.series[0].points[0];
    //             point.update(valor);
    //         }
    //     });
    // },
    //     2000
    // );
});

$(document).ready(function () {
    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: {
            enabled: true
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#3b83bd'], // green
                [0.5, '#55BF3B'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    // Gauge temperatura 
    var chartTemp = Highcharts.chart('container-h', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 10,
            max: 100,
            title: {
                text: 'Humedad'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Humedad',
            data: [81],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:25px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">°C</span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: ' %'
            }
        }]

    }));

    // setInterval(function () {
    //     var point
    //     $.get('/api/temperatura/', function (result) {
    //         temperatura = result.results;
    //         valor = temperatura[temperatura.length - 1].temperatura;
    //         if (chartTemp) {
    //             point = chartTemp.series[0].points[0];
    //             point.update(valor);
    //         }
    //     });
    // },
    //     2000
    // );
});