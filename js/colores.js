// creamos un enlace al elemento HTML donde se mostrara el texto anunciando el dia y el color
const mostrarResultado = document.getElementById('texto_dia')

// para poder trabajar con el estilo del elemento body, lo guardamos en una constante
const body = document.getElementById('body')

// mediante la palabra reservada "new" nos creamos una instancia aprovechando del objeto Date propio de JS,
// contiene la fecha actual
const hoy = new Date()

// ahora llamamos el metodo getDay en nuestra instancia de la fecha actual para obtener un integer entre 0 y 6, que
// indica el dia de la semana (0 es domingo, 1 es lunes, etc.)
let dia = hoy.getDay()

// tambien declaramos dos variables locales que serviran para guardar el resultado del switch
let color, colorTexto

// segun el valor que tengamos dentro de la variable "dia" usamos la estructura switch para asignar los valores
// correspondientes a nuestras variables de color y de dia
switch (dia) {
  case 0: color = 'var(--naranja)'
    colorTexto = 'naranja'
    dia = 'domingo'
    break

  case 1: color = 'var(--azul)'
    colorTexto = 'azul'
    dia = 'lunes'
    break

  case 2: color = 'var(--rosa)'
    colorTexto = 'rosa'
    dia = 'martes'
    break

  case 3: color = 'var(--amarillo)'
    colorTexto = 'amarillo'
    dia = 'miércoles'
    break

  case 4: color = 'var(--lila)'
    colorTexto = 'lila'
    dia = 'jueves'
    break

  case 5: color = 'var(--verde)'
    colorTexto = 'verde'
    dia = 'viernes'
    break

  case 6: color = 'var(--rojo)'
    colorTexto = 'rojo'
    dia = 'sábado'
    break
}

// esta funcion es la que accede al elemento body, concretamente a la propiedad "backgroundColor" de su objeto "style" y le asigna
// el valor del color que se ha guardado en el switch. ademas se sobreescribe el texto del elemento HTML llamado "mostrarResultado"
function cambiarColorDelFondo () {
  body.style.backgroundColor = color
  mostrarResultado.innerHTML = `Hoy es ${dia} y por eso la página se ve de color ${colorTexto}.`
}

// cuando se carga el script, se llama la funcion principal
cambiarColorDelFondo()
