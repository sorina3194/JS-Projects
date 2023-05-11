class Player {
  constructor(currentPlayer, marker) {
    this.name = currentPlayer;
    this.marker = marker;
  }
}
class Gameboard {
  constructor(playerName1, playerName2) {
    this.player1 = new Player(playerName1, "X");
    this.player2 = new Player(playerName2, "O");
    this.currentPlayer = this.player1;
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  checkBoard() {
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
        this.board[position1[0]][position1[1]] !== "" &&
        this.board[position1[0]][position1[1]] ===
          this.board[position2[0]][position2[1]] &&
        this.board[position1[0]][position1[1]] ===
          this.board[position3[0]][position3[1]]
      ) {
        alert(`${this.currentPlayer.name} wins!`);
        resetBoard();
        return true;
      }
    }
    const allSquaresUsed = this.board.every((row) =>
      row.every((cell) => cell !== "")
    );
    if (allSquaresUsed) {
      alert("Draw");
      return true;
    }
    return false;
  }
  drawBoard() {
    let container = document.getElementById("container");
    container.innerHTML = "";
    let playerX = document.getElementById("Player");
    playerX.innerHTML = this.currentPlayer.name;

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.innerHTML = this.board[i][j];
        div.className = "cell";
        div.addEventListener("click", () => {
          if (this.board[i][j] === "") {
            div.innerHTML = this.currentPlayer.marker;
            this.board[i][j] = this.currentPlayer.marker;
            const finished = this.checkBoard();
            if (finished === true) {
              return;
            }
            if (this.currentPlayer.name === this.player1.name) {
              this.currentPlayer = this.player2;
            } else {
              this.currentPlayer = this.player1;
            }
            let playerX = document.getElementById("Player");
            playerX.innerHTML = this.currentPlayer.name;
          } else {
            console.log("Already played");
          }
        });
      }
    }
  }
}

function resetBoard() {
  const name1 = prompt("Insert player1 name:");
  const name2 = prompt("Insert player2 name:");
  const board = new Gameboard(name1, name2);
  board.drawBoard();
}
resetBoard();
