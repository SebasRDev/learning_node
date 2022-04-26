const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (error, stdout, sterror) => {
//   if(error){
//     console.error(error);
//     return false;
//   }

//   console.log(stdout);
// })

let proceso = spawn('ls', ['-l'])

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
  console.log('Esta muerto?');
  console.log(dato.toString())
})

proceso.on('exit', function(){
  console.log('el proceso termino')
  console.log(proceso.killed)
})