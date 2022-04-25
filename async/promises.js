function saludo(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('Hola '+ nombre);
      resolve(nombre);
    },1500);

  });
}

function hablar(nombre){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla');
      // resolve(nombre);
      reject('Hay un error')
    }, 1000);
  })
}

function despedida(nombre, otroCallback){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios '+ nombre);
      resolve();
    }, 1000);
  })
}

// ---
console.log('Iniciando el proceso...')
saludo('Sebastian')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(despedida)
  .then((nombre) => {
    console.log('Terminado el proceso')
  })
  .catch(error => {
    console.error('Ha habido un error');
    console.error(error);
  })