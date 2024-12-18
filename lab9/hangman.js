const hangmanImg = document.querySelector(".hangman-box");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".incorrect b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const wordList = [
    {
        word: "nfbdhbf",
        hint: "hsbchbdvhcbdvhu"
    }
]


let currentWord, correctLetter = [], wrongGuessCount = 0;
const maxGuesses =5;


function getRandomWord(){
    const {word, hint} = wordList[Math.floor(Math.random()*wordList.length)];
     currentWord = word;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letters"></li>`).join("");

}
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the:`: `the correct word was:` ;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats !' : 'Game Over !'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    })
}
const initGame = ( button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)){
        
        [...currentWord].forEach((letters, index) => {
            if(letters === clickedLetter) {
                correctLetter.push();
                wordDisplay.querySelectorAll("li")[index].innerText = letters;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");

            }
        })

    }else{
        wrongGuessCount++;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;
    if(wrongGuessCount === maxGuesses) return gameOver (false);
    if(correctLetter.length === currentWord.length) return gameOver (true);
} 

for (let i = 97; i <= 122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));


}
getRandomWord();
