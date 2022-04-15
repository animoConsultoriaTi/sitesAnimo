from django.urls import path
from . import views

urlpatterns = [
    path('', views.animoSite, name='home'),
    path('service/<str:slug>', views.serviceView, name='service'),
    path('about/', views.aboutView, name='about')
]
