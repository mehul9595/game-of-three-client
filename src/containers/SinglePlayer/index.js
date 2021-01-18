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
  let requiredNumberToBeDividedByThree = null;
  const [turnArray, setTurnArray] = useState([
    {
      id: 0,
      player: playerTypes.bot,
      value: getInitialNumber(),
      action: undefined,
      valueExpression: "",
    },
  ]);

  const assignNumberNeedsToBeAdded = (turnValue) => {
    console.log(turnValue);
    console.log("turnCOunt", turnCount);
    if (turnValue % 3 === 0) {
      requiredNumberToBeDividedByThree = 0;
    } else if ((turnValue + 1) % 3 === 0) {
      requiredNumberToBeDividedByThree = 1;
    } else if ((turnValue - 1) % 3 === 0) {
      requiredNumberToBeDividedByThree = -1;
    }
  };

  const updateTurnArray = (newTurn) => {
    setTurnArray((result) => [...result, newTurn]);
  };

  const getPlayerTurn = (params) => {
    let turnPlayer = params % 2 === 0 ? playerTypes.bot : playerTypes.player;
    return turnPlayer;
  };

  const setNewTurn = (turnCounter) => {
    var calcNewNumber = calculateNewNumberToSendOpponent(turnCounter);
    let newTurn = {
      id: turnCounter,
      player: getPlayerTurn(turnCounter),
      value: calcNewNumber.value,
      action: requiredNumberToBeDividedByThree,
      valueExpression: calcNewNumber.valueExpresionStr,
    };

    updateTurnArray(newTurn);
  };

  const calculateNewNumberToSendOpponent = (turnCounter) => {
    let expression =
      turnArray[turnCounter - 1].value + requiredNumberToBeDividedByThree;

    let calculatedValue = parseInt(expression, 10) / 3;

    let stringExpression = `[( ${requiredNumberToBeDividedByThree} + ${
      turnArray[turnCounter - 1].value
    } ) / 3] = ${calculatedValue}`;
    console.log("stringExpression: ", stringExpression);

    return {
      value: calculatedValue,
      valueExpresionStr: stringExpression,
    };
  };

  const calculateNumbers = (turnCount) => {
    let turnValue = turnArray[turnCount - 1].value;

    assignNumberNeedsToBeAdded(turnValue);
    setNewTurn(turnCount);
  };

  useEffect(() => {
    if (turnCount > 0 && turnCount % 2 !== 0) {
      var turnCounter = turnCount + 1;
      calculateNumbers(turnCounter);
      console.log("new turnCounter", turnCounter);
      if (calculateNewNumberToSendOpponent(turnCounter).value === 1) {
        // this.modalForGameResult(this.detectTurnPlayer());
        message.success("Bot wins", 5);
        return true;
      } else {
        setTurnCount(turnCounter);
      }
    }

    console.log(turnCount, turnArray);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnCount]);

  const checkActionAndResult = (action) => {
    message.info(action);
    let actionValue = parseInt(action);
    let currentValue = turnArray[turnCount].value;

    if ((currentValue + actionValue) % 3 === 0) {
      message.success("OK good");
      let turnCounter = turnCount + 1;

      calculateNumbers(turnCounter);
      console.log("turnCount", turnCounter);
      if (calculateNewNumberToSendOpponent(turnCounter).value === 1) {
        // this.modalForGameResult(this.detectTurnPlayer());
        message.success("Player wins", 5);
        return true;
      }
      setTurnCount(turnCounter);
    } else {
      message.error("Number cannot be divided by 3");
    }
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
