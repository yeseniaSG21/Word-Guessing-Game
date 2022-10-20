/*****
  * @missed - used to track the number of missed guesses by the player, begins with 0 ata start of game.
  * @phrase - an array of five Phrase objects to use with the game.
  * @activePhrase - is the Phrase object that’s currently in play. initial value is null.
*****/

class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [
          new Phrase('Dream big and dare to fail'),
          new Phrase('Believe in yourself and you will be unstoppable'),
          new Phrase('Make each day your masterpiece'),
          new Phrase('It is never too late to be what you might have been'),
          new Phrase('I am stress because I am blessed'),
      ];
      this.activePhrase = null;
    }

/*****
  * Selects random phrase from phrases property.
*****/
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };

/****
  * Begins game by selecting a random phrase and displaying it to user.
  * Hides the start screen overlay and calles the getRandomPhrase() method.
  * Sets the activePhrase property with the chosen phrase and calls the addPhraseToDisplay() method.
*****/
    startGame() {
        const div = document.getElementById('overlay');
        div.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

/*****
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
*****/
    handleInteraction(button) {

    }

/*****
  * Checks to see if the player has revealed all of the letters in the active phrase.
  * @return {boolean} True if game has been won, false if game wasn't won
*****/
    checkForWin() {
        const hideLetter = document.querySelector('.hide');

        if (hideLetter.length === 0) {
          return true;
        } else {
          return false;
        }
    };

/*****
  * Increases the value of the missed property.
  * Removes a life from the scoreboard.
  * Checks if player has remaining lives and ends game if player is out.
*****/
    removeLife() {
      const playerTries = document.getElementsByClassName('tries');

      for ( let i = 0; i < playerTries.length; i++ ) {
          if ( this.missed < 4 ) {

            this.missed += 1;
          }
          if ( this.missed === 5 ) {
            this.gameOver();
          }
      }
    };

/*****
  * Displays "game over" message
  * @param {boolean} gameWon - Whether or not the user won the game
*****/
    gameOver(gameWon) {

    };
}
