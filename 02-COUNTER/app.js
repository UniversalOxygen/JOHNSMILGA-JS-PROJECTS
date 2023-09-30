const numEl = document.querySelector(".value");
const decrEl = document.querySelector('.decrease');
const resetEl = document.querySelector('.reset');
const incrEl = document.querySelector('.increase');


decrEl.addEventListener('click', function(){
    let count = 0;
    let i = count - 1
    console.log(i);
    numEl.textContent = i;

})

resetEl.addEventListener('click', function(){
    numEl.textContent = 0;
})