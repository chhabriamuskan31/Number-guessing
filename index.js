const submitGuess = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')
const lastGuesses = document.querySelector('.guesses')
const displaymsg = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelectorAll('.resultParas p')
let randomNo

/*submitGuess.addEventListener('click',()=>
{
    //console.log("yes")
})*/

function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
// number to be checked
randomNo = randomNumber();
let guessCount = 1;
guessField.focus();

console.log(randomNo)
submitGuess.addEventListener('click',()=>{
    console.log(guessField.value)
    const inputValue = guessField.value;
    if(guessCount===1){
        lastGuesses.textContent = 'Your last guesses:'
    }
    //lastGuesses.textContent += ''+ guessField.value;
    lastGuesses.textContent += ' '+ inputValue;
    console.log(randomNo)
    if(randomNo == inputValue){
        displaymsg.textContent = 'CONGRATULATIONS'
        displaymsg.style.backgroundColor = 'green'
        gameover()
        lowOrHi.textContent=''
    }
    
    
    else if(guessCount == 10){
        gameover()
    }
    else{
        if(randomNo > inputValue){
            displaymsg.textContent = 'WRONG'
            displaymsg.style.backgroundColor = 'red'
            lowOrHi.textContent = "too low";
        }
        else{
            displaymsg.textContent = 'WRONG'
            displaymsg.style.backgroundColor = 'red'
            lowOrHi.textContent= "too high";
        }
    }
    guessField.value = '';
    guessField.focus();
    guessCount+=1;

})
function resetGame(){
    console.log(resultParas)
    for (para of resultParas){
        para.textContent=''
        para.style.backgroundColor='white'
        
    }
    
    guessField.disabled = false;
    submitGuess.disabled = false;

    const resetButton = document.querySelector('.reset-button')
    document.body.removeChild(resetButton)

    //regenerate random no.
    randomNo = randomNumber();
    console.log(randomNo)
    guessCount = 1;
    guessField.focus();
}
function gameover(){
    guessField.disabled = true;
    submitGuess.disabled = true;

    const resetButton = document.createElement('button')
    resetButton.textContent = 'Start new game'
    resetButton.classList.add('reset-button');
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}





