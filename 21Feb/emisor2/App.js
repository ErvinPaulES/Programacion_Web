var Emitter = require('events'); // ahora este directorio exportado es un directorio de eventos preprogramado de node
var eventConfig = require('./config').events
var emtr = new Emitter();
emtr.on(eventConfig.GREET, function(){
    console.log('somewhere, someone said hello');
    
});

emtr.on (eventConfig.GREET, function(){
    console.log('A greeting ocurred!');
    
});

console.log('Hello!');

emtr.emit(eventConfig.GREET);
