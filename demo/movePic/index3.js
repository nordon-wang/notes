window.onload = function () {
    // let times = setInterval( objs.movePic.bind(objs), 10);
    // let times = setInterval( objs.movePic.apply(objs), 10); 不行
    // let times = setInterval( objs.movePic.call(objs), 10); 不行


    // let times = setInterval( () => objs.movePic.apply(objs) , 10);
    let times = setInterval( () => objs.movePic.call(objs) , 10);
    // let times = setInterval( () => objs.movePic.bind(objs) , 10); 不行

    // let times = setInterval( "objs.movePic.bind(objs)", 10); 不行
    // let times = setInterval( "objs.movePic.apply(objs)", 10);
    // let times = setInterval( "objs.movePic.call(objs)", 10);

    objs.getID('did').addEventListener('mouseover', function () {
        clearInterval(times);
    });

    objs.getID('did').addEventListener('mouseleave', function () {
        times = setInterval(objs.movePic, 10);
    });
}

const objs = {
    x: 0,
    y: 0,
    backX: false,
    backY: false,
    movePic() {
        // 此处不能使用this， 因为在定时器中，作用域发生变化 所以 使用 apply call bind 改变作用域
        // 但是bind 和 apply、call 改变作用域规则不同
        const obj = this.getID('did');

        // console.log(this);
        // x轴方向

        if (this.backX) {
            if (this.x > 0 && this.x <= window.innerWidth - 100) {
                this.x--
            } else {
                this.backX = false;
            }
        } else {
            if (this.x < window.innerWidth - 100) {
                this.x++;
            } else if (this.x >= window.innerWidth - 100) {
                this.backX = true;
            }
        }

        // Y轴方向

        if (this.backY) {
            if (this.y > 0 && this.y <= window.innerHeight - 100) {
                this.y--;
            } else {
                this.backY = false;
            }
        } else {
            if (this.y < window.innerHeight - 100) {
                this.y++;
            } else if (this.y >= window.innerHeight - 100) {
                this.backY = true;
            }
        }

        obj.style.left = this.x + 'px';
        obj.style.top = this.y + 'px';

    },
    getID(id) {
        return document.getElementById(id);
    }
}
