import React from "react";
import Header from "./components/Header";
import Layout from "./containers/Layout";
import Home from './components/Home'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Home />
        <p>This is paragraph</p>
      </Layout>
    </div>
  );
}

export default App;
