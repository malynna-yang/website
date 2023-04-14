const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const pg1 = document.querySelectorAll('.button')
const pg2 = document.querySelectorAll('.button2')

pg2.style.backgroundColor = 'green'


btn1.addEventListener('click', () => {
    console.log('click')
    pg1.style.backgroundColor = "green";
})

btn2.addEventListener('click', () => {

})