from rest_framework import serializers
from .models import Temperatura


class TemperaturaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Temperatura
        fields = ['id', 'temperatura', 'fecha']