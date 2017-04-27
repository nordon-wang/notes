const Objs = function (id, time) {

    // 私有变量
    let x = 0;
    let y = 0;
    let backX = false;
    let backY = false;
    let times;

    // 公有变量
    this.id = id;
    this.time = time;

    // 私有方法
    function getID(id) {
        return document.getElementById(id);
    }

    // 公有方法
    this.getIDs = function () {
        return getID(this.id);
    }

    //  公有方法
    this.movePic = function () {
        const obj = getID(this.id);

        // x轴方向

        if (backX) {
            if (x > 0 && x <= window.innerWidth - 100) {
                x--
            } else {
                backX = false;
            }
        } else {
            if (x < window.innerWidth - 100) {
                x++;
            } else if (x >= window.innerWidth - 100) {
                backX = true;
            }
        }

        // Y轴方向

        if (backY) {
            if (y > 0 && y <= window.innerHeight - 100) {
                y--;
            } else {
                backY = false;
            }
        } else {
            if (y < window.innerHeight - 100) {
                y++;
            } else if (y >= window.innerHeight - 100) {
                backY = true;
            }
        }

        obj.style.left = x + 'px';
        obj.style.top = y + 'px';

        // let times = setTimeout(this.movePic.bind(o), this.time);
        // let times = setTimeout(() => o.movePic.apply(o), this.time);
        // let times = setTimeout(() => this.movePic.apply(o), this.time);
        clearInterval(times);
         times = setTimeout("o.movePic.apply(o)", this.time);
    }

    getID('did').addEventListener('mouseover', function () {
        clearInterval(times);
    });

    getID('did').addEventListener('mouseleave', function () {
        times = setInterval("o.movePic.apply(o)", this.time);
    });
}

const o = new Objs('did', 20);
o.movePic();

