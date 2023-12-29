const http = require('http');
const fs = require('fs');

const port = 8000;

const newServer = http.createServer((req,res)=> {
    const log= `${Date.now()} : ${req.url} New Request Received\n`
    fs.appendFile('log.txt',log, (err,) => {
        switch(req.url){
            case ("/"): res.end("Home");
            break;
            case ('/about'): res.end("Hello this is Prajakta Here!!");
            break;
            case("/contact"): res.end("Visit my Portfolio");
        }
        
    })
   
})

newServer.listen(port, () => {
    console.log(`connected to server on port ${port}`);
})