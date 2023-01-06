const os = require("os")
console.log(os.arch())
console.log(`${os.freemem() / 1024 / 1024 / 1024}`)
// bit ko divide kiya 1024 s kilobyts mila phir use divide kiya megabyte mila then divide kiya tou GB (gigabyte) mila

console.log(`${os.totalmem() / 1024 / 1024 / 1024}`)
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())
