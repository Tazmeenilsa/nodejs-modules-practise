const fs = require("fs")
const http = require("http")
const server = http.createServer((req, res) => {
    
    const data = fs.readFileSync(`../userAPI/userapi.json`, "utf8")
    const objData = JSON.parse(data)

    if (req.url == "/") {
        res.end("Hello")
    }
    else if (req.url == "/about") {
        res.end("ABout")
    }
    else if (req.url == "/contact") {
        res.end("Contact")
    }
    else if (req.url == "/userapi") {
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(objData[1].number)
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 error page</h1>")
    }
})
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port no 8000")
})