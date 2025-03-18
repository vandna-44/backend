//1 create server
//const http = require('http')

//const server = http.createServer((req,res) => {
 //   res.end('hello world')
//})


//server.listen(3000)

//----------------------

// 2 routing
const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url == "/about"){
        res.end("the about page")
    }
    if(req.url == "/profile"){
        res.end("the profile page")
    }
    if(req.url=="/"){
        res.end("the home page")
    }
})

server.listen(3000)