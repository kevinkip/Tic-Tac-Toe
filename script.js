"use strict";

const titleScreen = () => {
    const titleContainer = document.querySelector('.titleScreen');
    const startButton = document.querySelector('.start-button');
    const characters = document.querySelectorAll('.character');
    const leftProfile = document.querySelector('.left-profile');

    characters.forEach('mouseover', (event) => {
        if(event.characters.id == 'mario' ){
            leftProfile
        }
    })

    const showLargeCharacter = (name) => {
        switch(name){
            case 'mario':
                leftProfile.backgroundImage="url('')"
        }
    }
};

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


