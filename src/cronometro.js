//Indicar id del contenedor donde se muestra el tiempo.
window.onload = function() {
   //Obtener el elemento contenedor del tiempo en una variable.
   pantalla = document.getElementById("time");
}

//Variable que indica si el tiempo esta en marcha.
var enMarcha = false; 
//Variable para almacenar el tiempo transcurrido.
var almacenarTiempo = 0; 

//Función que ejecuta el botón start.
const iniciarTiempo = () => {
   //Revisar si el crónometro esta en marcha.
   if (enMarcha == false) { 
      //Asignar un tiempo inicial.
      timeInicial = new Date();
      //Establecer intervalo de tiempo para iterar el cambio de HH:MM:SS.
      control = setInterval(contarTiempoCronometro,10);
      //Establecer variable en TRUE.
      enMarcha = true;
   }
}

//Función que se encarga de controlar el tiempo en HH:MM:SS.
const contarTiempoCronometro = () => { 
   //Inicializar tiempo actual.
   timeActual = new Date();
   //Almacenar el tiempo actual - inicial. 
   almacenarTiempo = timeActual - timeInicial;
   //Inicializar segunda variable de tiempo.
   acumular2 = new Date();
   //Uso de metodo "setTime" para almacenar el tiempo anterior.
   acumular2.setTime(almacenarTiempo); 
   //Obtener segundos de la variable "acumular2".
   ss = acumular2.getSeconds();
   //Obtener minutos de la variable "acumular2".
   mm = acumular2.getMinutes();
   //Obtener horas de la variable "acumular2".
   hh = acumular2.getHours()-19;
   //Revisar si el tiempo es menor a 10 para añadir 0 adicional.
   if (ss < 10) {ss = "0"+ss;} 
   if (mm < 10) {mm = "0"+mm;}
   if (hh < 10) {hh = "0"+hh;}
   //Método inner en el div contenedor,
   pantalla.innerHTML = hh+" : "+mm+" : "+ss;
   }

//Función para suspender el tiempo pero no reiniciarlo a cero.
const suspenderTiempo = () => { 
   if (enMarcha == true) {
      //Limpia el intervalo de tiempo para para el tiempo sin eliminar los valores.
      clearInterval(control);
      //False la bandera para detener el reloj.
      enMarcha = false;
      }     
   }      

//Función para reanudar el tiempo una vez suspendido.
const reanudarTiempo = () => {
   //Validar si el reloj esta en marcha.
   if (enMarcha == false) {
      //Actualiza la variable de tiempo.
      timeActu2 = new Date();
      //Asignación de la variable al tiempo actual.
      timeActu2 = timeActu2.getTime();
      //Obtiene el tiempo resumido despues de la resta del tiempo actual - el tiempo almacenado.
      acumularResume = timeActu2-almacenarTiempo;
      timeInicial.setTime(acumularResume);
      //Reasigna el intervalo de tiempo llamando nuevamente la función del crónometro.
      control = setInterval(contarTiempoCronometro,10);
      //Establece true la variable que indica el movimiento del reloj.
      enMarcha = true;
      }     
   }

//Función para detener el crónometro y reiniciarlo a cero.
const detenerTiempo = () => {
   //Valida si el reloj esta en marcha.
   if (enMarcha == true) {
      //Limpia el intervalo de tiempos.
      clearInterval(control);
      //Establece la bandera en false para detener el conteo.
      enMarcha = false;
   }
   //Iguala el almacenamiento de tiempo en cero.
   almacenarTiempo = 0;
   //Imprime en el contenedor html el formato de ceros.
   pantalla.innerHTML = "00 : 00 : 00";
}