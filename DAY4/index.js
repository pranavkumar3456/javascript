const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url != '/'){
        return res.end()
    }
    res.end("hello world")
});

server.listenerCount(8080,()=>{
    console.log("server is running on port no 8080");
});