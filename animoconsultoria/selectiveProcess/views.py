import os
from django.http import FileResponse
from django.shortcuts import render, redirect
from animoSite.models import Service
from .forms import selectiveProcessForm
from django.contrib import messages
from django.urls import reverse
# Create your views here.

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def selectiveProcessView(request):
    services = Service.objects.all()
    form = selectiveProcessForm()
    return render(request, 'selectiveProcess/selectiveProcess.html', {'services': services, 'form': form})


def documentsView(request, file_name):
    filePath = BASE_DIR + '/documents/' + file_name
    response = FileResponse(open(filePath, 'rb'), as_attachment=True)
    return response


def register(request):
    form = selectiveProcessForm(request.POST, request.FILES)
    if form.is_valid():
        candidate = form.save(commit=False)
        candidate.curriculum.name = candidate.name.replace(
            ' ', '') + '.pdf'
        candidate.save()
        messages.success(request, 'Inscrito com Sucesso!')
        return redirect('home')
    else:
        messages.error(request, 'Dados Inválidos')
        return redirect('about')
