import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const ActionButton = (props) => {
  return (
    <>
      <div className="action-button-container">
        <Button type="primary" shape="circle" size="large" value={-1} onClick={()=> props.actionHandler(-1)}>
          -1
        </Button>
        <Button type="primary" shape="circle" size="large" value={0} onClick={()=> props.actionHandler(0)}>
          0
        </Button>
        <Button type="primary" shape="circle" size="large" value={+1} onClick={()=> props.actionHandler(+1)}>
          +1
        </Button>
      </div>
    </>
  );
};

export default ActionButton;
