require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic"
    ],
    function (
        Map,
        MapView,
        Graphic
    ) {
        var map = new Map({
            basemap: "topo-vector"
        });

        var view = new MapView({
            center: [-74.163671, 11.229602],
            container: "geovisor",
            map: map,
            zoom: 16
        });

        /*************************
         * Create a point graphic
         *************************/

        // First create a point geometry (this is the location of the Titanic)

        var point = {
            type: "point", // autocasts as new Point()
            longitude: -74.163671,
            latitude: 11.229602
        };
        // Create a symbol for drawing the point
        var markerSymbol = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: [226, 119, 40],
            outline: {
                // autocasts as new SimpleLineSymbol()
                color: [255, 255, 255],
                width: 1
            }
        };

        // Se crean los atributos
        var puntoAtributo = {
            id: "1",
            nombre: "Boya",
        };

        // Create a graphic and add the geometry and symbol to it
        var pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol,
            attributes: puntoAtributo,
            popupTemplate: {
                id: "{id}",
                content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "id"
                        },
                        {
                            fieldName: "nombre"
                        },
                    ]
                }]
            }

        });

        // Add the graphics to the view's graphics layer
        view.graphics.addMany([pointGraphic]);
    }
);