// *****************************************************
// Arrow Functions
console.log("******* Arrow Functions*******");
// *****************************************************

var miFuncion2 = function (valor) {
  return valor;
};

let miFuncion1 = valor => valor;

console.log(miFuncion1('asd'));

// *********************************************

var sumar2 = function (num1, num2) {
  return num1 + num2;
};

let sumar1 = (num1, num2) => num1 + num2;

console.log(sumar1(1, 3));

// *********************************************

var saludar2 = function () {
  return 'Hola Mundo';
};

let saludar1 = () => 'Hola Mundo';

console.log(saludar1());

// *********************************************

var saludarPersona = function (nombre) {
  var salida = 'Hola ' + nombre;
  return salida;
};

let saludarPersona2 = (nombre) => {
  let salida = `hola ${nombre}`;
  return salida;
};

console.log(saludarPersona2('Nicolas'));

// *********************************************

var obtenerLibro = function (id) {
  return {
    id: id,
    nombre: 'Harry Potter'
  };
};

let obtenerLibro2 = id => ({
  id,
  nombre: 'harry Potter'
}
);

console.log(obtenerLibro(1234));
console.log(obtenerLibro2(1234));


// *****************************************************
// Funciones anonimas
console.log("******* Funciones anonimas*******");
// *****************************************************

var saludo1 = function (nombre) {
  return 'hola ' + nombre;
}('Nicolas');

console.log(saludo1);

var saludo2 = (nombre => `hola ${nombre}`)('Fernando');

console.log(saludo2);


// *****************************************************
// No hay cambios en el objeto this
console.log("******* No hay cambios en el objeto this*******");
// *****************************************************

var manejador = {
  id: '123',
  init: function () {
    // document.addEventListener('click', (function (event) {
    //   this.clickEnPagina(event.type);
    // }).bind(this), false);
    document.addEventListener('click',
      event => this.clickEnPagina(event.type));
  },
  clickEnPagina: function (type) {
    console.log('Manejando ' + type + ' para el id: ' + this.id);
  }

};

manejador.init();

// *****************************************************
// Funciones de flecha y arreglos
console.log("******* Funciones de flecha y arreglos*******");
// *****************************************************

var arreglo = [5,10,11,2,1,9,20];

var ordenadoES5 = arreglo.sort(function (a,b) {
  return a-b;
});

let ordenadoES6 = arreglo.sort((a,b) => a-b);

console.log(ordenadoES5);
console.log(ordenadoES6);

// *****************************************************
// Identificando funciones de flecha y otros ejemplos
console.log("******* Identificando funciones de flecha y otros ejemplos*******");
// *****************************************************

var restar = (a,b) => a-b;

console.log(typeof restar);
console.log(restar instanceof Function);

// var restar2 = new restar(1,2)
function ejemplo(x,y) {
  ((a,b) => {
    console.log(arguments[0]);
  })();

}

ejemplo(10,20);








