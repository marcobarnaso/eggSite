import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Content from "./components/Content";
import Contact from "./pages/contact";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const toggle = () => {
    setOpenBurger(!openBurger);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && openBurger) {
        setOpenBurger(false);
      }
    };

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  });

  return (
    <div>
      <NavBar toggle={toggle} />
      {openBurger ? <Dropdown toggle={toggle} /> : null}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/menu" exact component={Content} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
