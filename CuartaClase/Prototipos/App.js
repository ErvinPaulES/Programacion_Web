//object propeties and methods
var obj = {
    greet:'hello'
}
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var objs = {
    onclick: function() {console.log('Hello');}
    
}

 objs['onclick']();

 var arr = [];

 arr.push(() => {
     console.log('Hello world 1');
     
 });
 arr.push(() => {
    console.log('Hello world 2');
    
});
arr.push( () => {
    console.log('Hello world 3');
    
});

arr.forEach((item) =>{
    item();
})


