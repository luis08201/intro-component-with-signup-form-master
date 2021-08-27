/* FIRST NAME */
const nombre = document.getElementById("formulario--input__nombre"); /*HACE LLAMADO AL INPUT */
nombre.addEventListener('input', () => { /* INPUT ES SELECCIONADO  */
  const nombreBox = document.getElementById('container__formulario--nombre');/*HACE LLAMADO AL DIV QUE CONTIENE EL INPUT */
  const nombreText = document.querySelector('.nombre--estado--txt'); /* HACE LLAMADO A ETIQUETA SPAN */
  const nombreIco = document.querySelector('.container__formulario__nombre'); /*HACE LLAMADO A ETIQUETA i*/
  const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ /* PATRON DE 40 LONG. Mayuscula, Minuscula */

  if (nombre.value.match(nombrePattern)) {  /* SI EL VALOR INGRESADO CONCUERDA CON EL PATRON */
    nombreBox.classList.add('formulario--input--valid');
    nombreBox.classList.remove('formulario--input--invalid');
    nombreIco.classList.add('fa-check-circle');
    nombreIco.classList.remove('fa-exclamation-circle');
    nombreText.innerHTML = ""
  } else if (nombre.value === '') {   /* SI LA CAJA DE TEXTO ESTA VACIA */
    nombreBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    nombreIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    nombreText.innerHTML = "First Name cannot be empty" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  } else {/* SI NO CONCUERDA EL VALOR INGRESADO CON EL PATRON */
    nombreBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    nombreIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    nombreText.innerHTML = "First Name cannot have numbers"
  }
})

/*LAST NAME*/

const apellido = document.getElementById("formulario--input__apellido");
apellido.addEventListener('input', () => {
  const apellidoBox = document.getElementById('container__formulario--apellido');
  const apellidoText = document.querySelector('.apellido--estado--txt');
  const apellidoIco = document.querySelector('.container__formulario__apellido');
  const apellidoPattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  if (apellido.value.match(apellidoPattern)) {
    apellidoBox.classList.add('formulario--input--valid');
    apellidoBox.classList.remove('formulario--input--invalid');
    apellidoIco.classList.add('fa-check-circle');
    apellidoIco.classList.remove('fa-exclamation-circle');
    apellidoText.innerHTML = ""
  } else if (apellido.value === '') {
    apellidoBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    apellidoBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    apellidoIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    apellidoIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    apellidoText.innerHTML = "Last Name cannot be empty" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  } else {
    apellidoBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    apellidoBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    apellidoIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    apellidoIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    apellidoText.innerHTML = "Last Name cannot be empty" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  }
})

/*EMAIL*/
const email = document.getElementById("formulario--input__correo");
email.addEventListener('input', () => {
  const emailBox = document.getElementById('container__formulario--email');
  const emailText = document.querySelector('.correo--estado--txt');
  const emailIco = document.querySelector('.container__formulario__correo');
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
  if (email.value.match(emailPattern)) {
    emailBox.classList.add('formulario--input--valid');
    emailBox.classList.remove('formulario--input--invalid');
    emailIco.classList.add('fa-check-circle');
    emailIco.classList.remove('fa-exclamation-circle');
    emailText.innerHTML = ""
  } else if (email.value === '') {
    emailBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    emailIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    emailText.innerHTML = "Email Address cannot be empty" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  } else {
    emailBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    emailIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    emailText.innerHTML = "Looks like this is not an email" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  }
})

/*PASSWORD*/
const pwd = document.getElementById("formulario--input__pwd");

pwd.addEventListener('input', () => {
  const pwdBox = document.getElementById('container__formulario--pwd');
  const pwdText = document.querySelector('.pwd--estado--txt');
  const pwdIco = document.querySelector('.container__formulario__pwd');
  const pwdPattern = /^.{4,12}$/

  if (pwd.value.match(pwdPattern)) {
    pwdBox.classList.add('formulario--input--valid');
    pwdBox.classList.remove('formulario--input--invalid');
    pwdIco.classList.add('fa-check-circle');
    pwdIco.classList.remove('fa-exclamation-circle');
    pwdText.innerHTML = ""
  } else if (pwd.value === '') {
    pwdBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    pwdBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    pwdIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    pwdIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    pwdText.innerHTML = "Password cannot be empty"
  }
  else {
    pwdBox.classList.add('formulario--input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    pwdBox.classList.remove('formulario--input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    pwdIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    pwdIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    pwdText.innerHTML = "The password must be from 4 to 12 digits."
  }
})