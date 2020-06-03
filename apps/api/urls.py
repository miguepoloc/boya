  
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'temperatura', views.TemperaturaViewSet)
router.register(r'chequeo', views.ChequeoViewSet)
router.register(r'humedad', views.HumedadViewSet)
router.register(r'sensores', views.SensoresViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]