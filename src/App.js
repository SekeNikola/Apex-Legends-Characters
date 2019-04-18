import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import BloodHound from "./components/characters/bloodhound/bloodhound";
import Lifeline from "./components/characters/lifeline/lifeline";
import Bangalore from "./components/characters/bangalore/bangalore";
import Caustic from "./components/characters/caustic/caustic";
import Gibraltar from "./components/characters/gibraltar/gibraltar";
import Mirage from "./components/characters/mirage/mirage";
import Octane from "./components/characters/octane/octane";
import Pathfinder from "./components/characters/pathfinder/pathfinder";
import Wraith from "./components/characters/wraith/wraith";
import Menu from "./components/menu/menu";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        <div className="hero">
          <Route exact path="/legends" component={BloodHound} />
          <Route path="/legends/bangalore" component={Bangalore} />
          <Route path="/legends/caustic" component={Caustic} />
          <Route path="/legends/gibraltar" component={Gibraltar} />
          <Route path="/legends/lifeline" component={Lifeline} />
          <Route path="/legends/mirage" component={Mirage} />
          <Route path="/legends/octane" component={Octane} />
          <Route path="/legends/pathfinder" component={Pathfinder} />
          <Route path="/legends/wraith" component={Wraith} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
