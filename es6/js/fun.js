/**
 * 函数扩展
 * 函数参数设置默认值，但是参数不能再使用let或const声明，因为已经默认声明
 * 参数不能设置同名参数，保持参数名称的唯一。
 */
function demo(a = 'nordon'){
    console.log(a);
}

// demo('wangy');

let x = 99;

function demo1(a = x + 1){
    console.log(a);
}
// demo1();


function fech(aaaaa){
    console.log(aaaaa);
}

fech();
console.log();