const fs=require('fs')
// first create object a
const bioData={
    name:"Tazmeen",
    age:22,
    gender:"Female"
}
console.log(bioData.name)

// convert into JSONstring
const jsonData=JSON.stringify(bioData)
console.log(jsonData)

// Add to another file  (use require fs method)
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done")
// })

// read file
fs.readFile('json1.json',"utf8",(err,data)=>{
    // console.log(data)
    const orgDAta=JSON.parse(data)
    console.log(data)
    console.log(orgDAta)
    
})


// convert again into obj
const objData=JSON.parse(jsonData)
console.log(objData)
console.log(objData.gender)


