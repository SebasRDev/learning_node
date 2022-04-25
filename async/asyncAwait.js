async function saludo(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('Hola '+ nombre);
      resolve(nombre);
    },1500);

  });
}

async function hablar(nombre){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla');
      resolve(nombre);
      // reject('Hay un error')
    }, 1000);
  })
}

async function despedida(nombre, otroCallback){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios '+ nombre);
      resolve();
    }, 1000);
  })
}

// ---
async function main(){
  let nombre = await saludo('Matheus');
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await despedida(nombre);
}


console.log('Empezamos el proceso...')
main();
console.log('Acabamos el proceso')