// Almacena los datos
var sensores;
// Objeto que almacena las variables
var objeto_variable = new Object();
// Objeto que almacena las unidades
var objeto_unidades = new Object();
// Almacena el html que se le anexará al código de las gráficas
var html = "";



// Función de inicio
$(document).ready(function () {
    //Obtiene los datos de la CTD de la API
    $.get('/api/sensores/', function (result) {
        // Guarda en la variable ctd los resultados de la API
        sensores = result.results;
        // Llama a la función gráfica
        console.log(sensores);
        control();
    });
});

// Función que controla los datos obtenidos
function control() {
    // Se crean los vectores de control
    vector_valor = [];
    vector_variable_cod = [];
    vector_variable = [];
    vector_unidad = [];
    vector_fecha = [];
    // Se recorren todas las posiciones del vector de datos
    for (i = 0; i < sensores.length; i++) {
        // Guarda el código de la variable muestra de la posicón i del vector
        codigo = String(sensores[i]["variable_codigo"]);
        // En esta parte se va a llenar el vector con los códigos de las variables
        // Para saber cuántos variables se tomaron y relacionar los datos
        // A partir de este identificador
        // Si aún no se ha añadido el código de la variable de la posición i
        // En el vector de códigos de la variable
        if (vector_variable_cod.includes(codigo) == false) {
            // Se añade el código de la variable
            vector_variable_cod.push(codigo);
        }

        // Se realiza el mismo proceso anterior pero con el nombre de la variable
        variable = String(sensores[i]["variable_nombre"]);
        if (vector_variable.includes(variable) == false) {
            vector_variable.push(variable);
        }

        // Se realiza el mismo proceso anterior pero con la unidad de la variable
        unidad = String(sensores[i]["unidad"]);
        if (vector_unidad.includes(unidad) == false) {
            vector_unidad.push(unidad);
        }

        // Se realiza el mismo proceso anterior pero con la fecha
        fecha = String(sensores[i]["fecha"]);
        if (vector_fecha.includes(fecha) == false) {
            vector_fecha.push(fecha);
        }
    }

    console.log(vector_variable_cod);
    console.log(vector_variable);
    console.log(vector_unidad);
    console.log(vector_fecha);


    // Se recorren todas las posiciones del vector que contiene a las variables
    for (i = 0; i < vector_variable.length; i++) {
        // Se crea el contenedor de las gráficas
        html += '<div class="col-md-6">';
        html += '<div class="card card-primary">';
        html += '<div class="card-header">';
        html += '<h3 class="card-title">' + vector_variable[i] + '</h3>';
        html += '</div>';
        html += '<div class="card-body">';
        html += '<div class="chart" style="text-align: center;">';
        html += '<figure class="highcharts-figure tm-flex-center tm-flex-col">';
        html += '<div id="container-' + vector_variable[i] + '" class="chart-container"></div>';
        html += '</figure>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '<div class="col-md-6">';
        html += '<div class="card card-danger">';
        html += '<div class="card-header">';
        html += '<h3 class="card-title">' + vector_variable[i] + '</h3>';
        html += '</div>';
        html += '<div class="card-body">';
        html += '<div id="container-h-' + vector_variable[i] + '" class="chart-container"></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        // Se añade un atributo al objeto de las variables que será una lista vacía
        // que tendrá como nombre la variable de la posición i
        objeto_variable[vector_variable[i]] = [];
        // Se añade un atributo al objeto de las unidades que será la unidad
        // de la misma posición i que tendrá como nombre la variable de la posición i
        objeto_unidades[vector_variable[i]] = vector_unidad[i];
    }
    // Se anexa el contenedor de las gráficas al html
    $("#row_control").html(html);

    // Se recorren todas las posiciones del vector de datos de la lista de sensores
    for (i = 0; i < sensores.length; i++) {
        // Se recorren todas las posiciones del vector de datos de la lista de variables
        for (j = 0; j < vector_variable.length; j++) {
            // Si el la variable de la lista sensores en la posición i es la misma que
            // La variable del vector variable en la posición j
            if (sensores[i].variable_nombre == vector_variable[j]) {
                // Se añade el valor de la lista del sensor en la posición i al objeto variable en su 
                // posición correspondiente a vector variable j
                objeto_variable[vector_variable[j]].push(sensores[i]["variable_valor"]);
            }
        }
    }


    for (i = 0; i < vector_variable.length; i++) {
        grafica(vector_variable[i]);
    }

    iq = 0;
    while (iq < vector_variable.length) {
        grafica(vector_variable[iq]);
        iq = iq + 1;
    }
}

// Función encargada de graficar los datos
function grafica(sx) {
    // Vector que almacena los datos a graficar
    vector_grafica = [];
    // Se almacena una variable en el objeto
    objeto_variable["grafica"] = [];

    for (i = 0; i < objeto_variable[vector_variable[0]].length; i++) {
        objeto_variable["grafica"].push([vector_fecha[i], objeto_variable[sx][i]]);
    }

    // Gráfica de datos históricos
    Highcharts.chart('container-h-' + sx, {
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
                text: sx
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
            name: sx,
            data: objeto_variable["grafica"]
        }]
    }
    );

    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },

        title: sx,

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
    var chartTemp = Highcharts.chart('container-' + sx, Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 10,
            max: 40,
            title: {
                text: sx
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: sx,
            data: objeto_variable["grafica"][objeto_variable["grafica"].length - 1],
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
}
