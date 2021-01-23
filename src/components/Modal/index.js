import React from "react";
import { Modal } from "antd";
import Winner from "../../assets/Winner.png";
import Lost from "../../assets/Lost.png";
import "./style.css";
import Helper from '../../utils/helper';

const ModalResult = (message = "", win, redirectURL) => {
  Modal.success({
    title: "Match Result",
    content: (
      <div>
        {win === true ? (
          <img className="winner-img" src={Winner} alt="Winner" />
        ) : (
          <img className="winner-img" src={Lost} alt="Lost" />
        )}
        <h3>{win ? Helper.winningMessage : Helper.lostMessage}</h3>
      </div>
    ),
    okText: "Start Again",
    
    onOk: () => redirectURL(),
    className: "game-result-modal",
  });
};

export default ModalResult;
