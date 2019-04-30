const fs = require('fs');
const path = require('path');
const pathFile = process.argv[2];
const mdLinks = require("./index");
const fileContent = mdLinks(pathFile, null);


//el campo esta vacío o se ha ingresado algun dato
function fieldFill (pathFile) {
  if(pathFile != undefined) {
      console.log("true");
      return true
  }
  else {
      return false
  }
};

//función para saber si existe la ruta
function isApath (pathFile) {
    if(fs.existsSync(pathFile)){
        console.log("true")
        return true
    } else {
        console.log("false");
        return false
    }
  };

//función para verificar si la ruta es un directorio
function dirPath (pathFile){
    if(fs.statSync(pathFile).isDirectory()){
      return true
    } else{
      return false
    }
};

//función para saber si tiene una extension MD
function mdFile (pathFile){
        if (path.extname(pathFile) === ".md") {
            return true
        } else {
            return false
        }
  };

//leer el archivo
 fileContent.then(
   (data)=> { // On Success
    console.log("Links encontrados:");
    arrLinks(data);
   },
   (err)=> { // On Error
       console.error(err);
   }
  );

//función que extrae los links
function arrLinks(data) {
    const mdLinkRgEx = /\[(.+?)\]\((.+?\))/g;
    const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
    let allLinks = data.match(mdLinkRgEx);
    let htmlLinks = [];
  for (let x in allLinks) {
    let grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    let grupoData = {
        text: grpdDta[1],
        href: grpdDta[2],
        file: pathFile
   };
    htmlLinks.push(grupoData);
  }
    console.log(htmlLinks);
    console.log(htmlLinks.length);
    return (htmlLinks);

};

module.exports = {
  "fieldFill": fieldFill,
  "isApath": isApath,
  "dirPath": dirPath,
  "mdFile": mdFile,
  "arrLinks": arrLinks,
  "fileContent": fileContent,
};