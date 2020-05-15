from rest_framework import serializers
from .models import Temperatura, Chequeo


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


class ChequeoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chequeo
        fields = ['id',
                  'elemento',
                  'chequeado',
                  "tiempo",
                  "fecha",
                  ]
