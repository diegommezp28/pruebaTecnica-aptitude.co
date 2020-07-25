from rest_framework import serializers

from .models import Recordatorio

class RecordatorioSerializer(serializers.ModelSerializer):
    vencimiento = serializers.DateField(required=False, allow_null=True, default='2020-07-25')
    class Meta:
        model = Recordatorio
        fields = ('id','titulo', 'cuerpo', 'vencimiento')
        optional_fields = ['vencimiento']
        read_only_fields = ['id']