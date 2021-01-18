import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import PlayArea from "../../components/PlayArea";
import ActionButton from "../../components/ActionButton";
import useMultiplayer from "../Hooks/useMultiplayer";
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
        //this.modalForGameResult(lastTurn.player);
        message.success(`${lastTurn.player} Wins`);
      } else {
        //   if (playerData.turnCount !== 0) {
        lastTurn.player === position
          ? setIsButtonDisabled(true)
          : setIsButtonDisabled(false);
        //   }
      }
    }
  }, [playerData, position]);

  //position, playerData
  const actionButtonHandler = (params) => {
    console.log(params);

    let currentTurnValue = playerData.turnArray[playerData.turnCount].value;
    if ((currentTurnValue + params) % 3 === 0) {
      calculateUserAction({
        requiredNumberToBeDividedByThree: params,
        turnCount: playerData.turnCount + 1,
      });
    } else {
      //   notify(`${currentTurnValue} can not be divided by ${actionValue}`);
      alert(`${currentTurnValue} can not be divided by ${params}`);
    }
  };

  return (
    <div>
      <Header />
      {!playerData.isGameStart ? (
        <h3>Waiting for another player...</h3>
      ) : (
        <>
          <PlayArea
            turnArray={playerData.turnArray}
            playerTurn={playerData.playerTurn}
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
