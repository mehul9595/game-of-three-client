import React from "react";
import './style.css';

const Layout = (props) => {
  return (
    <>
      <div className="layout-container">{props.children}</div>
    </>
  );
};

export default Layout