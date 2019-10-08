import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
// import About from "./about";
// import Contact from "./contact";

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
            {/* <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
          </ul>

          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
            <Route path="/words/:id" component={Home} />
          </div>
        </HashRouter>
      </>
    );
  }
}

export default App;
