function Player(currentPlayer, marker) {
  this.name = currentPlayer;
  this.marker = marker;
}

function Gameboard() {
  const player1 = new Player("player1", "X");
  const player2 = new Player("player2", "O");
  let currentPlayer = player1;
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  function drawBoard() {
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.innerHTML = board[i][j];
        div.className = "cell";
        div.addEventListener("click", function () {
          if (board[i][j] === "") {
            div.innerHTML = currentPlayer.marker;
            board[i][j] = currentPlayer.marker;
            if (currentPlayer.name === player1.name) {
              currentPlayer = player2;
            } else {
              currentPlayer = player1;
            }
          } else {
            console.log("Already played");
          }
        });
      }
    }
  }
  drawBoard();
}

Gameboard();
