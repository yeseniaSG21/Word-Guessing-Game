/*****
  * @missed - used to track the number of missed guesses by the player, begins with 0 ata start of game.
  * @phrase - an array of five Phrase objects to use with the game.
  * @activePhrase - is the Phrase object that’s currently in play. initial value is null.
*****/

class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [
          new Phrase('Carpe Diem'),
          new Phrase('Dream big and dare to fail'),
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
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

/*****
  * Handles onscreen keyboard button clicks
  * Added a timeout to allow player to view phrase before the game resets
  * @param (HTMLButtonElement) button - The clicked button element
*****/
    handleInteraction(buttonElement) {
        buttonElement.disabled = true;

        if ( this.activePhrase.checkLetter(buttonElement.textContent) ) {
          buttonElement.className = 'chosen';
          this.activePhrase.showMatchedLetter(buttonElement.textContent);
          if ( this.checkForWin() ) {
            const winningPhrase = document.getElementById('phrase');

            winningPhrase.className = 'winning_letter';
            setTimeout(() => {this.gameOver(true)}, 2000);
          }
        } else {
          buttonElement.className = 'wrong';
          this.removeLife();
        }
    };

/*****
  * Checks to see if the player has revealed all of the letters in the active phrase.
  * @return {boolean} True if game has been won, false if game wasn't won
*****/
    checkForWin() {
        const hiddenLetter = document.querySelectorAll('.hide');

        if (hiddenLetter.length > 0) {
            return false;
        } else {
            return true;
        }
    };

/*****
  * Increases the value of the missed property.
  * Removes a life from the scoreboard.
  * Checks if player has remaining lives and ends game if player is out.
*****/
    removeLife() {
      this.missed++;
      const playerTries = document.querySelectorAll('.tries');

      for ( let i = 0; i < playerTries.length; i++ ) {
          const heart = playerTries[i].firstChild;
          if ( heart.src.includes('images/liveHeart.png') ) {
            return heart.src = 'images/lostHeart.png';
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
        const startScreen = document.getElementById('overlay');
        const gameMessage = document.getElementById('game-over-message');
        startScreen.style.display = 'flex';

        if (gameWon) {
          startScreen.className = 'win';
          gameMessage.innerHTML = `You guessed correctly! Would you like to play again?`;
        } else {
          startScreen.className = 'lose';
          gameMessage.innerHTML = `No more lives! Sorry, you lost!`;
        }
    };

/*****
  * After a game is completed, gameboard will reset by clicking the "Start Game" button and load a new game.
  * Enable all of the onscreen keyboard buttons and update each CSS style as it is chosen.
  * Reset all player's lives in the scoreboard at the bottom of the gameboard to display the `liveHeart.png` image.
*****/
    resetGame() {
        const ul = document.querySelector('ul');
        const winningPhrase = document.getElementById('phrase');
        ul.innerHTML = '';
        this.missed = 0;
        winningPhrase.classList.remove('winning_letter');

        const btn_keys = document.querySelectorAll('button');
        btn_keys.forEach( key => {
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.classList.add('key');
            key.disabled = false;
        });

        const playerTries = document.getElementsByClassName('tries');
        for ( let i = 0; i < playerTries.length; i++ ) {
          const heartReset = playerTries[i].firstChild;
          heartReset.src = 'images/liveHeart.png';
        }
    }
}
