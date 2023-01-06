// 4 types of streams:
// 1 Readable
// 2 Writeable
// 3 Duplex
// 4 Transform

const fs = require("fs")
const http = require("http")

const server = http.createServer()
server.on("request", (req, res) => {
   
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.log(err)
    //     res.end(data.toString())
    // })

    // streaming 2nd way
// const readStream= fs.createReadStream("inputs.txt")
// readStream.on("data",(chunkdata)=>{
// res.write(chunkdata)
// })
// readStream.on("end",()=>{
//     res.end()
// })
// // agar koi esi file enter krdi jo exist na ho tou error dengy
// readStream.on("error",(err)=>{
//     console.log(err)
//     res.end("File not found")
// })

// instead of above code there is 3rd way in one line code
// Pipe method
const rstream=fs.createReadStream("input.txt")
rstream.pipe(res)  //pipe method read and write at a time
})
server.listen(8000, "127.0.0.1")