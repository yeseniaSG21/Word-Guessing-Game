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

    };
}

<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>


/**
checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.


showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection.
To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches
the selected letter and replace each selected element's hide CSS class with the show CSS class.
**/
