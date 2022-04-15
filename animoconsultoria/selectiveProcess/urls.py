from django.urls import path
from . import views

urlpatterns = [
    path('selectiveProcess/', views.selectiveProcessView, name="selectiveProcess"),
    path('register/', views.register, name="register"),
    path('documents/<str:file_name>', views.documentsView, name="downloadDocument")
]
