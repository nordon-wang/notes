// console.log(111);

const obj1 = {
    demo1() {

    },
    demo2() {

    }
};
// obj1.demo1();

const obj2 = function () {
    return {
        demo1() {
            console.log(1111);
        },
        demo2() {
            console.log(22222);
        }
    }
}

// let ob2 = obj2().demo1();
// let ob21 = obj2().demo2();

const Obj3 = function () {
    this.demo1 = () => {
        console.log(11111);
    };
    this.demo2 = () => {
        console.log(22222);
    }
}

// let ob = new Obj3();
// ob.demo1();
// ob.demo2();

const Obj4 = function () {

}

// Obj4.prototype.demo1 = () => console.log(1111);
// Obj4.prototype.demo2 = () => console.log(22222);

Obj4.prototype = {
    demo1: () => console.log(1111),
    demo2: () => console.log(222)
}

// let ob = new Obj4();
// ob.demo1();
// ob.demo2();


const Smoke = function (id, name) {
    // debugger;
    console.log(this);

    // 私有属性
    let num = 0;

    // 私有方法
    const checkID = () => {
        return true;
    }

    if (this instanceof Smoke) {
        // 对象公有属性
        this.id = id;

        // 公有的 setter getter 存取器
        this.setName = name => {
            this.name = name;
        }

        this.getName = () => {
            return this.name;
        }

        // 对象公有属性 需要new 才能正常使用
        this.info = () => {
            if (checkID()) return `${this.name} 香烟  .. 订单号ID ${this.id}`;
        }
    }else{
        return new Smoke(id,name);
    }
}

// 公有属性 money， 不需要new就可以使用， 直接Smoke.money就可以获取到值
Smoke.prototype = {
    money: "20元",
    other() {
        console.log('other function');
    }
}

const smoke = new Smoke(9527, '大前门');

// console.log(smoke.info());

// smoke.setName('大前门');
// console.log(smoke.info());
// console.log(smoke.money);
// console.log(smoke);

// num 和 checkID() 都是私有属性 外部不能访问
// console.log( smoke.num );
// console.log( smoke.checkID() );

const s2 = Smoke(700, '中华');

// console.log(s2.money);
// console.log(s2);
// window.setName("中华");
// console.log(window.info());

// s2.setName("中华");
// console.log(s2.info());