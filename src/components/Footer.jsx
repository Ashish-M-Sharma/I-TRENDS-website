import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const footerItems = [
  {
    title: "EYEGLASSES",
    items: ["Men", "Women", "Kids", "Fastrack", "Rimless", "Titan"],
  },
  {
    title: "SUNGLASSES",
    items: ["Men", "Women", "Rimless", "Fastrack"],
  },
  {
    title: "CONTACT LENSES",
    items: ["Bausch & Lomb", "Johnson & Johnson"],
  },
  {
    title: "ACCOUNT",
    items: [
      "Our Policies",
      "My Account",
      "Create an Account",
      "Tata Neu Pass",
      "Titan Encircle",
    ],
  },
  {
    title: "ABOUT TITAN EYE +",
    items: [
      "About Us",
      "Blog",
      "Contact Us",
      "Terms & Conditions",
      "Cyber Security Policy",
    ],
  },
  {
    title: "USEFUL LINKS",
    items: [
      "Store Locations",
      "Business Partner",
      "EyeX Compatible App",
      "Hearing Aids",
      "Exercise Your Rights",
      "Glossary",
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between">
        {/* Footer starts */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
          {footerItems.map((section, i) => (
            <div key={i}>
              <h3 className="text-[#47C6E6] font-semibold mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-400"
                    onClick={scrollToTop}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <NavLink onClick={scrollToTop}>
            <img src="logo.jpg" alt="Logo" className="w-36" />
          </NavLink>

          <div className="flex space-x-4 mt-2">
            <FaInstagram
              className="text-2xl cursor-pointer hover:text-gray-400"
              onClick={scrollToTop}
            />
            <FaYoutube
              className="text-2xl cursor-pointer hover:text-gray-400"
              onClick={scrollToTop}
            />
            <span
              className="text-2xl cursor-pointer hover:text-gray-400"
              onClick={scrollToTop}
            >
              <FaXTwitter />
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start">
          <h3 className="text-[#47C6E6] font-semibold mb-2">
            DOWNLOAD I-TRENDS APP
          </h3>
          <div className="flex space-x-2">
            <NavLink>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-10 cursor-pointer"
                onClick={scrollToTop}
              />
            </NavLink>
            <NavLink to="/">
              <img
                src="applestore.png"
                alt="Logo"
                className="w-28 md:w-36 outline-none"
                onClick={scrollToTop}
              />
            </NavLink>
          </div>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-left">
          <h3 className="text-[#47C6E6] font-semibold mb-2">REACH US AT</h3>
          <a href="mailto:itrend@gmail.com">
            <p className="cursor-pointer hover:text-gray-400">
              itrends@gmail.com
            </p>
          </a>
          <a href="tel:+918421830051">
            <p className="cursor-pointer hover:text-gray-400">+91 8421830051</p>
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-400">
        © 2025 I-TRENDS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
