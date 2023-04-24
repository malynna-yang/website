const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const pg1 = document.querySelector('.button')
const pg2 = document.querySelector('.button2')


btn1.addEventListener('click', () => {
    console.log('click')
    pg1.style.zIndex = "1";
    pg2.style.zIndex = "-1";
})

btn2.addEventListener('click', () => {
    pg2.style.zIndex =  "1";
    pg1.style.zIndex = "0";
})