import React from "react";
import "./App.css";
import Menu from "./components/menu/menu";
import BloodHound from "./components/characters/bloodhound/bloodhound";
const App = () => {
  return (
    <div className="main">
      <Menu />
      <BloodHound />
    </div>
  );
};

export default App;
