/**
 * Generator是一种异步编程解决方案
 *  --generator函数式一个状态机，封装了多个内部状态
 *  --执行generator函数会返回一个便利器对象---是一个便利器对象生成器
 *      --返回的便利器对象可以以此遍历generator函数内部的每一个状态
 */

/**
 * 特征
 *  1.function关键字与函数之间有一个星号
 *  2.函数内部使用yield语句，定义不同的内部状态
 */

function * generatorDemo(){
    yield 'hello';
    yield 'nordon';
    return 'ending';
}
/**
 * generaor函数执行与一般函数相同，但是执行之后返回一个指针对象-便利器对象
 *  --generator函数式分段执行的，yield语句是暂停执行的标记，而next()方法可以恢复执行
 */

let g = generatorDemo();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

/**
 * yield语句--暂停标志
 *  --yield后面的语句只有在内部指针指向该对象时才会执行--惰性求值
 */

function* lazy(){
    yield 123 + 123;
}

let l = lazy();
// console.log(l.next());
// console.log(l.next());

/**
 * yield语句如果在一个表达式中，必须放在圆括号之内
 */
function* demo(){
    console.log('hello' + (yield));
    console.log('hi' + (yield 111));
}

let d = demo();
// console.log(d.next());
// console.log(d.next());

/**
 * yield语句用作函数参数 或 放在赋值表达式的右边， 可以不加括号
 */
function* de(){
    foo(yield 'a', yield 'b' );
    let i = yield;
}





















