import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import Helper from '../../utils/helper';

const ACTIONS = "action"; // Name of the event
const PLAYER_ONE = "setPlayerOne";
const PLAYER_TWO = "setPlayerTwo";
const SOCKET_SERVER_URL = process.env.REACT_APP_BACKEND_URL;
// const playerTypes = {
//   player1: "playerOne",
//   player2: "playerTwo",
// };

const useMultiplayer = () => {
  const socketRef = useRef();
  const [position, setPosition] = useState("");
  const [playerData, setPlayerData] = useState({});

  useEffect(() => {
    // Creates a WebSocket connection
    console.log("backend url:", "https://game-of-three-server.azurewebsites.net");
    socketRef.current = socketIOClient("https://game-of-three-server.azurewebsites.net");

    // Listens for incoming messages
    socketRef.current.on(ACTIONS, (message) => {
      const playerState = {
        isGameStart: message.isGameStart || true,
        turnArray: message.turnArray,
        turnCount: message.turnCount,
      };
      setPlayerData(playerState);
    });

    socketRef.current.on(PLAYER_ONE, (position) => {
      console.log("intialize player one");
      setPosition(Helper.playerTypes.player1);
    });
    socketRef.current.on(PLAYER_TWO, (position) => {
      setPosition(Helper.playerTypes.player2);
      console.log("intialize player two");
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const calculateNewNumberToSendOpponent = (
    turnValue,
    requiredNumberToBeDividedByThree
  ) => {
    let calculatedValue = parseInt( turnValue + requiredNumberToBeDividedByThree, 10) / 3;
    let stringExpression = `[( ${requiredNumberToBeDividedByThree} + ${
      turnValue
    } ) / 3] = ${calculatedValue}`;

    // console.log("stringExpression: ", stringExpression);

    // return parseInt(calculatedNumber, 10) / 3;
     return {
      value: calculatedValue,
      valueExpresionStr: stringExpression,
    };
  };

  const setNextTurn = (turnCount, requiredNumberToBeDividedByThree) => {
    let turnValue = playerData.turnArray[turnCount - 1].value;
    let calcNewNumber = calculateNewNumberToSendOpponent(
      turnValue,
      requiredNumberToBeDividedByThree
    );
    let newTurn = {
      id: turnCount,
      player: turnCount % 2 === 0 ? Helper.playerTypes.player1 : Helper.playerTypes.player2,
      value: calcNewNumber.value,
      action: requiredNumberToBeDividedByThree,
      valueExpression: calcNewNumber.valueExpresionStr,
    };
    let temporaryTurnArray = playerData.turnArray;
    temporaryTurnArray.push(newTurn);

    return temporaryTurnArray;
  };

  // Sends a message to the server that
  // forwards it to all users in the same room
  const calculateUserAction = (userAction, callback) => {
    var newArrayData = setNextTurn(
      userAction.turnCount,
      userAction.requiredNumberToBeDividedByThree
    );

    // console.log("New Turn Array@94:", newArrayData);
    socketRef.current.emit(ACTIONS, {
      turnArray: newArrayData,
      turnCount: userAction.turnCount,
    });

    if (callback) {
      callback();
    }
  };

  return { playerData, position, calculateUserAction };
};

export default useMultiplayer;
