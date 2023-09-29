from django.db import models

class Todo(models.Model):
    task = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    created = models.DateField(auto_now_add=True) #Timestamp assigned upon creation
    updated = models.DateField(auto_now=True) #Timestamp updated whenever object save

    def __str__(self):
        return self.task
