import React, { useState, useEffect } from "react";
// import { Link } from "@mui/material";
import OwlCarousel from "react-owl-carousel"; // Import the React wrapper for Owl Carousel
import "owl.carousel/dist/assets/owl.theme.default.css"; // Import Owl Carousel default theme CSS
import "../App.css"; // Import your custom CSS if needed

const GameSection = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const carouselOptions = {
    autoWidth: true,
    loop: true,
  };

  return (
    <section className="game-section">
      <h2 className="line-title">trending games</h2>
      <OwlCarousel className="custom-carousel owl-theme" {...carouselOptions}>
        {/* Your carousel items */}
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)",
          }}
          onClick={() => handleItemClick(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve...</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)",
          }}
          onClick={() => handleItemClick(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve...</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)",
          }}
          onClick={() => handleItemClick(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve...</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)",
          }}
          onClick={() => handleItemClick(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve...</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)",
          }}
          onClick={() => handleItemClick(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve...</p>
          </div>
        </div>
        <div
          className={`item ${activeItem === 0 ? "active" : ""}`}
          style={{
            backgroundImage:
              "url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)",
          }}
          onClick={() => handleItemClick(0)}
        >
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve...</p>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default GameSection;
