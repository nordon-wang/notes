// ;(function () {
//     let count = 1,
//         container = document.getElementById('container'),
//         times;
//     const funObj = {
//         getUserAction(e) {
//             // console.log(this);
//             console.log(e);
//             container.innerHTML = count++;
//         },
//         debounce(fun,wait) {
//             return function() {
//                 let _this = this,args = arguments;
//                 clearTimeout(times);
//                 times = setTimeout(function() {
//                     fun.apply(_this,args);
//                 },wait);
//             }
//         }
//     };
//     // container.addEventListener('mousemove', funObj.getUserAction);
//     container.addEventListener('mousemove', funObj.debounce(funObj.getUserAction,200));
// })();


;(function () {
    let count = 1,
        container = document.getElementById('container'),
        times;
    const funObj = {
        getUserAction(e) {
            // console.log(this);
            console.log(e);
            container.innerHTML = count++;
        },
        debounce(fun,wait,immediate) {
            /**
             * fun 回调方法
             * wait 定时器时间
             * immediate 是否立即执行
             */
            
            let timeout , result;

            return function(){
                let _this = this, args = arguments;

                if(timeout) clearTimeout(timeout);

                if(immediate){
                    // 如果已经执行过，不再执行
                    let callNow = !timeout;

                    timeout = setTimeout(function(){
                        timeout = null;
                    },wait);

                    if(callNow) result = fun.apply(_this,args);
                }else{
                    timeout = setTimeout(function() {
                        result = fun.apply(_this,args);
                    }, wait);
                }
                return result;
            }
        }
    };


    // container.addEventListener('mousemove', funObj.getUserAction);
    container.addEventListener('mousemove', funObj.debounce(funObj.getUserAction,1000));
})();