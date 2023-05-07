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
  const checkBoard = () => {
    const winningStates = [
      [
        //row1
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        //row2
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        //row3
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        //column1
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        //column2
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        //column3
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        //diagonal1
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        //diagonal2
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];
    for (let winState of winningStates) {
      const [position1, position2, position3] = winState;
      if (
        board[position1[0]][position1[1]] !== "" &&
        board[position1[0]][position1[1]] ===
          board[position2[0]][position2[1]] &&
        board[position1[0]][position1[1]] === board[position3[0]][position3[1]]
      ) {
        alert(`${currentPlayer.name} wins!`);
        return;
      }
    }
    const allSquaresUsed = board.every((row) =>
      row.every((cell) => cell !== "")
    );
    if (allSquaresUsed) {
      alert("Draw");
    }
  };
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
            checkBoard();
            if (currentPlayer.name === player1.name) {
              currentPlayer = player2;
            } else {
              currentPlayer = player1;
            }
            let playerX = document.getElementById("Player");
            playerX.innerHTML = currentPlayer.marker;
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
