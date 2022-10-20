/**
  * @phrase - actual phrase the Phrase object is representing, converted to all lower case.
**/

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }

    /**
      * When the game starts, a letter placeholders is added.
      * Each letter is presented by an empty box, one li element for each letter.
      * When the player correctly guesses a letter, the empty box is replaced with the matched letter.
    **/
    addPhraseToDisplay() {
        const phraseletters = this.phrase.split('');

        phraseletters.forEach( character => {
            const ul = document.querySelector('ul');
            const li =  document.createElement('li');
            li.textContent = character;

            if (character !== " ") {
              li.classList.add('letter');
              li.classList.add('hide');
              li.classList.add(character);
            } else {
              li.classList.add('space');
            }
            ul.appendChild(li);
        });
    };

    /**
      * Checks if passed letter is in phrase
      * @param (string) letter - Letter to check
    */
    checkLetter(letter) {

    };

    /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {

    };
}


/**
showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection.
To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches
the selected letter and replace each selected element's hide CSS class with the show CSS class.
**/
