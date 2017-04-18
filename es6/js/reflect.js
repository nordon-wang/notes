/**
 * Reflect设计目的
 * 1.将Object对象上一些明显属于语言内部的方法放在Reflect上--从Reflect对象上可以拿到语言内部的方法
 * 
 */

/**
 * 2.修改某些Object方法的返回值，让其变得更合理
 */

// 旧写法
try {
    // Object.defineProperty() 无法定义属性时，会抛出一个错误
    Object.defineProperty(target, property, attributes)
} catch (e) {

}

function demo() {
    // 新写法
    if (Object.defineProperty(target, property, attributes)) {
        // Object.defineProperty() 无法定义时，返回false
    } else {

    }
}

/**
 * 3. 让Object操作都变成函数行为
 *  --某些Object操作时命令式 --> name in obj 和 delete obj[name]
 * --Reflect 让其变成函数行为， Reflect.has(obj,name) 和 Reflect.deleteProperty(obj,name)
 */

/**
 * 4.Reflect对象的方法 和 Proxy对象的方法是一一对应的
 */


const obj1 = new Proxy({},{
    set (t,n,v,r){
        let success = Reflect.set(t,n,v,r);
        if(success){
            console.log('111');
        }
        return success;
    }
})


let arr1 = [11,22,12,34,55,2,333,234,5];
// console.log(Math.max(...arr1));


/**
 * 12个静态方法 与Proxy对象的方法是一一对应的
 * Reflect.apply(target,thisArg,args)
 * Reflect.construct(target,args)
 * Reflect.get(target,value,receiver)
 * Reflect.set(target,name,value,receiver)
 * Reflect.defineProperty(target,name,desc)
 * Reflect.deleteProperty(target,name)
 * Reflect.has(target,name)
 * Reflect.ownKeys(target)
 */













