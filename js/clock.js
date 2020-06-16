'use strict'

// creamos una constante que siempre contenga la fecha actual
const fecha = new Date()

// para poder crear objetos de tipo Reloj, nos creamos un
// constructor de este objeto, pasandole como argumento la ciudad y el valor de diferencia de hora
function Reloj (ciudad, cambioHora) {
  this.relojNombre = ciudad
  this.cambioHora = `Hoy, ${cambioHora} H`
  this.horaActual = arreglarFormatoHora(cambioHora)
  this.minutos = arreglarFormatoMinutos()
}

// esta funcion se ocupa con mostrar en el DOM nuestros relojes
function insertarReloj (ciudad) {
  // obtenemos acceso al elemento main
  const mainElement = document.getElementById('main')

  // creamos nuevos elementos para poder mostrar las horas
  const nuevoArticulo = document.createElement('article')
  mainElement.appendChild(nuevoArticulo)

  const nuevoParrafo = document.createElement('p')
  // en ocasiones anadimos clases a los elementos para darles estilos con css
  nuevoParrafo.classList.add('centered')
  nuevoArticulo.appendChild(nuevoParrafo)

  const nuevoTitular = document.createElement('h2')
  // rellenamos los elementos con los datos de nuestro script
  nuevoTitular.innerHTML = ciudad.cambioHora
  nuevoParrafo.appendChild(nuevoTitular)

  const nuevoSubTitular = document.createElement('h3')
  nuevoSubTitular.innerHTML = ciudad.relojNombre
  nuevoTitular.appendChild(nuevoSubTitular)

  const mostrarHora = document.createElement('p')
  nuevoParrafo.appendChild(mostrarHora)
  mostrarHora.classList.add('grande')
  mostrarHora.innerHTML = ciudad.horaActual + ':' + ciudad.minutos
}

// funcion que anade un 0 antes del valor de los minutos si son menores de 10
function arreglarFormatoMinutos () {
  const minutos = fecha.getMinutes()
  if (minutos < 10) {
    const minutosArreglados = '0' + minutos
    return minutosArreglados
  } else {
    return minutos
  }
}

// funcion que anade un 0 antes del valor de las horas si son menores de 10
function arreglarFormatoHora (diferencia) {
  const hora = fecha.getHours() + diferencia
  if (hora < 10) {
    const horaArreglada = '0' + hora
    return horaArreglada
  } else {
    return hora
  }
}

// cramos los cinco relojes
const madrid = new Reloj('Madrid', 0)
const londres = new Reloj('Londres', -1)
const la = new Reloj('Los Angeles', -9)
const ny = new Reloj('Nueva York', -6)
const sidney = new Reloj('Sidney', 8)

// insertamos como elementos nuevos los cinco relojes
insertarReloj(madrid)
insertarReloj(londres)
insertarReloj(la)
insertarReloj(ny)
insertarReloj(sidney)

// para que el usuario pueda anadir un reloj con sus datos:
// primero accedemos al boton
const botonAnadir = document.getElementById('anadir')

// le asignamos un event listener y una funcion que hace salir
// dos prompts para meter dentro de constantes los valores que nos pasa el usuario

botonAnadir.addEventListener('click', function () {
  const nombreDeCiudadNueva = String(prompt('que ciudad quiere anadir?'))
  const diferenciaDeHora = Number(prompt('que diferencia de hora hay?'))

  // creamos un nuevo objeto de tipo Reloj con los datos que nos pasaron y lo insertamos en el HTML
  const relojNuevo = new Reloj(nombreDeCiudadNueva, diferenciaDeHora)
  insertarReloj(relojNuevo)
})
