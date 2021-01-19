const Helper = {
  winningMessage: "Hooray! You won!.",
  lostMessage: "You Lost!, Better luck next time!",
  getGameRandomNumber: () => {
    let randomNumber = parseInt(Math.random() * 100, 10);
    if (randomNumber < 2) this.getGameRandomNumber();
    else return randomNumber;
  },
  playerTypes : {
    bot: "bot",
    player: "player",
    player1: "playerOne",
    player2: "playerTwo",
  }
};

export default Helper;
