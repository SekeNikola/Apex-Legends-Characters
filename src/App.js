import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import BloodHound from "./components/characters/bloodhound/bloodhound";
import Lifeline from "./components/characters/lifeline/lifeline";
import Menu from "./components/menu/menu";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        <div className="hero">
          <Route exact path="/" component={BloodHound} />
          <Route path="/lifeline" component={Lifeline} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
