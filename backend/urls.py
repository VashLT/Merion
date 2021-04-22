from django.urls import path

app_name = 'backend'

urlpatterns = [
    path('', home, name='home'),
]
