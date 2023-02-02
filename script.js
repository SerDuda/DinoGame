const cactus = document.getElementById('cactus')
const dino = document.getElementById("dino")

document.addEventListener('keydown', function(event) {
    jump()
})

function jump() {
    if (dino.classList != 'DinoJump') {
        dino.classList.add('DinoJump')
    }
    setTimeout(() => {
        dino.classList.remove('DinoJump')
    }, 600)
}

let isAlive = setInterval((cactus) => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 70 && cactusLeft > 0 && dinoTop >= 110) {
        alert('GAME OVER')
        if (alert('GAME OVER')) {
            cactusLeft.x = 500
        }
    }
}, 100) 

// if (alert('GAME OVER')) {
//     cactus.x = 500
// }