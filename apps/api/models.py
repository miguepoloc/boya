from django.db import models
from django.utils import timezone


class Temperatura(models.Model):
    id = models.AutoField(primary_key=True)
    temperatura = models.FloatField()
    fecha = models.CharField(max_length=200, default=timezone.now)
    unidad = models.CharField(max_length=10)
    flag = models.IntegerField()
    latitud = models.CharField(max_length=100)
    longitud = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)
