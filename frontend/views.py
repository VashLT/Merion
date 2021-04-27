from django.shortcuts import render

from merion.constants import MEMBERS, LABS


def home(request):
    return render(request, "frontend/home.html")


def members(request):
    return render(request, "frontend/members.html", {"MEMBERS": MEMBERS})



def labs(request, id_lab=0):
    return render(request, "frontend/labs.html", {"LABS": LABS})
