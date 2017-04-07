function fun(){
    setTimeout(() => {
        console.log('id',this.id);
    },100);
}


var id = 1;

// fun.call({id:2});
// fun.apply({id:2});
// console.log(fun.name);

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
    console.log(this);
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3