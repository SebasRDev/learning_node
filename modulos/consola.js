console.log('Algo')

console.info('Info de algo')

console.error('error log')

var tabla = [
  {
    a: 1,
    b: 'z'
  },
  {
    a: 2,
    b: 't'
  }
]
console.log(tabla)
console.table(tabla)

console.group('conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios')
console.groupEnd('conversacion');

console.log('otras cosas de otra función')

function funcion1(){
  console.group('function1')
  console.log('Esto es de la funcion 1');
  console.log('Esto tambien');
  funcion2()
  console.log('He vuelto a la funcion 1');
  console.groupEnd('function1')
}

function funcion2(){
  console.group('function2')
  console.log('ahora estamos en la funcion 2')
  console.groupEnd('function2')
}

console.log('Empezamos')
funcion1();

//contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');