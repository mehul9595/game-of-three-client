import React from "react";
import { List } from "antd";
import "./style.css";

const PlayArea = (props) => {
  return (
    <>
      <List
        dataSource={props.turnArray}
        renderItem={(turn) => (
          <List.Item key={turn.id} className={"playarea-number " + turn.player}>
            <div>{turn.player === "player" ? "You" : "Bot"}:</div>
            <div>{turn.value}</div>
          </List.Item>
        )}
      />
    </>
  );
};

export default PlayArea;
