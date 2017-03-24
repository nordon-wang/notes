// console.log("\u0061");
// console.log("\uD842\uDFB7");
// console.log("\u20BB7");
// console.log("\u{20BB7}");

let s = '𠮷a'
// console.log(s.codePointAt(0));
// console.log(s.codePointAt(1));
// console.log(s.codePointAt(2));

// String.formCharCode() es5
// String.formCharCode() 不能识别解析32位UTF-16字符
// String.formCodePoint() es6

var ss = 'asd';
for (var i = 0; i < ss.length; i++) {
    //    console.log(ss[i]);
}

for (let s of ss) {
    // console.log(s);
}

var t = String.fromCodePoint(0x20BB7);

for (let i of t) {
    // console.log(i);
}

// console.log('adc'.charAt(0));
// console.log('𠮷'.charAt(0));

// console.log('adc'.at(0));
// console.log('𠮷'.at(0));

// indexOf 传统方法
// console.log('adv'.indexOf('d'));

// es6新增 includes() startsWith() endsWith()
// let str = 'i am handsumd';

// console.log(str.includes('am'));
// console.log(str.includes('asvv'));

// console.log(str.startsWith('i'));
// console.log(str.startsWith('is'));

// console.log(str.endsWith('handsumd'));
// console.log(str.endsWith('handsumdss'));

// repeat() 重复
// console.log('sd'.repeat(3));

// padStart(), padEnd()
// 如果字符串长度不够指定长度，会在头部或者尾部进行补全
// 若字符串长度等于或者大于指定长度，则返回原字符串
// console.log('x'.padStart(5,'ab'));
// console.log('x'.padStart(4,'ab'));
// console.log('x'.padEnd(5,'ab'));
// console.log('x'.padEnd(4,'ab'));

var obj1 = {
    name: 'wangyao',
    x: 1,
    y: 2,
    f() {
        return 22;
    }
}
// console.log(`line1
// line2`);
// console.log(`my name is ${obj1.name} `);
// console.log(` ${obj1.x} + ${obj1.y} = ${ obj1.x + obj1.y} `);
// console.log(` ${obj1.x} * ${obj1.y} = ${ obj1.x * obj1.y} `);
// console.log(` ${obj1.x == 1 ? 'yes' : 'no'} `);
// console.log(`this f() return ${obj1.f()}`);
/**
 * 若字符串模板 大括号内的值不是字符串，将按照一般的规则转为字符串
 * --大括号中是一个对象，完成之后默认调用对象的toString()方法
 */
var x1 = `${obj1.x}`;
// console.log(typeof x1); //string

let strs = 'return' + '`hello ${name}`';
let func = new Function('name', strs);

console.log(func('nordon'));

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(new Date, i);
    }, 1000);
}

console.log(new Date, i);












