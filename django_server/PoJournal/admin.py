from django.contrib import admin
from .models import Journal


class JournalAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'date')


# Register your models here.
admin.site.register(Journal, JournalAdmin)
