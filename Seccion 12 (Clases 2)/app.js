// *****************************************************
// Miembros estaticos y metodos computados
console.log("******* Miembros estaticos y metodos computados *******");
// *****************************************************

let nombreMetodo = 'gritarNombre';

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
    console.log(this.nombre);
  }

  [nombreMetodo]() {
    console.log(this.nombre.toUpperCase());
  }

  static crear(nombre) {
    return new Persona(nombre);
  }
}

let yo = Persona.crear('Nicolas');

console.log(yo);



// *****************************************************
// Herencia de Clases
console.log("******* Herencia de Clases *******");
// *****************************************************

class Rectangulo {
  constructor(alto, largo) {
    this.alto = alto;
    this.largo = largo;
  }

  getArea() {
    return this.alto * this.largo;
  }
}

let rectangulo = new Rectangulo(3,2);

console.log(rectangulo.getArea());

// **********************************************************

class Cuadrado extends Rectangulo {
  constructor(alto) {
    super(alto, alto);
  }
}

let cuadrado = new Cuadrado(3);

console.log(cuadrado.getArea());

console.log(cuadrado instanceof Cuadrado); // true
console.log(cuadrado instanceof Rectangulo); // true


// *************************************************************
// Sobrecribiendo funciones del padre


