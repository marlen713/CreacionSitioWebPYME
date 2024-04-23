# CreacionSitioWebPYME
Hito 5 - Presentación del Proyecto

Requerimientos 
1. Presentar puntos del último requerimiento del Hito 4 
 	Descripción general del sitio web : 
        El sitio web es un sitio web de una PYME que vende productos de Flan.
        
 	Características base del sitio web: 
        Las Caracteristicas base del sitio web son:
        - Pagina de inicio
        - Pagina de productos
        - Pagina de contacto
        - Pagina de acerca de nosotros
        - Pagina de login
        - Pagina de registro

 	Características personalizadas añadidas al sitio web:
        Las Características añadidas en el Hito 4 fueron de acuerdo a lo requerido en la guia: 
            1.- Habilitamos las url de autenticación de Django, para que el sitio web pueda funcionar con las funcionalidades de login y registro.
            2.- Creamos las plantillas de Inicio y Cerrar Sesion
            3.- Agregamos las url de login y logout como botones en el navbar.
            4.- Agregamos el decorador login_required de manera que no permita a usuarios no registrados acceder a la página de Bienvenida.
            5.- En el panel de administración de Django, se creó 3 usuarios, con username distintos, Inicia sesión con ellos en tu web. Adicionalmente, cambia el mensaje de “Bienvenido 
            usuario”, por “Bienvenido <nombreusuario>” en donde <nombreusuario> debe ser el valor correspondiente al nombre de usuario, el cual puede ser obtenido mediante {{user.get_username}}.

 	Problemas o dificultades con los que se encontraron a la hora de desarrollar el sitio web base
        Las dificultades es que siempre como principiante en Django, no se tiene claro como funciona el framework, por lo que se tuvo que investigar y aprender a usar el framework.

 	Problemas o dificultades con los que se encontraron a la hora de añadir características personalizadas.
        Los problemas es que me costaba detallar en donde se debe colocar cada cosa, por lo que tuve que investigar y aprender de la mejor manera en donde y que debia de colocar.

2. Ejecutar servidor y demostrar funcionalidad del sitio web a los otros estudiantes. 
source env/Scripts/actívate
python manage.py runserver


3. Demostrar funcionalidad personalizada añadida, explicando tanto porque se agregó esa funcionalidad y porqué se personalizó el diseño de la manera en que se hizo.
    La funcionalidad personalizada añadida en mi caso fue que en la pantalla inicio estuvieran el icono de WhasaApp, para que cunado le dieras clip este te dirija a la página de WhasaApp. Otra que añadi fue que en la barra del navba cuando ccolocara el mouse encima de la palabra contacto esta se dezplegara y mostrata las opciones como te puedes comunicar con nosotros, al darle clip esta te dirije a la opción que deseas.
    
    Se personalizó el diseño de dicha manera ya que es super importante que el diseño sea agradable y que el usuario se sienta comodo al momento de navegar por el sitio web y que se sienta comodo al momento de interactuar con el. Con este dezplegable de la barra de contacto se puede ver que el usuario puede interactuar de manera directa.
