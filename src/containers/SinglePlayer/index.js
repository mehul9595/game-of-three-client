import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import PlayArea from "../../components/PlayArea";
import ActionButton from "../../components/ActionButton";
import { message } from "antd";
import "antd/dist/antd.css";

const getInitialNumber = () => {
  let randomNumber = parseInt(Math.random() * 100, 10);
  if (randomNumber < 2) getInitialNumber();
  else return randomNumber;
};

const playerTypes = {
  bot: "bot",
  player: "player",
};


const SinglePlayer = (props) => {
  
  const [turnCount, setTurnCount] = useState(0);
  // const [
  //   requiredNumberToBeDividedByThree,
  //   setRequiredNumberToBeDividedByThree,
  // ] = useState(null);
  let requiredNumberToBeDividedByThree = null;
  const [turnArray, setTurnArray] = useState([
    {
      id: 0,
      player: playerTypes.bot,
      value: getInitialNumber(),
    },
  ]);

  useEffect(() => {
    if (turnCount > 0) {
      calculateNumbers(turnCount);
      console.log("calculateNumbers", turnCount);
      if (calculateNewNumberToSendOpponent(turnCount) === 1) {
        // this.modalForGameResult(this.detectTurnPlayer());
        message.success("win");
        return true;
      }
    }
  }, [turnCount]);

  const assignNumberNeedsToBeAdded = () => {
    var turnValue = turnArray[turnCount - 1].value;
    console.log(turnValue);
    console.log("turnCOunt", turnCount);
    if (turnValue % 3 === 0) {
      requiredNumberToBeDividedByThree = 0;
      // setRequiredNumberToBeDividedByThree(
      //   (requiredNumberToBeDividedByThree) =>
      //     (requiredNumberToBeDividedByThree = 0)
      // );
    } else if ((turnValue + 1) % 3 === 0) {
      requiredNumberToBeDividedByThree = 1;
      // setRequiredNumberToBeDividedByThree(
      //   (requiredNumberToBeDividedByThree) =>
      //     (requiredNumberToBeDividedByThree = 1)
      // );
    } else if ((turnValue - 1) % 3 === 0) {
      requiredNumberToBeDividedByThree = -1;
      // setRequiredNumberToBeDividedByThree(
      //   (requiredNumberToBeDividedByThree) =>
      //     (requiredNumberToBeDividedByThree = -1)
      // );
    }
  };

  const updateTurnArray = (newTurn) => {
    // let temporaryTurnArray = turnArray;
    // temporaryTurnArray.push(newTurn);

    // this.setState({
    //   array: temporaryTurnArray,
    // });
    setTurnArray((result) => [...result, newTurn]);
  };

  const getPlayerTurn = (params) => {
    let turnPlayer = turnCount % 2 === 0 ? playerTypes.bot : playerTypes.player;
    return turnPlayer;
  };

  const setNewTurn = (turnCounter) => {
    let newTurn = {
      id: turnCounter,
      player: getPlayerTurn(),
      value: calculateNewNumberToSendOpponent(turnCounter),
      action: requiredNumberToBeDividedByThree,
    };

    updateTurnArray(newTurn);
  };

  const calculateNewNumberToSendOpponent = (turnCounter) => {
    console.log(
      "calculateNewNumberToSendOpponent:turnArray",
      turnArray[turnCounter - 1]
    );

    let calculatedNumber =
      turnArray[turnCounter - 1].value + requiredNumberToBeDividedByThree;
    return parseInt(calculatedNumber, 10) / 3;
  };

  const calculateNumbers = (turnCount) => {
    let turnValue = turnArray[turnCount - 1].value;

    assignNumberNeedsToBeAdded(turnValue);
    // console.log("calculateNumbers", turnCount);
    calculateNewNumberToSendOpponent(turnCount);
    // console.log("calculateNumbers", turnCount);

    setNewTurn(turnCount);
  };

  const checkActionAndResult = (action) => {
    message.info(action);
    let actionValue = parseInt(action);
    let currentValue = turnArray[turnCount].value;
    let turnCounter = turnCount + 1;

    if ((currentValue + actionValue) % 3 === 0) {
      message.success("OK good");
      setTurnCount(turnCounter);
      // calculateNumbers(turnCounter);
      // console.log("calculateNumbers", turnCounter);
      // if (calculateNewNumberToSendOpponent(turnCounter) === 1) {
      //   // this.modalForGameResult(this.detectTurnPlayer());
      //   message.success("win");
      //   return true;
      // }
    } else {
      message.error("Number cannot be divided by 3");
    }

    // var turnCounter = turnCount + 1;
    // setTurnCount(turnCounter);

    // var newTurn = {
    //   id: turnCounter,
    //   player: turnCounter % 2 === 0 ? "Bot" : "player",
    //   value: Math.random(),
    //   action: actionValue,
    // };

    // setTurnArray((result) => [...result, newTurn]);
    // console.log(turnArray);
  };

  return (
    <>
      <Header />
      <PlayArea turnArray={turnArray} />
      <ActionButton actionHandler={checkActionAndResult} />
    </>
  );
};

export default SinglePlayer;
