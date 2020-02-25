from django.shortcuts import render
from django.http import HttpResponse
from .helpers import leertemp

def index(request):
    temp = leertemp
    return render(request, 'prueba/index.html', {"temp": temp})

# def institucion(request):
#     datos_institucionales = Institucion.objects.all()
#     return render(request, 'institucion/institucion.html', {'datos_institucionales': datos_institucionales})