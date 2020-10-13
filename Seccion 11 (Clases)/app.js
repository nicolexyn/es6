// *****************************************************
// Introduccion a las Clases
console.log("******* Introduccion a las Clases *******");
// *****************************************************

// function Persona(nombre) {
//   this.nombre = nombre;
//   this.gritarNombre = function () {
//     console.log(this.nombre.toUpperCase());
//   }
// }

// Persona.prototype.decirNombre = function () {
//   console.log(this.nombre);
// }

// let fernando = new Persona('Nicolas');

// fernando.gritarNombre();
// fernando.decirNombre();

// console.log(fernando instanceof Persona);
// console.log(fernando instanceof Object);



// *****************************************************
// Declaracion basica de una clase en ES6
console.log("******* Declaracion basica de una clase en ES6 *******");
// *****************************************************


class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
    console.log(this.nombre);
  }
}

let fernando = new Persona('Nicolas');
fernando.decirNombre();

console.log(fernando instanceof Persona);
console.log(fernando instanceof Object);

console.log(typeof Persona);
console.log(typeof fernando);




// *****************************************************
// Clases como expresiones
console.log("******* Clases como expresiones *******");
// *****************************************************

// let miFuncion = function () {
//   console.log('Hola Mundo');
// };

// let otraFuncion = miFuncion;

// console.log(typeof otraFuncionncion);

// otraFuncion();

let Persona2 = class {
  constructor() {
    this.nombre = '';
    this.edad = 30;
    this.direccion = 'lalaalal';
  }
  decirNombre() {
    console.log('hol mundis');
  }
};

let persona2 = new Persona();

console.log(typeof persona2);
console.log(persona2 instanceof Persona2);




// *****************************************************
// Clases como parametros
console.log("******* Clases como parametros *******");
// *****************************************************

// function creadorClases(definirClase) {
//   return new definirClase();
// }

// let objeto = creadorClases(
//   class { // definir la clase en tiempo de ejecucion
//     constructor() {
//       this.nombre = undefined;
//       this.edad = 30;
//     }
//     saludar() {
//       console.log('hola');
//     }
//   }
// );

// objeto.saludar();

// ************************************************************

class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }
  getArea() {
    return this.lado * this.lado;
  }
}


function imprimirCuadrado(cuadrado) {
  if (!(cuadrado instanceof Cuadrado)) {
    console.error('El parametro enviado no es un cuadrado');
  }
  console.log(cuadrado.getArea());
}

let mesa = new Cuadrado(10);

imprimirCuadrado(mesa);



















