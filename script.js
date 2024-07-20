document.addEventListener("DOMContentLoaded", () => {
    
    const cells = document.querySelectorAll(".cell");

    const message = document.getElementById("message");

    const restartButton = document.getElementById("restart-button");

    let currentPlayer = "X"; //initializing current player or choosing first player
    let gameBoard = ["", "", "", "", "", "", "", "", ""]; //initializing gameboard
    let isActive = true; //setting game activity status

    const winConditions = [
        [0, 1, 2], //top row
        [3, 4, 5], //middle row
        [6, 7, 8], //bottom row
        [0, 4, 8], //diagonal from 0 index
        [2, 4, 6], //diagonal from 2 index
        [0, 3, 6], //first column
        [1, 4, 7], //second column
        [2, 5, 8], //third column
    ];

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = cell.id;//get cell id
            
            if (gameBoard[index] !== "" || !isActive) return; 

            gameBoard[index] = currentPlayer; //update gameboard array
            cell.innerText = currentPlayer; //update UI

            checkResult();

            currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        });
    });

    restartButton.addEventListener("click", restartGame);

    //function to check result
    function checkResult() {
        let gameWon = false;

        for(let i = 0; i < winConditions.length; i++) {
            const [a, b, c] = winConditions[i]; //taking win conditions and storing

            if(gameBoard[a] === gameBoard[b] === gameBoard[c]){
                //win
                gameWon = true;
                break;
            }
        }

        if(gameWon) {//if game won is true
            message.innerText = `Player $(currentPlayer)  Wins!`;
            isActive = false;
            return;
        }

        if(!gameBoard.includes("")) {//if there is no empty strings left
            message.innerText = "Game Draw!";
            isActive = false;
            return;
        } 
    }

    //to restart the game
    function restartGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];//reseting the array
        isActive = true;
        currentPlayer = "X";

        cells.forEach(cell => (cell.innerText = ""));//clearing the gameBoard UI
        message.innerText = "";
    }
})