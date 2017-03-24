/**
 * 模板编译
 */
function tag(s, v1, v2) {
    // console.log(s[0]);
    // console.log(s[1]);
    // console.log(s[2]);
    // console.log(v1);
    // console.log(v2);
}
tag(['Hello ', ' world '], 15, 50);

function demo(s, ...v) {
    var res = '';
    s.forEach(function (e1, i1) {
        res += s[i1] + v[i1];
    });
    // console.log(res);

    return res;
}
demo(['Hello ', ' world ', ''], 15, 50, 66);

/**
 *  passthru`${total} The total is ${total} (${total * 1.05} with tax)`;
 *  第一个参数是变量，那个passthru函数获取到的数组第一位就是空字符串 ''
 *      --[ '', ' The total is ', ' (', ' with tax)' ]
 * 
 * passthru`The total is ${total} (${total * 1.05} with tax)`;
 *  第一个参数不是变量， 那么passthru函数接受数组第一位就只第一个变量之前的字符串
 *      --[ 'The total is ', ' (', ' with tax)' ]
 */
var total = 30;
var msg = passthru`The total is ${total} (${total * 1.05} with tax)`;

// function passthru(literals) {
//     var result = '';
//     var i = 0;

//     while (i < literals.length) {
//         result += literals[i++];
//         if (i < arguments.length) {
//             result += arguments[i];
//         }
//     }

//     return result;
// }

function passthru(literals, ...values) {
    // console.log(literals);
    var output = "";
    for (let index = 0; index <= values.length; index++) {
        if (index == values.length) {
            output += literals[index];
        } else {
            output += literals[index] + values[index];
        }
    }

    return output;
}
// console.log(msg);

/**
 * 
 */
// console.log(Number(0b11));
// console.log(Number(0o11));

/**
 * Number.isFinite() --检测一个数值是否为有限的
 * Number.isNaN() --检测一个值是否为NaN
 * 传统的isFinited() isNaN()是先调用Number（）方法将非数值的值转为数值，再进行判断
 * 新方法直接判断，且只对数值有效，非数值一律返回false
 */
// console.log(Number.isFinite(123));
// console.log(Number.isFinite('sdsds'));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN('sdas'));

/**
 * Number.parseInt()
 * Number.parseFloat()
 * 减少全局性方法，使得语言逐渐模块化
 */

/**
 * Number.isInteger() --判断一个值是否为整数
 */

/**
 * Number.EPSILON() --新增的极小常量
 * 实质是一个可以接受的误差范围
 */
// console.log(Number.EPSILON);
// console.log(Number.EPSILON.toFixed(20));
