from django.shortcuts import render

from merion.constants import MEMBERS, LABS


def home(request):
    return render(request, "frontend/home.html")


def members(request):
    return render(request, "frontend/members.html", {"MEMBERS": MEMBERS})


def labs(request, id_lab=0):
    if not id_lab:
        return render(request, "frontend/labs.html", {"LABS": LABS})
    if id_lab == 1:
        lab = [lab_dict for lab_dict in LABS if lab_dict['id'] == 1][0]
        return render(request, "lab1.html", {'lab': lab})
