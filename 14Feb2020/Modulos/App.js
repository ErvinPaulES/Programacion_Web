var greet = require('./Greet');
greet();

var greet2 = require('./Greet2').greet;
greet2();

var greet3 = require('./Greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./Greet3');
greet3b.greet();
// Ezsto hace lo mismo que el primero lo que jala es el valor que esta en la dirreccion donde guardas todo

var greet4 = require('./Greet4');
var grtr = new greet4();
grtr.greet();