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
// let winArrReverse = [1,2,3];
let winArrTwo = [4,5,6];
// let winArrTwoReverse = [6,5,4];
let winArrThree = [7,8,9];
let winArrThreeReversed = winArrThree.reverse();
let winArrFour = [1,4,7];
// let winArrFourReversed = [7,4,1];
let winArrFive = [2,5,8];
// let winArrFiveReversed = [8,5,2];
let winArrSix = [3,6,9];
// let winArrSixReversed = [9,6,3];
let winArrSeven = [1,5,9];
// let winArrSevenReversed = [9,5,1];
let winArrEight = [3,5,7];
// let winArrEightReversed = [7,5,3];

let winner = false;

function checkWinnerOne(){
    //Check if player one was Won!
    if(winArr[0] = posArrOne[0] && winArr[1] == posArrOne[1] && winArr[2] == posArrOne[2]){
        youWin(`Player 1`);
        winner = true;
    } else if (winArrTwo[0] = posArrOne[0] && winArrTwo[1] == posArrOne[1] && winArrTwo[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else if (winArrThree[0] = posArrOne[0] && winArrThree[1] == posArrOne[1] && winArrThree[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else if (winArrFour[0] = posArrOne[0] && winArrFour[1] == posArrOne[1] && winArrFour[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else if (winArrFive[0] = posArrOne[0] && winArrFive[1] == posArrOne[1] && winArrFive[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else if (winArrSix[0] = posArrOne[0] && winArrSix[1] == posArrOne[1] && winArrSix[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else if (winArrSeven[0] = posArrOne[0] && winArrSeven[1] == posArrOne[1] && winArrSeven[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else if (winArrEight[0] = posArrOne[0] && winArrEight[1] == posArrOne[1] && winArrEight[2] == posArrOne[2]){
        youWin(`Player 1`)
        winner = true;
    } else {
        if(winArrReverse[0] = posArrOne[0] && winArrReverse[1] == posArrOne[1] && winArrReverse[2] == posArrOne[2]){
            youWin(`Player 1`);
            winner = true;
        } else if (winArrTwoReverse[0] = posArrOne[0] && winArrTwoReverse[1] == posArrOne[1] && winArrTwoReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else if(winArrThreeReverse[0] = posArrOne[0] && winArrThreeReverse[1] == posArrOne[1] && winArrThreeReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else if (winArrFourReverse[0] = posArrOne[0] && winArrFourReverse[1] == posArrOne[1] && winArrFourReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else if (winArrFiveReverse[0] = posArrOne[0] && winArrFiveReverse[1] == posArrOne[1] && winArrFiveReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else if (winArrSixReverse[0] = posArrOne[0] && winArrSixReverse[1] == posArrOne[1] && winArrSixReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else if (winArrSevenReverse[0] = posArrOne[0] && winArrSevenReverse[1] == posArrOne[1] && winArrSevenReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else if (winArrEightReverse[0] = posArrOne[0] && winArrEightReverse[1] == posArrOne[1] && winArrEightReverse[2] == posArrOne[2]){
            youWin(`Player 1`)
            winner = true;
        } else {
            winner = false;
        }
    }
}

function checkWinnerTwo(){
    //Check if player two was Won!
    if(winArr[0] = posArrTwo[0] && winArr[1] == posArrTwo[1] && winArr[2] == posArrTwo[2]){
        youWin(`Player 2`);
    } else if (winArrTwo[0] = posArrTwo[0] && winArrTwo[1] == posArrTwo[1] && winArrTwo[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else if (winArrThree[0] = posArrTwo[0] && winArrThree[1] == posArrTwo[1] && winArrThree[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else if (winArrFour[0] = posArrTwo[0] && winArrFour[1] == posArrTwo[1] && winArrFour[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else if (winArrFive[0] = posArrTwo[0] && winArrFive[1] == posArrTwo[1] && winArrFive[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else if (winArrSix[0] = posArrTwo[0] && winArrSix[1] == posArrTwo[1] && winArrSix[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else if (winArrSeven[0] = posArrTwo[0] && winArrSeven[1] == posArrTwo[1] && winArrSeven[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else if (winArrEight[0] = posArrTwo[0] && winArrEight[1] == posArrTwo[1] && winArrEight[2] == posArrTwo[2]){
        youWin(`Player 2`)
    } else {
        if(winArrReverse[0] = posArrTwo[0] && winArrReverse[1] == posArrTwo[1] && winArrReverse[2] == posArrTwo[2]){
            youWin(`Player 2`);
        } else if (winArrTwoReverse[0] = posArrTwo[0] && winArrTwoReverse[1] == posArrTwo[1] && winArrTwoReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        } else if(winArrThreeReverse[0] = posArrTwo[0] && winArrThreeReverse[1] == posArrTwo[1] && winArrThreeReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        } else if (winArrFourReverse[0] = posArrTwo[0] && winArrFourReverse[1] == posArrTwo[1] && winArrFourReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        } else if (winArrFiveReverse[0] = posArrTwo[0] && winArrFiveReverse[1] == posArrTwo[1] && winArrFiveReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        } else if (winArrSixReverse[0] = posArrTwo[0] && winArrSixReverse[1] == posArrTwo[1] && winArrSixReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        } else if (winArrSevenReverse[0] = posArrTwo[0] && winArrSevenReverse[1] == posArrTwo[1] && winArrSevenReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        } else if (winArrEightReverse[0] = posArrTwo[0] && winArrEightReverse[1] == posArrTwo[1] && winArrEightReverse[2] == posArrTwo[2]){
            youWin(`Player 2`)
        }
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
                if(playerTwoTurn == true){
                    document.getElementById(`playerTurnText`).textContent = ('Its Player Two Turn');
                } else {
                    document.getElementById(`playerTurnText`).textContent = ('Its Player One Turn');
                }
                if(winner = true){
                    checkWinnerOne();
                }
            } else if (playerOne == "O"){
                createO(pos);
                posArrOne.unshift(pos);
                console.log(pos);
                console.log(posArrOne);
                playerOneTurn = false;
                playerTwoTurn = true;
                if(playerTwoTurn == true){
                    document.getElementById(`playerTurnText`).textContent = ('Its Player Two Turn');
                } else {
                    document.getElementById(`playerTurnText`).textContent = ('Its Player One Turn');
                }
                if(winner = true){
                    checkWinnerOne();
                }
            }
        } else if(playerTwoTurn == true){
            console.log(`Player Two Turn`);
            if(playerTwo == "X"){
                createX(pos);
                posArrTwo.unshift(pos);
                console.log(pos);
                console.log(posArrTwo);
                playerOneTurn = true;
                playerTwoTurn = false;
                if(playerTwoTurn == true){
                    document.getElementById(`playerTurnText`).textContent = ('Its Player Two Turn');
                } else {
                    document.getElementById(`playerTurnText`).textContent = ('Its Player One Turn');
                }
                if(winner = true){
                    checkWinnerTwo();
                }
            } else if (playerTwo == "O"){
                createO(pos);
                posArrTwo.unshift(pos);
                console.log(pos);
                console.log(posArrTwo);
                playerOneTurn = true;
                playerTwoTurn = false;
                if(playerTwoTurn == true){
                    document.getElementById(`playerTurnText`).textContent = ('Its Player Two Turn');
                } else {
                    document.getElementById(`playerTurnText`).textContent = ('Its Player One Turn');
                }
                if(winner = true){
                    checkWinnerTwo();
                }
            }
        } else {
            alert(`It's not your turn!`)
        }
        console.log(`Player One: ${posArrOne}`)
        console.log(`Player Two: ${posArrTwo}`)
        //checkWinnerOne();
        //checkWinnerTwo();
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
    alert(`you win! ${player}`)
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