import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home"; // Import your home component
import About from "./components/About"; // Import your about component
import Contact from "./components/Contact"; // Import your contact component

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </NavBar>
      </div>
    </Router>
  );
}

export default App;
