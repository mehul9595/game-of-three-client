import React, { useEffect } from "react";
import Header from "../../components/Header";
import PlayArea from "../../components/PlayArea";
import ActionButton from "../../components/ActionButton";
import ModalResult from "../../components/Modal";
import Helper from "../../utils/helper";
import { message } from "antd";
import "antd/dist/antd.css";
import {
  PLAYER_ACTION,
  NUMBER_TO_DIVIDE_BY_THREE,
  TURN_COUNTER,
  BOT_ACTION,
  INITIALIZE_GAME_PLAY,
} from "../../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const SinglePlayerRedux = (props) => {
  const playerData = useSelector((state) => state.PlayerData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (playerData.winner === true) {
      console.log(playerData.turnCount);

      let lastTurn = playerData.turnArray[playerData.turnCount];
      // console.log("last turn under winner effect", lastTurn);
      
      setTimeout(() => {
        ModalResult("", lastTurn.player === Helper.playerTypes.player, () => {
          props.history.push("/");
          dispatch({ type: INITIALIZE_GAME_PLAY });
        });  
      }, 500);

      return true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerData, props]);

  const onActionButtonClick = (action) => {
    let actionValue = parseInt(action);
    let currentValue = playerData.turnArray[playerData.turnCount].value;

    if ((currentValue + actionValue) % 3 === 0) {
      dispatch({ type: TURN_COUNTER });

      dispatch({ type: NUMBER_TO_DIVIDE_BY_THREE });

      dispatch({
        type: PLAYER_ACTION,
        payload: action,
      });

      dispatch({
        type: BOT_ACTION,
        payload: {},
      });
    } else {
      message.error(`${currentValue} can not be divided by ${action}`);
    }
  };

  return (
    <>
      <Header />
      <PlayArea turnArray={playerData.turnArray} />
      <ActionButton actionHandler={onActionButtonClick} />
    </>
  );
};

export default SinglePlayerRedux;
