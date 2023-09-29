from django.urls import path
from . import views

urlpatterns = [
    path("main", views.todo_list),
    path("main/<int:pk", views.todo_details)
]

#urls:
    #http://127.0.0.1:8000/main
    #http://127.0.0.1:8000/main/id


