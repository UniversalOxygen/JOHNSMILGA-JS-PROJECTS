/*const numEl = document.querySelector("#value");
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
})*/


const numEl = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            numEl.style.color = "green";
        }
        if(count < 0) {
            numEl.style.color = "red";
        }
        if(count === 0) {
            numEl.style.color = "#222";
        }
        numEl.textContent = count;
    })
})
