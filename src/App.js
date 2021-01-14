import React from "react";
import Header from "./components/Header";
import Layout from "./containers/Layout";
import Home from './components/Home'
import PlayArea from './components/PlayArea';
import ActionButton from "./components/ActionButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Home />
        <PlayArea />
        <ActionButton  />
      </Layout>
    </div>
  );
}

export default App;
