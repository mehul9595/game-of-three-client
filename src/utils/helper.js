const Helper = {
  winningMessage: "Hooray! You won!.",
  lostMessage: "You Lost!, Better luck next time!",
  getGameRandomNumber: () => {
    let randomNumber = parseInt(Math.random() * 100, 10);
    if (randomNumber < 2) this.getGameRandomNumber();
    else return randomNumber;
  },
};

export default Helper;
