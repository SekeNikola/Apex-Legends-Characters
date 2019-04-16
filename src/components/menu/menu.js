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
              <Link to="/Lifeline">
                <img
                  src={require("../../assets/img/lifeline/lifeline-menu.png")}
                  alt=""
                />
                <span>Lifeline</span>
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
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
