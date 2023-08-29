const http = require('http')
const fs = require('fs');

const {get, post, match} = require('./src/router')

http.createServer((req, res) => { 
    if (req.url == '/favicon.ico'){
        fs.createReadStream('favicon.ico').pipe(res)
    } else if (req.url.startsWith('/public')){
        fs.createReadStream(`./static/${req.url.slice(8)}`)
    } else {
        match(req, res)
    }
}).listen(3000);