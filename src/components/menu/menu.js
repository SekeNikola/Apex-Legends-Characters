import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div>
          <img
            className="logo"
            src={require("../../assets/img/apex-logo.png")}
            alt=""
          />

          <ul>
            <li>
              <Link to="/">
                <img
                  src={require("../../assets/img/bloodhound/bloodhound-menu.png")}
                  alt=""
                />
                <span>BloodHound</span>
              </Link>
            </li>
            <li>
              <Link to="/Bangalore">
                <img
                  src={require("../../assets/img/bangalore/bangalor-menu.png")}
                  alt=""
                />
                <span>Bangalor</span>
              </Link>
            </li>
            <li>
              <Link to="/Caustic">
                <img
                  src={require("../../assets/img/caustic/caustic-menu.png")}
                  alt=""
                />
                <span>Caustic</span>
              </Link>
            </li>
            <li>
              <Link to="/Gibraltar">
                <img
                  src={require("../../assets/img/gibraltar/gibraltar-menu.png")}
                  alt=""
                />
                <span>Gibraltar</span>
              </Link>
            </li>
            <li>
              <Link to="/Lifeline">
                <img
                  src={require("../../assets/img/lifeline/lifeline-menu.png")}
                  alt=""
                />
                <span>Lifeline</span>
              </Link>
            </li>
            <li>
              <Link to="/Mirage">
                <img
                  src={require("../../assets/img/mirage/mirage-menu.png")}
                  alt=""
                />
                <span>Mirage</span>
              </Link>
            </li>
            <li>
              <Link to="/octane">
                <img
                  src={require("../../assets/img/octane/octane-menu.png")}
                  alt=""
                />
                <span>Octane</span>
              </Link>
            </li>
            <li>
              <Link to="/pathfinder">
                <img
                  src={require("../../assets/img/pathfinder/pathfinder-menu.png")}
                  alt=""
                />
                <span>Pathfinder</span>
              </Link>
            </li>
            <li>
              <Link to="/wraith">
                <img
                  src={require("../../assets/img/wraith/wraith-menu.png")}
                  alt=""
                />
                <span>Wraith</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
