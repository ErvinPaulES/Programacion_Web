function Greetr(){
    this.greeting = 'Hello world!!';
    this.greet = () => console.log(this.greeting);
};

module.exports = Greetr;
//Esto es un constructor, mo puedes hacerlo con una arrow function por el momento