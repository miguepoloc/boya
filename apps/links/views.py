from django.shortcuts import render
from django.http import HttpResponse

def view1(request):
    return render(request, 'links/view1.html')


def view2(request):
    return render(request, 'links/view2.html')
