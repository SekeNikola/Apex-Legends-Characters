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
              <Link to="/Lifeline">Lifeline</Link>
            </li>
            <li>
              <Link to="/">BloodHound</Link>
            </li>
          </ul>

          <hr />
        </div>
      </div>
    );
  }
}

export default Menu;
