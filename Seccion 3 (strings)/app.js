// *****************************************************
// startsWith
// endsWith
// includes
console.log("******* startsWith, endsWith, includes *******");
// *****************************************************

var saludo = "Hola Mundo!";

// ES5
console.log( saludo.substr(0, 1) === "H" );
console.log( saludo.indexOf("x") ); // -1

// ES6
console.log( saludo.startsWith("Hola") ); // true
console.log( saludo.endsWith("!") ); // false

console.log( saludo.includes("x") ); // false

console.log( saludo.startsWith("Mu", 5) ); // true

console.log( saludo.includes("a", 5) ); // false



// *****************************************************
// repeat
console.log("******* Repeat *******");
// *****************************************************

let texto = "Hola";

console.log(texto.repeat(2)); // HolaHola
console.log("0".repeat(2)); // 00

//---------------------------------------------
const ESPACIOS = 12;

let nombres = ["Fernando", "Melissa", "Juan"];
let telefonos = ["123456", "456789", "789123"];

for (const i in nombres) {
  let dif = ESPACIOS - nombres[i].length;
  console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}

// *****************************************************
// Literal Templates
console.log("******* Literal Templates *******");
// *****************************************************

function obtenerNombre() {
  return "Maria Perez";
}

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// ---------------------------------

let nombreCompleto2 = `el nombre completo es ${nombre} ${apellido}`;

console.log(nombreCompleto2);

let nombreCompleto3 = `el nombre completo es ${obtenerNombre()} ${1 + 3}`;

console.log(nombreCompleto3);

let nombreCompleto4 = `<h1 class="">${nombre}</h1>
<p>${apellido}</p>`;

console.log(nombreCompleto4);


// *****************************************************
// Templates con Tags
console.log("******* Templates con Tags *******");
// *****************************************************

function etiqueta(literales, ...substituciones) {
  console.log(literales);
  console.log(substituciones);
  let resultado = "";
  for (let i = 0; i < substituciones.length; i++) {
    resultado += literales[i];
    resultado += substituciones[i];
    
  }
  return resultado;
}

let unidades = 5,
    costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos`;

console.log(mensaje);


// *****************************************************
// Usando valores waw
console.log("******* Usando valores waw *******");
// *****************************************************

let mensaje1 = `Hola \nMundo\\`,
    mensaje2 = String.raw`Hola \nMundo\\`;

console.log(mensaje1);
console.log(mensaje2);