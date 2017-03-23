// 从数组、对象中提取值，对变量进行赋值--解构

let [a,b,c,d] = [1,2,3];

// console.log(a);
// console.log(b);
// console.log(c);
// 解构不成功 值为undefined
// console.log(d);

function f() {
    console.log(111);
    return 1;
}

let [x = f()]  = [2];
// console.log(x);

let {foo,bar}= {foo:'f1', bar:'f2'};

// console.log(foo);
// console.log(bar);

let x1 = 1;
let x2 = 2;

[x1,x2] = [x2,x1];

console.log(x1);
console.log(x2);















