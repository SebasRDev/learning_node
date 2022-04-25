function saludo(nombre,micallback){
  setTimeout(function(){
    console.log('Hola '+ nombre);
    micallback(nombre);
  },1500);
}

function hablar(callbackHablar){
  setTimeout(() => {
    console.log('bla bla bla');
    callbackHablar();
  }, 1000);
}

function despedida(nombre, otroCallback){
  setTimeout(() => {
    console.log('Adios '+ nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback){
  if(veces > 0){
    hablar(function(){
      conversacion(nombre, --veces, callback);
    })
  }else{
    despedida(nombre, callback);
  }
}

console.log('Iniciando proceso');

saludo('Sebastian', function(nombre){
  conversacion(nombre, 3, function(){
    console.log('Proceso terminado');
  });
})

// saludo('Sebastian', function(nombre){
//   hablar(function(){
//     hablar(function(){
//       hablar(function(){
//         despedida(nombre, function(){
//           console.log('Terminando proceso');
//         });
//       })
//     })
//   })
// });