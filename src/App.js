import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import BloodHound from "./components/characters/bloodhound/bloodhound";
import Lifeline from "./components/characters/lifeline/lifeline";
import Bangalore from "./components/characters/bangalore/bangalore";
import Caustic from "./components/characters/caustic/caustic";
import Gibraltar from "./components/characters/gibraltar/gibraltar";
import Menu from "./components/menu/menu";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        <div className="hero">
          <Route exact path="/" component={BloodHound} />
          <Route path="/bangalore" component={Bangalore} />
          <Route path="/caustic" component={Caustic} />
          <Route path="/gibraltar" component={Gibraltar} />
          <Route path="/lifeline" component={Lifeline} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
