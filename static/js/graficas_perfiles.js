// Función de inicio
$(document).ready(function () {
    //Obtiene los datos de la CTD de la API
    $.get('/api/ctd/', function (result) {
        // Guarda en la variable ctd los resultados de la API
        ctd = result.results;
        // Llama a la función gráfica
        control();
    });
});

// Variable donde se almacenan los datos de la base de datos
var ctd;
// Sección del selector de las variables a graficar
// Seleccionamos el elemento que contiene el select
var select = document.getElementById('select_grafica');
var selectedOption;
// Cuando el select cambie
select.addEventListener('change',
    function () {
        selectedOption = this.options[select.selectedIndex];
        // En este caso imprime el valor y el texto del select seleccionado
        console.log(selectedOption.value + ': ' + selectedOption.text);
        grafica(selectedOption)
    }
);


// Objeto que almacena las variables
var objeto_variable = new Object();

// Objeto que almacena las unidades
var objeto_unidades = new Object();

// Función encargada de graficar los datos de la CTD
function control() {
    console.log(ctd);
    // Se crean los vectores de control
    vector_muestra = [];
    vector_variable = [];
    vector_variable_des = [];
    vector_unidad_des = [];
    // Se recorren todas las posiciones del vector de datos de la CTD
    for (i = 0; i < ctd.length; i++) {
        // Guarda el id de la muestra de la posicón i del vector
        muestra = String(ctd[i]["muestra"]);
        // Se elimina la primera posición del id de la muestra, debido a que este número
        // Es variante según la variable a la que corresponda
        // var cod_muestra = muestra.slice(1, muestra.length);
        // En esta parte se va a llenar el vector con los identificadores de muestra
        // Para saber cuántos muestras se tomaron y relacionar los datos
        // A partir de este identificador
        // Si aún no se ha añadido el código de muestra de la posición i
        // En el vector de muestra
        if (vector_muestra.includes(muestra) == false) {
            // Se añade el id de muestra
            vector_muestra.push(muestra);
        }
        // Se realiza el mismo proceso anterior pero con el nombre de la variable
        variable = String(ctd[i]["variable"]);
        if (vector_variable.includes(variable) == false) {
            vector_variable.push(variable);
        }
        // Se realiza el mismo proceso anterior pero con la descripción de la variable
        variable_des = String(ctd[i]["variable_des"]);
        if (vector_variable_des.includes(variable_des) == false) {
            vector_variable_des.push(variable_des);
        }
        // Se realiza el mismo proceso anterior pero con la unidad de la variable
        unidad_des = String(ctd[i]["unidades_medida_des"]);
        if (vector_unidad_des.includes(unidad_des) == false) {
            vector_unidad_des.push(unidad_des);
        }
    }

    // Se recorren todas las posiciones del vector que contiene a las variables
    for (i = 0; i < vector_variable_des.length; i++) {
        // Si la variable leida NO es profundidad
        if (vector_variable_des[i] != "Profundidad") {
            // Se crea un elemento tipo option
            let z = document.createElement("option");
            // Al cual se le asigna el valor de la variable
            z.setAttribute("value", vector_variable[i]);
            // Y se le asigna al valor a mostrar el valor de variable_des
            let t = document.createTextNode(vector_variable_des[i]);
            z.appendChild(t);
            // Luego se añade al html
            document.getElementById("select_grafica").appendChild(z);
        }
        // Se añade un atributo al objeto de las variables que será una lista vacía
        // que tendrá como nombre la variable de la posición i
        objeto_variable[vector_variable[i]] = [];
        // Se añade un atributo al objeto de las unidades que será la unidad
        // de la misma posición i que tendrá como nombre la variable de la posición i
        objeto_unidades[vector_variable[i]] = vector_unidad_des[i];
    }

    // Se recorren todas las posiciones del vector de datos de la lista CTD
    for (i = 0; i < ctd.length; i++) {
        // Se recorren todas las posiciones del vector de datos de la lista de variables
        for (j = 0; j < vector_variable.length; j++) {
            // Si el la variable de la lista CTD en la posición i es la misma que
            // La variable del vector variable en la posición j
            if (ctd[i].variable == vector_variable[j]) {
                // Si es profundidad
                if (ctd[i].variable == "PROF") {
                    // Se multiplica por -1 para darle el efecto de bajada y se añade
                    // el valor de la ctd en la posición i al objeto variable en su 
                    // posición correspondiente a vector variable j
                    objeto_variable[vector_variable[j]].push(-1 * ctd[i].valor);
                } else {
                    // Sino, se añade
                    // el valor de la ctd en la posición i al objeto variable en su 
                    // posición correspondiente a vector variable j
                    objeto_variable[vector_variable[j]].push(ctd[i].valor);
                }
            }
        }
    }
}

function grafica(sx) {
    vector_grafica = [];
    objeto_variable["grafica"] = [];
    for (i = 0; i < objeto_variable[vector_variable[0]].length; i++) {
        objeto_variable["grafica"].push([objeto_variable["PROF"][i], objeto_variable[sx.value][i]]);
    }

    Highcharts.chart('container', {
        chart: {
            type: 'spline',
            inverted: true,
            zoomType: 'x',
            // resetZoomButton: {
            //     position: {
            //         // align: 'right', // by default
            //         verticalAlign: 'bottom', // by default
            //         x: 0,
            //         y: -30
            //     }
            // }
        },
        title: {
            text: 'Estacion ' + ctd[0].id_estacion
        },
        subtitle: {
            text: sx.text + ' vs Profundidad'
        },
        xAxis: {
            reversed: false,
            title: {
                enabled: true,
                text: 'Produndidad'
            },
            labels: {
                format: '{value} m'
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: sx.text
            },
            labels: {
                format: '{value} ' + objeto_unidades[sx.value]
            },
            lineWidth: 2
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} m: {point.y} ' + objeto_unidades[sx.value]
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: sx.text,
            data: objeto_variable["grafica"]
        }]
    });

}