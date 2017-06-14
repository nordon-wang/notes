function Point1(a,b){
    this.a = a;
    this.b = b;
}

Point1.prototype.toString = function(){
    return '(' + this.a + ', ' + this.b + ')';
}

var p = new Point1(1,2);
// console.log(p.toString());

class Point2{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.z = '3';
    }

    toStrings(){
        // return '(' + this.x + ', ' + this.y + ')';
        return `( ${this.x} , ${this.y} )`;
    }
}

let p2 = new Point2(2,3);
console.log(p2.toStrings());

class Obj {

}

let obj = new Obj();

// console.log(obj.constructor   === Obj.prototype.constructor); //true
// console.log(obj.constructor   === Obj); //true
// console.log(obj.constructor   === obj.__proto__.constructor); //true
// console.log(obj.constructor   === obj); //false


const funs = {
    demo1 (){
        console.log(`demo1 funs`);
    },
    demo2 (){
        console.log(`demo2 funs`);
    }
}


Object.assign(Obj.prototype,funs);

// console.log(Obj.constructor);
// console.log(obj)


let Obj2 = class Me {
    getName (){
        return Me.name
    }
}

let obj3 = new Obj2();

// console.log(obj3.getName())


class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

}

function bar(baz) {
  return this.snaf = baz;
}