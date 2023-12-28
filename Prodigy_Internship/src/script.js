const board = document.getElementById("ticTacToe");
const result = document.getElementById("result");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleClick(index) {
  if (!gameBoard[index] && !result.textContent) {
    gameBoard[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function renderBoard() {
  for (let i = 0; i < gameBoard.length; i++) {
    const cell = board.children[i];
    cell.textContent = gameBoard[i];
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      result.textContent = `    ${gameBoard[a]} wins!!!`;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    result.textContent = "It's a tie!";
  }
}
