"use strict";
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

const elements = (() => {
    const mario = document.querySelector('#mario');
    const leftProfile = document.querySelector('.left-profile');
    const fullCharPic = document.querySelector('.full-size-player')
    const characters = document.querySelectorAll('.character');
    const characterCall = document.querySelector('#character-call');
    const titleSound = document.querySelector('#character-select-music');
    const startBtn = document.querySelector('.click-to-start');
    const mainMusic = document.querySelector('#start-music');
    const selectCharacter = document.querySelector('#choose-your-character');
    const body = document.body;
    console.log(body);
    const gameContainer = document.querySelector('.game-container');
    const titleScreen = document.querySelector('.titleScreen');
    const chooseBattlefield = document.querySelector('.choose-battlefield');
    const chooseCharacter = document.querySelector('.choose-character');
    const loadingScreen = document.querySelector('.loading-screen');
    const gameScreen = document.querySelector('.game-screen');
    const playerOneName = document.querySelector('.player1');
    const playerTwoName = document.querySelector('.player2');
    const playerOnePic = document.querySelector('.p1');
    const playerTwoPic = document.querySelector('.p2');

console.log(characters);

//to have multiple pages, add "display: none" to the parts that
// you don't want to see. 

//make the "display: block" to show it and the others to none.  
return{
    mario,
    leftProfile,
    fullCharPic,
    characters,
    characterCall,
    titleSound,
    mainMusic,
    selectCharacter,
    startBtn,
    body,
    gameContainer,
    titleScreen,
    chooseBattlefield,
    chooseCharacter,
    loadingScreen,
    gameScreen,
    playerOneName,
    playerOnePic,
    playerTwoName,
    playerTwoPic
}  
})();


const displayControl = (() => {
    const turnOffDisplay = (screen) => {
        screen.style.display = 'none';
    }
    
    const turnOnDisplay = (screen) => {
        screen.style.display = 'flex';
    }
    return {
        turnOffDisplay,
        turnOnDisplay
    }
})();

const openingScreen = (() => {
    displayControl.turnOnDisplay(elements.titleScreen);
    displayControl.turnOffDisplay(elements.chooseCharacter);
    displayControl.turnOffDisplay(elements.chooseBattlefield);
    displayControl.turnOffDisplay(elements.loadingScreen);
    displayControl.turnOffDisplay(elements.gameScreen);
    
    const charSelMusic = () => {
        setTimeout(() => {
            elements.titleSound.volume = 0.006;
            elements.titleSound.play();
        }, 100);
        setTimeout(() => {
            elements.selectCharacter.volume = 0.015;
            elements.selectCharacter.play();
        }, 1150);
    };

    elements.startBtn.addEventListener('click', () => {
        elements.mainMusic.setAttribute('src', `sound/game-start.wav`); 
        elements.mainMusic.volume = 0.009;
        elements.mainMusic.play();
        displayControl.turnOffDisplay(elements.titleScreen);
        displayControl.turnOnDisplay(elements.chooseCharacter);
        charSelMusic();
    })
})();

const characterScreen = (() => {
    let playerNum = 1;
    let currentPlayer;
    let currentName;

    const higherVol = () => {
        elements.characterCall.volume = 0.09;
    }
    
    const midVol = () => {
        elements.characterCall.volume = 0.05;
    }
    
    const lowerVol = () => {
        elements.characterCall.volume = 0.019;
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
        soundCall(name);
        elements.playerOnePic.setAttribute('src', `images/full-size-character/${name}.png`);
        elements.playerOneName.value = capFirstLet(name);
        console.log(elements.playerOneName.value);
    }

    const player2 = (name) => {
        soundCall(name);
        elements.playerTwoPic.setAttribute('src', `images/full-size-character/${name}.png`);
        elements.playerTwoName.value = capFirstLet(name);
        console.log(elements.playerTwoName.value);
    }

    const soundCall = (item) => {
        elements.characterCall.setAttribute('src', `sound/${item}.wav`);
        console.log(elements.characterCall.volume);
        elements.characterCall.play();
    }

    elements.playerOneName.addEventListener('click', () => { 
        playerNum = 1;
        elements.body.style.cursor = `url('images/cursor/player1.png'), auto`;
        // playerOneName.value = ""; 
        elements.playerOneName.addEventListener('keydown', (e) => {
            if(e.keyCode == 13){
                const newName = elements.playerOneName.value;
                console.log(newName);
                elements.playerOneName.value = newName;
            }
        })
        elements.playerOneName.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
            e.target.blur();
            }
        }
        )
    })
    
    elements.playerTwoName.addEventListener('click', () => {
        playerNum = 2;
        elements.body.style.cursor = `url('images/cursor/player2.png'), auto`;
        // playerTwoName.value = "BOT";
        elements.playerTwoName.addEventListener('keydown', (e) => {
            if(e.keyCode == 13){
                const newName = elements.playerTwoName.value;
                console.log(newName);
                elements.playerTwoName.value = newName;
            }
        })
        elements.playerTwoName.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
            e.target.blur();
            }
        }
        )
    })
    elements.characters.forEach(item => {
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

const loadingScreen = (() => {

})();

const gameScreen = (() => {

})();