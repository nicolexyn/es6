// *****************************************************
// Problematica
console.log("******* Problematica *******");
// *****************************************************

// function tareaAsingrona() {
//   setTimeout(() => {
//     console.log('Proceso Asincrono terminado');
//     resolve();
//   }, 1300);
// }

// tareaAsingrona();

// console.log('Codigo secuencial');

// function resolve() {
//   console.log('Todo OK');
// }

// function reject() {
//   console.log('Todo MAL');
// }


// *****************************************************
// Promesas
console.log("******* Promesas *******");
// *****************************************************

function tareaAsingrona() {

  let promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('Proceso Asincrono terminado');
      resolve();
    }, 1300);

  });

  return promesa;
}

tareaAsingrona().then(function () {
  console.log('TODO OK!');
}, function () {
  console.error('TODO MAL!');
});

console.log('Codigo secuencial');







