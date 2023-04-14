const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const button = document.querySelectorAll('.button')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > 4) {
        currentActive = 4
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    }
}