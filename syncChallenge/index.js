const fs= require("fs")
// fs.mkdirSync("challenge 1")

fs.writeFileSync("challenge 1/bio.txt","Challenge no 1\n")

fs.appendFileSync("challenge 1/bio.txt","Lets start")

console.log(fs.readFileSync("challenge 1/bio.txt","utf8"))

fs.renameSync("challenge 1/bio.txt","challenge 1/mybio.txt")

fs.unlinkSync("challenge 1/mybio.txt")

fs.rmdirSync("challenge 1")