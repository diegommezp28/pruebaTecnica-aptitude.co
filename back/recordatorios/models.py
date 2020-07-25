from django.db import models

# Create your models here.
class Recordatorio(models.Model):
    id = models.IntegerField(primary_key=True)
    titulo = models.TextField(default='')
    cuerpo = models.TextField(default='')
    vencimiento = models.DateField(null=True)
    # owner = models.ForeignKey(Proveedor,on_delete= models.SET_NULL, null=True)