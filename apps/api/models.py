from django.db import models
from django.utils import timezone


class Temperatura(models.Model):
    id = models.AutoField(primary_key=True)
    temperatura = models.FloatField()
    fecha = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.id)
