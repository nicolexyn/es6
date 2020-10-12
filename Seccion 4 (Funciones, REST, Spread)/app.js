// *****************************************************
// Funciones (parametros opcionales)
console.log("******* Funciones (parametros opcionales)*******");
// *****************************************************

function saludo(mensaje = 'Hola Mundo', tiempo = 1500) {
  // mensaje = mensaje || 'Hola Mundo';
  // mensaje = ( typeof mensaje !== "undefined" ) ? mensaje : 'Hola Mundo2';
  setTimeout(() => {
    // console.warn(mensaje);
  }, tiempo);
}

saludo();

// ---------------------------------
console.warn('// ---------------------------------');
// ---------------------------------

function saludar (fn = fnTemporal, persona = {nombre: 'Nicolas'}) {

  console.log(typeof fn);

  if (typeof fn === 'undefined') {
    console.log('no es una funcion');
  }

  fn();

  console.log(persona);
}

function fnTemporal() {
  console.log('Hola Mundo FN');
}

saludar(fnTemporal, {nombre: 'Juan Carlos'});


// *****************************************************
// Arguments
console.log("******* Arguments*******");
// *****************************************************

function sumar(a = 1, b = 2) {
  console.log(arguments);
}

sumar();

// *****************************************************
// Parametros REST 
console.log("******* Parametros REST *******");
// Solo puede haber uno en la funcion
// Siempre debe estar al final
// *****************************************************

function agregar_alumno(arr_alumnos, ...alumnos) {
  console.log('arguments', arguments);
  for (let i = 0; i < alumnos.length; i++) {
    arr_alumnos.push(alumnos[i]);
  }
  return arr_alumnos;
}

let alumnos_arr = ['fernando'];

let alumnos_arr2 = agregar_alumno(alumnos_arr, 'maria', 'pedro', 'susana');
 
console.log(alumnos_arr2);


// *****************************************************
// Spread
console.log("******* Spread*******");
// *****************************************************

let numeros = [1,5,10,20,100,234];
console.log('numeros', ...numeros);
// var max = Math.max.apply(Math, numeros);
let max = Math.max(...numeros);

console.log('Maximo', max);




// *****************************************************
// Romper relacion de referencia de objetos Spread
console.log("******* Romper relacion de referencia de objetos*******");
// *****************************************************

let persona1 = {
  nombre: 'Nicolas',
  edad: 34
}

let persona2 = { ...persona1 };

persona2.nombre = 'Juan';

console.log('persona1', persona1);
console.log('persona2', persona2);

/*********************************************/

let persona3 = {
  nombre: 'Nicolas',
  edad: 34
}

let persona4 = {
  nombre: 'Juan',
  edad: 18,
  direccion: 'facundo quiroga 1322',
  conduce: true,
  vehiculo: true,
  casado:false
}

persona3 = {
  ...persona4,
  ...persona3
}

console.log('persona3', persona3);
console.log('persona4', persona4);


// *****************************************************
// Diferencia entre Rest y  Spread
console.log("******* Diferencia entre Rest y Spread*******");
// *****************************************************

function saludarRest(saludo, ...nombres) {
  console.log(`${saludo} ${nombres}`);
}

function saludarSpread(saludo, ...nombres) {
  console.log(`${saludo} ${nombres}`);

}

saludarRest('hola', 'fernando', 'maria', 'susana');

let personas = ['fernando', 'maria', 'susana'];
saludarRest('hola', personas);

console.log('------------------------------------');

let partes = ['brazos', 'piernas'];
let cuerpo = ['cabeza', 'cuello', ...partes, 'pies', 'dedos'];

console.log(cuerpo);


// *****************************************************
// Doble comportamiento de las funciones NEW TARGET (nos ayuda a indicr si una funcion fue llamada con new ejecutando el constructor y es mas seguro que instanceof)
console.log("******* Doble comportamiento de las funciones NEW TARGET *******");
// *****************************************************

function Persona(nombre) {

  if (typeof new.target !== 'undefined') { // this instanceof Persona (cuando ejecutan con .call esto no sirve)
    this.nombre = nombre;
  } else {
    throw new Error('Esta funcion, se debe utilizar ocn el new');
  }

  this.nombre = nombre; 
}

var persona = new Persona('Nicolas');

var noespersona = Persona.call(persona, 'Nicolas');

console.log(persona);
console.log(noespersona);