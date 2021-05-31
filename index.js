const http = require("./server.js");
const { Emitter } = require("./Emitter.js");
console.log(Emitter)

Emitter.on('message', () => {
  console.log("mensagem enviada")
})

Emitter.emit('message', () => {
  console.log('messagem enviada com sucesso')
})