/**
 * null undefined Number Boolean Object String Symbol
 */
var s = Symbol();
// console.log(s);

var ss = Symbol('ss');
// console.log(ss);

/**
 * 对象属性名
 *  1.字符串
 *  2.Symbol类型 --凡是属性名是Symbol类型，都是独一无二
 */

const obj = {
  toString() {
    return 'abc';
  }
}
// console.log(obj.toString())

/**
 * 可以显示的转为字符串，也可以转换为布尔值
 */

const str1 = Symbol('str1');
const boo1 = Symbol('boolean');
// console.log(str1.toString());
// console.log(Boolean(boo1));

/**
 * 作为属性名
 *  -保证属性名独一无二
 *  -作为属性名时，不能使用点运算符，只能使用[]进行运算
 */

var sym = Symbol();
// 1
var a1 = {};
a1[sym] = 'nordon';

// 2
var a2 = {
    [sym]:'nordon'
}

// 3
var a3 = {};
Object.defineProperty(a3,sym,{value:'nordon'});

// console.log(a1[sym]);
// console.log(a2[sym]);
// console.log(a3[sym]);

const RED = Symbol('red'), GREEN = Symbol('green');
const REDS = Symbol();

function getCom(color){
    switch(color){
        case RED:
            return RED;
        case GREEN:
            return GREEN;
        default :
            return 'no color';
    }
}

// console.log(getCom(RED));
// console.log(getCom(GREEN));
// console.log(getCom(REDS));

/**
 * 魔术字符串
 *  -在代码中出现多次，与代码形成强耦合的值
 *  -方法：将其写成一个变量，存放在一个对象中。
 */

/**
 * Object.getOwnPropretySymbols() 可以遍历Symbol属性名，返回一个数组
 */

const foo = Symbol('foo');
const obj2 = {
    [foo]:"hhhh"
};

// obj2[foo] = "hello";

// console.log(Object.getOwnPropertySymbols(obj2));
// console.log(obj2[foo]);

/**
 * Reflect.ownKeys() 方法可以返回所有类型的键名，包括常规键名和Symbol键名
 */


const obj3 = {
    [foo]: "f00111",
    fun1 (){
        console.log('fun11111');
        return "fun1";
    },
    name : "wangyao"
}

// console.log(Reflect.ownKeys(obj3));

Reflect.ownKeys(obj3).forEach(function(value,index){
    // console.log(obj3[value], index);
})

// console.log(111);

const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
// console.log(sym1 == sym2);
// console.log(Symbol.keyFor(sym1));

const sy1 = Symbol.for('foo');
const sy2 = Symbol.for('foo');
// console.log(sy1 == sy2);
// console.log(Symbol.keyFor(sy1));

// const a = require('./obj.js');
// global._foo = 123;
// console.log(a.foo);

/**
 * 内置11个Symbol值 指向语言内部使用方法
 */

var aaa = {
    abcd:"aaaaa"
}
// console.log(aaa instanceof Array);
// console.log('abcd' in aaa);

const arr = [1,2,3];
// console.log(arr.constructor === Array);
// console.log(arr instanceof Array);
















