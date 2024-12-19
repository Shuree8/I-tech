
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".incorrect b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgain = document.querySelector(".play-again");
const wordList = [
    {
        word: "CSS",
        hint: "Cascading Style Sheet"
    },
    {
        word: "undefined",
        hint: "Утгагүй хувьсагчийг тодорхойлоход хэрэглэгддэг."
    },
    {
        word: "function",
        hint: "Javascript-д функц зарлах түлхүүр үг"
    },
    {
        word: "null",
        hint: "Утгагүй гэсэн санааг илэрхийлнэ"
    },
    {
        word: "return",
        hint: "JavaScript-д хэрхэн функц доторх хувьсагчийг буцаах вэ?"
    },
]


let currentWord, correctLetter = [], wrongGuessCount ;
const maxGuesses = 5;

const resetGame = () => {
    correctLetter = [];
    wrongGuessCount = 0
    guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letters"></li>`).join("");
    gameModal.classList.remove("show");
    
}

function getRandomWord(){
    const {word, hint} = wordList[Math.floor(Math.random()*wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();

}
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Таны олсон үг:`: `Зөв байсан үг:` ;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Баяр хүргэе !' : 'Хожигдолт !'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    })
}
const initGame = ( button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)){
        
        [...currentWord].forEach((letters, index) => {
            if(letters === clickedLetter) {
                correctLetter.push(letters);
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
playAgain.addEventListener("click", getRandomWord );