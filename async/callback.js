function saludo(nombre,micallback){
  // console.log('Hola soy una funcion asincrona')
  setTimeout(function(){
    console.log('Hola '+ nombre);
    micallback(nombre);
  },1500);
}

function despedida(nombre, otroCallback){
  setTimeout(() => {
    console.log('Adios '+ nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando proceso');

saludo('Sebastian', function(nombre){
  despedida(nombre, function(){
    console.log('Terminando proceso');
  });
});