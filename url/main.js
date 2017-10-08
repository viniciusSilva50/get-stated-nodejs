/**
 * Created by vinicius on 08/10/2017.
 */

/**
 * Example who create a http route with pure NodeJS
 */
let http = require('http');
let url  = require('url');
let fs   = require('fs');

http.createServer((req, res) => {
   let queryUrl = url.parse(req.url, true);
   let filePath =  "./html" + queryUrl.pathname;
   let contentType =  {'Content-Type' : 'text/html; charset=utf-8'};

   fs.readFile(filePath, (err, data) => {
       if(err){
           res.writeHead(404, contentType);
           return res.end('Página não encontrada!');
       }

       res.writeHead(200, contentType);
       res.write(data);
       return res.end();
   });
}).listen(3000);