import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./components/Home";
import SinglePlayer from "./containers/SinglePlayer";
import Multiplayer from "./containers/Multiplayer";
import "./App.css";
import SinglePlayerRedux from "./containers/SinglePlayerRedux";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/singleplayer"} component={SinglePlayer} />
            <Route exact path={"/singleplayer-redux"} component={SinglePlayerRedux} />
            <Route exact path={"/multiplayer"} component={Multiplayer} />
            <Route component={() => <div>Page not found...</div>} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
