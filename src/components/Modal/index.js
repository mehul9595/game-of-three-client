import React from "react";
import { Modal } from "antd";
import Winner from "../../assets/Winner.png";
import "./style.css";

const ModalResult = (message, redirectURL) => {
  Modal.info({
    title: "Match Result",
    content: (
      <div>
        <img className="winner-img" src={Winner} alt="Winner" />
        <h3>{message}</h3>
      </div>
    ),
    okText: "Start Again",
    onOk: () => redirectURL(),
    className: "game-result-modal",
  });
};

export default ModalResult;
