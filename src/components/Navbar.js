import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main-slr">
        <nav className={`nav ${isScrolled ? "affix" : ""}`}>
          <div className="container">
            <div className="logo">
              <Link to="/">Your Logo</Link>
            </div>
            <div id="mainListDiv" className="main_list">
              <ul className="navlinks">
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="for-icons">
              <i class="fa-solid fa-user fa-xl login-user-slr"></i>
            </div>
            <span className="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
      </div>
      <div class="home">
        <h1 className="heading-one-slr">mayel ya ghzayel ya ghzayel mayel</h1>
      </div>
      <p class="myP">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione
        facere animi impedit rem labore sint repellendus ipsa sapiente
        voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae
        id inventore quod voluptate qui deserunt, quis placeat, tempora ex
        totam, dolore sequi harum eos voluptatibus animi labore officiis minus
        laboriosam Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum ratione facere animi impedit rem labore sint repellendus ipsa
        sapiente voluptatem aut excepturi quo itaque, ab earum cumque.
        Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum ratione facere animi impedit rem labore sint
        repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum
        cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum ratione facere animi impedit rem labore sint
        repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum
        cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum ratione facere animi impedit rem labore sint
        repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum
        cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam
      </p>
    </>
  );
};

export default NavBar;
