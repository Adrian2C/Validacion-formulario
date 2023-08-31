//se llama al elemento padre ID=' formulario', y un eventlistener, que actue cuando se haga click en submit
//se le agrega una funcion flecha para que realiste directamente la funcion indicada
//se le agrega un event que prevenga el evento por default ( que es q borre todo lo de la pagina cuando se envie el form)
// luego se llama al primer elemento que es el nombre
//se crean dos variables, una para cuando este bien el input y otra cuando haya error
//se crea un condicional, que ademas incluya en sus parametros un 'TRIM', para que ignore espacios antes y despues del nombre
//caso que el elemento nombre este vacio al enviar el form, muestra mensaje de error, caso que este completo, no muestra nada

//luego se realiza la validacion del correo, llamando a los dos elementos del mail
//y se crea una validacion, que si el mail no es como el patron de email(emailPatter), entra en la funcion que muestra un mensaje, y abajo nos crea el elemento para que figure
//si cumple los requisitos del email patter, entonces no muestra nada

//para contrasena se llama al ID de la contraseña, se agrega una variable con el patron de contraseña
//se inserta una verificacion si el dato insertado concuerda cno el patron del regex
//al final, se confirma si esta todo bien, se envia un alert, y se resetea el formulario

//-----------------------------------
//manual para Firebase

//se ingresa a firebase, --> ir a consola--> nuevo proyecto (nombre) -->continuar y listo
//se usa el CLOUD FIRESTORE (q es la base de datos) --> crear base de datos
//comenzar en modo prueba --> siguiente --> habilitar
//se puede modificar la fecha en la parte de regla, que indica a partir de cuando ya no se puede modificar la base
//compilador de consultas --> ver documentos --> Cloud Firebase --> comenzar --> agregar los 2 script
//se agrega los 2 scripts al html
//luego se agrega la inicializacion de cloud firestore ( api con espacio de no..) arriba del codigo ya escrito
//se inserta el codigo de agregar datos al final donde se recibe los datos del backend
//se inserta los nombres que va a tener cada variable del codigo back, y que dato debe recibir de nuestro formulario

//en firebase, en descripcion general --> en "web < / >" permite agregar firebase a la aplicacion web
//y se copia la firebase configuration, y se pega en los datos que se puseron en el top del form

//y quedo listo, ahora todos los datos guardados van a ir al form

import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDddOKzG9COpPHRayp9SUC-9PD0R5eYME8",
  authDomain: "form-sergie.firebaseapp.com",
  projectId: "form-sergie",
  storageBucket: "form-sergie.appspot.com",
  messagingSenderId: "121789437359",
  appId: "1:121789437359:web:e005d7ee2214df8d428b5a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault(); //esto evita que al apretar submit se borre todo y se actualize la pagina

  //validar campo nombre
  let entradaNombre = document.getElementById-("name"); //llamo a las dos variables
  let errorNombre = document.getElementById("nameError");

  if (entradaNombre.value.trim() === "") {
    //en caso que el nombre este vacio
    errorNombre.textContent = "Por favor, introduci tu nombre"; //envio un mensaje de error
    errorNombre.classList.add("error-message"); //añado el mensaje
  } else {
    //caso contrario
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message"); //se elimina el mensaje de alerta
  }
  //validar correo electronico
  let emailEntrada = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = "por favor, introduci un email valido";
    emailError.classList.add("error-message");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }
  //validar la contraseña
  let contrasenaEntrada = document.getElementById("password");
  let contrasenaError = document.getElementById("passwordError");
  let contrasenaPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
  if (!contrasenaPattern.test(contrasenaEntrada.value)) {
    contrasenaError.textContent =
      "la contrasena debe tener al menos 8 caracteres, numeros, mayusculas ,minusculas y caracteres especiales";
    contrasenaError.classList.add("error-message");
  } else {
    contrasenaError.textContent = "";
    contrasenaError.classList.remove("error-message");
  }
  //si todos los campos son validos enviar fomulario

  if (
    !errorNombre.textContent &&
    !emailError.textContent &&
    !contrasenaError.textContent
  ) {
    //BACKEND QUE RECIBA LA INFO

    db.collection("users")
      .add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: contrasenaEntrada.value,
      })
      .then((docRef) => {
        alert("El formulario se ha enviado con exito", docRef.id);
        document.getElementById("formulario").reset();
      })
      .catch((error) => {
        alert(error);
      });
  }
});
