/**
 * Iterator作用
 *  1.为各种数据结构，提供一个统一的、简便的访问接口
 *  2.使数据结构能够按照某种次序排序
 *  3.新的遍历命令 for ... of
 */

/**
 * Iterator遍历过程
 *  1.创建一个指针对象，指向当前数据结构的起始位置--便利器对象的本质就是一个指针对象
 *  2.调用指针对象的next方法，将指针对象指向数据结构的第一个成员
 *  3.继续调用指针对象的next方法，指针对象指向数据结构的第二个成员
 *  4.一直调用指针对象的next方法，直到指针对象脂肪数据结构的结束位置
 * 
 * 每一次调用指针对象的next方法都会返回数据结构的当前成员的信息
 *      --返回一个包含value和done两个和属性的对象
 *          --value属性是当前成员的值
 *          --done属性是一个布尔值，表示遍历是否结束
 */

let sy = Symbol();
// console.log(sy);

let str = 'hello';

console.log(typeof str[Symbol.iterator]);

let strIte = str[Symbol.iterator]();

console.log(strIte.next());
console.log(strIte.next());
console.log(strIte.next());























