const path = require("path")
console.log(path.dirname("E:/tazmeen/Node js/practise1/Pathmodule/pathmode.js"))
console.log(path.extname("E:/tazmeen/Node js/practise1/Pathmodule/pathmode.js"))
console.log(path.basename("E:/tazmeen/Node js/practise1/Pathmodule/pathmode.js"))

// uper sb ko ek sath krny k lea PARSE method use hoga

console.log(path.parse("E:/tazmeen/Node js/practise1/Pathmodule/pathmode.js"))

const getPathName= path.parse("E:/tazmeen/Node js/practise1/Pathmodule/pathmode.js")
console.log(`Name: ${getPathName.name}`)

const getPathRoot= path.parse("E:/tazmeen/Node js/practise1/Pathmodule/pathmode.js")
console.log(`Root: ${getPathRoot.root}`)