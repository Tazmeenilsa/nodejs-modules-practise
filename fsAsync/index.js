const fs=require("fs")
// Async funct m callback dena must hy
fs.writeFile("read.txt","It's Amazing \n",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file is created")
    }
}) 
fs.appendFile("read.txt","Don't give up, you can do it ! 😊\n",()=>{
    console.log("done")
})
// in read asyn, call back function mein 2 params dena must hy
fs.readFile("read.txt","utf8",(err,data)=>{
    console.log(data)
})