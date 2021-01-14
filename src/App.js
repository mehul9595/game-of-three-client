import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Layout from "./containers/Layout";
import Home from "./components/Home";
import PlayArea from "./components/PlayArea";
import ActionButton from "./components/ActionButton";
import SinglePlayer from "./containers/SinglePlayer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/singleplayer"} component={SinglePlayer} />
            {/* <Route exact path={"/multiplayer"} component={MultiPlayer} /> */}
            <Route component={() => <div>Page not found...</div>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
