
let game;
let buttonElement = document.getElementById('btn__reset');
let keyboardElement = document.getElementById('qwerty');

/*****
  * An event listener for the "Start Game" button which creates a new Game object.
  * Starts the game by calling the startGame() method.
*****/
buttonElement.addEventListener('click', event => {
    if (game) {
      game.resetGame();
    } else {
      game = new Game();
    }
    game.startGame();
});

/*****
  * An event istener for each of the onscreen keyboard buttons.
  * Clicking a button calls the handleInteraction() method on the Game object.
*****/
keyboardElement.addEventListener('click', event => {
    if (event.target.className === 'key') {
      game.handleInteraction(event.target);
      console.log('click');
    }
});
