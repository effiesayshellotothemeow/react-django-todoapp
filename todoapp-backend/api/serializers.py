from rest_framework import serializers

from .models import Todo

# inheritance
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "task", "completed"]
