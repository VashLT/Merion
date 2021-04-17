from django.urls import path
from .views import home, members, labs

app_name = 'frontend'

urlpatterns = [
    path('', home, name='home'),
    path('members/', members, name='members'),
    path('labs/', labs, name='labs'),
    path('labs/<int:id_lab>', labs, name='labs')
]
