module.exports.moveFiles = () => {

    const path = require('path');
    const fs = require('fs');
    const colors = require('colors')
    const directoryPath = path.join(__dirname, 'Origin');

    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        
        console.log("Date Start "+Date(Date.now));
        files.forEach(function (file) {
            fs.copyFile('Origin/' + file, 'Destiny/' + file, (err) => {
                if (err) {
                    console.log(colors.red(file))
                    throw err;
                }
                else
                    console.log(colors.green(file + " copiado"));
            })
            
        });

        console.log("Date end "+Date(Date.now));
    });
}