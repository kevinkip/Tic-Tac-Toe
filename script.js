"use strict";

const mario = document.querySelector('#mario');
const leftProfile = document.querySelector('.left-profile');
const firstPlayer = document.querySelector('.full-size-player')
const characters = document.querySelectorAll('.character');
const characterCall = document.querySelector('#character-call');
const titleSound = document.querySelector('#character-select-music');

console.log(characters);

//to have multiple pages, add "display: none" to the parts that
// you don't want to see. 

//make the "display: block" to show it and the others to none.

window.addEventListener('load', () => {
    titleSound.volume = 0.008;
    titleSound.play();
})
const characterSelection = (item) => {
    characterCall.setAttribute('src', `/sound/${item}.wav`);
    firstPlayer.setAttribute('src', `/images/full-size-character/${item}.png`);
    console.log(characterCall.volume);
    characterCall.play();
}

const higherVol = () => {
    characterCall.volume = 0.15;
}

const lowerVol = () => {
    characterCall.volume = 0.010;
}

characters.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.id);
        const name = item.id;
        switch(name){
            case('bowser'):
                higherVol();
                characterSelection(name);
                break;
            case('saitama'):
                higherVol();
                characterSelection(name);
                break;
            default:
                lowerVol();
                characterSelection(name);
        }
    })
})
// mario.addEventListener('click', () => {
//     firstPlayer.setAttribute('src','/images/MarioSSB.png');
//     console.log("the image has been changed");
// })



const titleScreen = () => {
    const titleContainer = document.querySelector('.titleScreen');
    const startButton = document.querySelector('.start-button');
    
    return {
        titleContainer,
        startButton,
        characters,
        leftProfile
    }

};

console.log(titleScreen.element);
// Welcome Screen
// Choose your character
// Loading screen with fighters looking at each other
// Gameboard with fight sounds with each click.
// Loser's profile picture flies out of the screen.
// continue overlap screen with countdown

// const gameBoard = (() => {
//     let gameboard = [
//         ['','',''],
//         ['','',''],
//         ['','',''],
//     ] 

//     // Leaving the gameboard blank squares blank so I can assign "X" and "O" with each click/player.
//     return {gameboard};
// })();


// console.log(gameBoard);

//IIFE Immediately Invoked Function Expression


