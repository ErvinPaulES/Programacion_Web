var persona = {
    firstname: 'Jhon',
    lastname: 'Doe',
    greet: function(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
};

persona.greet();

console.log(persona['firstname']);


