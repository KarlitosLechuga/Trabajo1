from django.contrib import admin
from .models import Categoria,Productos
# Register your models here.

# ACCESO A LAS TABLAS CREADAS EN CORE/MODELS

admin.site.register(Categoria)
admin.site.register(Productos)
