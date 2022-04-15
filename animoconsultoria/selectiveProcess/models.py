from django.db import models

# Create your models here.
from django.db import models


class Sector(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'sectors'


class Course(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'courses'


class Candidate(models.Model):

    SHIFTS = (
        ('manhã', 'Manhã'),
        ('noite', 'Noite')
    )

    registration = models.BigIntegerField()
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    phone = models.CharField(max_length=16)
    email = models.EmailField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    shift = models.CharField(
        max_length=5,
        choices=SHIFTS
    )
    enrollment_date = models.CharField(max_length=10)
    first_sector = models.ForeignKey(
        Sector, on_delete=models.CASCADE, related_name='first_sector')
    second_sector = models.ForeignKey(
        Sector, on_delete=models.CASCADE, related_name='second_sector')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    curriculum = models.FileField(upload_to='documents/')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'candidates'
