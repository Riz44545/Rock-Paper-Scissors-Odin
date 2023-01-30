let choice = ""
const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');

document.querySelector('.rock').addEventListener('click', ()=> {
    choice = 'Rock';
    game();
})

document.querySelector('.paper').addEventListener('click', ()=> {
    choice = 'Paper';
    game();
})

document.querySelector('.scissors').addEventListener('click', ()=> {
    choice = 'Scissors';
    game();
})

function game() {
    let result = ''

    let x = Math.floor((Math.random() * 3) + 1);

    if(x == 1) {
        result = 'Rock';
    }
    else if(x == 2) {
        result = 'Paper';
    }
    else {
        result = 'Scissors';
    }


    if(result == choice) {
        document.querySelector('.result').textContent = "Tie";
    }
    else if (result == "Rock" && choice == "Scissors") {
        document.querySelector('.result').textContent = "Computer Won";
        computerScore.textContent = String(Number(computerScore.textContent) + 1);
    }
    else if(result == "Scissors" && choice == "Paper") {
        document.querySelector('.result').textContent = "Computer Won"
        computerScore.textContent = String(Number(computerScore.textContent) + 1);
    }
    else if(result == "Paper" && choice == "Rock") {
        document.querySelector('.result').textContent = "Computer Won";
        computerScore.textContent = String(Number(computerScore.textContent) + 1);
    }
    else if (result == "Scissors" && choice == "Rock") {
        document.querySelector('.result').textContent = "You Won";
        userScore.textContent = String(Number(userScore.textContent) + 1);
    }
    else if(result == "Paper" && choice == "Scissors") {
        document.querySelector('.result').textContent = "You Won";
        userScore.textContent = String(Number(userScore.textContent) + 1);
    }
    else if(result == "Rock" && choice == "Paper") {
        document.querySelector('.result').textContent = "You Won";
        userScore.textContent = String(Number(userScore.textContent) + 1);
    }

}

document.querySelector('.reset').addEventListener('click', ()=>{
    document.querySelector('.result').textContent = 'Try and beat the CPU!';
    userScore.textContent = '0';
    computerScore.textContent = '0';
})