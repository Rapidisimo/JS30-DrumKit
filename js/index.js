// What I tried

// // Sounds
// const clap = new Audio ('sounds/clap.wav');
// const hiHat = new Audio ('sounds/hihat.wav');
// const kick = new Audio ('sounds/kick.wav');
// const openHat = new Audio ('sounds/openhat.wav');
// const boom = new Audio ('sounds/boom.wav');
// const ride = new Audio ('sounds/ride.wav');
// const snare = new Audio ('sounds/snare.wav');
// const tom = new Audio ('sounds/tom.wav');
// const tink = new Audio ('sounds/tink.wav');


// document.addEventListener("keydown", (e) => {
//     const keyPressed = e.key;
//     soundPlayer(keyPressed)
//     e.target.querySelector('.key').classList.toggle('playing')
// })


// function soundPlayer(letter) {
//     const letterInput = letter.toLowerCase();
//     if(letterInput === 'a') {
//         clap.play()
//     }else if(letterInput === 's') {
//         hiHat.play()
//     }else if(letterInput === 'd') {
//         kick.play()
//     }else if(letterInput === 'f') {
//         openHat.play()
//     }else if(letterInput === 'g') {
//         boom.play()
//     }else if(letterInput === 'h') {
//         ride.play()
//     }else if(letterInput === 'j') {
//         snare.play()
//     }else if(letterInput === 'k') {
//         tom.play()
//     }else if(letterInput === 'l') {
//         tink.play()
//     }
// }


// Following Tutorial

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //selecting audio data-key elements in the html
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //selecting css data-key elements
    if(!audio) return; // stop function from running
    audio.currentTime = 0; //rewind to start
    audio.play()
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

window.addEventListener('keydown', playSound)