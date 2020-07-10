from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'dashboard/index.html')

def index3(request):
    return render(request, 'dashboard/index3.html')

def graficas(request):
    return render(request, 'dashboard/graficas.html')
