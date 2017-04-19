window.onload = function () {

    // var con = document.getElementsByTagName('ul');

    // for(let i = 1; i <= 3; i++){
    //     const item = document.createElement('li');
    //     item.innerText = i;
    //     con[0].appendChild(item);
    // }

    // let con = document.getElementById('ul');
    // const html = [];

    // for(let i=1; i <= 3; i++){
    //     html.push('<li>' + i + '</li>');
    // }

    // con.innerHTML = html.join('');

    // ( () => {
    //     let ndCon = document.getElementById('js-ul');

    //     if(!ndCon){
    //         return;
    //     }

    //     for(let i = 0; i < 3; i++){
    //         let ndItem = document.createElement('li');
    //         ndItem.innerText = i + 1;
    //         ndItem.addEventListener('click',function(){
    //             console.log(this.innerText);
    //             console.log(ndItem.innerText);
    //             console.log(i);
    //         });
    //         ndCon.appendChild(ndItem);
    //     }
    // })();



    // (() =>{
    //     let ndCon = document.getElementById('js-ul');

    //     if(!ndCon){
    //         return;
    //     }

    //     for(let i = 0; i<300; i++){
    //         const ndItem = document.createElement('li');
    //         ndItem.innerText = i + 1;
    //         ndCon.appendChild(ndItem);
    //     }

    //     ndCon.addEventListener('click',function(e){
    //         const target = e.target;

    //         if(target.tagName === 'LI'){
    //             console.log(target.innerHTML);
    //         }

    //         // console.log(e);
    //     });
    // })();



    // ( () => {

    //     let ndCon = document.getElementById('js-ul');

    //     if(!ndCon){
    //         return ;
    //     }

    //     const total = 30000;
    //     const batchSize = 5;
    //     const batchCount = total / batchSize;
    //     let batchDone = 0;

    //     function appendItems(){
    //         const fragment = document.createDocumentFragment();

    //         for(let i = 0; i < batchSize; i++){
    //             const ndItem = document.createElement('li');
    //             ndItem.innerText = (batchDone * batchSize) + i + 1;
    //             fragment.appendChild(ndItem);

    //         }

    //         ndCon.appendChild(fragment);

    //         batchDone += 1;
    //         doBatchAppend();
    //     }

    //     function doBatchAppend(){
    //         if(batchDone < batchCount){
    //             window.requestAnimationFrame(appendItems);
    //         }
    //     }

    //     doBatchAppend();

    //     ndCon.addEventListener('click',function(e){
    //         const target = e.target;
    //         if(target.tagName === 'LI'){
    //             console.log(target.innerHTML);
    //         }
    //     })
    // })();


    // function iteratorDOM(el){

    //     const item = document.getElementsByClassName(el);

    //     // console.log(item);
    //     console.log(item[0].nodeName,item[0].className);

    //        console.log(item[0].children);
    //     if(item[0].children > 0){
    //     //    iteratorDOM(item[0].children.className);
    //     }


    // }

    // iteratorDOM('root');



    // const traverse = (ndRoot) => {
    //     // debugger;
    //     const stack = [ndRoot];

    //     while (stack.length) {
    //         const node = stack.shift();

    //         printInfo(node);

    //         if (!node.children.length) {
    //             continue;
    //         }

    //         Array.from(node.children).forEach(x => stack.push(x));
    //         console.log(node);
    //         console.log(stack);
    //     }
    // };

    // const printInfo = (node) => {
    //     console.log(node.tagName, `.${node.className}`);
    // };

    // kickoff
    // traverse(document.querySelector('.root'));

    // const item = document.getElementsByClassName('root');
    // console.log(item[0].tagName,item[0].className);
    // console.log(item[0].children[0])


    
}