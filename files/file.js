/**
 * Created by vinicius on 08/10/2017.
 */


let fs = require('fs');

/**
 * Example to create a file with .open()
 */
fs.open('./files/fileCreatedByOpen.txt', 'w', (err, file) => {
   if(err) throw err;
   console.log('File created with success');
});

/**
 * Example to create a file with .apendFile()
 */
fs.appendFile('./files/fileCreatedByAppendFile.txt', 'Hello NodeJS', 'utf8', err => {
    if(err) throw err;
    console.log('File creadted with success');
});

