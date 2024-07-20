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

            currentPlayer = currentPlayer === "X" ? "0" : "X"; 
        });
    });

    restartButton.addEventListener("click", restartGame);
})