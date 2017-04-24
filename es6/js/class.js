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
    }

    toString(){
        // return '(' + this.x + ', ' + this.y + ')';
        return `( ${this.x} , ${this.y} )`;
    }
}

let p2 = new Point2(2,3);
console.log(p2.toString());