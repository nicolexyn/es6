// *****************************************************
// Cambiar el prototipo de un objeto
console.log("******* Cambiar el prototipo de un objeto*******");
// *****************************************************

let gato = {
  sonido() {
    console.log('miauuu');
  },
  chillido() {
    console.log('miau miau');
  }
}

let perro = {
  sonido() {
    console.log('guauuu');
  }
}

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();

Object.setPrototypeOf(angora, perro);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
// angora.chillido(); no existe pq cambio el prototipo del objeto


// *****************************************************
// Acceso al prototipo con la referencia SUPER
console.log("******* Acceso al prototipo con la referencia SUPER*******");
// *****************************************************

let persona = {
  saludar() {
    return 'hola';
  }
};

let amigo = {
  saludar() {
    // return Object.getPrototypeOf(this).saludar(this) + ', saludos!!!';
    return super.saludar() + ', saludos!!!';
  }
};

Object.setPrototypeOf(amigo, persona);

console.log(amigo.saludar());

// *****************************************************
// Destructuracion de objetos
console.log("******* Destructuracion de objetos*******");
// *****************************************************

let ajustes = {
  nombre: 'Nicolas Olexyn',
  email: 'nicolexyn@gmail.com',
  facebook: 'nicolas.olexyn',
  google: 'nicolas.olexyn.85',
  premium: true
};

// let nombre = ajustes.nombre,
//     email = ajustes.email,
//     facebook = ajustes.facebook;

// let { nombre, email, facebook, premium } = ajustes;

let { premium: dePago, nombre, google, twitter = 'nicolas.ndo' } = ajustes; 
// el orden no importa
// si la variable twitter esta inicializada en el objeto literal y yo le pongo un default en la 
// destructuracion va tomar siempre obviamente la original de la variable en el objeto literal

console.log(dePago, nombre, google, twitter);


// *****************************************************
// Destructuracion de objetos anidados 
console.log("******* Destructuracion de objetos anidados*******");
// *****************************************************


let autoGuardado = {
  archivo: 'app.js',
  cursor: {
    linea: 7,
    columna: 16
  },
  ultimoArchivo: {
    archivo: 'index.html',
    cursor: {
      linea: 8,
      columna: 20
    }
  },
  otroNodo: {
    subnodo: {
      cursor: {
        linea: 11,
        columna: 11
      }
    }
  }
};

let { cursor: cursorActivo } = autoGuardado;
console.log(cursorActivo);

let { ultimoArchivo: {cursor: ultimoArchivo}} = autoGuardado;
console.log(ultimoArchivo);

let { otroNodo: {subnodo: {cursor: otroSuperNodo}}} = autoGuardado;
console.log(otroSuperNodo);

let otroSuperNodo2 = autoGuardado.otroNodo.subnodo.cursor;
console.log(otroSuperNodo2);



// *****************************************************
// Destructuracion de arreglos 
console.log("******* Destructuracion de arreglos*******");
// *****************************************************

let frutas = ['banana', 'pera', 'uva'];

let [fruta1, fruta2] = frutas; // secuencial
console.log(fruta1, fruta2);

let [,, fruta3] = frutas; // skip de posiciones con ,
console.log(fruta3);

let otraFruta = 'manzana';
[ otraFruta ] = frutas; // pisa la variable otraFruta con la primera posicion del arreglo
console.log(otraFruta); // output: banana

// **********************************************

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;
console.log(a, b); // output: 2, 1

[a, b] = [b, a];
console.log(a, b); // output: 1, 2



// *****************************************************
// Destructuracion de arreglos anidados 
console.log("******* Destructuracion de arreglos anidados*******");
// *****************************************************


let colores1 = ['rojo', ['verde', 'amarillo'], 'morado', 'naranja'];

let [color1, [color2]] = colores1;
console.log(color1, color2);

//******************************* */

let colores2 = ['rojo', 'verde', 'amarillo', 'morado', 'naranja'];

let [colorPrincipal, colorSecundario, ...demasColores] = colores2;
// la destructuracion con rest solo funciona para los arreglos y no para los objetos
console.log(colorPrincipal, colorSecundario, demasColores);


// *****************************************************
// Valores por defecto en la destructuracion  
console.log("******* Valores por defecto en la destructuracion *******");
// *****************************************************


// let frutasArr = ['banana', 'pera'];

// let [f1, f2 = 'manzana'] = frutasArr;
// console.log(f1, f2);

let opciones = {
  nombre: 'nicolas',
  apellido: 'perez'
}

let {nombre: miNombre, apellido: miApellido = 'Olexyn'} = opciones; 
console.log(miNombre, miApellido);


// *****************************************************
// Destructuracion de parametros  
console.log("******* Destructuracion de parametros *******");
// *****************************************************


function crearJugador(nickName, 
  { hp, sp, clase } = { hp: 100, sp: 50, clase: 'Mago'}
) {
  // opciones = opciones || {};

  // let hp = opciones.hp,
  //     sp = opciones.sp,
  //     clase = opciones.clase;

  console.log(nickName, hp, sp, clase);

  // codigo para crear el jugador...
}

crearJugador('Strider'
, {
  hp: 500,
  sp: 100,
  clase: 'Warrior'
}
);



