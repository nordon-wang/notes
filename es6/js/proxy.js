/**
 * Proxy -- 修改某些操作的默认行为 == 语言层面作出修改
 *  --元编程 对编程语言进行编程
 */

const obj = new Proxy({}, {
    get(target, key, receiver) {
        console.log(`get ${key} !`);
        return Reflect.get(target, key, receiver);
    },
    set(target, key, receiver) {
        console.log(`set ${key} !`);
        return Reflect.set(target, key, receiver);
    }
});

// obj.count = 1;

// ++obj.count;

/**
 * Proxy对象的所有用法
 * var proxy = new Proxy(target,handler);
 * target-- 所要拦截的目标对象
 * handler -- 定制拦截行为的一个参数对象
 */
const obj1 = new Proxy({}, {
    get(target, property) {
        return 30;
    }
});

// console.log(obj1.time);
// console.log(obj1.name);
// console.log(obj1.title);

/**
 * 如果要使Proxy有作用，必须针对Proxy实例进行操作而不是针对目标对象进行操作
 * 如果handler没有何止任何拦截，等于直接通向原对象
 */
let target = {}, handler = {};
const obj2 = new Proxy(target, handler);
obj2.name = 'nordon';
// console.log(target.name);

/**
 * Proxy 实例作为其他对象的原型对象
 */

const obj3 = new Proxy({},{
    get (target, property){
        return 30;
    }
});

let objs = Object.create(obj3);
// console.log(objs.name);

/**
 * 同一个拦截器函数可以设置拦截多个操作
 */

const handler1 = {
    get (target, name){
        if(name == 'property'){
            return Object.property;
        }
        return 'not property : ' + name;
    },
    
    apply (target, thisBinding, args){
        return args[1];
    },

    construct (target, args){
        return {value:args[0]};
    }
}

const moreObj = new Proxy(function(x, y){
    return x + y;
},handler1);

console.log(moreObj(1,2)); //调用了apply
console.log(new moreObj(1,2)); //调用了 construct
console.log(moreObj.property == Object.property);
console.log(moreObj.foo); //调用了 get









