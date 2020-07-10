from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TemperaturaSerializer, ChequeoSerializer, HumedadSerializer, SensoresSerializer
from .models import Temperatura, Chequeo, Humedad, Sensores


class TemperaturaViewSet(viewsets.ModelViewSet):
    """
    API endpoint de temperatura
    """
    queryset = Temperatura.objects.all().order_by('id')
    serializer_class = TemperaturaSerializer


class HumedadViewSet(viewsets.ModelViewSet):
    """
    API endpoint de temperatura
    """
    queryset = Humedad.objects.all().order_by('id')
    serializer_class = HumedadSerializer


class SensoresViewSet(viewsets.ModelViewSet):
    """
    API endpoint de temperatura
    """
    queryset = Sensores.objects.all().order_by('id')
    serializer_class = SensoresSerializer


class ChequeoViewSet(viewsets.ModelViewSet):
    queryset = Chequeo.objects.all().order_by('id')
    serializer_class = ChequeoSerializer
