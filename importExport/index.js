// Create Own modules...

// const oper= require('./Oper')

// console.log(oper.add(5,5))
// console.log(oper.sub(10,4))

//instead of this

const {add,sub,mult,name}= require('./Oper')

console.log(name)
console.log(add(5,5))
console.log(sub(10,4))
console.log(mult(5,3))