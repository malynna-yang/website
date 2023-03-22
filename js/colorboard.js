const container = document.getElementById('container')
const colors = ['#dda0d', '#ee82ee', '#da70d6', '#ba55d3', '#9932cc']
const SQUARES = 500

for(let i = 0; 1 < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}