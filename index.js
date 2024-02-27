
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")


var playerScore = document.getElementById("score_a")
var computerScore = document.getElementById("score_b")

var player = 0
var computer = 0
var ingame = 0
var choice
var computerChoice


//Function to generate a random number until the computer choice be different of player choice - number goes of 1 until 3
function randomChoice() {
    var randomChoice = Math.floor(Math.random() * 3) + 1 
    computerChoice = randomChoice 
}

function pickOption(o) {
    if (choice == undefined) {
        choice = o
        
        if (o == 1) {
            rock.classList = "player"
        } else if (o == 2) {
            paper.classList = "player"
        } else {
            scissors.classList = "player"
        }
        
        if (computerChoice == undefined) {

            randomChoice()
            while (computerChoice == choice) {
                randomChoice()
            }
            
            if (computerChoice == 1) {
                rock.classList = "computer"
            } else if (computerChoice == 2) {
                paper.classList = "computer"
            } else {
                scissors.classList = "computer"
            }
        }
        
        getWin(choice, computerChoice) 
    } else {
        alert("You've already played!") 
    }
    ingame = 0
}

function getWin(p, c) {
    
    if (ingame == 1) {
        
        if (p == 1 && c == 2) {
            computer ++
        } else if (p == 1 && c == 3) {
            player ++
        } else if (p == 2 && c == 1) {
            player ++
        } else if (p == 2 && c == 3) {
            computer ++
        } else if (p == 3 && c == 1) {
            computer ++
        } else if (p == 3 && c == 2) {
            player ++
        }
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}

function newGame() {
    
    if (ingame == 0) {
        ingame = 1
        choice = undefined
        computerChoice = undefined
        
        rock.classList = ""
        paper.classList = ""
        scissors.classList = ""
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}
