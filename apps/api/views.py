from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TemperaturaSerializer
from .models import Temperatura

class TemperaturaViewSet(viewsets.ModelViewSet):
    """
    API endpoint de temperatura
    """
    queryset = Temperatura.objects.all()
    serializer_class = TemperaturaSerializer
