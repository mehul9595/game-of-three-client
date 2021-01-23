import React from "react";
import { Card, Button, Divider, Row, Col } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.css";
import "antd/dist/antd.css";
import { INITIALIZE_GAME_PLAY } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';

const Home = (props) => {
  const dispatch = useDispatch();
  return (
    <Card bordered hoverable className="game-home">
      <h1>Game of Three @ Scoober</h1>
      <Divider className="game-home-divider" />
      <Row justify="center">
        <Col>
          <Button key="singlePlayer"
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
            key="multiPlayer"
            htmlType="button"
            className="game-button"
            icon={<PlayCircleOutlined />}
            onClick={() => props.history.push("/multiplayer")}
            data-testid="multiplayerBtn"
          > 
            Multiplayer
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Button
            type="primary"
            key="singleplayer-redux"
            htmlType="button"
            className="game-button"
            icon={<PlayCircleOutlined />}
            onClick={() =>{ 
              dispatch({type: INITIALIZE_GAME_PLAY });

              props.history.push("/singleplayer-redux");}}
          > 
            Single Player Redux
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Home;
