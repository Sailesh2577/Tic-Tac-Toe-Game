/*
with the main.js file right here so this main.js is going to be the main
controller which is going to combine both the view and also the model for the tic-tac-toe
game so we're going to have a class which is going to represent the view and the display of the game
board and everything else itself and also another class and 
this second class is going to be the one which is going to contain all of the game logic so it's going to be the
model so we're going to begin with the class containing the logic of course this one being the model 
*/

import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions
gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
};

gameView.update(game);