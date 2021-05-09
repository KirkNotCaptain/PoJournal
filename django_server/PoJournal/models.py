from django.db import models

# Create your models here.


class Journal(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title
