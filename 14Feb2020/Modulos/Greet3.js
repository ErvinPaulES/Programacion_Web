function Greetr() {
    this.greeting = 'Hello world!';
    this.greet = () => console.log(this.greeting);
};

module.exports = new Greetr();
//esto es una clase, no se puede haceer con la arrow function 