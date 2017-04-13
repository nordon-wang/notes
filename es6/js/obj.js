
function fun (x,y){
    // return {x:x,y:y};
    return {x,y}
}

// console.log(fun(3,2));

function fun2() {
    let x = 11, y = 22;
    return {x,y}
}

// console.log(fun2());

// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

// const target = {a:1}, souce1 = {b:2}, souce2 = {c:3};
// Object.assign(target,souce1,souce2);
// const obj = Object.assign(target,souce1,souce2);
// console.log(obj);
// console.log(target);

var target = { a: { b: 'c', d: 'e' } };
var source = { a: { b: 'hello' } };
// console.log(Object.assign(target,source));
// console.log(Object.assign([1, 2, 3,6,7], [4, 5]));

let obj = { foo: 123 , bar:"bar" };
// console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

for(var i=0; i< Object.keys(obj).length; i++){
    // console.log(obj[i])
    // console.log(obj[Object.keys(obj)[i]]);
}

// console.log( Object.keys(obj));
// console.log( Object.getOwnPropertyNames(obj) );

for(let item  in obj){
    // console.log(item);
}

// let proto = {};
// let obj1 = { x: 10 };
// Object.setPrototypeOf(obj1, proto);

// console.log(obj1);

let obj2 = { a: 1, b: 2, c: 3 };

// for(let key of Object.keys(obj2)){
//     console.log(key);
// }

let s = Symbol('symbol');
// console.log(typeof s);
// console.log( s);
// console.log( s.toString());

let mySymbol = Symbol();
let a = {};
a[mySymbol] = "hello";
// console.log(a[mySymbol]);
// console.log(a.mySymbol);  undefined

const COLOR_RED    = Symbol('COLOR_RED');
const COLOR_GREEN  = Symbol('COLOR_GREEN');

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}

// console.log( getComplement(COLOR_RED) );

let obj3 = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

/**
 * for in 等不能取到symbol的属性名
 * Object.getOwnPropertySymbols 只能取到symbol的键
 * Reflect.ownKeys() 可以取到全部的属性名
 */
// console.log( Reflect.ownKeys(obj3));

var greeting = 'My names is ${name}, age ${age}, I am a ${job.jobName}';
var employee = {
    name: 'XiaoMing',
    age: 11,
    job: {
        jobName: 'designer',
        jobLevel: 'senior'
    } 
};


String.prototype.render = function(obj){
   eval(`var {${Object.keys(obj).join(',')}} = obj`);
   console.log(Object.keys(obj).join(','));
   console.log(this);
   return eval('`' + this + '`');
}

var result = greeting.render(employee);
console.log(result);

function getPropName(){
    return "b";
}
var obj4 = { a: 20, b: 30 };
var propName = getPropName();  // returns "a" or "b"

eval( 'var result = obj4.' + propName )
// console.log(result)

var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0;";

// console.log('z is ', eval(str));


function A() {
    this.foo = "aaaa";
}

if(!global._foo){
    global._foo = new A();
}

module.exports = global._foo;

