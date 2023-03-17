const sounds = ['applause', 'boo', 'gasp', 'tada', 'victroy', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sounds
    btn.addEventListener('click', () => {
        document.getElementById(sound).play
    })
    
})