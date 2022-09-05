const Gameboard = (() => {
  const gameState = ["x", "o", "x", "x", "o", "x", "x", "o", "x"];
  return { gameState };
})();

const drawBoard = () => {
  console.log(Gameboard.gameState);
  for (let i = 0; i < Gameboard.gameState.length; i++) {
    const boardSpace = document.getElementById(`board${i}`);
    boardSpace.innerHTML = `${Gameboard.gameState[i]}`;
  }
};

drawBoard();
