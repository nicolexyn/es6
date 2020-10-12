var funciones = [];

// Con var
// for (var i = 0; i < 10; i++) {
//   funciones.push(
//     (function(valor) {
//       return function() {
//         console.log(valor);
//       };
//     })(i)
//   );
// }

// Con let
for (let i = 0; i < 10; i++) {
  funciones.push(function() {
    console.log(i);
  });
}

// -----------------------------------

funciones.forEach(element => {
  element();
});