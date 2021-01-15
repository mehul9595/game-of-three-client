import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import PlayArea from "../../components/PlayArea";
import ActionButton from "../../components/ActionButton";
import { message } from 'antd';
import "antd/dist/antd.css";

const SinglePlayer = (props) => {
  const [turnCount, setTurnCount] = useState(0);
  const [turnArray, setTurnArray] = useState([{
    id: 0,
    player: "Bot",
    value: 50
  }]);

  const checkActionAndResult = (params) => {
    message.info(params);
    var turnCounter = turnCount + 1;
    setTurnCount(turnCounter);

    var newTurn = {
      id: turnCounter,
      player: "player",
      value: Math.random()
    }
    setTurnArray(result=> [...result, newTurn]);
    console.log(turnArray);
  }
  

  return (
    <>
      <Header />
      <PlayArea turnArray={turnArray} />
      <ActionButton actionHandler={checkActionAndResult} />
    </>
  );
};

export default SinglePlayer;
