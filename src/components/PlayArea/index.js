import React, { useEffect, useRef } from "react";
import { List, Avatar } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import "./style.css";
import AvatarSrc3 from "../../assets/avatar@3x.png";
// import AvatarSrc2 from "../../assets/avatar@2x.png";
// import AvatarSrc1 from "../../assets/avatar@1x.png";
import TakeawayImg from "../../assets/takeaway-avatar.png";
import "antd/dist/antd.css";

const PlayArea = (props) => {
  const listItemRef = useRef(null);
  useEffect(() => {
    if (listItemRef != null && listItemRef.current)
      listItemRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <List
        className="play-area-container"
        dataSource={props.turnArray}
        itemLayout="vertical"
        renderItem={(turn) => (
          <List.Item key={turn.id} className={"playarea-number " + turn.player}>
            <List.Item.Meta
              avatar={
                props.gameMode === "multiplayer" ? (
                  props.playerTurn === turn.player ? (
                    <Avatar size="large" src={AvatarSrc3} />
                  ) : (
                    <Avatar
                      size="default"
                      src={TakeawayImg}
                      alt="Takeaway"
                      style={{ backgroundColor: "gray" }}
                    />
                  )
                ) : turn.player === "player" ? (
                  <Avatar size="large" src={AvatarSrc3} />
                ) : (
                  <Avatar icon={<RobotOutlined />} size="large" />
                )
              }
              title={
                props.gameMode === "multiplayer"
                  ? props.playerTurn === turn.player
                    ? "You"
                    : "Player Two"
                  : turn.player === "player"
                  ? "You"
                  : "Bot"
              }
              description={
                turn.action !== undefined && (
                  <Avatar
                    style={{
                      backgroundColor: "#50aadd",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    {turn.action}
                  </Avatar>
                )
              }
            ></List.Item.Meta>
            <label hidden={turn.valueExpression ? false : true}>
              {turn.valueExpression} <br />
            </label>
            <label>{turn.value}</label>
            <div ref={listItemRef} />
          </List.Item>
        )}
      />
    </>
  );
};

export default PlayArea;
