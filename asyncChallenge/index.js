const fs= require("fs")
// Q1 : make folder
// fs.mkdir("challenge2",()=>{
//     console.log("folder created")
// })

// Q2 make file in it and store some data
fs.writeFile("challenge2/readwrite.txt","node Challenge # 2 \n",(err)=>{
    console.log(err)

})
// Q3 add more data without overwrite
fs.appendFile("challenge2/readwrite.txt","Lets start",()=>{
    console.log("updated")
})

// Q4 read data without getting buffer data
fs.readFile("challenge2/readwrite.txt","utf8",(err,data)=>{
console.log(data)
})

// Q5 rename the file name 
fs.rename("challenge2/readwrite.txt","challenge2/read&write.txt",(err)=>{
    console.log(err)
})

// Q6 delete both the file and folder
fs.rmdir("challenge2",{recursive:true},(err)=>{
console.log(err)
})

// delete only file
// fs.unlink("challenge2/read&write.txt",(err)=>{
//     console.log(err)
// })