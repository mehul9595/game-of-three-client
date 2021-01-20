import React from "react";
import { Card, Button, Divider, Row, Col } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.css";
import "antd/dist/antd.css";

const Home = (props) => {
  return (
    <Card bordered hoverable className="game-home">
      <h1>Game of Three @ Scoober</h1>
      <Divider className="game-home-divider" />
      <Row justify="center">
        <Col>
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            htmlType="button"
            className="game-button"
            onClick={() => props.history.push("/singleplayer")}
          >
            Single Player
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button
            type="primary"
            htmlType="button"
            className="game-button"
            icon={<PlayCircleOutlined />}
            onClick={() => props.history.push("/multiplayer")}
            data-testId="multiplayerBtn"
          > 
            Multiplayer
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Home;
