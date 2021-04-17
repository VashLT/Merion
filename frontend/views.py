from django.shortcuts import render

from merion.constants import MEMBERS, LABS


def home(request):
    return render(request, "home.html")


def members(request):
    return render(request, "members.html", {"MEMBERS": MEMBERS})


def labs(request, id_lab=0):
    if not id_lab:
        return render(request, "labs.html", {"LABS": LABS})
    if id_lab == 1:
        lab = [lab_dict for lab_dict in LABS if lab_dict['id'] == 1][0]
        return render(request, "lab1.html", {'lab': lab})
