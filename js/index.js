// Sounds
const clap = new Audio ('sounds/clap.wav');
const hiHat = new Audio ('sounds/hihat.wav');
const kick = new Audio ('sounds/kick.wav');
const openHat = new Audio ('sounds/openhat.wav');
const boom = new Audio ('sounds/boom.wav');
const ride = new Audio ('sounds/ride.wav');
const snare = new Audio ('sounds/snare.wav');
const tom = new Audio ('sounds/tom.wav');
const tink = new Audio ('sounds/tink.wav');

// Listen for keypresses and call function to play sound
document.addEventListener("keydown", (e) => {
    const keyPressed = e.key;
    soundPlayer(keyPressed)
})

// function that plays the sound according to the key pressed
function soundPlayer(letter) {
    const letterInput = letter.toLowerCase(); // converts UPPERCASE to lowercase
    if(letterInput === 'a') {
        clap.play()
    }else if(letterInput === 's') {
        hiHat.play()
    }else if(letterInput === 'd') {
        kick.play()
    }else if(letterInput === 'f') {
        openHat.play()
    }else if(letterInput === 'g') {
        boom.play()
    }else if(letterInput === 'h') {
        ride.play()
    }else if(letterInput === 'j') {
        snare.play()
    }else if(letterInput === 'k') {
        tom.play()
    }else if(letterInput === 'l') {
        tink.play()
    }
}