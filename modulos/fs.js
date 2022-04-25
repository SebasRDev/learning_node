const fs = require('fs').promises;

// function readData(ruta, callback){
//   fs.readFile(ruta, (error, data) => {
//     if(error) throw error;
//     console.log(data.toString());
//   })
// }

// readData(`${__dirname}/archivo.txt`);

const readData = async(ruta) => {
  const file = await fs.readFile(ruta,{encoding: 'utf-8'});
  console.log(file);
}

const writeData = async(ruta, content) =>{
  const file = await fs.writeFile(ruta,content);
}

const deleteDoc = async(ruta) => {
  await fs.unlink(ruta);
}

readData(`${__dirname}/archivo.txt`);
writeData(`${__dirname}/archivoEscritoNode.txt`, 'Este es un archivo escrito con node')
deleteDoc(`${__dirname}/archivoEscritoNode2.txt`)