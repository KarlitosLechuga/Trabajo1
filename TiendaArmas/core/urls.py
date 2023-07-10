from django.urls import path
from .views import inicio, administracion, bodega,boleta,carrito,ficha,ingresar,menu_footer,menu_header,miscompras,misdatos,nosotros,productos,registro,ropa,usuarios,ventas


urlpatterns = [
    path('', inicio, name="inicio"),
    path('administracion',administracion,name="administracion"),
    path('bodega',bodega,name="bodega"),
    path('boleta',boleta,name="boleta"),
    path('carrito',carrito,name="carrito"),
    path('ficha',ficha,name="ficha"),
    path('ingresar',ingresar,name="ingresar"),
    path('menu_footer',menu_footer,name="menu footer"),
    path('menu_header',menu_header,name="menu header"),
    path('miscompras',miscompras,name="miscompras"),
    path('misdatos',misdatos,name="mis datos"),
    path('nosotros',nosotros,name="nosotros"),
    path('productos',productos,name="productos"),
    path('registro',registro,name="registro"),
    path('ropa',ropa,name="ropa"),
    path('usuarios',usuarios,name="usuarios"),
    path('ventas',ventas,name="ventas"),
]
