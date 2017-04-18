
var d = new Date();
var dd = d.setSeconds(d.getSeconds() + 1000);

function demo(num) {
    setInterval(function () {
        console.log(num--);
    }, 1000);
}

// demo(dd);

function demo1() {
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
            console.log('in',i);
        },1000);
    }

    console.log('out',ii);
}

// demo1();

for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000);
    })(i);
}

console.log(new Date, i);