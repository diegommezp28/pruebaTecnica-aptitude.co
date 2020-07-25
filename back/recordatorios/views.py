from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import RecordatorioSerializer
from .models import Recordatorio

# Create your views here.
class RecordatorioViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    # queryset = Recordatorio.objects.all()

    serializer_class = RecordatorioSerializer

    def get_queryset(self):
        return self.request.user.recordatorios.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)