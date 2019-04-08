// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         console.log('Error occured. Error message: ', err);
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response message: ', response.statusMessage);
         console.log('Reponse content type: ', response.headers['content-type']);
       })
       .on('data', function (){
          console.log('Downloading image');   //if data is recieving
       })
       .on('end', function (){                              //when all data is finished downlaoding
          console.log("Finished downloading image");
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. `request.pipe()` write the data to a file downloaded.html in the same directory. It can be read or written to.

