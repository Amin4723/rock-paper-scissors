const options = ["🪨","📃","✂️"]
const computerChoice = document.getElementById("computer-choice")
let playerChoice = document.getElementById("player-choice")
let computerScore = document.getElementById("computer-score")
let playerScore = document.getElementById("player-score")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let header = document.getElementById("header")
let headerTwo = document.getElementById("header-two")
let playerNumber = 1
let computerNumber = 1


rock.addEventListener("click", function() {
   
   let choice = options [Math.floor (Math.random() * options.length)]
   computerChoice.innerText = choice
   if ( choice === "📃"){
      headerTwo.textContent="You lose!", computerScore.innerText = "Computer: " + computerNumber++ 
   } else if ( choice === "🪨"){
      headerTwo.textContent="It's a Tie!"
   }
   else {headerTwo.textContent="You Win!"}
   playerChoice.textContent = "🪨", playerScore.innerText = "Player: " + playerNumber++
   winner()

})



paper.addEventListener("click", function(){
   let choice = options [Math.floor (Math.random() * options.length)]
   computerChoice.innerText = choice
   if ( choice === "📃"){
      headerTwotextContent="It's a Tie"
   } else if ( choice=== "🪨"){
      headerTwo.textContent="You Win!", playerScore.innerText = "Player: " + playerNumber++
   }
   else {headerTwo.textContent="You Lose", computerScore.innerText = "Computer: " + computerNumber++ 
}

   playerChoice.textContent = "📃"
   winner()
})


scissors.addEventListener("click", function(){
   let choice = options [Math.floor (Math.random() * options.length)]
   computerChoice.innerText = choice
   if ( choice === "📃"){
      headerTwo.textContent="You Win!", playerScore.innerText = "Player: " + playerNumber++
   } else if ( choice === "🪨"){
      headerTwo.textContent="You Lose!", computerScore.innerText = "Computer: " + computerNumber++ 
   }
   else {headerTwo.textContent="It's a Tie!"}
   playerChoice.textContent = "✂️"
   winner()
   
})


function winner() {
   if (playerScore.innerText === "Player: " + 5 && computerScore.innerText === "Computer: " + 5) {
      header.textContent = ("Looks like we don't have a winner")
   } else if (playerScore.innerText === "Player: " + 5 && (computerScore.innerText === "Computer: " && playerNumber === 4||3||2||1)){
      header.textContent = ("Winner Winner Chicken Dinner!")
   }else if (computerScore.innerText === "Computer: " + 5 && (playerScore.innerText === "Player: " && playerNumber === 4||3||2||1)){
      header.textContent = ("You have been Defeated!")
}

}




