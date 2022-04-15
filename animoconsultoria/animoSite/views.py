from django.shortcuts import render, get_object_or_404
from .models import Service, Partner


def animoSite(request):
    services = Service.objects.all().order_by('title')
    partners = Partner.objects.all()
    return render(request, 'animoSite/index.html', {'services': services, 'partners': partners})


def serviceView(request, slug):
    thisService = get_object_or_404(Service, slug=slug)
    services = Service.objects.exclude(id=thisService.id).order_by('title')
    return render(request, 'animoSite/service.html', {'thisService': thisService, 'services': services})


def aboutView(request):
    services = Service.objects.all().order_by('title')
    partners = Partner.objects.all()
    return render(request, 'animoSite/about.html', {'services': services, 'partners': partners})
