const fs = require('fs');
const path = require ('path');
const http = require('http');

let filePath = process.argv[2];

module.exports = {
  //el usuario ha ingresado una ruta?
  existPath:(path) => {
    if(path != undefined){
      console.log ('Has ingresado una dirección para buscar links');
      return true;
    } else{
      console.log('Debes ingresar una dirección para buscar links');
      return false;
    }

  },
  //verifica que la ruta contiene un .md
  findMd: (path) => { 
      if (path.extname(path)== '.md'){
        return true
      }else {
        return false
      }
    //reject(err) y resolve(data)
  },

  readMd:(path) =>{
    let file = fs.readFileSync(path, 'utf-8');
    console.log(file);
    return true;
    },

  
  findLinks: () => {

  }

};