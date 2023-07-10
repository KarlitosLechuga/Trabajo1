from django.shortcuts import redirect, render
from .models import Categoria, Productos
from .forms import MantenedorProductosForm



# def home(request):
#     return render(request, "core/home.html")

def inicio(request):
    return render(request,"core/inicio.html")

def administracion(request):
    return render(request,"core/administracion.html")

def bodega(request):
    return render(request,"core/bodega.html")

def boleta(request):
    return render(request,"core/boleta.html")

def carrito(request):
    return render(request,"core/carrito.html")


def ficha(request):
    return render(request,"core/ficha.html")

def ingresar(request):
    return render(request,"core/ingresar.html")


def menu_footer(request):
    return render(request,"core/menu-footer.html")

def menu_header(request):
    return render(request,"core/menu-header.html")

def miscompras(request):
    return render(request,"core/miscompras.html")

def misdatos(request):
    return render(request,"core/misdatos.html")

def nosotros(request):
    return render(request,"core/nosotros.html")

def productos(request):
    return render(request,"core/productos.html")

def registro(request):
    return render(request,"core/registro.html")

def ropa(request):
    return render(request,"core/ropa.html")

def usuarios(request):
    return render(request,"core/usuarios.html")

def ventas(request):
    return render(request,"core/ventas.html")




# MODIFICAR LOS PRECIOS

def poblar_bd_Productos(request):
    Productos.objects.all().delete()
    Productos.objects.create(id_cod="A0", nombre="M&P45 M2.0™ THUMB SAFETY",marca='Smith & Wesson', modelo="Volvo Station Wagon", precio = 000,imagen="images/volvosw.jpg", categoria=Categoria.objects.get(idCategoria=1))
    Productos.objects.create(id_cod="A1",nombre="M&P®22 COMPACT CERAKOTE® FLAT DARK EARTH THREADED BARREL", marca='Smith & Wesson', modelo="S7", precio = 000,imagen="images/saleen.jpg", categoria=Categoria.objects.get(idCategoria=1))
    Productos.objects.create(id_cod="A2",nombre="M&P380 Ported Shield Black Performance Center, calibre .380 Auto", marca='Smith & Wesson', modelo="Cobra de 1967", precio = 000,imagen="images/cobra.jpg", categoria=Categoria.objects.get(idCategoria=1))
    Productos.objects.create(id_cod="A3",nombre="M&P380 Shield EZ Gold, calibre .380ACP", marca='Smith & Wesson', modelo="Pagoda de 1972",precio = 000, imagen="images/pagoda.jpg", categoria=Categoria.objects.get(idCategoria=1))
    Productos.objects.create(id_cod="A4",nombre=" M&P45 M2.0 5,6” Ported", marca='Smith & Wesson', modelo="Wolf WR1 Ford Race Car",precio = 000, imagen="images/wolf.jpg", categoria=Categoria.objects.get(idCategoria=1))
    
    Productos.objects.create(id_cod="A5", nombre="SX4 CAMO MOBUC 20GA",marca='Winchester', modelo="Flathead Roadster de 1932",precio = 000, imagen="images/flathead.jpg", categoria=Categoria.objects.get(idCategoria=2))
    Productos.objects.create(id_cod="A6", nombre="SX4 FIELD",marca='Winchester', modelo="Phantom",precio = 000, imagen="images/phantom.jpg", categoria=Categoria.objects.get(idCategoria=2))
    Productos.objects.create(id_cod="A7",nombre="SX4 CAMO MOBUC", marca='Winchester', modelo="Mustang de 1970",precio = 000, imagen="images/mustang.jpg", categoria=Categoria.objects.get(idCategoria=2))
    
    Productos.objects.create(id_cod="A8",nombre="Monarch Wing & Clay 20 Gauge 7/8 oz Shotshells - 25 Rounds", marca='Monarch', modelo="Iron Bike de 1998",precio = 000, imagen="images/motoiron.jpg", categoria=Categoria.objects.get(idCategoria=3))
    Productos.objects.create(id_cod="A9",nombre="Monarch Target Load 28 Gauge Shotshells - 25 Rounds", marca='Monarch', modelo="Silver de 2000",precio = 000, imagen="images/silver.jpg", categoria=Categoria.objects.get(idCategoria=3))
    return redirect(Productos, action='ins', id = '-1')
