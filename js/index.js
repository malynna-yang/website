const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const pg1 = document.querySelectorAll('.button')
const pg2 = document.querySelectorAll('.button2')

btn1.addEventListener('click', () => {
    CSStyleDeclaration.removeProperty('z-index')

    btn1.style.z-index = "1";
})

btn2.addEventListener('click', () => {

})