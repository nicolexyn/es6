


const getNombre = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Nicolas');
    }, 3000);
  });
}

// getNombre().then(nombre => {
//   console.log(nombre);
// });

const saludo = async () => {
  const nombre = await getNombre();
  
  return `Hola ${nombre}`;
};

saludo().then(mensaje => console.log(mensaje));










