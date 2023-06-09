"use strict";

// Welcome Screen
// Choose your character
// Loading screen with fighters looking at each other
// Gameboard with fight sounds with each click.
// Loser's profile picture flies out of the screen.
// continue overlap screen with countdown

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
    const gameContainer = document.querySelector('.game-container');
    const titleScreen = document.querySelector('.titleScreen');
    const chooseBattlefield = document.querySelector('.choose-battlefield');
    const chooseCharacter = document.querySelector('.choose-character');
    const loadingScreen = document.querySelector('.loading-screen');
    const gameScreen = document.querySelector('.game-screen');
    const gameBoard = document.querySelector('.gameBoard');
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
    //turning off specific screens
    displayControl.turnOnDisplay(elements.titleScreen);
    displayControl.turnOffDisplay(elements.chooseCharacter);
    displayControl.turnOffDisplay(elements.chooseBattlefield);
    displayControl.turnOffDisplay(elements.loadingScreen);
    displayControl.turnOffDisplay(elements.gameScreen);
    
    const charSelMusic = () => {
        setTimeout(() => {
            elements.titleSound.volume = 0.6;
            elements.titleSound.play();
        }, 1000);
        setTimeout(() => {
            elements.selectCharacter.volume = 0.5;
            elements.selectCharacter.play();
        }, 1150);
    };

    //when the player clicks the start button, turn off everything,
    //except characterScreen. 
    elements.startBtn.addEventListener('click', () => {
        elements.mainMusic.setAttribute('src', `sound/game-start.wav`); 
        elements.mainMusic.volume = 1;
        elements.mainMusic.play();
        displayControl.turnOffDisplay(elements.titleScreen);
        displayControl.turnOnDisplay(elements.chooseCharacter);
        charSelMusic();
    })
})();

const characterScreen = (() => {
    let player1Name;
    let player2Name;
    let player1Pic;
    let player2Pic;
    // start game button not present until characters are chosen.
    const startButton = document.querySelector('.button');

    startButton.disabled = true;

    const capFirstLet = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // keeping tabs on which player is active.
    let activePlayer = 0;

    // player one turn to choose
    elements.playerOneName.addEventListener('click', () => { 
        console.log('Player One is active');
        activePlayer = 1;
        console.log(activePlayer)
        elements.body.style.cursor = `url('images/cursor/player1.png'), auto`;
    })

    // decide which character profile is changed
    elements.characters.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.id;
            charCall(name);
            if (activePlayer === 1){
                elements.playerOnePic.setAttribute('src', `images/full-size-character/${name}.png`);
                elements.playerOneName.value = capFirstLet(name);
                console.log(elements.playerOneName.value);
                player1Pic = elements.playerOnePic.src;
                player1Name = elements.playerOneName.value;     
            } else if (activePlayer === 2){
                elements.playerTwoPic.setAttribute('src', `images/full-size-character/${name}.png`);
                elements.playerTwoName.value = capFirstLet(name);
                console.log(elements.playerTwoName.value);
                player2Pic = elements.playerTwoPic.src;
                player2Name = elements.playerTwoName.value;
            }
        })
    })

    // player two to choose.
    elements.playerTwoName.addEventListener('click', () => {
        console.log('Player Two is active');
        activePlayer = 2;
        console.log(activePlayer)
        elements.body.style.cursor = `url('images/cursor/player2.png'), auto`;       
    })

    // change between Bot and human 2nd player
    elements.p2Button.addEventListener('click', () => {
        let t = elements.p2Button;
        if(t.innerHTML == 'BOT'){
            t.innerHTML = "Player 2"
        } else{
            t.innerHTML = 'BOT'
            text.innerHTML = 'BOT';

        }
    })

    // audio control for character announcement. 
    const charCall = (name) => {
        elements.characterCall.setAttribute('src', `sound/${name}.wav`);
        elements.characterCall.volume = 0.9;
        elements.characterCall.play();
    }

    const timeOut = () => {
        const loadScreenWav = document.querySelector('#loading');
        const dots = document.querySelector('.loader');

        setTimeout(() => {
            loadScreenWav.volume = 0.5;
            loadScreenWav.play();
        }, 2400);

        setTimeout(() => {
            dots.style.display = 'none'
        }, 2900);

    }

    const fading = () => {
        if(elements.titleSound.volume > 0){
            elements.titleSound.volume -= 0.06;
            setTimeout(fading, 200);
        } else {
            elements.titleSound.pause();
        }
    }

    const delayGame = () => {
        setTimeout(() => {
            status('on');
            // console.log('The game is now live!');
        }, 3000);
    }

    const openGame = () => {
        setTimeout(() => {
            const countToStart = document.querySelector('.count-to-start');
            displayControl.turnOffDisplay(elements.loadingScreen);
            displayControl.turnOnDisplay(elements.gameScreen);
            countToStart.play();
            delayGame();
            elements.body.style.cursor = `url('images/cursor/player1.png'), auto`;       

        }, 7000);
    }

    const playerOne = document.querySelector('.imgP1');
    const playerTwo = document.querySelector('.imgP2');

    const playerOneCharName = document.querySelector('.nameP1');
    const playerTwoCharName = document.querySelector('.nameP2')

    const addMessage = () => {
        let count = 0;

        const newDiv = document.createElement('div');
        const prompt = document.createTextNode("Please select both characters");
        const newEl = newDiv.appendChild(prompt);
        console.log(prompt);
        const readyToFight = document.querySelector('.readyToFight');
        readyToFight.appendChild(newEl);
    }

    startButton.addEventListener('click', () => {

        if(elements.playerOneName.value == 'Player 1' || elements.playerTwoName.value == 'BOT'){
            if(addMessage.count == 1){
                addMessage.newEl.style.color = 'red';
            } else {
                addMessage();
                addMessage.count = 1;
            }
        } else{
            startButton.disabled = false;
            displayControl.turnOffDisplay(elements.chooseCharacter);
            displayControl.turnOnDisplay(elements.loadingScreen);
            // elements.titleSound.pause();
            timeOut();
            fading();
            playerOne.setAttribute('src', `${player1Pic}`);
            playerTwo.setAttribute('src', `${player2Pic}`);
    
            playerOneCharName.innerHTML = player1Name;
            playerTwoCharName.innerHTML = player2Name;

            openGame();  
        }
    })

    let gameStatus = 'off';
    const status = (stat) => {
        if(stat == 'on'){
            console.log('The game is on!');
            gameStatus = 'on';
        } else if(stat == 'off') {
            console.log('The game is off!');
            gameStatus = 'off';
        } 
    };


    return {
        player1Name,
        player2Name,
        player1Pic,
        player2Pic
    }

})();

const loadingScreen = (() => {

})();

const gameController = (() => {

})();