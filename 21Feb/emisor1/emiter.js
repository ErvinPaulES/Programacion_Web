//puedes asociar mas de un listenir a un componente, osea mas de una ccion puede suceder paralelamente
function Emitter(){
    this.event = {};
}
//acceso a su prototipo, y accedimos a dos eventos llamdos on y emit
Emitter.prototype.on = function(type, listener){
    this.event[type] = this.event[type] || []; //esto lo que hace es validar, se inicializa si hay algo en type o si no se inicializa vacio
    this.event[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if (this.event[type]){
        this.event[type].forEach(function (listener){
            listener();
        })
    }
}

module.exports = Emitter;