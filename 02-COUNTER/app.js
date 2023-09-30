const numEl = document.querySelector(".value");
const decrEl = document.querySelector('.decrease');
const resetEl = document.querySelector('.reset');
const incrEl = document.querySelector('.increase');

let count = 0;

decrEl.addEventListener('click', function(){
     count--
    console.log(count);
    numEl.textContent = count;

})

resetEl.addEventListener('click', function(){
    count = 0
    numEl.textContent = count;
})

incrEl.addEventListener('click', function(){
    count++
    console.log(count);
    numEl.textContent = count
})
