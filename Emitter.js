const Emitter = {
  events: {},
  on(event, cb) {
    Emitter.events[event] = Emitter.events[event] || []
    Emitter.events[event].push(cb)
  },
  emit(event, ...rest) {
    if (event in Emitter.events === false) {
      return;
    }
    Emitter.events[event].forEach((e) => {
      e(...rest)
    })
  }
}
/*
Emitter.on('click', (a, b, c) => {console.log("click1", a, b, c)})
Emitter.on('click', () => {console.log("click2")})
Emitter.emit('click', 1, 2, 3)
*/
exports.Emitter = Emitter;