window.onload = function(){

    const div = document.getElementById('did');
    const btn = document.getElementById('btn');


    btn.addEventListener('click', () => {
        div.innerText = 'btn click'
    })
}