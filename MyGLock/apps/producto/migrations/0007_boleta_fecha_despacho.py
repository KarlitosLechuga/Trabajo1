# Generated by Django 4.2.2 on 2023-07-10 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0006_detalleboleta'),
    ]

    operations = [
        migrations.AddField(
            model_name='boleta',
            name='fecha_despacho',
            field=models.DateField(blank=True, null=True),
        ),
    ]