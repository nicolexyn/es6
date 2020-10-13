const empleados = [
  {
    id: 1,
    nombre: 'Nicolas'
  },
  {
    id: 2,
    nombre: 'Melisa'
  },
  {
    id: 3,
    nombre: 'Juan'
  },
];


const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];




const getEmpleado = (id) => {

  return new Promise((resolve, reject) => {

    const empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
      reject(`No existe empleado con el id ${id}`);
    } else {
      resolve(empleadoDB);
    }

  });

};

const getSalario = (empleado) => {

  return new Promise((resolve, reject) => {
    const salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
      reject(`No se encontro un salario para el`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      });
    }

  });


};


// Uso

// getEmpleado(1)
//   .then(empleado => {
//     console.log('El empleado es ', empleado);

//     return getSalario(empleado);

//   })
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch(err => console.log(err));

getEmpleado(5)
.then(getSalario)
.then(console.log)
.catch(err => console.log(err))


