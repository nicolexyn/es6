// *****************************************************
// Extenciones de objetos literales
console.log("******* Extenciones de objetos literales*******");
// *****************************************************

function crearPersona(nombre, apellido, edad) {
  return {
    nombre,
    apellido,
    edad
  };
}

var melissa = crearPersona('melissa', 'flores', 30);

console.log(melissa);

// *****************************************************
// Metodos concisos
console.log("******* Metodos concisos*******");
// *****************************************************

var personaa = {
  nombre: 'Fernando',
  // getNombre: function () {
  //   console.log(this.nombre);
  // }
  getNombre() {
    console.log(this.nombre);
  }
}

personaa.getNombre();

// *****************************************************
// Nombres de propiedades computadas o procesadas
console.log("******* Nombres de propiedades computadas o procesadas*******");
// *****************************************************

// var persona = {};

// var apellido = 'apellido';

// persona['primer nombre'] = 'Fernando';
// persona[apellido] = 'Herrera';

// console.log(persona['primer nombre']);
// console.log(persona[apellido]);

// var persona = {
//   'primer nombre': 'Melissa'
// }

// console.log(persona['primer nombre']);

var apellido = 'primer apellido';

var persona = {
  'primer nombre': 'Fernando',
  [apellido]: 'Herrera'
};

console.log(persona['primer nombre']);
console.log(persona['primer apellido']);

var subFijo = ' nombre';

var persona2 = {
  ['primer' + subFijo]: 'Melissa',
  ['segundo' + subFijo]: 'Karen'
};

console.log(persona2['primer nombre']);
console.log(persona2['segundo' + subFijo]);

// *****************************************************
// Nuevo metodo: Object.is()
console.log("******* Nuevo metodo: Object.is()*******");
// *****************************************************

console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log('--------------------');

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log('--------------------');

console.log(5 == 5);
console.log(5 == '5');

console.log(5 === 5);
console.log(5 === '5');

console.log('-------- 5 contra 5 ------------');

console.log(Object.is(5,5));
console.log(Object.is(5,'5'));


// *****************************************************
// Nuevo metodo: Object.assign()
console.log("******* Nuevo metodo: Object.assign()*******");
// *****************************************************

function mezclar(objReceptor, objDonador) {
  Object.keys(objDonador).forEach(function (key) {
    objReceptor[key] = objDonador[key];
  });
  return objReceptor;
}

var objReceptor = {};

var objDonador = {
  // nombre: 'mi-archivo.js',
  get nombre() {
    return 'mi-archibo.js';
  }
};

// console.log(mezclar(objReceptor, objDonador));
console.log(Object.assign(objReceptor, objDonador));
console.log(objDonador);


// *****************************************************
// Orden de enumeracion de las propiedades de los objetos
console.log("******* Orden de enumeracion de las propiedades de los objetos*******");
// *****************************************************

var objeto = {
  c: 1,
  0: 1,
  x: 1,
  15: 1,
  r: 1,
  3: 1,
  b: 1
};


objeto.d = 1;
objeto['2'] = 1;
objeto['a'] = 1;

console.log(Object.getOwnPropertyNames(objeto).join(','));
console.log(JSON.stringify(objeto));

for (const i in Object.keys(objeto)) {
  console.log(Object.keys(objeto)[i]);
}
