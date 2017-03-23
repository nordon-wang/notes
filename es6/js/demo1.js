var temp = 123;

if (true) {
    /**
       暂时性死区--必须 先声明 在使用
    */
    // console.log(typeof temp);
    let temp = 'abc';
    // debugger;
    // 不允许重复声明
    // let temp = 'ddd';
    console.log(temp);
}

// 块级作用域
console.log(temp); //123


demo();

function demo() {
    console.log(111)
}

// error 因为 变量提升
// demo2();

var demo2 = function(){
    console.log(2222);
}

function f(){
    return 2;
}

// {
//     let a = f();
//     a = a * a;
// }
// console.log(a);

// let aa = do{
//     let a = f();
//     a = a * a;
// };
// console.log(aa);

((aa) => {
    console.log(aa);
  console.log(1111)
})(11)


let obj1 = {};
// const obj1 = {}; 报错 
// 因为const是一个指针，指向一个地址，不可更改
obj1.name = 'wang';
console.log(obj1.name);

obj1 = {};


console.log(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);






