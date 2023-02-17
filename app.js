//targating the elements
const showCount = document.querySelector('.count');
const count = document.querySelector('.increase');
const decount = document.querySelector('.decrease');

let countNum = 0;

//increase number on click and changing in number text color
const doCount = count.addEventListener('click', () => {
    countNum++;
    // console.log(countNum);
    showCount.innerText = countNum;
    if(countNum < 0){
        showCount.classList.add('text-danger');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-dark');
    } 
    else if(countNum > 0){
        showCount.classList.add('text-white');
        showCount.classList.remove('text-danger');
        showCount.classList.remove('text-dark');
    } else {
        showCount.classList.add('text-dark');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-danger');
    }

})

//increase number on click and changing in number text color
const doDeCount = decount.addEventListener('click', () => {
    countNum--;
    // console.log(countNum);
    showCount.innerText = countNum;
    if(countNum < 0){
        showCount.classList.add('text-danger');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-dark');
    } 
    else if(countNum > 0){
        showCount.classList.add('text-white');
        showCount.classList.remove('text-danger');
        showCount.classList.remove('text-dark');
    } else {
        showCount.classList.add('text-dark');
        showCount.classList.remove('text-white');
        showCount.classList.remove('text-danger');
    }
})

