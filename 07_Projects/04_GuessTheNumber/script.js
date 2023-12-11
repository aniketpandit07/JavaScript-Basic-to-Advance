let randomNum = (parseInt(Math.random()*10 +1));

const submit =document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultPara')


const p =document.createElement('p')

let prevGuess =[]
let numGuess =1

let playGame =true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess){
        if(isNaN(guess)){
            alert('please enter valid number')
        }else if(guess<1){
            alert('please enter number greater than 1')
        }else if(guess >100){
            alert('please enter number less than 100')
        }else{
            prevGuess.push(guess)
            if(numGuess===11){
                displayGuess(guess)
                displayMsg(`game over. Random number was ${randomNum}`)
                endGame()
            }else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMsg(`you guessed it right`)
        endGame()
    }else if(guess<randomNum){
        displayMsg(`number is too low`)
    }else if(guess>randomNum){
        displayMsg(`number is too high`)
    }
}

function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess}    `
    numGuess++;
    remaining.innerHTML =`${11 -numGuess}`
}

function displayMsg(guess){
    lowOrHigh.innerHTML =`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id='newGame'>start new game</h2>`
    playGame =false;
    newGame();
}

function newGame(){
const newGameButton =document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
   randomNum = (parseInt(Math.random()*10 +1))
   prevGuess=[]
   numGuess =1
   guessSlot.innerHTML =''
   remaining.innerHTML=`${11-numGuess}`;
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)

   playGame =true
})
}





