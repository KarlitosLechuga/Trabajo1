from django import forms
from django.forms import ModelForm, fields
from .models import Productos

class MantenedorProductosForm(ModelForm):
    class Meta:
        model = Productos
        fields = ['id_cod', 'marca', 'modelo','nombre', 'precio','imagen', 'categoria']



