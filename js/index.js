const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


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