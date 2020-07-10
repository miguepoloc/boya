from django.shortcuts import render
from django.http import HttpResponse


def chequeo(request):
    return render(request, 'chequeo/chequeo.html')