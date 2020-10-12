// *****************************************************
// Simbolos y propiedades
console.log("******* Simbolos y propiedades*******");
// *****************************************************

let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol('segundo nombre');

let persona = {
  [segundoNombre]: 'Olexyn'
};

persona[primerNombre] = 'Nicolas';

console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);
console.log(segundoNombre);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2); // false
console.log(simbolo1 === simbolo2); // false
console.log(Object.is(simbolo1, simbolo2)); // false

console.log(typeof primerNombre);

// console.log(' Mi simbolo: ' + primerNombre); // Cannot convert a Symbol value to a string



// *****************************************************
// Compartiendo simbolos - Symbol.for() y Symbol.keyFor() 
console.log("******* Compartiendo simbolos - Symbol.for() y Symbol.keyFor() *******");
// *****************************************************

let userID = Symbol.for('userID');
let objeto = {};

objeto[userID] = '12345';

console.log(objeto[userID]);
console.log(userID);


let userID2 = Symbol.for('userID');

console.log(userID == userID2); // true
console.log(userID === userID2); // true
console.log(Object.is(userID, userID2)); // true

console.log(objeto[userID2]);
console.log(userID2);



let id_ = Symbol.for('id unico');
console.log(Symbol.keyFor(id_));

let id2_ = Symbol.for('id unico');
console.log(Symbol.keyFor(id2_));




// *****************************************************
// Coercion de los simbolos 
console.log("******* Coercion de los simbolos *******");
// *****************************************************


let id = Symbol.for('id');
let numero = 10;
let texto = '10';
let bool = true;
let NotAn = NaN;

console.log(numero + texto); // 1010
console.log(numero + Number(texto)); // 20
console.log(numero + NotAn); // NaN
console.log(bool + bool); // 2

// console.log(texto + id); // Cannot convert a Symbol value to a string

console.log('Mi simbolo es: ' + String(id)); // Mi simbolo es: Symbol(id)
console.log('Mi simbolo es: ' + Symbol.keyFor(id)); // Mi simbolo es: id



// *****************************************************
// Recuperando las propiedades simbolo 
console.log("******* Recuperando las propiedades simbolo *******");
// *****************************************************

let id3 = Symbol.for('id');
let activo = Symbol.for('activo');

let persona_ = {
  [id3]: '123',
  [activo]: true,
  ['codigo']: 'XG123',
  nombre: 'Nicolas',
  apellido: 'Olexyn',
  edad: 34
};

console.log(Object.keys(persona));

for(key in persona_) { // no se ven los Symbols con el for in
  console.log(key, persona_[key]);
}

let simbolos = Object.getOwnPropertySymbols(persona_);
console.log(simbolos);

for(i in simbolos) {
  console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}