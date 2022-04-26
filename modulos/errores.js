function otraFuncion(){
  serompe();
}

function serompe(){
  return 3 + z
}

function seRompeAsincrona(callback){
  setTimeout(function(){
    try {
      return 3 +z;
    } catch (error) {
      callback(error);
      console.error('Error en mi funcion asincrona');
    }
  })
}

try {
  // otraFuncion();
  seRompeAsincrona(function(){
    console.log('hay error')
  });
} catch (error) {
  console.error('vaya, algo se ha roto...');
  console.log(error.message);
  console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui está al final');