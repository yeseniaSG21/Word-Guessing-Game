/**
  * @phrase - actual phrase the Phrase object is representing, converted to all lower case.
**/

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }

/*****
  * When the game starts, a letter placeholders is added.
  * Each letter is presented by an empty box, one li element for each letter.
  * When the player correctly guesses a letter, the empty box is replaced with the matched letter.
*****/
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

/*****
  * Checks if passed letter matches a letter in the phrase.
  * @param (string) letter - Letter to check
  * @return - booleen value
*****/
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

/*****
  * Displays passed letter on screen after a match is found.
  * @param (string) letter - Letter to display
*****/
    showMatchedLetter(letter) {
        const matchLetter = document.querySelectorAll('.letter');

        for ( let i = 0; i < matchLetter.length; i++ ) {
           if ( matchLetter[i].classList.contains(letter) ) {
             matchLetter[i].classList.remove('hide');
             matchLetter[i].classList.add('show')
           }
        }
    };
}
