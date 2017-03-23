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

for(let s of ss){
    // console.log(s);
}

var t = String.fromCodePoint(0x20BB7);

for( let i of t){
    // console.log(i);
}

// console.log('adc'.charAt(0));
// console.log('𠮷'.charAt(0));

// console.log('adc'.at(0));
// console.log('𠮷'.at(0));

// indexOf 传统方法
// console.log('adv'.indexOf('d'));

// es6新增 includes() startsWith() endsWith()
let str = 'i am handsumd';

// console.log(str.includes('am'));
// console.log(str.includes('asvv'));

// console.log(str.startsWith('i'));
// console.log(str.startsWith('is'));

// console.log(str.endsWith('handsumd'));
// console.log(str.endsWith('handsumdss'));

// repeat() 重复
// console.log('sd'.repeat(3));
















