import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <ul className="navigation">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
          </ul>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/words/:id" component={Home} />
          </div>
        </HashRouter>
      </>
    );
  }
}

export default App;
