from django.contrib import admin

from .models import Temperatura, Chequeo, Humedad, Sensores

admin.site.register(Temperatura)
admin.site.register(Chequeo)
admin.site.register(Humedad)
admin.site.register(Sensores)