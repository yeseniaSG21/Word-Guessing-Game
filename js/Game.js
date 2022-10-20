/**
  * @missed - used to track the number of missed guesses by the player, begins with 0 ata start of game.
  * @phrase - an array of five Phrase objects to use with the game.
  * @activePhrase - is the Phrase object that’s currently in play. initial value is null.
**/

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

    /**
      * Selects random phrase from phrases property.
    **/
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };

    /**
      * Begins game by selecting a random phrase and displaying it to user.
      * Hides the start screen overlay and calles the getRandomPhrase() method.
      * Sets the activePhrase property with the chosen phrase and calls the addPhraseToDisplay() method.
    **/
    startGame() {
        const div = document.getElementById('overlay');
        div.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
      *** Check to see if the button clicked matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
      *** Disable the selected letter’s onscreen keyboard button.
      *** If wrong letter selected, 'wrong' CSS class will be added to selected letter on keyboard; removeLife() method called.
      *** If guessed letter is included, 'right' CSS class will be added to that letter on keyboard; showMatchedLetter() method called and checkForWin().
      *** If the player has won the game, also call the gameOver() method.
    **/
    handleInteraction() {
          
    }
}

/**
removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a
lostHeart.png image (found in the images folder) and increments the missed property.
If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.

checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.

gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game,
updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either
the win or lose CSS class.
**/
