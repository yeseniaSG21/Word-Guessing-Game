
let game;
let buttonElement = document.getElementById('btn__reset');

/**
  * An event listener for the "Start Game" button which creates a new Game object and starts the game by
    calling the startGame() method.
**/
buttonElement.addEventListener('click', event => {
    if (game) {
      game.resetGame();
    } else {
      game = new Game();
    }
    game.startGame();
});


/**
  Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the
    handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add
    an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard
    buttons should not result in the handleInteraction() method being called.
**/
