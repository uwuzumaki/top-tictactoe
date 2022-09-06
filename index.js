const Gameboard = () => {
  let gameState = ["", "", "", "", "", "", "", "", ""];
  const restart = () => {
    gameState = ["", "", "", "", "", "", "", "", ""];
  };
  return { gameState, restart };
};

const addMark = () => {
  let count = 0;
  const displayCount = () => count;
  const increaseCount = () => count++;
  const resetCount = () => (count = 0);
  return {
    displayCount,
    increaseCount,
    resetCount,
  };
};

const checkWin = (player, gameBoard) => {
  const winCons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCons.length; i++) {
    let count = 0;
    for (let j = 0; j < winCons[i].length; j++) {
      if (gameBoard.gameState[winCons[i][j]] === player) {
        count++;
        if (count === 3) {
          const modal = document.querySelector(".modal");
          modal.style.display = "block";
        }
      }
    }
  }
};

const boardSpaceListener = (mark, gameBoard) => {
  const boardSpace = document.querySelectorAll(".board-space");
  boardSpace.forEach((space) => {
    space.addEventListener("click", (e) => {
      if (space.innerHTML === "") {
        if (mark.displayCount() % 2 === 0 || mark.displayCount === 0) {
          gameBoard.gameState[e.target.id.slice(-1)] = "x";
          space.innerHTML = "x";
          checkWin("x", gameBoard);
        } else {
          gameBoard.gameState[e.target.id.slice(-1)] = "o";
          space.innerHTML = "o";
          checkWin("o", gameBoard);
        }
        mark.increaseCount();
      }
    });
  });
};

const restart = (gameBoard, mark) => {
  const button = document.getElementById("restart");
  button.addEventListener("click", () => {
    gameBoard.restart();
    mark.resetCount();
    const boardSpace = document.querySelectorAll(".board-space");
    boardSpace.forEach((space) => {
      space.innerHTML = "";
    });
  });
};

const GameController = (() => {
  const gameBoard = Gameboard();
  const mark = addMark();
  boardSpaceListener(mark, gameBoard);
  restart(gameBoard, mark);
})();
