window.onload = function () {
    let times = setInterval(movePic, 10);

    getID('did').addEventListener('mouseover', function () {
        clearInterval(times);
    });

    getID('did').addEventListener('mouseleave', function () {
        times = setInterval(movePic, 10);
    })
}

function getID(id) {
    return document.getElementById(id);
}
let x = 0;
let y = 0;
let backX = false;
let backY = false;
function movePic() {
    const obj = getID('did');

    // x轴方向

    if (backX) {
        if (x > 0 && x <= window.innerWidth - 100) {
            x--
        } else  {
            backX = false;
        }
    } else {
        if ( x < window.innerWidth - 100) {
            x++;
        } else if(x >= window.innerWidth - 100) {
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
        } else if(y >= window.innerHeight - 100) {
            backY = true;
        }
    }

    obj.style.left = x + 'px';
    obj.style.top = y + 'px';

}