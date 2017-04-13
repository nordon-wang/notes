/**
 * set 新的数据结构，类似数组，但是值都是唯一的，不可重复
 */

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach( x => s.add(x));

for(let i of s){
    // console.log(i);
}

const obj1 ={
    name:"wu",
    age:21
}

for(let i in obj1){
    // console.log(i);
}

const set1 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(function(v,i){
    // console.log(v,i);
    // set1.push(v); 报错 set不是数组，方法不一致，不可通用
    set1.add(v);
})
// console.log(set1);

const set2 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);
// console.log(set2);

const set3 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);
// console.log(set3.size);

/**
 * 向Set加入值不会发生类型转换，Set内部使用 Same-value equality 算法，类似于 === 
 *  主要区别是 NaN等于自身， 而=== 则是NaN != NaN
 */
var set4 = [...new Set([1, 2, 3, 4, 4,5,5,5,6,7])];
// console.log(set4);

var set5 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);
set5.add('NaN');
set5.add('NaN');
// set内部算法 NaN是相等的
// console.log(set5);
set5.add({});
set5.add({});
// 两个对象总是不相等的
// console.log(set5);

/**
 * set实例的属性和方法
 *  -实例方法份两类
 *      --操作方法-用于操作数据
 *      --遍历方法-用于遍历成员
 */

/**
 * 操作方法
 *  -add(value) 添加值，返回set结构本身
 *  -delete(value) 删除值，返回一个布尔值，表示删除是否成功
 *  -has(value) 返回布尔值，表示该值是否为Set的成员
 *  -clear() 清楚所有成员，没有返回值
 */

const set6 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);
// set6 = [90,100]; 报错 const let  定义的成员不能修改索引地址 --指针
var ssss = set6.add(100);

ssss = set6.delete(1);

ssss = set6.has('2');

// set6.clear();

// console.log(set6);
// console.log(ssss);

/**
 * Array.from() 可以将set结构转换为数组
 *  -可以用于数组去除重复用成员
 */

const set7 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);

const arr1 = Array.from(set7);

// console.log(set7);
// console.log(arr1);

/**
 * set结构的实力有4中遍历方法
 *  -keys():返回键名
 *  -values():返回键值
 *  -entries():返回键值对
 *  -forEach():使用回调函数遍历每个成员
 */

const set8 = new Set(['red', 'green', 'blue']);
// console.log(set8);

for(let item of set8.keys()){
    // console.log(item);
}

for(let value of set8.values()){
    // console.log(value);
}

for(let item of set8.entries()){
    // console.log(item);
}

set8.forEach(function(value,index,self){
    // console.log(value,index,self);
})

// 出去数组重复元素
let arr2 = [1, 2, 3, 4, 4,5,5,5,6,7];
let arrun = [...new Set(arr2)];
// console.log(arrun);

let arr3 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);

// arr3 = new Set([...arr3].map( x => x * 2));
// arr3 = [...arr3].map( x => x * 2);
// console.log(arr3);

arr3 = new Set([...arr3].filter(x => (x % 2) == 0));
// console.log(arr3);
// console.log([...[1,2,3]])


let arr4 = new Set([1, 2, 3, 4, 4,5,5,5,6,7]);
// arr4 = new Set([...arr4].map( x => x * 2));
// console.log(arr4);

arr4 = new Set(Array.from(arr4, val => val * 2));

// console.log(arr4);

/**
 * WeakSet 结构与 Set类似，也是不能重复的值的集合，与Set两个区别
 *  -WeakSet的成员只能是对象
 *  -WeakSet中的对象都是弱引用
 */

// let arr5 = [[1,2], [3,4]];
let arr5 = [{name:"wa"},{name:'no'}];
let weak1 = new WeakSet();
let obj2 = {
    name:"w"
}
weak1.add(obj2);
// console.log(weak1);

/**
 * WeakSet 的作用，用于存储DOM节点
 *  --不必担心DOM节点从文档移除而造成的内存泄露
 */

/**
 * Map
 *  对象即 键值对的集合(Hash结构)
 *  -由于传统上只能用字符串作为键名，而Map结构的键名的范围不再局限于字符串，包括对象都可以作为键名
 */

var map1 = new Map();
var o = {name:"hello"};
map1.set(o,"content");
// console.log(map1.get(o));

// map1.set('wy',"nordon");
// map1.set(1,"nordon");
map1.set(true,"nordon");
// console.log(map1.get(true));

// console.log(map1.has(o));
// console.log(map1.delete(o));
// console.log(map1.has(o));
// console.log(map1.get(o));

let map2 = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

// console.log(map2.size);
// console.log(map2.has('name'));
// console.log(map2.has('title'));
// console.log(map2.get('name'));
// console.log(map2.get('title'));

// 实现算法
var items =[
  ['name', '张三'],
  ['title', 'Author']
];

var map3 = new Map();

items.forEach( ([key,value]) => map3.set(key,value) );

// console.log(map3);

let map4 = new Map([['a',222]]);

map4.set(['b'],4444);

// console.log(map4.get(['a']));
// console.log(map4.get('a'));
// console.log(map4.get(['b']));
// console.log(map4.get('b'));

/**
 * set get has delete clear
 * keys value entries forEach 
 *  -Map的遍历顺序就是插入顺序
 */

/**
 * Map结构转为数组结构 配合 扩展运算符
 */
let map5 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

// console.log([...map5.keys()]);
// console.log([...map5.values()]);
// console.log([...map5.entries()]);
// console.log([...map5]);

let set9 = new Set([1,2,3,4,4,5,6,6]);
// console.log([...set9.keys()]);




























