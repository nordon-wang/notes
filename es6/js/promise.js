
/**
 * Promise对象特点
 * 1，对象的状态不受外界影响
 *  --三个状态 Pending-进行中， Resoleved-已完成又称Fulfilled， Rejected-已失败
 *    只有异步操作的结果，可以决定当前是哪一种状态
 * 2.一旦状态改变，就不会再改变，任何时候都可以得到这个结果
 */

/**
 * promise缺点
 * 1.一旦建立就会立即执行，无法中途取消
 * 2.若不设置回调函数，promise内部抛出错误，不会反应到外部
 * 3.当处于pending状态时，无法得到目前进展到那一阶段--刚刚开始还是即将结束
 */

/**
 * peomise对象是一个构造函数，用来生成promise实例
 */

let promise = new Promise(function(resolve,reject){

    let status = 's';
    let value = 'nordon', error = "error nordon";


    if(status){
        resolve(value);
    }else{
        reject(new Error('error'));
    }
});

promise.then(function(value){
    // console.log(value);
},function(){
    console.log('error');
});


function ti(ms){
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

ti(100).then( (value) => {
    // console.log(value);
});

let p = new Promise(function(resoleve,reject){
    // console.log('peomise');
    resoleve('resoleve');
});

p.then( (value) => {
    // console.log(value);
});

// console.log('con');


function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}

// loadImageAsync().then(function(img){
//     console.log(img);
// })

function demo(){
    var img = new Image();
    console.log(img);
}

// demo();