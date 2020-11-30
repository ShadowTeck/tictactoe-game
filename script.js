let pos = 0;
let grid = 10;
for(i = 0; i < grid; i++){
    let posArea = document.getElementById(`item${i}`);
}

let playerOneChoice = prompt(`PLAYER 1: Click "Ok" to be X's or "Cancle" to be O's`);
let playerTwoChoice = prompt(`PLAYER 2: Click "Ok" to be X's or "Cancle" to be O's`);

let playerOne;
let playerTwo;

if (playerOneChoice != null) {
    playerOne = 'X';
    console.log(playerOne);
    console.log(`welcome player one, you are the ${playerOne}'s`);
    document.getElementById("p1").textContent = `Player One: ${playerOne}`
} else {
    playerOne = 'O';
    console.log(playerOne);
    console.log(`welcome player one, you are the ${playerOne}'s`);
    document.getElementById("p1").textContent = `Player One: ${playerOne}`
}

if (playerTwoChoice != null) {
    playerTwo = 'X';
    console.log(playerTwo);
    console.log(`welcome player two, you are the ${playerTwo}'s`);
    document.getElementById("p2").textContent = `Player Two: ${playerTwo}`
} else {
    playerTwo = 'O';
    console.log(playerTwo);
    console.log(`welcome player two, you are the ${playerTwo}'s`);
    document.getElementById("p2").textContent = `Player Two: ${playerTwo}`
}

if (playerOneChoice == playerTwoChoice) {
    alert(`Oops! You can be on the same team! Try Again.`)
    let playerOneChoice = prompt(`PLAYER 1: Click "Ok" to be X's or "Cancle" to be O's`);
    let playerTwoChoice = prompt(`PLAYER 2: Click "Ok" to be X's or "Cancle" to be O's`);
    
    if (playerOneChoice != null) {
        playerOne = 'X';
        console.log(playerOne);
        console.log(`welcome player one, you are the ${playerOne}'s`);
        document.getElementById("p1").textContent = `Player One: ${playerOne}`
    } else {
        playerOne = 'O';
        console.log(playerOne);
        console.log(`welcome player one, you are the ${playerOne}'s`);
        document.getElementById("p1").textContent = `Player One: ${playerOne}`
    }
    
    if (playerTwoChoice != null) {
        playerTwo = 'X';
        console.log(playerTwo);
        console.log(`welcome player two, you are the ${playerTwo}'s`);
        document.getElementById("p2").textContent = `Player Two: ${playerTwo}`
    } else {
        playerTwo = 'O';
        console.log(playerTwo);
        console.log(`welcome player two, you are the ${playerTwo}'s`);
        document.getElementById("p2").textContent = `Player Two: ${playerTwo}`
    }
}
//Player Turns
let playerOneTurn;
let playerTwoTurn;
//Lets player one go first
playerOneTurn = true;

pos = 0;
console.log(pos)
let posArrOne = [];
let posArrTwo = [];
let winArr = [3,2,1];

function checkWinner(){
    if(posArrOne == winArr){
        youWin(`Player 1`);
    } else if(posArrTwo == winArr){
        youWin(`Player 2`);
    }
}

function createTurn(pos){
        if(playerOneTurn == true){
            console.log(`Player One Turn`);
            if(playerOne == "X"){
                createX(pos);
                posArrOne.unshift(pos);
                console.log(pos);
                console.log(posArrOne);
                playerOneTurn = false;
                playerTwoTurn = true;
            } else if (playerOne == "O"){
                if(posArrOne == winArr){
                    youWin();
                }
                createO(pos);
                posArrOne.unshift(pos)
                console.log(pos);
                playerOneTurn = false;
                playerTwoTurn = true;
            }
        } else if(playerTwoTurn == true){
            console.log(`Player Two Turn`);
            if(playerTwo == "X"){
                createX(pos);
                posArrTwo.unshift(pos)
                console.log(pos);
                playerOneTurn = true;
                playerTwoTurn = false;
            } else if (playerTwo == "O"){
                createO(pos);
                posArrTwo.unshift(pos)
                console.log(pos);
                playerOneTurn = true;
                playerTwoTurn = false;
            }
        } else {
            alert(`It's not your turn!`)
        }
        console.log(`Player One: ${posArrOne}`)
        console.log(`Player Two: ${posArrTwo}`)
}

function youWin(player){
    // let posArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // let posWinConOne = [1, 2, 3];
    // let posWinConTwo = [4, 5, 6];
    // let posWinConThree = [7, 8, 9];
    // let posWinConFour = [1, 4, 7];
    // let posWinConFive = [2, 5, 8];
    // let posWinConSix = [3, 6, 9];
    // let posWinConSeven = [1, 5, 9];
    // let posWinConEight = [3, 5, 7];
    console.log(`you win! ${player}`)
}




// function playerOneTurn(){
    
// }

// function playerTwoTurn(){
    
// }

function createO(pos){
    document.getElementById(`item${pos}`).classList.add('o');
}

function createX(pos){
    document.getElementById(`item${pos}`).classList.add('x');
}