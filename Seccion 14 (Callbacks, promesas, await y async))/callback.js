const getUsuarioById = (id, callback) => {
  const usuario = {
    nombre: 'Nicolas',
    id
  };

  if (id === 20) {
    callback(`el usuario con el id ${id}, no existe`);
  } else {
    callback(null, usuario);
  }
};

getUsuarioById(5, (err, user) => {

  if (err) {
    return console.error(err);
  }

  console.log('Usuario de base de datos', user);
});

