// (function (exports,require,module, __filename, __dirname){    // in arguments komlikhny ki zrurat nhi hy
//     var name= "Tazmeen ILsa"
//     console.log(name)
// })()

// console.log(name)     //give error name is not defined.. bcz data is private
// in advance js module wrapper function is IIFE.(Immediately Invoke function Expression).. IIFe k andr jo code likho wo private rehty hyn

// ham jo bh code likhty hyn node js behind the scene module wrapper function k andr code ko wrap krta hy

console.log(__dirname)
console.log(__filename)