"use strict";

const mario = document.querySelector('#mario');
const leftProfile = document.querySelector('.left-profile');
const fullCharPic = document.querySelector('.full-size-player')
const characters = document.querySelectorAll('.character');
const characterCall = document.querySelector('#character-call');
const titleSound = document.querySelector('#character-select-music');
const body = document.body;
console.log(body);
const gameContainer = document.querySelector('.game-container');
const titleScreen = document.querySelector('.titleScreen');
const chooseBattlefield = document.querySelector('.choose-battlefield');
const loadingScreen = document.querySelector('.loading-screen');
const gameScreen = document.querySelector('.game-screen');
let playerOneName = document.querySelector('.player1');
let playerTwoName = document.querySelector('.player2');
const playerOnePic = document.querySelector('.p1');
const playerTwoPic = document.querySelector('.p2');

console.log(characters);

//to have multiple pages, add "display: none" to the parts that
// you don't want to see. 

//make the "display: block" to show it and the others to none.

const turnOffDisplay = (item) => {
    item.style.display = 'none';
}

window.addEventListener('load', () => {
    titleSound.volume = 0.006;
    titleSound.play();
    turnOffDisplay(titleScreen);
    turnOffDisplay(chooseBattlefield);
    turnOffDisplay(loadingScreen);
    turnOffDisplay(gameScreen);
    //turn off screens 1,2,4,5
})

const characterScreen = (() => {
    let playerNum = 1;
    let currentPlayer;
    let currentName;

    const higherVol = () => {
        characterCall.volume = 0.07;
    }
    
    const midVol = () => {
        characterCall.volume = 0.05;
    }
    
    const lowerVol = () => {
        characterCall.volume = 0.019;
    }
    
    const capFirstLet = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const characterSelection = (name) => {
        toggleChar(name, playerNum);
    }

    const toggleChar = (name, char) => {
        if(char == 1){
            player1(name);
        } else if (char == 2){
            player2(name);
        }
        return {
            currentPlayer, currentName
        }
    }

    const player1 = (name ) => {
        playerOnePic.setAttribute('src', `/images/full-size-character/${name}.png`);
        playerOneName.value = capFirstLet(name);
        console.log(playerOneName);
    }

    const player2 = (name) => {
        playerTwoPic.setAttribute('src', `/images/full-size-character/${name}.png`);
        playerTwoName.value = capFirstLet(name);
        console.log(playerTwoName);
    }

    const imagePlacement = (item) => {
        imagePlacement(item);
        characterCall.setAttribute('src', `/sound/${item}.wav`);
        console.log(characterCall.volume);
        characterCall.play();
    }

    playerOneName.addEventListener('click', () => { 
        playerNum = 1;
        body.style.cursor = '/images/cursors/player1.png';
        playerOneName.value = ""; 
        playerOneName.addEventListener('keydown', (e) => {
            if(e.keyCode == 13){
                const newName = playerOneName.value;
                console.log(newName);
                playerOneName.value = newName;
            }
        })
        playerOneName.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
            e.target.blur();
            }
        }
        )
    })
    
    playerTwoName.addEventListener('click', () => {
        playerNum = 2;
        body.style.cursor = '/images/cursors/player2.png';
        playerTwoName.value = "BOT";
        playerTwoName.addEventListener('keydown', (e) => {
            if(e.keyCode == 13){
                const newName = playerTwoName.value;
                console.log(newName);
                playerTwoName.value = newName;
            }
        })
        playerTwoName.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
            e.target.blur();
            }
        }
        )
    })
        characters.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.id;
                switch(name){
                    case('bowser'):
                        higherVol();
                        characterSelection(name);
                        break;
                    case('saitama'):
                        midVol();
                        characterSelection(name);
                        break;
                    case('jotaro'):
                        lowerVol();
                        characterSelection(name);
                        break;
                    default:
                        lowerVol();
                        characterSelection(name);
                        }
                })
            }
        )    
})();


// mario.addEventListener('click', () => {
//     firstPlayer.setAttribute('src','/images/MarioSSB.png');
//     console.log("the image has been changed");
// })



// const titleScreen = () => {
//     const startButton = document.querySelector('.start-button');
    
//     return {
//         titleContainer,
//         startButton,
//         characters,
//         leftProfile
//     }

// };

// console.log(titleScreen.element);
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


