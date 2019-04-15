import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div>
          <ul>
            <li>
              <Link to="/">
                <img
                  src={require("../../assets/img/bloodhound/bloodhound-menu.png")}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <Link to="/Lifeline">Lifeline</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
