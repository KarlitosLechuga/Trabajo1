# Generated by Django 4.2.2 on 2023-06-27 00:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('idCategoria', models.IntegerField(primary_key=True, serialize=False, verbose_name='Id de categoría')),
                ('nombreCategoria', models.CharField(max_length=80, verbose_name='Nombre de la categoría')),
            ],
        ),
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('id_cod', models.CharField(max_length=6, primary_key=True, serialize=False, verbose_name='CODIGO ID')),
                ('marca', models.CharField(max_length=80, verbose_name='Marca vehículo')),
                ('modelo', models.CharField(blank=True, max_length=80, null=True, verbose_name='Modelo')),
                ('precio', models.IntegerField(max_length=80, verbose_name='Precio')),
                ('nombre', models.CharField(blank=True, max_length=80, null=True, verbose_name='Nombre')),
                ('imagen', models.ImageField(default='sinfoto.jpg', upload_to='images/', verbose_name='Imagen')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='core.categoria')),
            ],
        ),
    ]