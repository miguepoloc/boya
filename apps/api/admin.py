from django.contrib import admin

from .models import Temperatura, Chequeo, Humedad

admin.site.register(Temperatura)
admin.site.register(Chequeo)
admin.site.register(Humedad)