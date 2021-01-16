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
      action: undefined,
      valueExpression: "",
    },
  ]);

  useEffect(() => {
    // if (turnCount > 0 && turnCount % 2 === 0) {
    //   let botTurn = turnCount + 1;
    //   calculateNumbers(botTurn);
    //   console.log("turnCount", botTurn);
    //   setTurnCount(botTurn);
    //   if (calculateNewNumberToSendOpponent(botTurn).value === 1) {
    //     // this.modalForGameResult(this.detectTurnPlayer());
    //     message.success("win");
    //     return true;
    //   }
    // } else {
      calculateNumbers(turnCount);
      console.log("turnCount", turnCount);
      if (calculateNewNumberToSendOpponent(turnCount).value === 1) {
        // this.modalForGameResult(this.detectTurnPlayer());
        message.success("win");
        return true;
      }
    // }
  }, [turnCount]);

  const assignNumberNeedsToBeAdded = () => {
    var turnValue = turnArray[turnCount - 1].value;
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

  const checkActionAndResult = (action) => {
    message.info(action);
    let actionValue = parseInt(action);
    let currentValue = turnArray[turnCount].value;

    if ((currentValue + actionValue) % 3 === 0) {
      message.success("OK good");
      let turnCounter = turnCount + 1;
      setTurnCount(turnCounter);

      // after player turns, set turn count. on setTimeout 1 sec call checkAndResult for bot. action value would be previous turn count value
      // setTimeout(async ()=> {

      //   console.log("new turn cout after 1 sec", turnCounter);
      //   console.log("new array after 1 sec ", turnArray);

      //   // assignNumberNeedsToBeAdded(turnCount+1);

      // }, 5000);
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
