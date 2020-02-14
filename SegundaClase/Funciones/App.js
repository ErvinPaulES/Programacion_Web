// function statement
/*function greet() {
    console.log('hi');
}
greet();*/

//Igual, function expressions
let greet = () => {
    console.log(`hi`);
}
greet();

// functions are first-class
/*function logGreeting(fn){
    fn();
}
logGreeting(greet);*/

// Anotacion de la flecha

/*let logGreeting = (fn) =>{
    fn();
}
logGreeting(greet);*/

// function expressions on the fly
let logGreeting = (() => {
    console.log(`hi`);
});
logGreeting();

// Anotacion Pro
//let logGreeting = fn => fn();



// Nueva forma de mostrar en pantalla
/*var a = 1;
var b = 2;

console.log('Hola soy la variable a ' + a + ' y b ' + b);

console.log(`Hola soy variable a ${a} y b ${b}`);*/
