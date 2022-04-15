from django.contrib import admin
from .models import Sector, Course, Candidate


@admin.register(Sector)
class SectorAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')


@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = ('registration', 'name', 'course', 'shift', 'first_sector', 'second_sector', 'curriculum',
                    'created_at')
