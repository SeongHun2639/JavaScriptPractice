const EventEmitter = require('events');  // -> 이벤트를 만들때 사용하는 것
const emitter = new EventEmitter();

emitter.on('ellie',(args) => {
    console.log('first callback - ',args)
})

emitter.on('ellie',(args) => {
    console.log('first callback - ',args)
})

emitter.emit('ellie',{
    message :1
});
emitter.emit('ellie',{
    message :2
});
emitter.emit('ellie',{
    message :3
});