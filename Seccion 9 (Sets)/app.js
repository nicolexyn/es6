// *****************************************************
// Introduccion a los Sets
console.log("******* Introduccion a los Sets*******");
// *****************************************************

// Los Sets son una lista ordenada de valores sin duplicados
// permiten un rapido acceso a la data q contienen


// *****************************************************
// Creando Sets - Agregando items y buscando elementos 
console.log("******* Creando Sets - Agregando items y buscando elementos *******");
// *****************************************************

// let items = new Set();

// items.add(10);
// items.add(11);
// items.add(8);
// items.add(7);
// items.add(7); // ignore
// items.add('7'); // Object.is(7, '7') -> false entonces lo agrega
// items.add('7'); // ignore
// items.add(7); // ignore

// console.log(items.size); // 5
// console.log(items); // Set(5) {10, 11, 8, 7, "7"}


// ******************************************************

let items = new Set([1,2,3,4,5,6,7,7,7,7,7,7,7,7,7]);

console.log(items.size); // 7
console.log(items); // Set(7) {1, 2, 3, 4, 5, 6, 7}

console.log(items.has(7)); // true
console.log(items.has('7')); // false



// *****************************************************
// Remover items de un Set 
console.log("******* Remover items de un Set *******");
// *****************************************************

let items2 = new Set([1,2,3,4,5]);

console.log(items2.size); // 5

items2.delete(3);
console.log(items2.size); // 4
console.log(items2); // Set(4) {1, 2, 4, 5}


items2.clear();
console.log(items2.size); // 0
console.log(items2); // Set(0) {}



// *****************************************************
// forEach() - en los sets 
console.log("******* forEach() - en los sets *******");
// *****************************************************

let personas = new Set(['Fernando', 'Maria', 'Susana']);


personas.forEach(function(valor, llave, setOriginal) {
  console.log(valor, llave, setOriginal);
  console.log(personas === setOriginal); // true
});



// *****************************************************
// Convertir un Set en Array 
console.log("******* Convertir un Set en Array *******");
// *****************************************************

let numeros = [45,4,8,6,65,4,2,8,9];

// let setNumeros = new Set(numeros);

// console.log(setNumeros);

// let arrayNumeros = [...setNumeros];

let arrayNumeros = eliminaDuplicados(numeros);

console.log(arrayNumeros);

// function eliminaDuplicados(items) {
//   let set = new Set(items);
//   return [...set];
// }
function eliminaDuplicados(items) {
  return [... new Set(items)];
}



let numeros3 = new Set([45,4,8,6,65,4,2,8,9]);

console.log(numeros3);
