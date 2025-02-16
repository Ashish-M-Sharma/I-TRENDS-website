import React from "react";
import "./MarqueeText.css";

const MarqueeText = () => {
  return (
    <div className="marquee-container my-8">
      <div className="marquee" role="marquee">
        <span className="marquee-content">
          🌟 Experience the Specsmakers Difference Today! 🕶️
        </span>
        <span className="marquee-content" aria-hidden="true">
          🌟 Experience the Specsmakers Difference Today! 🕶️
        </span>
        <span className="marquee-content" aria-hidden="true">
          🌟 Experience the Specsmakers Difference Today! 🕶️
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
