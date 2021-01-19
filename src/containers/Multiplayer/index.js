import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import PlayArea from "../../components/PlayArea";
import ActionButton from "../../components/ActionButton";
import useMultiplayer from "../Hooks/useMultiplayer";
import ModalResult from '../../components/Modal';
import { message } from "antd";

const Multiplayer = (props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { playerData, position, calculateUserAction } = useMultiplayer();

  useEffect(() => {
    console.log("playerData:@18", playerData);
    if (playerData && playerData.turnArray) {
      var lastTurn = playerData.turnArray[playerData.turnCount];

      if (lastTurn.value === 1) {
        setIsButtonDisabled(true);
        var msg = lastTurn.player === position ? "You Win" : "You Lost";
        console.log("position:", position);
        message.success(`${position} ${msg}`);
        ModalResult(msg, () => props.history.push("/"));
        
      } else {        
        lastTurn.player === position
          ? setIsButtonDisabled(true)
          : setIsButtonDisabled(false);
      }
    }
  }, [playerData, position, props.history]);

  const actionButtonHandler = (params) => {
    console.log(params);

    let currentTurnValue = playerData.turnArray[playerData.turnCount].value;
    if ((currentTurnValue + params) % 3 === 0) {
      calculateUserAction({
        requiredNumberToBeDividedByThree: params,
        turnCount: playerData.turnCount + 1,
      });
    } else {
      message.error(`${currentTurnValue} can not be divided by ${params}`);
    }
  };

  return (
    <div>
      <Header />
      {!playerData.isGameStart ? (
        <h3> Waiting for another player to join the game...</h3>
      ) : (
        <>
          <PlayArea
            turnArray={playerData.turnArray}
            playerTurn={position}
            gameMode={"multiplayer"}
          />
          <ActionButton
            actionHandler={actionButtonHandler}
            isDisabled={isButtonDisabled}
          />
        </>
      )}
    </div>
  );
};

export default Multiplayer;
