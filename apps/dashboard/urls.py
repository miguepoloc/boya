from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index_dashboard'),
    path('index3', views.index3, name='index3'),
]
