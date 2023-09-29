from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Todo
from .serializers import TodoSerializer

@api_view(["GET" , "POST"]) # Define function for API
def todo_list(request):
    if request.method == "GET":
        todos = Todo.objects.all()     # Fetch all from database
        serializer = TodoSerializer(todos, many=True) # Serializer convert object list into format suitable for API
        return Response(serializer.data) # Response the serialized data to client

    elif request.method == "POST":
        serializer = TodoSerializer(data=request.data) # create new data and serialize it
        if serializer.is_valid(): # if serialized data valid
            serializer.save() # save
            return Response(serializer.data, status=status.HTTP_201_CREATED) # Response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Response if error

@api_view(["GET", "PATCH", "PUT", "DELETE"])
def todo_details(request, pk): # todo_details that takes two parameters. request known as the HTTP request object; pk known as the primary key
    todo = get_object_or_404(Todo, id=pk) # retrieve object from db; based on pk

    if request.method == "GET":
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

    elif request.metgod == "PUT":
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Response if error

    elif request.method == "DELETE":
        todo.delete()
        return Response(status.HTTP_204_NO_CONTENT)