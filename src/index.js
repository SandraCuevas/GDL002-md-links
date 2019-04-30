// Importar modulo File System (fs)
const fs = require('fs');
// Modulo para leer archivos
module.exports = (filePath, options) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function(err, data) {
            if (err) {
                return reject(err);
            }
            resolve(data.toString());
        });
    });
};