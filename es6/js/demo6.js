/**
 * Array.form()
 *  --可以讲类数组对象和可遍历对象转换为真正的数组
 */
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arr1 = [].slice.call(arrayLike);

let arr2 = Array.from(arrayLike);

// console.log(arr1);
// console.log(arr2);

// let ps = document.querySelectorAll('p');
// console.log(ps);
// Array.from(ps).forEach(function(val,index){
//     console.log(val);
// });

// console.log(Math.max(...[11,2,22]));

function demo(...val){
    console.log(val);
    Array.from(val).forEach(function(vals){
        console.log(vals)
    })
}
// demo(1,2,3,4);

var arrs = [11,22,33].map((currentValue, index,arr) =>  {
    // console.log(currentValue, index,arr);
    return currentValue * 2;
})
// console.log(arrs);
// console.log([11,22,33].slice());

// var fs = (...x) => {
//     console.log(x);
//     x.forEach((v) => {
//         console.log(v)
//     })
// }
// fs('a','s',11);

// var fs = x => x * x;
// console.log(fs(3));

// Array.from([11,12,13],(a,b,c) =>{
//     console.log(a,b,c);
// })


/**
 * Array.of()
 *  -将一组值转换为数组
 */
// console.log(Array(3));
// console.log(Array());

// console.log(Array.of());
// console.log(Array.of(1));
// console.log(Array.of(1,2,3));

/**
 * 
 * copyWithin()
 *  -在数组内部，将指定位置的成员复制到其他位置，返回当前数组，会修改原有数组
 */
console.log([1,2,3,4,5,6].copyWithin(1,3));

/**
 * find() 返回当前符合条件的值，若没有返回undefined
 *  --可接受三个参数，value，index，arr，分别为当前值，当前位置，原数组
 * findIndex() 返回当前符合条件的值的位置，其他与find()一致
 */
console.log([1,23,4,5].find( n => n <= 20 ));
console.log([1,23,4,5].find(function(val){
    return val  == 65;
}));


console.log();












