"use strict";

// Welcome Screen
// Choose your character
// Loading screen with fighters looking at each other
// Gameboard with fight sounds with each click.
// Loser's profile picture flies out of the screen.
// continue overlap screen with countdown

const gameBoard = (() => {
    let gameboard = [
        ['','',''],
        ['','',''],
        ['','',''],
    ] 

    // Leaving the gameboard blank squares blank so I can assign "X" and "O" with each click/player.
    return {gameboard};
})();


console.log(gameBoard);

const Player = ((name, character) => {
    //each player has a name and the character that they chose.
    const getName = () => name;
    const getCharacter = () => character;
    const die = () => {
        //omae wa mou shindeiru
    }
})();
