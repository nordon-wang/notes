
// console.log(a);

// if ('') {
//     var a;
// }

// if(true){
//     var sdasdasdasdasdas = 2;
// }
// console.log(a);
// // console.log(sdasdasdasdasdas);



// var a = 1, 
// b = function a(x){
//     x && a(--x);
// };

// console.log(a);

/**
 * 函数声明会覆盖变量声明，但不会覆盖变量赋值
 * ···函数声明的优先级高于变量声明的优先级--若变量赋值，结果就完全不一样了
 */

// function a(x) {
//     return x * 2;
// }
// var a;
// console.log(a);

// function b(x, y, a) {
//     arguments[2] = 10;
//     console.log(a);
// }
// b(1, 2, 3);


/**
 * 使用call、apply时，若是第一个参数传入null或者undefined，则会将全局对象window作为this的值
 * ····严格模式则是 传入null 是 null， 传入undefined 是 undefined
 */
// function a() {
//     console.log(this);
// }
// a.call(null);

function Foo() {
    getName = function () { console.log(1); };
    return this;
}
Foo.getName = function () { console.log(2);};
Foo.prototype.getName = function () { console.log(3);};
// var getName = function () { console.log(4);};
// function getName() { console.log(5);}

//请写出以下输出结果：
// Foo.getName(); // 2
// getName(); // 4 x
// Foo().getName(); // 1  x
// getName(); // 1 x
// new Foo.getName(); //2
// new Foo().getName(); //3

getName();         // alert( 5 );
var getName = function () { console.log (4);};
function getName() { console.log (5);}
getName();       //alert(4);

// function Fun1(){

// }
// console.log(new Fun1);

// function Fun2(){
//     return 22;
// }
// console.log(new Fun2);

// function Fun3(){
//     return [1,2,3,4]
// }
// console.log(new Fun3);

// function Fun4(){
//     return this;
// }
// console.log(new Fun4);


//     var num = 10000;
// function demo(){
//     num--;
//     document.write('');
//     document.write(num);
// }

// setInterval(demo,500);

/**
 * for in 不仅遍历本身可遍历属性，也会遍历继承的属性
 * hasOwnProperty() 判断是否为自身的属性， 继承或非自身属性则返回false
 */

function fw(){
    console.log(arguments);
    Array.prototype.forEach.call(arguments,function(item,index){
        console.log(`${item} --- ${index}`);
    })
}

fw(11,22,'sdsad'); 

Array.prototype.forEach.call('wang',function(item){
    console.log(item);
})