from rest_framework import serializers
from .models import Temperatura, Chequeo, Humedad, Sensores


class TemperaturaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Temperatura
        fields = ['id',
                  'temperatura',
                  'fecha',
                  "unidad",
                  "flag",
                  "latitud",
                  "longitud"
                  ]


class HumedadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Humedad
        fields = ['id',
                  'humedad',
                  'fecha',
                  "unidad",
                  "flag",
                  "latitud",
                  "longitud"
                  ]


class SensoresSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sensores
        fields = ['id',
                  'variable_nombre',
                  'variable_codigo',
                  'variable_valor',
                  'fecha',
                  "unidad",
                  "flag",
                  "latitud",
                  "longitud"
                  ]


class ChequeoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chequeo
        fields = ['id',
                  'elemento',
                  'importancia',
                  "tiempo",
                  "fecha",
                  ]
