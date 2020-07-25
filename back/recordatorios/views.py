from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RecordatorioSerializer
from .models import Recordatorio

# Create your views here.
class RecordatorioViewSet(viewsets.ModelViewSet):
    queryset = Recordatorio.objects.all()
    serializer_class = RecordatorioSerializer