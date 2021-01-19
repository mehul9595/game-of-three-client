import React from "react";
import { Modal } from "antd";
import Winner from "../../assets/Winner.png";
import Lost from "../../assets/Lost.png";
import "./style.css";

const ModalResult = (message, win, redirectURL) => {
  Modal.success({
    title: "Match Result",
    content: (
      <div>
        {win === true ? (
          <img className="winner-img" src={Winner} alt="Winner" />
        ) : (
          <img className="winner-img" src={Lost} alt="Lost" />
        )}
        <h3>{message}</h3>
      </div>
    ),
    okText: "Start Again",
    
    onOk: () => redirectURL(),
    className: "game-result-modal",
  });
};

export default ModalResult;
