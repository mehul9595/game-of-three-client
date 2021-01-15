import React from "react";
import { List, Avatar } from "antd";
import "./style.css";

const PlayArea = (props) => {
  return (
    <>
      <List className="play-area-container"
        dataSource={props.turnArray}
        renderItem={(turn) => (
          <List.Item key={turn.id} className={"playarea-number " + turn.player}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={turn.player === "player" ? "You" : "Bot"}
              description={turn.player.value}
            ></List.Item.Meta>
          </List.Item>
        )}
      />
    </>
  );
};

export default PlayArea;
