// *****************************************************
// Introduccion a los Maps y sus metodos
console.log("******* Introduccion a los Maps y sus metodos *******");
// *****************************************************


let mapa = new Map();

mapa.set('nombre', 'fernando');
mapa.set('edad', 31);
mapa.set('apellido');

console.log(mapa);
console.log(mapa.size);

console.log(mapa.get('nombre'));
console.log(mapa.get('edad'));
console.log(mapa.has('nombre'));
console.log(mapa.has('apellido'));

mapa.delete('nombre');
console.log('borrar mapa', mapa);

mapa.set('edad'); // set undefined

console.log('setear edad undefined', mapa);

mapa.clear();

console.log('clear', mapa);


// *****************************************************
// Inicializacion de los mapas
console.log("******* Inicializacion de los mapas *******");
// *****************************************************

let mapa1 = new Map([['nombre', 'nicolas'], ['edad', 31], [null, undefined]]);

console.log(mapa1);

console.log(mapa.get(null)); // undefined


// *****************************************************
// forEach() de los mapas
console.log("******* forEach() de los mapas *******");
// *****************************************************

let mapa2 = new Map([['nombre', 'fernando'], ['edad', 31]]);

mapa2.forEach((value, key, mapOrigen) => {

  console.log(key, value);
  console.log(mapOrigen);
});



// *****************************************************
// Nuevo Ciclo - FOR OF
console.log("******* Nuevo Ciclo - FOR OF *******");
// *****************************************************

// let numeros = [100, 20,30,50,200];

// FOR
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// FOR IN
// for (const i in numeros) {
//   console.log(numeros[i]);
// }

// for (const numero of numeros) {
//   console.log(numero);
// }

// *************************************************************

// let personas = [
//   {nombre: 'nicolas', edad: 34},
//   {nombre: 'maria', edad: 10},
//   {nombre: 'susana', edad: 18},
//   {nombre: 'victor', edad: 25},
//   {nombre: 'juan', edad: 40}
// ];

// for (const per of personas) {
//   console.log(per.nombre, per.edad);
// }

//**************************************************************

// let personas = new Set();
// personas.add({nombre: 'nicolas', edad: 31});
// personas.add({nombre: 'melissa', edad: 26});
// personas.add({nombre: 'juan', edad: 28});

// for (const per of personas) {
//   console.log(per.nombre, per.edad);
// }

// *************************************************************

// let personas = new Set();
// personas.add('nicolas');
// personas.add('melissa');
// personas.add('maria');

// for (const per of personas) {
//   console.log(per);
// }

// ************************************************************

let personas = new Set([['nombre', 'fernando'], ['nombre', 'maria']]);

for (per of personas) {
  console.log(per);
}