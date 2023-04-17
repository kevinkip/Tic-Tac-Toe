"use strict";

const mario = document.querySelector('#mario');
const leftProfile = document.querySelector('.left-profile');
const firstPlayer = document.querySelector('.full-size-player')

mario.addEventListener('click', () => {
    firstPlayer.setAttribute('src','http://127.0.0.1:5500/images/MarioSSB.png');
    console.log("the image has been changed");
})



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


