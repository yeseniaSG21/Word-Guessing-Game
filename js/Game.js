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
      * @return {Object} Phrase object chosen to be used.
    **/
    getRandomPhrase() {
      const randomPhrase = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomPhrase];
    };


}



/**
The class should include a constructor that initializes the following properties:

    missed: used to track the number of missed guesses by the player.
    The initial value is 0, since no guesses have been made at the start of the game.

    phrases: an array of five Phrase objects to use with the game.
    A phrase should only include letters and spaces— no numbers, punctuation or other special characters.

    activePhrase: This is the Phrase object that’s currently in play.
    The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned
    from a call to the getRandomPhrase() method.

The class should also have these methods:

    startGame(): hides the start screen overlay, calls the getRandomPhrase() method,
    and sets the activePhrase property with the chosen phrase.
    It also adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property.

    handleInteraction(): this method controls most of the game logic.
    It checks to see if the button clicked by the player matches a letter in the phrase, and then directs
    the game based on a correct or incorrect guess. This method should:
        Disable the selected letter’s onscreen keyboard button.
        If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
        If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.


removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a
lostHeart.png image (found in the images folder) and increments the missed property.
If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.

checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.

gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game,
updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either
the win or lose CSS class.
**/
