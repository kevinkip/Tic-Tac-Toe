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
    const playerOnePic = document.querySelector('#p1');
    const playerTwoPic = document.querySelector('#p2');
    const p1Button = document.querySelector('.p1Btn');
    const p2Button = document.querySelector('.p2Btn');


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
    playerTwoPic,
    p1Button,
    p2Button
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
            elements.selectCharacter.volume = 0.02;
            elements.selectCharacter.play();
        }, 1150);
    };

    elements.startBtn.addEventListener('click', () => {
        elements.mainMusic.setAttribute('src', `sound/game-start.wav`); 
        elements.mainMusic.volume = 0.099;
        elements.mainMusic.play();
        displayControl.turnOffDisplay(elements.titleScreen);
        displayControl.turnOnDisplay(elements.chooseCharacter);
        charSelMusic();
    })
})();

const characterScreen = (() => {
    const startButton = document.querySelector('.button');
    const capFirstLet = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let activePlayer = 0;

    elements.playerOneName.addEventListener('click', () => { 
        console.log('Player One is active');
        activePlayer = 1;
        console.log(activePlayer)
        elements.body.style.cursor = `url('images/cursor/player1.png'), auto`;
    })

    elements.characters.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.id;
            charCall(name);
            if (activePlayer === 1){
                elements.playerOnePic.setAttribute('src', `images/full-size-character/${name}.png`);
                elements.playerOneName.value = capFirstLet(name);
                console.log(elements.playerOneName.value);     
            } else if (activePlayer === 2){
                elements.playerTwoPic.setAttribute('src', `images/full-size-character/${name}.png`);
                elements.playerTwoName.value = capFirstLet(name);
                console.log(elements.playerTwoName.value);
            }
        })
    })

    elements.playerTwoName.addEventListener('click', () => {
        console.log('Player Two is active');
        activePlayer = 2;
        console.log(activePlayer)
        elements.body.style.cursor = `url('images/cursor/player2.png'), auto`;       
    })

    elements.p2Button.addEventListener('click', () => {
        let t = elements.p2Button;
        if(t.innerHTML == 'BOT'){
            t.innerHTML = "Player 2"
        } else{
            t.innerHTML = 'BOT'
            text.innerHTML = 'BOT';

        }
    })

    const charCall = (name) => {
        elements.characterCall.setAttribute('src', `sound/${name}.wav`);
        elements.characterCall.volume = 0.1;
        elements.characterCall.play();
    }

    startButton.addEventListener('click', () => {
        displayControl.turnOffDisplay(elements.chooseCharacter);
        displayControl.turnOnDisplay(elements.loadingScreen);
    })

})();

const loadingScreen = (() => {

})();

const gameScreen = (() => {

})();