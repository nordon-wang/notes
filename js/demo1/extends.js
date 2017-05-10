/**
 * 原型式继承
 */
const obj  = {
    name:'ming',
    friends:['a','b']
}

function objFun(o){
    function F(){

    }
    F.prototype = o;

    return new F();
}

const obj1 = objFun(obj);
// console.log(obj);
obj1.name = 'bing';
obj1.friends.push('c');
// obj1.friends = ['c'];
// console.log(obj);

const obj2 = objFun(obj);
// console.log(obj2.name);
// console.log(obj2.friends);


/**
 * 寄生式继承
 */

const objs = {
    name:'ming',
    friends:['a','b']
}

function objFuns(o){
    function F(){}
    F.prototype = o;
    return new F();
}

function cOb(o){
    const newOb = objFuns(o);

    newOb.sayName = function(){
        console.log(this.name);
    }

    return newOb;
}

const objs1 = cOb(objs);
// objs1.sayName();

















const Obj1 = function(name,age){
    this.name = name;
    this.age = age;
}

const Child1 = function(sex){
    this.sex = sex;
}

