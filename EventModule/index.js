// Node.js has a built-in module called Events
// where you can create-, fire-, and listen for your own events

const EventEmitter =require("events")

const event= new EventEmitter()
 // on phly emit bad mein

event.on('Say my name',()=>{
    console.log("name is tazmeen")
})
event.on('Say my name',()=>{
    console.log("name is ilsa")
})
event.on('Say my name',()=>{
    console.log("name is humi")
})
event.emit('Say my name')


//passing callback parameters
event.on("checkPage",(sc,msg)=>{
console.log(`status code is ${sc} and page is ${msg}`)
})

event.emit("checkPage", 200, "ok")