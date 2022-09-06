import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <table className="Nav-bar">
      <tbody>
        <tr>
          <td style={{"textAlign":"center", "width":"20%"}}>
            <NavLink
              to="/"
              exact
              activeStyle={{
                color: "white"
              }}
            >
              Home
            </NavLink>
          </td>
          <td style={{"textAlign":"center", "width":"20%"}}>
            <NavLink
              to="/search"
              exact
              activeStyle={{
                color: "white"
              }}
            >
              Search
            </NavLink>
          </td>
          <td style={{"textAlign":"center", "width":"20%"}}>
            <NavLink
              to="/map"
              exact
              activeStyle={{
                color: "white"
              }}
            >
              Map
            </NavLink>
          </td>
          <td style={{"textAlign":"center", "width":"20%"}}>
            <NavLink
              to="/photos"
              exact
              activeStyle={{
                color: "white"
              }}
            >
              Photos
            </NavLink>
          </td>
          <td style={{"textAlign":"center", "width":"20%"}}>
            <NavLink
              to="/admin"
              exact
              activeStyle={{
                color: "white"
              }}
            >
              Admin
            </NavLink>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default NavBar;
