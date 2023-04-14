/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   return  array[array.length-1]
   
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
  return array.map((num) => {return num + 1 })
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   array.push(elemento)
   return array 
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   array.unshift(elemento)
   return array 
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   
    return palabras.join(" ")
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   var num = 0
   for (i = 0 ; i < arrayOfNums.length; i++) {
      num = num + arrayOfNums[i]
   }
   return num
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   var num = 0
   for (i = 0 ; i < resultadosTest.length; i++) {
      num = num + resultadosTest[i]
}
return  num / resultadosTest.length
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
     var mayor = arrayOfNums[0]
     for ( let i = 1 ; i <= arrayOfNums.length; i++) {
      if (arrayOfNums[i] > mayor) {
         mayor = arrayOfNums[i] }
      }
      return mayor
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   if (arguments.length === 0 ) return 0
   if (arguments.length === 1) return arguments[0]

    var promedio = arguments[0]
    for (let i =1; i < arguments.length; i++ ){
      promedio *= arguments[i]
    }
     return promedio
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   let mayores = []

   for( i = 0; i < array.length; i ++) {
      if (array[i] > 18 ) {
         mayores.push(array[i]) }
      }
      return mayores.length
}
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana"
    }
   else {  return "Es dia laboral"
    }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
 return num.toString().startsWith('9')
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   let sonIguales = array[0]
   for ( i = 0; i < array.length; i++) {
      if ( array[i] !== sonIguales) {
         return false 
      }
   }
   return true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   var mesesPedidos = []
   array.forEach(element => { if (element === "Enero"  || element === "Marzo" || element === "Noviembre" ) { 
   mesesPedidos.push(element) } } ) 
   if ( mesesPedidos.includes("Enero") && mesesPedidos.includes("Marzo") && mesesPedidos.includes("Noviembre") ) {
      return mesesPedidos 
   }
   else {
      return  "No se encontraron los meses pedidos"
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   var tablaCompleta = [];
for (let i = 0; i <= 10; i++) { 
  tablaCompleta.push(i) }
  return tablaCompleta.map((num) => { return num * 6 })
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    var arrayCorrect = []
   for (let i = 0; i <= array.length; i++) { 
      if (array[i] > 100 ) {
      arrayCorrect.push(array[i])
      } }
      return arrayCorrect
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   var arrayActual = []
   var suma = num
   for ( var i = 0; i < 10; i++) {
      suma = suma + 2 ;
      if (suma === i ) break ;
        else {
         arrayActual.push(suma)
      }
   }
   if (i < 10 ) {
      return "Se interrumpió la ejecución"
   }
   else {
   return arrayActual }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   var arrayActual = []
   var suma = num
   for ( var i = 0; i < 10; i++) {
      if ( i === 5 || suma === 5) {
          continue }
          else {
         suma = suma + 2 ;
         arrayActual.push(suma) }
      }
     return arrayActual
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
