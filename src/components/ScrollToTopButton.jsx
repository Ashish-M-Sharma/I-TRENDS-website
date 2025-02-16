import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      onClick={scrollToTop}
    >
      {/* Progress Container */}
      <svg className="absolute" width="60" height="60" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#ddd"
          strokeWidth="6"
        />
        {/* Progress portion */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#E86069"
          strokeWidth="6"
          strokeDasharray="251.2"
          strokeDashoffset={`${251.2 - (251.2 * scrollProgress) / 100}`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>

      {/* Scroll Button */}
      <button className="w-12 h-12 bg-[#47C6E6] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
