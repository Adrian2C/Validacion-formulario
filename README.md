# Validacion-formulario

Manual de uso 
<ul>
<li>//se llama al elemento padre ID=' formulario', y un eventlistener, que actue cuando se haga click en submit</li>
<li>//se le agrega una funcion flecha para que realiste directamente la funcion indicada</li>
<li>//se le agrega un event que prevenga el evento por default ( que es q borre todo lo de la pagina cuando se envie el form)</li>
<li>// luego se llama al primer elemento que es el nombre</li>
<li>//se crean dos variables, una para cuando este bien el input y otra cuando haya error</li>
<li>//se crea un condicional, que ademas incluya en sus parametros un 'TRIM', para que ignore espacios antes y despues del nombre</li>
<li>//caso que el elemento nombre este vacio al enviar el form, muestra mensaje de error, caso que este completo, no muestra nada</li>

<li>//luego se realiza la validacion del correo, llamando a los dos elementos del mail</li>
<li>//y se crea una validacion, que si el mail no es como el patron de email(emailPatter), entra en la funcion que muestra un mensaje, y abajo nos crea el elemento para que figure</li>
<li>//si cumple los requisitos del email patter, entonces no muestra nada</li>
<br>
<li>//para contrasena se llama al ID de la contraseña, se agrega una variable con el patron de contraseña</li>
<li>//se inserta una verificacion si el dato insertado concuerda cno el patron del regex</li>
<li>//al final, se confirma si esta todo bien, se envia un alert, y se resetea el formulario</li>
</ul>

<hr>
//manual para Firebase
<ul>
<li>//se ingresa a firebase, --> ir a consola--> nuevo proyecto (nombre) -->continuar y listo</li>
<li>//se usa el CLOUD FIRESTORE (q es la base de datos) --> crear base de datos</li>
<li>//comenzar en modo prueba --> siguiente --> habilitar</li>
<li>//se puede modificar la fecha en la parte de regla, que indica a partir de cuando ya no se puede modificar la base</li>
<li>//compilador de consultas --> ver documentos --> Cloud Firebase --> comenzar --> agregar los 2 script</li>
<li>//se agrega los 2 scripts al html</li>
<li>//luego se agrega la inicializacion de cloud firestore ( api con espacio de no..) arriba del codigo ya escrito</li>
<li>//se inserta el codigo de agregar datos al final donde se recibe los datos del backend</li>
<li>//se inserta los nombres que va a tener cada variable del codigo back, y que dato debe recibir de nuestro formulario</li>

<li>//en firebase, en descripcion general --> en "web < / >" permite agregar firebase a la aplicacion web</li>
<li>//y se copia la firebase configuration, y se pega en los datos que se puseron en el top del form</li>

<li>//y quedo listo, ahora todos los datos guardados van a ir al form</li>
</ul>
