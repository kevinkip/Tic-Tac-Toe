"use strict";

const mario = document.querySelector('#mario');
const leftProfile = document.querySelector('.left-profile');
const firstPlayer = document.querySelector('.full-size-player')
const characters = document.querySelectorAll('.character');
console.log(characters);

characters.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.id);
        firstPlayer.setAttribute('src', `/images/full-size-character/${item.id}.png`)
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


