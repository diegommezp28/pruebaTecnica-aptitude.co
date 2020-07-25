from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Recordatorio(models.Model):
    id = models.IntegerField(primary_key=True)
    titulo = models.TextField(default='')
    cuerpo = models.TextField(default='')
    vencimiento = models.DateField(null=True)
    owner = models.ForeignKey(User,on_delete= models.CASCADE, null=True, related_name="recordatorios")