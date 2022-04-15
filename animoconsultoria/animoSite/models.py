from django.db import models


class Service(models.Model):
    icon = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    info = models.TextField(null=True, blank=True)
    methodology = models.TextField(null=True, blank=True)
    howhelp = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'services'


class Partner(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    imagePath = models.SlugField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'partners'
