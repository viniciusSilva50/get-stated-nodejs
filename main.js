/**
 * Created by vinicius on 08/10/2017.
 */

let http = require('http')
let fs = require('fs')

http.createServer(function(req, res){
    console.log('Run with nodemon')
    fs.readFile('./html/index.html', (err,data) => {
        data = err === null? data : 'Algo de errado não esta certo!!!'
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(data)
        res.end()
    })
}).listen(3000);