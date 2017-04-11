function fun() {
    setTimeout(() => {
        console.log('id', this.id);
    }, 100);
}


var id = 1;

var obj = {
    id: 2222,
    fs() {
        console.log(2222);
    }
}

function fs2() {
    var id = 3333;
}

// fun.call({id:2});
// fun.apply({id:2});
// fun.apply(obj);
// fun.apply(fs2);
// fun.apply(this,{id:2});
// console.log(fun.name);

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}


var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);


let insert = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});

// console.log(insert(2).into([1, 3]).after(1));
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

// console.log(Fibonacci2(100));