// module.exports.copyFiles = (pathOrigin, pathDestiny) => {


// }

module.exports.copyFiles = () => {
    const pathOrigin = "C:\Users\Urbin\Documents\Tarea-node\origin"
    const pathDestiny = "C:\Users\Urbin\Documents\Tarea-node\destiny"
    //requiring path and fs modules
    const path = require('path');
    const fs = require('fs');
    //joining path of directory 
    const directoryPath = path.join(__dirname, 'Documents');
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file);
        });
    });


}