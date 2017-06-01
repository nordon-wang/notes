console.log('原型');




function Person(){

}

let p = new Person();

console.log(Person === Person.prototype.constructor); //true
console.log(p.__proto__.constructor === Person); //true
console.log(p.__proto__ === Person.prototype); //true 


// 静态作用域
var value = 1;

function foo() {
    console.log(value,this);
}

function bar() {
    var value = 2;
    console.log(this)
    foo.call(bar);
}

bar();

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f();
// }
// console.log(checkscope());

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
console.log(111);
console.log(checkscope()());

var foo = function () {

    console.log('foo1');

}

foo();  // foo1

var foo = function () {

    console.log('foo2');

}

foo(); // foo2